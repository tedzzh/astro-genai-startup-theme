import { motion } from "framer-motion";
import {
  Cpu,
  Factory,
  Plane,
  Code,
  Network,
  Car,
} from "lucide-react";
import { withBase } from "@/lib/utils";

const PLACEHOLDER_IMG = "/images/placeholder.svg";

const features = [
  {
    icon: Cpu,
    title: "计算机芯片级维修",
    description: "主板、显卡、笔记本等芯片级诊断与维修，BGA 焊接与更换，数据恢复。",
    gradient: "from-purple-500 to-pink-500",
    image: "/images/service-chip.jpg",
  },
  {
    icon: Factory,
    title: "工控设备维修",
    description: "PLC、变频器、触摸屏、工业电脑等工控设备故障诊断与维修。",
    gradient: "from-yellow-500 to-orange-500",
    image: "/images/service-industrial.jpg",
  },
  {
    icon: Plane,
    title: "无人机维修",
    description: "消费级与行业级无人机飞控、图传、云台及整机检测与维修。",
    gradient: "from-green-500 to-emerald-500",
    image: "/images/service-drone.jpg",
  },
  {
    icon: Code,
    title: "软件脚本开发",
    description: "自动化脚本、小工具开发，办公与运维流程定制，提高效率。",
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/service-script.jpg",
  },
  {
    icon: Network,
    title: "网络设计维护",
    description: "局域网与弱电设计、布线、路由器与交换机配置及故障排查。",
    gradient: "from-indigo-500 to-purple-500",
    image: "/images/service-network.jpg",
  },
  {
    icon: Car,
    title: "特斯拉相关",
    description: "特斯拉车辆电子与相关设备进修中，后续将提供专项服务。",
    gradient: "from-pink-500 to-rose-500",
    image: "/images/service-tesla.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold"
          >
            专业
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              服务项目
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            芯片级维修、工控、无人机、脚本与网络，一站式专业服务
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* 占位图：将图片放到 public/images/ 对应文件名即可替换；缺失时显示占位 */}
                <div className="aspect-video rounded-xl bg-muted mb-4 overflow-hidden">
                  <img
                    src={withBase(feature.image)}
                    alt=""
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = withBase(PLACEHOLDER_IMG);
                    }}
                  />
                </div>
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} mb-4`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
