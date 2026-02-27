import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "维修流程是怎样的？",
    answer:
      "您可通过网站或电话预约，我们安排检测时间；检测后给出书面报价，您确认后再进行维修；维修完成后试机交付，并提供质保与单据。",
  },
  {
    question: "如何收费？有没有检测费？",
    answer:
      "先沟通再检测，检测后报价，您同意后才施工，不修不收费。具体检测是否收费视设备与距离而定，沟通时会说明。维修费按项目与配件单独报价，透明无隐藏费用。",
  },
  {
    question: "维修周期大概多久？",
    answer:
      "常见故障一般 3～7 个工作日；需订货或芯片级维修的复杂情况会提前告知预估时间。加急需求可沟通，视排期与难度可能加收加急费。",
  },
  {
    question: "保修多久？返修怎么算？",
    answer:
      "维修件质保一般 3～6 个月（具体以报价单为准）。质保期内同一故障免费返修；人为或其它故障按新单处理。",
  },
  {
    question: "支持上门吗？外地怎么送修？",
    answer:
      "本地可上门检测与取送（具体范围与费用沟通时说明）。外地客户可快递寄修，我们收到后检测报价，您确认后维修再寄回，运费按实际产生计算。",
  },
  {
    question: "工控、无人机、脚本开发都接吗？",
    answer:
      "接。计算机芯片级维修、工控设备、无人机、软件脚本开发、网络设计维护都在服务范围内；特斯拉相关业务正在进修中，后续会开放。具体可先发设备型号或需求，我们评估后回复。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            常见
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              问题
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            关于维修流程、价格与保修，您可能想了解的都在这里
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
