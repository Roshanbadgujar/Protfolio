import mongoose, { Schema, type InferSchemaType, type Model } from 'mongoose';

const contactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 200,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 2000,
    },
  },
  {
    timestamps: true,
  }
);

export type ContactMessage = InferSchemaType<typeof contactMessageSchema>;

export const ContactMessageModel =
  (mongoose.models.ContactMessage as Model<ContactMessage>) ||
  mongoose.model<ContactMessage>('ContactMessage', contactMessageSchema);
