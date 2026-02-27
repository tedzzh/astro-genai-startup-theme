import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { withBase } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { label: "服务项目", href: withBase("/#features") },
    { label: "维修流程", href: withBase("/#process") },
    { label: "价格咨询", href: withBase("/#pricing") },
    { label: "常见问题", href: withBase("/#faq") },
    { label: "联系我们", href: withBase("/contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between px-4">
        <a href={withBase("/")} className="flex items-center gap-3 group">
          {/* 英文主标使用站点统一的紫粉渐变 */}
          <span className="text-2xl font-black tracking-[0.22em] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent uppercase group-hover:opacity-90 transition-opacity">
            ZHELIFIX
          </span>
          <div className="h-6 w-px bg-border/60" />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-sm bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              浙里修
            </span>
            <span className="text-[11px] text-muted-foreground">
              芯片级维修工作室
            </span>
          </div>
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">{item.label}</a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-pink-600 border-none text-white">
            <a href={withBase("/contact")}>立即预约</a>
          </Button>
          <button type="button" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="菜单">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="block text-base font-medium text-muted-foreground" onClick={() => setIsMenuOpen(false)}>{item.label}</a>
          ))}
          <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-pink-600">
            <a href={withBase("/contact")}>立即预约</a>
          </Button>
        </div>
      )}
    </header>
  );
}
