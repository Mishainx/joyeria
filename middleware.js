import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
   const { pathname } = new URL(request.url);

   if (pathname.startsWith('/_next/') || pathname.startsWith('/static/')) {
      return NextResponse.next();
    }


    const cookieStore = cookies()
    const cookie = cookieStore.get('vg-ct')

    console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/login`)
      
    

 if(!cookie){
    return NextResponse.redirect(new URL('/proximamente', request.url))
 }


return NextResponse.next()
}
// See "Matching Paths" below to learn more
export const config = {
   matcher: [
       // Aplica a todas las rutas excepto `/login`
       '/((?!login|proximamente|api).*)',
   ],
};