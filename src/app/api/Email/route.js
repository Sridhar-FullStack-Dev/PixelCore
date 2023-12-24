import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, description } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOption = {
      from: email,
      to: "sridhar22122002@gmail.com",
      subject: "Message from PixelCore",
      html: `
        <div style="font-family: 'Arial', sans-serif; background-color: #f4f4f4; padding: 20px; max-width: 600px; margin: 0 auto;">
          <ul style="list-style-type: none; padding: 0;">
            <li style="margin-bottom: 10px; font-size: 16px; color: #555;">Name: ${name}</li>
            <li style="margin-bottom: 10px; font-size: 16px; color: #555;">Email: ${email}</li>
            <h2 style="color: #333;">Project Details: </h2>
            <li style="margin-bottom: 10px; font-size: 16px; color: #555;">${description}</li>
          </ul>

        </div>
      `,
    };
    

    await transporter.sendMail(mailOption);

    return NextResponse.json({ email: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ email: "failed" }, { status: 500 });
  }
}
