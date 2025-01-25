'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { CloudDownload, ExternalLink } from 'lucide-react';

export default function Home() {
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen py-12 md:p-16 flex flex-col md:flex-row md:items-center md:justify-center">
            <div className="mx-4 md:mx-16">
                <h1 className="text-3xl md:text-6xl font-bold text-gray-300 mt-12">My Resume</h1>
                <p className="text-base md:text-lg mb-8 md:mb-0 text-violet-600 mt-4">
                    A showcase of my skills, experience, and achievements.
                </p>
                <div className="flex mt-4 gap-4 mb-4">
                    <motion.div variants={item}>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1TuVq73fAcq5JaphZuwhGw4JbylSHhIn0"
                            download
                            className="block p-2"
                            aria-label="Download Resume"
                        >
                            <CloudDownload className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
                        </a>
                    </motion.div>
                    <motion.div variants={item}>
                        <Link
                            href="https://drive.google.com/file/d/1TuVq73fAcq5JaphZuwhGw4JbylSHhIn0/view"
                            target="_blank"
                            className="block p-2"
                            aria-label="View Resume"
                        >
                            <ExternalLink className="w-5 h-5 text-gray-400 hover:text-violet-600 transform hover:-translate-y-1 transition-all duration-300" />
                        </Link>
                    </motion.div>
                </div>
            </div>
            <div className="mx-4 md:mr-16 md:w-3/4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative group w-full max-w-3xl mx-auto md:w-full h-[600px] md:h-[610px]"
                >
                    <div className="absolute inset-0 rounded-xl bg-violet-600/20 blur-2xl group-hover:bg-violet-600/30 transition-colors duration-500" />
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 rounded-xl border-2 border-violet-600/50 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="absolute inset-0 rounded-xl bg-violet-600/10 backdrop-blur-sm" />
                        <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-violet-600">
                            <iframe
                                src="https://drive.google.com/file/d/1TuVq73fAcq5JaphZuwhGw4JbylSHhIn0/preview"
                                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                title="Resume Preview"
                                loading="lazy"
                                sandbox="allow-scripts allow-same-origin allow-popups"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
