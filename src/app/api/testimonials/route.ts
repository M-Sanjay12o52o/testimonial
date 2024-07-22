import { request } from "http";

export const dynamic = 'force-dynamic';
// export async function GET(request: Request) {

// }

export async function POST(Request: Request) {
    const { name, email, testimonial } = await Request.json();

    console.log('Received data:', { name, email, testimonial });

    return new Response('Hello, world!');
}