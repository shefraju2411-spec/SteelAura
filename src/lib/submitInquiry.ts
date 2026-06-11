export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  source?: string;
};

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitInquiry(data: InquiryPayload): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to your environment (see .env.example).",
    );
  }

  const subjectSource = data.source ? ` (${data.source})` : "";

  const body = {
    access_key: accessKey,
    subject: `New inquiry from ${data.name} — SteelAura Jewelry${subjectSource}`,
    from_name: data.name,
    name: data.name,
    email: data.email,
    replyto: data.email,
    phone: data.phone,
    country: data.country,
    message: data.message,
    source: data.source ?? "Main website",
    botcheck: "",
  };

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Unable to send your inquiry right now. Please try again or email us directly.");
  }

  const result = (await response.json()) as Web3FormsResponse;

  if (!result.success) {
    throw new Error(result.message ?? "Submission failed. Please try again.");
  }
}
