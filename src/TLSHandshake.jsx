// src/TLSHandshake.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
    "ClientHello (암호화 방식 제안)",
    "ServerHello (서버 인증서 포함)",
    "Key Exchange (공개키 기반 암호화)",
    "Finished (암호화된 세션 시작)",
];

// 부모 컨테이너에 staggerChildren 주기
const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.6 }
    }
};

// 각 카드의 appear 애니메이션
const card = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function TLSHandshake() {
    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={container}
            className="container mx-auto px-6 py-16 bg-gray-100 rounded-lg"
        >
            <h2 className="text-2xl font-bold mb-8">TLS 핸드셰이크 흐름</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {steps.map((label, i) => (
                    <motion.div
                        key={i}
                        variants={card}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                    >
                        {label}
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
