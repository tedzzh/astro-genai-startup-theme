import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export function Manifesto() {
  return (
    <section id="manifesto" className="py-16 md:py-24 relative overflow-hidden">
      {/* 深色背景块，呼应你初版的宣言气质 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-800 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(147,51,234,0.15),transparent)]" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-zinc-300 mb-8">
            <Wrench className="h-4 w-4 text-purple-400" />
            <span>工作室宣言</span>
          </div>

          <p className="text-zinc-300 text-base md:text-lg leading-relaxed space-y-4">
            <span className="block">
              我们在这个行业见过了太多「撞大运」式的尝试。但在浙里修，我们只相信物理规律与专业流程。当一块报废的主板、一台报错的工控机、一架失联的无人机送达这里，它们不仅是硅片与焊锡——它们是待解的谜题。
            </span>
            <span className="block">
              从 BGA 核心重塑到数据与逻辑的恢复，我们深入故障的底层，寻找本该丢失的可能。我们不谈概念，我们只谈检测、报价、质保与交付。这里是物理故障与逻辑崩溃的终点站。
            </span>
          </p>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 md:mt-12 space-y-4"
          >
            <div className="relative inline-block">
              <p className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                报废并不是你设备的终点。
              </p>
              {/* 示波器波形特效 */}
              <motion.svg
                viewBox="0 0 120 32"
                className="mt-3 w-full h-8 text-purple-400/80"
                aria-hidden
              >
                <motion.path
                  d="M0 16 L10 16 L18 4 L26 28 L34 10 L42 22 L50 8 L58 24 L66 12 L74 20 L82 6 L90 26 L100 16 L110 16 L120 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0.4 }}
                  animate={{
                    pathLength: 1,
                    strokeDashoffset: [0, 24, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  strokeDasharray="4 6"
                />
              </motion.svg>
            </div>
            <p className="text-sm md:text-base text-zinc-400 font-medium">
              精于微米，重塑逻辑。
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
