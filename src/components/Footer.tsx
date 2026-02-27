import { Wrench, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withBase } from "@/lib/utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 品牌 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                浙里修
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              芯片级维修工作室 · 计算机、工控、无人机、脚本与网络，专业透明可靠。
            </p>
          </div>

          {/* 服务 */}
          <div>
            <h3 className="font-semibold mb-4">服务</h3>
            <ul className="space-y-3">
              <li>
                <a href={withBase("/#features")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  服务项目
                </a>
              </li>
              <li>
                <a href={withBase("/#process")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  维修流程
                </a>
              </li>
              <li>
                <a href={withBase("/#pricing")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  价格咨询
                </a>
              </li>
              <li>
                <a href={withBase("/#faq")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  常见问题
                </a>
              </li>
              <li>
                <a href={withBase("/contact")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          {/* 关于 */}
          <div>
            <h3 className="font-semibold mb-4">关于</h3>
            <ul className="space-y-3">
              <li>
                <a href={withBase("/blog")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  动态
                </a>
              </li>
              <li>
                <a href={withBase("/privacy")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  隐私政策
                </a>
              </li>
              <li>
                <a href={withBase("/terms")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  服务条款
                </a>
              </li>
            </ul>
          </div>

          {/* 订阅/联系 */}
          <div>
            <h3 className="font-semibold mb-4">保持联系</h3>
            <p className="text-sm text-muted-foreground mb-4">
              预约或咨询，欢迎留下邮箱，我们会尽快回复。
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="您的邮箱"
                className="flex h-9 w-full rounded-md border bg-background px-3 py-1 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} 浙里修 版权所有
          </p>
          <div className="flex gap-6">
            <a href={withBase("/privacy")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              隐私政策
            </a>
            <a href={withBase("/terms")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              服务条款
            </a>
            <a href={withBase("/privacy#cookies")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
               Cookie 说明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
