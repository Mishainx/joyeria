import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function middleware(request) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith('/_next/') || pathname.startsWith('/static/')) {
    return NextResponse.next();
  }

  const cookieStore = await cookies();
  const cookie = cookieStore.get('vg-ct');

  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Verifica el token en la API
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: cookie.value }) // Envía el token en el cuerpo de la solicitud
    });

    if (response.ok) {
      // Token es válido
      return NextResponse.next();
    } else {
      // Token no es válido o hay un error en la API
      return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Aplica solo a rutas bajo `/admin`
};