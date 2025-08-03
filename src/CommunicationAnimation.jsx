import React from "react";
import { motion } from "framer-motion";

export default function CommunicationAnimation() {
    // 화살표 이동 애니메이션
    const beam = {
        initial: { pathLength: 0, opacity: 0 },
        animate: { pathLength: 1, opacity: 1, transition: { duration: 1, repeat: Infinity, repeatDelay: 1 } }
    };

    return (
        <div className="flex flex-col items-center space-y-20 py-20 bg-gray-50">
            {/* Client ↔ Server */}
            <div className="relative flex items-center justify-center w-full max-w-xl">
                {/* 클라이언트 */}
                <div className="flex flex-col items-center mr-24">
                    <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">C</div>
                    <span className="mt-2 text-gray-700">Client</span>
                </div>

                {/* 서버 */}
                <div className="flex flex-col items-center ml-24">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">S</div>
                    <span className="mt-2 text-gray-700">Server</span>
                </div>

                {/* 요청 화살표 */}
                <motion.svg
                    width="200" height="2"
                    className="absolute left-1/2 transform -translate-x-1/2"
                    initial="initial"
                    animate="animate"
                >
                    <motion.line
                        x1="0" y1="1" x2="200" y2="1"
                        stroke="#3B82F6" strokeWidth="2"
                        variants={beam}
                    />
                    <marker
                        id="arrowhead"
                        markerWidth="10" markerHeight="7"
                        refX="10" refY="3.5" orient="auto"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                    </marker>
                </motion.svg>
            </div>

            {/* Server ↔ Server */}
            <div className="relative flex items-center justify-center w-full max-w-xl">
                {/* 서버 A */}
                <div className="flex flex-col items-center mr-24">
                    <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">SA</div>
                    <span className="mt-2 text-gray-700">Server A</span>
                </div>

                {/* 서버 B */}
                <div className="flex flex-col items-center ml-24">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">SB</div>
                    <span className="mt-2 text-gray-700">Server B</span>
                </div>

                {/* 응답 화살표 */}
                <motion.svg
                    width="200" height="2"
                    className="absolute left-1/2 transform -translate-x-1/2"
                    initial="initial"
                    animate="animate"
                >
                    <motion.line
                        x1="200" y1="1" x2="0" y2="1"
                        stroke="#EF4444" strokeWidth="2"
                        variants={beam}
                    />
                    <marker
                        id="arrowhead2"
                        markerWidth="10" markerHeight="7"
                        refX="0" refY="3.5" orient="auto-start-reverse"
                    >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                    </marker>
                </motion.svg>
            </div>
        </div>
    );
}
