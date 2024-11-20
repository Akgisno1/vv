"use server";

import { connectDB } from "./mongoose";
import Message from "./message.model";

interface CreateMessageProps {
  message: string;
}

export async function createMessage({ message }: CreateMessageProps) {
  try {
    // Ensure the database connection
    await connectDB();

    // Create the message in the database
    await Message.create({ message });

    // Return the created message
  } catch (error) {
    console.error("Error creating message:", error);
    throw new Error("Failed to create message");
  }
}
