import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* 背景渐变 - 保留原有的酷炫效果 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* 顶部小标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span className="text-muted-foreground">浙里修 · 数字化专业维修服务</span>
            </div>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
          >
            用专业与技术，重塑{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent animate-gradient">
              维修新标准
            </span>
          </motion.h1>

          {/* 副标题 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            浙里修致力于为您提供高效、透明、可靠的维修解决方案。
            结合数字化管理系统，让每一次服务都清晰可见，让每一份信任都不被辜负。
          </motion.p>

          {/* 按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              立即预约服务
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              了解服务范畴
            </Button>
          </motion.div>

          {/* 核心指标统计 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-8"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <Zap className="h-6 w-6 text-yellow-500" />
                <span>98%</span>
              </div>
              <p className="text-sm text-muted-foreground">准时到达率</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <ShieldCheck className="h-6 w-6 text-purple-500" />
                <span>100%</span>
              </div>
              <p className="text-sm text-muted-foreground">原厂配件保障</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 text-2xl md:text-3xl font-bold">
                <Sparkles className="h-6 w-6 text-pink-500" />
                <span>5k+</span>
              </div>
              <p className="text-sm text-muted-foreground">好评服务案例</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
