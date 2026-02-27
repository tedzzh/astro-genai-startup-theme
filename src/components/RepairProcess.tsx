import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Wrench, Package, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "预约咨询",
    description: "通过网站、电话或微信说明设备型号与故障现象，我们安排检测时间。",
  },
  {
    icon: ClipboardCheck,
    title: "检测报价",
    description: "到店或上门检测，出具书面报价单；您确认后再施工，不修不收费。",
  },
  {
    icon: Wrench,
    title: "维修施工",
    description: "使用原厂或优质配件进行维修，维修过程可沟通进度。",
  },
  {
    icon: Package,
    title: "试机交付",
    description: "维修完成后试机验收，交付时提供维修单据与保修说明。",
  },
  {
    icon: ShieldCheck,
    title: "质保服务",
    description: "质保期内同一故障免费返修，如有问题随时联系。",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0 },
};

const itemRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0 },
};

export function RepairProcess() {
  return (
    <section id="process" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            维修
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              流程
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            从预约到交付，每一步都清晰透明
          </motion.p>
        </div>

        {/* 桌面：左右交替时间线 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="hidden md:block relative max-w-4xl mx-auto"
        >
          {/* 中央流动线 */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/40 to-transparent dark:via-purple-500/30 w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-purple-500/20 dark:from-purple-400/10 dark:via-pink-400/10 dark:to-purple-400/10 w-full h-full animate-pulse" style={{ animationDuration: "3s" }} />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={isLeft ? item : itemRight}
                className="relative flex items-center gap-8 py-6"
                style={{ flexDirection: isLeft ? "row" : "row-reverse" }}
              >
                {/* 卡片区 */}
                <div className={`flex-1 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="group relative rounded-2xl border bg-card/80 backdrop-blur p-6 shadow-sm hover:shadow-lg hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className={`relative flex items-start gap-4 ${isLeft ? "flex-row-reverse" : ""}`}>
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/25 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className={`flex-1 min-w-0 ${isLeft ? "text-right" : "text-left"}`}>
                        <span className="text-xs font-medium text-purple-500 dark:text-purple-400">步骤 {index + 1}</span>
                        <h3 className="font-semibold text-lg mt-0.5">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 中央圆点 */}
                <div className="flex-shrink-0 relative z-10 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-md shadow-purple-500/25 ring-4 ring-background" />

                {/* 占位保持中线对齐 */}
                <div className="flex-1 w-0" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* 移动端：纵向时间线 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="md:hidden space-y-0 max-w-lg mx-auto"
        >
          <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative pb-10 last:pb-0"
                >
                  {/* 左侧圆点（对齐竖线） */}
                  <div className="absolute top-1.5 left-8 w-3 h-3 -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-md shadow-purple-500/30 border-2 border-background" />

                  <motion.div
                    whileTap={{ scale: 0.98 }}
                    className="rounded-2xl border bg-card p-5 shadow-sm active:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-xs font-medium text-purple-500 dark:text-purple-400">步骤 {index + 1}</span>
                        <h3 className="font-semibold mt-0.5">{step.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
