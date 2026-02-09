"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Terminal, Zap } from "lucide-react";

const aiExperiences = [
  {
    icon: Terminal,
    title: "Prompt Engineering",
    content: `// AI ile etkili prompt yazma
const prompt = {
  role: "developer",
  task: "code generation",
  context: "swiftui app",
  output: "clean, modern code"
};`,
  color: "from-purple-600 to-purple-800",
  textColor: "text-purple-300",
  bgColor: "bg-purple-900/20",
  borderColor: "border-purple-500/30",
  commentColor: "text-purple-400",
  codeColor: "text-purple-200",
  stringColor: "text-purple-300",
  keyColor: "text-purple-100",
  valueColor: "text-purple-300",
  bracketColor: "text-purple-400",
  dotColor: "text-purple-300",
  colonColor: "text-purple-400",
  commaColor: "text-purple-400",
  quoteColor: "text-purple-300",
},
  {
    icon: Zap,
    title: "AI Otomasyonlar",
    content: `# AI ile iş akışı otomasyonu
def automate_workflow():
    tasks = [
        "code review",
        "documentation",
        "testing"
    ]
    ai_assistant.process(tasks)`,
    color: "from-blue-600 to-blue-800",
    textColor: "text-blue-300",
    bgColor: "bg-blue-900/20",
    borderColor: "border-blue-500/30",
    commentColor: "text-blue-400",
    codeColor: "text-blue-200",
    stringColor: "text-blue-300",
    keyColor: "text-blue-100",
    valueColor: "text-blue-300",
    bracketColor: "text-blue-400",
    dotColor: "text-blue-300",
    colonColor: "text-blue-400",
    commaColor: "text-blue-400",
    quoteColor: "text-blue-300",
  },
  {
    icon: Sparkles,
    title: "AI Araçları",
    content: `const aiTools = {
  chat: "ChatGPT",
  code: "Cursor",
  copilot: "GitHub Copilot",
  claude: "Claude AI"
};`,
    color: "from-pink-600 to-pink-800",
    textColor: "text-pink-300",
    bgColor: "bg-pink-900/20",
    borderColor: "border-pink-500/30",
    commentColor: "text-pink-400",
    codeColor: "text-pink-200",
    stringColor: "text-pink-300",
    keyColor: "text-pink-100",
    valueColor: "text-pink-300",
    bracketColor: "text-pink-400",
    dotColor: "text-pink-300",
    colonColor: "text-pink-400",
    commaColor: "text-pink-400",
    quoteColor: "text-pink-300",
  },
];

export default function AIPlayground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ai"
      ref={ref}
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">AI Playground</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Son zamanlarda denediğim AI araçları, prompt denemeleri ve
            otomasyon fikirleri. AI&apos;ı öğreniyorum ve kullanıyorum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed"
          >
            <p>
              AI teknolojileri ile üretkenliğimi artırıyorum. ChatGPT ile
              kod yorumları yazıyorum, Cursor ile geliştirme hızımı
              artırıyorum ve GitHub Copilot ile otomatik kod tamamlama
              kullanıyorum.
            </p>
            <p>
              Prompt engineering konusunda kendimi geliştiriyorum ve
              AI araçlarını daha etkili kullanmak için sürekli denemeler
              yapıyorum.
            </p>
            <p>
              AI ile iş akışı otomasyonları oluşturuyor, tekrarlayan
              görevleri otomatikleştiriyorum. Bu sayede daha yaratıcı
              işlere odaklanabiliyorum.
            </p>
          </motion.div>

          {/* Right: Terminal-like Cards */}
          <div className="space-y-6">
            {aiExperiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`${experience.bgColor} ${experience.borderColor} border rounded-xl p-6 font-mono text-sm overflow-x-auto`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${experience.textColor}`} />
                    <h3 className={`font-semibold ${experience.textColor}`}>
                      {experience.title}
                    </h3>
                  </div>
                  <pre className="whitespace-pre-wrap">
                    <code className={experience.codeColor}>
                      {experience.content.split("\n").map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </code>
                  </pre>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
