import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { withBase } from "@/lib/utils";

const testimonials = [
  {
    name: "张先生",
    role: "某制造企业设备主管",
    image: "/images/avatar-1.jpg",
    content:
      "厂里几台工控机坏了找不到人修，找到浙里修后检测报价很快，修好用了大半年没再出问题，靠谱。",
    rating: 5,
  },
  {
    name: "李女士",
    role: "工作室主理人",
    image: "/images/avatar-2.jpg",
    content:
      "笔记本主板进水，问了几家都说要换板，这边做了芯片级维修，价格合理，数据也保住了，很满意。",
    rating: 5,
  },
  {
    name: "王工",
    role: "无人机从业者",
    image: "/images/avatar-3.jpg",
    content:
      "飞控和图传问题在这边修的，沟通专业，维修利索，以后有活还会找浙里修。",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            客户
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              评价
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            真实反馈，感谢每一位客户的信任
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card p-6 rounded-2xl border bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                {/* 占位符：替换 public/images/avatar-1.jpg 等 */}
                <img
                  src={withBase(testimonial.image)}
                  alt=""
                  className="h-12 w-12 rounded-full bg-muted object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
