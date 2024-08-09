import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';

export const GET = async (req) => {
    const cookieStore = cookies()
    const cookie = cookieStore.get("token")

    return NextResponse.json({ message: cookie });

};