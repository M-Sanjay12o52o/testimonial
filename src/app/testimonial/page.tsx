"use client";

import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const TestimonialPage: FC = () => {
    const searchParams = useSearchParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [testimonial, setTestimonial] = useState('');

    useEffect(() => {
        setName(searchParams.get('name') || '');
        setEmail(searchParams.get('email') || '');
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission, e.g., send the data to an API.
        console.log('Testimonial submitted:', { name, email, testimonial });

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, testimonial })
            });

            if (!response.ok) {
                throw new Error('Network resonse was not ok');
            }
        } catch (error) {
            console.error('There was a problem with the submission:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Submit Your Testimonial</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={name as string}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        defaultValue={email as string}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="testimonial">
                        Testimonial
                    </label>
                    <textarea
                        id="testimonial"
                        name="testimonial"
                        rows={4}
                        value={testimonial}
                        onChange={(e) => setTestimonial(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    ></textarea>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestimonialPage;
