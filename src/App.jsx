import { motion } from "framer-motion";
import { useState } from "react";

function Section({ children, index, active }) {
  return (
      <motion.div
            className="h-screen flex items-center justify-center text-4xl font-bold"
                  initial={{ opacity: 0, y: 100 }}
                        animate={{
                                opacity: active === index ? 1 : 0,
                                        y: active === index ? 0 : -100,
                                                position: "absolute"
                                                      }}
                                                            transition={{ duration: 0.8 }}
                                                                >
                                                                      {children}
                                                                          </motion.div>
                                                                            );
                                                                            }

                                                                            export default function App() {
                                                                              const [active, setActive] = useState(0);

                                                                                const sections = [
                                                                                    "👋 Hi, I’m Darshan",
                                                                                        "💻 I build modern web apps",
                                                                                            "⚡ React • Tailwind • JS",
                                                                                                "📩 Contact me below"
                                                                                                  ];

                                                                                                    return (
                                                                                                        <div className="relative overflow-hidden h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white">
                                                                                                              {sections.map((text, i) => (
                                                                                                                      <Section key={i} index={i} active={active}>
                                                                                                                                {text}
                                                                                                                                        </Section>
                                                                                                                                              ))}

                                                                                                                                                    <div className="absolute bottom-6 w-full flex justify-center gap-3">
                                                                                                                                                            {sections.map((_, i) => (
                                                                                                                                                                      <button
                                                                                                                                                                                  key={i}
                                                                                                                                                                                              onClick={() => setActive(i)}
                                                                                                                                                                                                          className={`w-3 h-3 rounded-full transition-all ${
                                                                                                                                                                                                                        active === i ? "bg-white scale-125" : "bg-gray-500"
                                                                                                                                                                                                                                    }`}
                                                                                                                                                                                                                                              />
                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                  }