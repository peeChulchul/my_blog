import axios from "axios";
import { cache } from "react";
import { IEmailData } from "types/email";

export const sendContactEmail = cache(async (email: IEmailData) => {
  try {
    const response = await axios.post("/api/contact", email, {
      headers: { "Content-Type": "application/json" }
    });

    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
});
