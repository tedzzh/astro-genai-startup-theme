import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { withBase } from "@/lib/utils";

const plans = [
  {
    name: "检测报价",
    price: "面议",
    description: "故障检测与报价，确定维修方案与费用后再施工",
    features: [
      "免费初步沟通",
      "上门/到店检测",
      "书面报价单",
      "原厂或优质配件",
    ],
    cta: "预约检测",
    highlighted: false,
  },
  {
    name: "标准维修",
    price: "按件计费",
    description: "常见设备维修，透明报价，质保期内免费返修",
    features: [
      "芯片级维修与更换",
      "工控/无人机/电脑",
      "质保 3～6 个月",
      "维修报告与单据",
    ],
    cta: "立即预约",
    highlighted: true,
  },
  {
    name: "企业合作",
    price: "定制",
    description: "批量设备、长期维保、驻场或包年服务",
    features: [
      "专属对接人",
      "优先排期",
      "协议价与账期",
      "定期巡检与报告",
    ],
    cta: "联系洽谈",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            透明
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              价格咨询
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            先检测后报价，不修不收费，价格透明无套路
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border bg-card ${
                plan.highlighted
                  ? "ring-2 ring-purple-500 shadow-xl scale-105"
                  : ""
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-1 text-xs font-semibold text-white">
                    <Sparkles className="h-3 w-3" />
                    推荐
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>

                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  <a href={withBase("/contact")}>{plan.cta}</a>
                </Button>

                <div className="pt-4 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
