const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
    data?: Record<string, unknown>;
  };
};

export type SubmitInquiryOptions = {
  source?: string;
};

function getAccessKey(): string {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey) {
    throw new Error(
      "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your environment (see .env.example).",
    );
  }

  return accessKey;
}

function getResponseMessage(result: Web3FormsResponse): string | undefined {
  return result.message ?? result.body?.message;
}

/**
 * Web3Forms must be called from the browser. Sending JSON with a custom
 * Content-Type triggers a CORS preflight that their API rejects, which surfaces
 * as "Failed to fetch". Use FormData and let the browser set multipart headers.
 */
export async function submitInquiry(
  form: HTMLFormElement,
  options: SubmitInquiryOptions = {},
): Promise<void> {
  const accessKey = getAccessKey();
  const formData = new FormData(form);

  if (formData.get("botcheck")) {
    return;
  }

  formData.delete("botcheck");

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !phone || !country || !message) {
    throw new Error("Please fill in all required fields.");
  }

  const subjectSource = options.source ? ` (${options.source})` : "";

  formData.set("access_key", accessKey);
  formData.set("name", name);
  formData.set("email", email);
  formData.set("phone", phone);
  formData.set("country", country);
  formData.set("message", message);
  formData.set("subject", `New inquiry from ${name} — SteelAura Jewelry${subjectSource}`);
  formData.set("from_name", "SteelAura Jewelry");
  formData.set("replyto", email);
  formData.set("source", options.source ?? "Main website");

  let response: Response;

  try {
    response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      body: formData,
    });
  } catch (error) {
    const detail = error instanceof Error ? error.message : "Unknown network error";
    throw new Error(
      `Could not reach the form service (${detail}). Please try again or email contact@steelaurajewelry.com directly.`,
    );
  }

  let result: Web3FormsResponse;

  try {
    result = (await response.json()) as Web3FormsResponse;
  } catch {
    throw new Error("Unable to send your inquiry right now. Please try again or email us directly.");
  }

  const responseMessage = getResponseMessage(result);

  if (response.status !== 200 || result.success === false) {
    throw new Error(responseMessage ?? "Submission failed. Please try again.");
  }
}
