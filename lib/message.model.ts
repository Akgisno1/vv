import { Schema, models, model, Document } from "mongoose";

export interface IMessage extends Document {
  message: string;
  createdAt: Date;
}

const MessageSchema = new Schema({
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Message = models.Message || model<IMessage>("Message", MessageSchema);
export default Message;
