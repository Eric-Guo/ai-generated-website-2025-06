'use client';

import { useState } from 'react';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* SEO Meta Tags */}
            <head data-oid="2niv7yb">
                <title data-oid="lhu62ws">
                    LogiAI - AI-Powered Logistics Assistant | Smart Supply Chain Solutions
                </title>
                <meta
                    name="description"
                    content="Transform your logistics operations with LogiAI's intelligent assistant. Get instant answers to shipping queries, track deliveries, and optimize your supply chain with AI technology."
                    data-oid="x9mz1hi"
                />

                <meta
                    name="keywords"
                    content="logistics AI, supply chain management, shipping assistant, delivery tracking, logistics automation, freight management"
                    data-oid="vg-z4k0"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                    data-oid="kdosj73"
                />

                <meta
                    property="og:title"
                    content="LogiAI - AI-Powered Logistics Assistant"
                    data-oid="4rh4zcc"
                />

                <meta
                    property="og:description"
                    content="Transform your logistics operations with intelligent AI assistance"
                    data-oid="tw66j13"
                />

                <meta property="og:type" content="website" data-oid="zjxz7ja" />
                <link rel="canonical" href="https://logiai.com" data-oid="c-r5uoz" />
            </head>

            <body
                className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
                data-oid="cy69o0w"
            >
                {/* Navigation */}
                <nav className="bg-white shadow-sm sticky top-0 z-50" data-oid="opd_oyz">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hfzhxh.">
                        <div className="flex justify-between items-center h-16" data-oid="duuml5q">
                            <div className="flex items-center" data-oid="9q52bya">
                                <div className="flex-shrink-0" data-oid="5r6ln8u">
                                    <h1
                                        className="text-2xl font-bold text-indigo-600"
                                        data-oid="hh6e43z"
                                    >
                                        LogiAI
                                    </h1>
                                </div>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:block" data-oid="rc0:k:b">
                                <div
                                    className="ml-10 flex items-baseline space-x-8"
                                    data-oid="fkgl0bm"
                                >
                                    <a
                                        href="#features"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                        data-oid="213d7l."
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#how-it-works"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                        data-oid="0zt1_rk"
                                    >
                                        How It Works
                                    </a>
                                    <a
                                        href="#pricing"
                                        className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
                                        data-oid="_mve.u_"
                                    >
                                        Pricing
                                    </a>
                                    <a
                                        href="#contact"
                                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                                        data-oid="r3pdi.g"
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden" data-oid="r1rci95">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                                    data-oid="zjvx5g5"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        data-oid="6dfwh1d"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                            data-oid="fgm9j5c"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-white border-t" data-oid="d4pqn17">
                            <div className="px-2 pt-2 pb-3 space-y-1" data-oid="fv0sxk5">
                                <a
                                    href="#features"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                    data-oid="cld6y2."
                                >
                                    Features
                                </a>
                                <a
                                    href="#how-it-works"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                    data-oid="sb.f4ze"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#pricing"
                                    className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
                                    data-oid="cq7zdii"
                                >
                                    Pricing
                                </a>
                                <a
                                    href="#contact"
                                    className="block px-3 py-2 bg-indigo-600 text-white rounded-lg mx-3"
                                    data-oid="ltwqfcg"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden" data-oid="ob3maco">
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
                        data-oid="hcvpgtk"
                    >
                        <div className="text-center" data-oid="n3p5i1l">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                                data-oid="xo7hyhw"
                            >
                                Revolutionize Your{' '}
                                <span className="text-indigo-600" data-oid=":-qzbvc">
                                    Logistics
                                </span>{' '}
                                with AI
                            </h1>
                            <p
                                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
                                data-oid="otleeyw"
                            >
                                Get instant answers to all your shipping and logistics queries with
                                our intelligent AI assistant. Streamline operations, track
                                shipments, and optimize your supply chain like never before.
                            </p>
                            <div
                                className="flex flex-col sm:flex-row gap-4 justify-center"
                                data-oid="q-ck1fy"
                            >
                                <button
                                    className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg"
                                    data-oid="nwj8b14"
                                >
                                    Start Free Trial
                                </button>
                                <button
                                    className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors"
                                    data-oid="4-yb-9u"
                                >
                                    Watch Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-white" data-oid="2xhx18l">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="6wm03uh">
                        <div className="text-center mb-16" data-oid="v1z2ro7">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                data-oid=":bby7pm"
                            >
                                Powerful Features for Modern Logistics
                            </h2>
                            <p
                                className="text-xl text-gray-600 max-w-2xl mx-auto"
                                data-oid="ac_m.l8"
                            >
                                Our AI assistant provides comprehensive logistics support with
                                cutting-edge technology
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="hccjt.5">
                            <div
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-shadow"
                                data-oid="2yfb3:v"
                            >
                                <div
                                    className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-oid="ny0u31q"
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="yvby9.o"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            data-oid="iaogmx1"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid=":1vhgc1"
                                >
                                    Instant Query Response
                                </h3>
                                <p className="text-gray-600" data-oid="ny.vujf">
                                    Get immediate answers to shipping status, delivery times, and
                                    logistics questions 24/7
                                </p>
                            </div>

                            <div
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow"
                                data-oid="air861."
                            >
                                <div
                                    className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-oid="wv6hd:7"
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="-0k4cfe"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                            data-oid="dntp6u7"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="erv941e"
                                >
                                    Smart Analytics
                                </h3>
                                <p className="text-gray-600" data-oid="l_tnenm">
                                    Advanced data insights to optimize routes, reduce costs, and
                                    improve delivery performance
                                </p>
                            </div>

                            <div
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-lg transition-shadow"
                                data-oid="9y75bf."
                            >
                                <div
                                    className="w-16 h-16 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-4"
                                    data-oid="ffwnxco"
                                >
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        data-oid="6wntd0."
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                            data-oid="p_bmt4i"
                                        />
                                    </svg>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="7h217o8"
                                >
                                    Real-time Tracking
                                </h3>
                                <p className="text-gray-600" data-oid=":k0i1nf">
                                    Monitor shipments across multiple carriers with unified tracking
                                    and automated updates
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="py-20 bg-gray-50" data-oid="u0vvhs8">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="s9xd6io">
                        <div className="text-center mb-16" data-oid="pphhj6t">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                data-oid="xgp7lxh"
                            >
                                How LogiAI Works
                            </h2>
                            <p
                                className="text-xl text-gray-600 max-w-2xl mx-auto"
                                data-oid="g03gew5"
                            >
                                Simple integration, powerful results in just three steps
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8" data-oid="4amqxm:">
                            <div className="text-center" data-oid="dar-zu:">
                                <div
                                    className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                    data-oid="qoxf2ni"
                                >
                                    1
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="koy8x97"
                                >
                                    Connect Your Systems
                                </h3>
                                <p className="text-gray-600" data-oid="sbkmgru">
                                    Integrate LogiAI with your existing logistics platforms and
                                    databases in minutes
                                </p>
                            </div>
                            <div className="text-center" data-oid="1g.xbd4">
                                <div
                                    className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                    data-oid="5tw0q-x"
                                >
                                    2
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="vj4ofev"
                                >
                                    Ask Questions
                                </h3>
                                <p className="text-gray-600" data-oid=":m1.jms">
                                    Use natural language to query shipment status, delivery
                                    estimates, and logistics data
                                </p>
                            </div>
                            <div className="text-center" data-oid="oxv1bf0">
                                <div
                                    className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                                    data-oid="-_cm6-6"
                                >
                                    3
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="dyu.zzs"
                                >
                                    Get Instant Insights
                                </h3>
                                <p className="text-gray-600" data-oid="3a_9.n-">
                                    Receive accurate, real-time answers and actionable
                                    recommendations
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 bg-white" data-oid="mewo8j7">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".siq3bo">
                        <div className="text-center mb-16" data-oid="gac_709">
                            <h2
                                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                                data-oid="c.lu98_"
                            >
                                Simple, Transparent Pricing
                            </h2>
                            <p
                                className="text-xl text-gray-600 max-w-2xl mx-auto"
                                data-oid=".hl4zrg"
                            >
                                Choose the plan that fits your logistics needs
                            </p>
                        </div>

                        <div
                            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
                            data-oid=":jsmlvi"
                        >
                            <div
                                className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                                data-oid="4x7.49k"
                            >
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="063m8ii"
                                >
                                    Starter
                                </h3>
                                <div
                                    className="text-3xl font-bold text-gray-900 mb-4"
                                    data-oid="ll6h4ff"
                                >
                                    $99
                                    <span className="text-lg text-gray-600" data-oid="i1585sh">
                                        /month
                                    </span>
                                </div>
                                <ul className="space-y-3 mb-8" data-oid="7firx7_">
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid=":d1xtfk"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="tyuku0:"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="9v_5v48"
                                            />
                                        </svg>
                                        Up to 1,000 queries/month
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="b5.xn6i"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="ct7u.ib"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="im_:xqg"
                                            />
                                        </svg>
                                        Basic tracking integration
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="_zavpl6"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="lhe3hfa"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="6:kg:.1"
                                            />
                                        </svg>
                                        Email support
                                    </li>
                                </ul>
                                <button
                                    className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                                    data-oid="o1ruskc"
                                >
                                    Start Free Trial
                                </button>
                            </div>

                            <div
                                className="border-2 border-indigo-600 rounded-xl p-8 relative hover:shadow-lg transition-shadow"
                                data-oid="8obbc3z"
                            >
                                <div
                                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                                    data-oid="x7bq_ps"
                                >
                                    <span
                                        className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium"
                                        data-oid="w-bw3qz"
                                    >
                                        Most Popular
                                    </span>
                                </div>
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="7i3xiaa"
                                >
                                    Professional
                                </h3>
                                <div
                                    className="text-3xl font-bold text-gray-900 mb-4"
                                    data-oid="hqqk1i8"
                                >
                                    $299
                                    <span className="text-lg text-gray-600" data-oid="0a1c-6t">
                                        /month
                                    </span>
                                </div>
                                <ul className="space-y-3 mb-8" data-oid="nudmxt7">
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="1xpeeuz"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="4om4:ab"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="hi:nqnl"
                                            />
                                        </svg>
                                        Up to 10,000 queries/month
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="ausqjqs"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="1alo8:e"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="97:5q5g"
                                            />
                                        </svg>
                                        Advanced analytics
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="5awm1.d"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="ud5u-46"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="sgwdl37"
                                            />
                                        </svg>
                                        Priority support
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="b-t1y_4"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="xmyst_7"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="vr1mo58"
                                            />
                                        </svg>
                                        API access
                                    </li>
                                </ul>
                                <button
                                    className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                                    data-oid="b:7sg69"
                                >
                                    Start Free Trial
                                </button>
                            </div>

                            <div
                                className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                                data-oid="76_aubg"
                            >
                                <h3
                                    className="text-xl font-semibold text-gray-900 mb-2"
                                    data-oid="su955hc"
                                >
                                    Enterprise
                                </h3>
                                <div
                                    className="text-3xl font-bold text-gray-900 mb-4"
                                    data-oid="s:1r01q"
                                >
                                    Custom
                                </div>
                                <ul className="space-y-3 mb-8" data-oid="k.18wj3">
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="895b8ua"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="vuna5jz"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="-d1-8sw"
                                            />
                                        </svg>
                                        Unlimited queries
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="-o_006j"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="szeg8hp"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="9jhj8a7"
                                            />
                                        </svg>
                                        Custom integrations
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="8sfwa_-"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="7g:1_00"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="-yb0bki"
                                            />
                                        </svg>
                                        Dedicated support
                                    </li>
                                    <li
                                        className="flex items-center text-gray-600"
                                        data-oid="6jk.2xh"
                                    >
                                        <svg
                                            className="w-5 h-5 text-green-500 mr-2"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            data-oid="0hy91ad"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                                data-oid="81kalt2"
                                            />
                                        </svg>
                                        SLA guarantee
                                    </li>
                                </ul>
                                <button
                                    className="w-full border-2 border-indigo-600 text-indigo-600 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
                                    data-oid="l0r_vxg"
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-indigo-600" data-oid="q7lgtxd">
                    <div
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                        data-oid="3lvbjze"
                    >
                        <h2
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                            data-oid="ym1gi3q"
                        >
                            Ready to Transform Your Logistics?
                        </h2>
                        <p
                            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
                            data-oid="4xs56qb"
                        >
                            Join thousands of companies already using LogiAI to streamline their
                            operations
                        </p>
                        <button
                            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                            data-oid="8m79z7j"
                        >
                            Start Your Free Trial Today
                        </button>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="bg-gray-900 text-white py-12" data-oid="mr-f3n_">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="dxw97yh">
                        <div className="grid md:grid-cols-4 gap-8" data-oid="9:0tba4">
                            <div data-oid="-h8keq9">
                                <h3
                                    className="text-2xl font-bold text-indigo-400 mb-4"
                                    data-oid="kzqc8zp"
                                >
                                    LogiAI
                                </h3>
                                <p className="text-gray-300" data-oid="5.a1v_d">
                                    Revolutionizing logistics with intelligent AI assistance for
                                    modern supply chains.
                                </p>
                            </div>
                            <div data-oid="gsb:74v">
                                <h4 className="text-lg font-semibold mb-4" data-oid="9agciwn">
                                    Product
                                </h4>
                                <ul className="space-y-2 text-gray-300" data-oid="va45yd7">
                                    <li data-oid="c1ru4ot">
                                        <a
                                            href="#features"
                                            className="hover:text-white transition-colors"
                                            data-oid="szp_m.o"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li data-oid="6kh9k6o">
                                        <a
                                            href="#pricing"
                                            className="hover:text-white transition-colors"
                                            data-oid="_mcnwoy"
                                        >
                                            Pricing
                                        </a>
                                    </li>
                                    <li data-oid="7k6lc80">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="7gikxs:"
                                        >
                                            API Documentation
                                        </a>
                                    </li>
                                    <li data-oid="053m9x0">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="_ks62s6"
                                        >
                                            Integrations
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="0.69:yj">
                                <h4 className="text-lg font-semibold mb-4" data-oid="er65i2s">
                                    Company
                                </h4>
                                <ul className="space-y-2 text-gray-300" data-oid="zqc_nsj">
                                    <li data-oid="zvvu1ss">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="dldh61x"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li data-oid="ssh6juq">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid=".-lqvqi"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                    <li data-oid="47c_2a:">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="n24jb.z"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li data-oid="0_90m83">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="ki-02gf"
                                        >
                                            Press
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div data-oid="7epjoqc">
                                <h4 className="text-lg font-semibold mb-4" data-oid="1oaenvz">
                                    Support
                                </h4>
                                <ul className="space-y-2 text-gray-300" data-oid="i-tq2w0">
                                    <li data-oid="2en9box">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="qx3vh9c"
                                        >
                                            Help Center
                                        </a>
                                    </li>
                                    <li data-oid="3655ibs">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="cr.u6o5"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li data-oid="vpa5qh.">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="k.jqkx3"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li data-oid="7_to4lj">
                                        <a
                                            href="#"
                                            className="hover:text-white transition-colors"
                                            data-oid="p-dao.l"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
                            data-oid="4jej7r2"
                        >
                            <p data-oid="qrdwc95">&copy; 2024 LogiAI. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </body>
        </>
    );
}
