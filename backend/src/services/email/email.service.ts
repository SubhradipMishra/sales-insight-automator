import nodemailer from "nodemailer"

export const sendEmail = async (
  email: string,
  summary: string
) => {

  try {

    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }

    })

    const mailOptions = {

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Sales Insight Summary",

      text: `
Sales Insight Report

${summary}

Generated automatically by Sales Insight Automator
      `

    }

    await transporter.sendMail(mailOptions)

    console.log("Email sent successfully")

  } catch (error) {

    console.error("Email error:", error)
    throw new Error("Email sending failed")

  }

}