import { Github, Twitter } from "lucide-react";
import Link from "next/link";

// 数据配置
const footerLinks = {
  product: [
    { title: "数学思维", href: "/math" },
    { title: "阅读训练", href: "/reading" },
    { title: "科学探索", href: "/science" },
    { title: "实验室", href: "/labs" },
  ],
  support: [
    { title: "使用指南", href: "/guide" },
    { title: "常见问题", href: "/faq" },
    { title: "视频教程", href: "/tutorials" },
    { title: "学习资源", href: "/resources" },
  ],
  about: [
    { title: "关于我们", href: "/about" },
    { title: "使用条款", href: "/terms" },
    { title: "隐私政策", href: "/privacy" },
    { title: "联系我们", href: "/contact" },
  ]
};

export function Footer() {
  return (
    <footer className="w-full border-t bg-zinc-50">
      {/* 主要内容区 */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* 品牌区域 */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Teaching
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              重新定义学习方式，让每个孩子都能享受AI辅助下的个性化学习体验。
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* 链接区域 */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-medium">产品</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">支持</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">关于</h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-20 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI Teaching. Think Different. Learn Different.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                使用条款
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                隐私政策
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}