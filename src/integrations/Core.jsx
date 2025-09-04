// Core.js
export async function SendEmail({ name, email, subject, message }) {
  try {
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_9196not",   // replace with your EmailJS service ID
        template_id: "template_mfv9yzl", // replace with your EmailJS template ID
        user_id: "_TE3Ydd9n0rtb2cJ1",         // replace with your EmailJS public key
        template_params: {
          from_name: name,      // sender name
          from_email: email,    // sender email
          subject: subject,     // subject line
          message: message,     // message body
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email ❌");
    }

    return { success: true, message: "Email sent successfully ✅" };
  } catch (error) {
    console.error("SendEmail Error:", error);
    return { success: false, message: error.message };
  }
}
