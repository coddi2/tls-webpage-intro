import React from "react";
import { motion } from "framer-motion";
import "./index.css";

const summarySteps = [
    "ClientHello (암호화 방식 제안)",
    "ServerHello (서버 인증서 포함)",
    "Key Exchange (공개키 기반 암호화)",
    "Finished (암호화된 세션 시작)"
];
const detailSteps = summarySteps;
const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.5 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function TLSIntroPage() {
    const navigate = (url) => window.location.href = url;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
            <main className="flex-grow">
                {/* Hero with link to overview page */}
                <section className="bg-blue-600 text-white py-24">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-5xl font-bold mb-4">TLS (전송 계층 보안)란?</h1>
                        <p className="text-lg mb-8">웹을 더 안전하게 만드는 핵심 보안 기술, 쉽게 알아봅니다.</p>
                        <button onClick={() => navigate('/page1.html')} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
                            자세히 보기 →
                        </button>
                    </div>
                </section>

                <div className="container mx-auto px-6 py-16">
                    {/* Section 1 link wrap removed, handled above */}

                    {/* Summary Handshake linking to its page */}
                    <motion.section
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="mb-16 bg-gray-100 p-8 rounded-lg cursor-pointer"
                        onClick={() => navigate('/page2.html')}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-center">2. TLS 핸드쉐이크 흐름 (요약)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {summarySteps.map((step, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg text-center text-gray-800">
                                    {step}
                                </motion.div>
                            ))}
                        </div>
                        <p className="mt-4 text-center text-blue-600 underline">자세히 보기 →</p>
                    </motion.section>

                    {/* OpenSSL Practice linking to its page */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">3. OpenSSL 실습</h2>
                        <button onClick={() => navigate('/page3.html')} className="text-lg text-blue-600 underline mb-4">
                            실습 페이지로 이동 →
                        </button>
                        <div className="bg-gray-800 text-green-400 font-mono p-6 rounded-lg overflow-auto">
                            <p># 서버: 인증서 생성 및 서버 실행</p>
                            <code className="block mb-2">openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes</code>
                            <code className="block">openssl s_server -key key.pem -cert cert.pem -port 4433</code>
                            <p className="mt-4"># 클라이언트: 서버에 접속</p>
                            <code className="block">openssl s_client -connect [서버 IP]:4433</code>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white text-center text-gray-600 py-6 border-t mt-auto">
                © 2025 TLS 교육 페이지 - 모두를 위한 보안 이해
            </footer>
        </div>
    );
}
