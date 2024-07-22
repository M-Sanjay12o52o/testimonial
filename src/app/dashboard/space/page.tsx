"use client";

import { FC, useState } from 'react';

interface PageProps { }

const Page: FC<PageProps> = ({ }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const link = `${window.location.origin}/testimonial?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
        setGeneratedLink(link);
    }

    return (
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Testimonial Link</h2>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Generate Link
                    </button>
                </div>
            </form>
            {generatedLink && (
                <div className="mt-4 p-4 bg-green-100 border-t border-b border-green-500 text-green-700">
                    <p>Share this link with others to submit their testimonials:</p>
                    <a href={generatedLink} className="text-blue-500 hover:underline">{generatedLink}</a>
                </div>
            )}
        </div>
    );
}

export default Page;
