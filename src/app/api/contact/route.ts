import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { ContactMessageModel } from '@/models/ContactMessage';

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = typeof body?.name === 'string' ? body.name.trim() : '';
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const message = typeof body?.message === 'string' ? body.message.trim() : '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const saved = await ContactMessageModel.create({ name, email, message });

    return NextResponse.json({ ok: true, id: saved._id }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: 'Unable to save your message right now.' },
      { status: 500 }
    );
  }
}
