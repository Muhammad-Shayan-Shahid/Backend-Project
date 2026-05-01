import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.GOOGLE_USER,
        pass: process.env.GOOGLE_PASSWORD
    }
})

transporter.verify()
    .then(() => { console.log("✅ Email transporter is ready"); })
    .catch((err) => { console.error("❌ Email transporter failed:", err.message); });

export async function sendEmail({ to, subject, html, text }) {
    const mailOptions = {
        from: `"Perplexity" <${process.env.GOOGLE_USER}>`,
        to,
        subject,
        html,
        text
    };

    const details = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", details.messageId);
}