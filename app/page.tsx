'use client';

import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* SEO Meta Tags */}
            <head>
                <title>
                    LogiAI - AI-Powered Logistics Assistant | Smart Supply Chain Solutions
                </title>
                <meta
                    name="description"
                    content="Transform your logistics operations with LogiAI's intelligent assistant. Get instant answers to shipping queries, track deliveries, and optimize your supply chain with AI technology."
                />

                <meta
                    name="keywords"
                    content="logistics AI, supply chain management, shipping assistant, delivery tracking, logistics automation, freight management"
                />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <meta property="og:title" content="LogiAI - AI-Powered Logistics Assistant" />

                <meta
                    property="og:description"
                    content="Transform your logistics operations with intelligent AI assistance"
                />

                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://logiai.com" />
            </head>

            <body className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                {/* Navigation */}
                <nav className="bg-white shadow-sm sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <h1 className="text-2xl font-bold text-indigo-600">LogiAI</h1>
                                </div>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-8">
                                    <a
                                        href="#features"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        How It Works
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        Pricing
                                    </a>
                                    <a
                                        href="#contact"
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <a
                                    href="#features"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                >
                                    Features
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#pricing"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 bg-indigo-600 text-white rounded-lg mx-3"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                                Revolutionize Your{' '}
                                <span className="text-indigo-600">Logistics</span> with AI
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                                Get instant answers to all your shipping and logistics queries with
                                our intelligent AI assistant. Streamline operations, track
                                shipments, and optimize your supply chain like never before.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors shadow-lg">
                                    Start Free Trial
                                </button>
                                <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Powerful Features for Modern Logistics
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Our AI assistant provides comprehensive logistics support with
                                cutting-edge technology
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Instant Query Response
                                </h3>
                                <p className="text-gray-600">
                                    Get immediate answers to shipping status, delivery times, and
                                    logistics questions 24/7
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Smart Analytics
                                </h3>
                                <p className="text-gray-600">
                                    Advanced data insights to optimize routes, reduce costs, and
                                    improve delivery performance
                                </p>
                            </div>

                            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-shadow">
                                <div className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Real-time Tracking
                                </h3>
                                <p className="text-gray-600">
                                    Monitor shipments across multiple carriers with unified tracking
                                    and automated updates
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                How LogiAI Works
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Simple integration, powerful results in just three steps
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Connect Your Systems
                                </h3>
                                <p className="text-gray-600">
                                    Integrate LogiAI with your existing logistics platforms and
                                    databases in minutes
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Ask Questions
                                </h3>
                                <p className="text-gray-600">
                                    Use natural language to query shipment status, delivery
                                    estimates, and logistics data
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Get Instant Insights
                                </h3>
                                <p className="text-gray-600">
                                    Receive accurate, real-time answers and actionable
                                    recommendations
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Simple, Transparent Pricing
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Choose the plan that fits your logistics needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Starter
                                </h3>
                                <div className="text-3xl font-bold text-gray-900 mb-4">
                                    $99
                                    <span className="text-lg text-gray-600">/month</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Up to 1,000 queries/month
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Basic tracking integration
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Email support
                                    </li>
                                </ul>
                                <button className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                                    Start Free Trial
                                </button>
                            </div>

                            <div className="border-2 border-indigo-600 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Professional
                                </h3>
                                <div className="text-3xl font-bold text-gray-900 mb-4">
                                    $299
                                    <span className="text-lg text-gray-600">/month</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Up to 10,000 queries/month
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Advanced analytics
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Priority support
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        API access
                                    </li>
                                </ul>
                                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                                    Start Free Trial
                                </button>
                            </div>

                            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    Enterprise
                                </h3>
                                <div className="text-3xl font-bold text-gray-900 mb-4">Custom</div>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Unlimited queries
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Custom integrations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Dedicated support
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        SLA guarantee
                                    </li>
                                </ul>
                                <button className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-indigo-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Logistics?
                        </h2>
                        <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of companies already using LogiAI to streamline their
                            operations
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                            Start Your Free Trial Today
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-indigo-400 mb-4">LogiAI</h3>
                                <p className="text-gray-300">
                                    Revolutionizing logistics with intelligent AI assistance for
                                    modern supply chains.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Product</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>
                                        <a
                                            href="#features"
                                            className="hover:text-white transition-colors"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#pricing"
                                            className="hover:text-white transition-colors"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            API Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Company</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Careers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Press
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Support</h4>
                                <ul className="space-y-2 text-gray-300">
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Help Center
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white transition-colors">
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 LogiAI. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </>
    );
}
