import emailjs from "@emailjs/browser";
export function sendEmail(data) {
    return emailjs.send(
      process.env.NEXT_PUBLIC_MAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID,
      data,
      process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY
    )
}
