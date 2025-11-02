import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

type Channel = "sms" | "whatsapp";

interface SendMessageOptions {
  to: string;
  body: string;
  channel: Channel;
}

export async function sendMessage({ to, body, channel }: SendMessageOptions) {
  try {
    const from =
      channel === "whatsapp"
        ? `whatsapp:${process.env.TWILIO_PHONE_NUMBER}`
        : process.env.TWILIO_PHONE_NUMBER;

    const toFormatted = channel === "whatsapp" ? `whatsapp:${to}` : to;

    const message = await client.messages.create({
      from,
      to: toFormatted,
      body,
    });

    return { success: true, messageSid: message.sid };
  } catch (error: any) {
    console.error("Twilio send error:", error);
    return { success: false, error: error.message };
  }
}
