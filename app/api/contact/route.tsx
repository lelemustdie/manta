import { transporter } from "@/lib/nodemailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  try {
    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: "Nuevo contacto",
      html: `<h1>Nuevo Contacto</h1>
      <p>Nombre: ${formData.get("name")}</p>
      <p>Apellido: ${formData.get("lastname")}</p>
      <p>Email: ${formData.get("email")}</p>
      <p>Telefono: ${formData.get("phone")}</p>
      <p>${formData.get("message")}</p>`,
    });

    return Response.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: "Error sending email" }, { status: 500 });
  }
}
