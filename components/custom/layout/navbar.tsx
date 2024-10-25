import { 
  BookOpen, 
  Calculator, 
  Microscope,
  FlaskConical,
  ChevronDown 
} from "lucide-react";
import Link from "next/link";

import { auth, signOut } from "@/app/(auth)/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { ThemeToggle } from "../theme-toggle";

const navItems = [
  {
    title: "数学思维",
    href: "/math",
    icon: Calculator,
    description: "数学概念可视化学习"
  },
  {
    title: "阅读训练",
    href: "/reading",
    icon: BookOpen,
    description: "提升阅读理解能力"
  },
  {
    title: "科学探索",
    href: "/science",
    icon: Microscope,
    description: "探索科学奥秘"
  },
  {
    title: "实验室",
    href: "/labs",
    icon: FlaskConical,
    description: "互动实验和创新项目"
  }
];

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              AI Teaching
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Auth */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="space-x-2">
                    <span className="text-sm">{session.user?.email}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">个人中心</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-500">
                    <form
                      className="w-full"
                      action={async () => {
                        "use server";
                        await signOut({ redirectTo: "/" });
                      }}
                    >
                      <button type="submit" className="w-full text-left">
                        退出登录
                      </button>
                    </form>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button asChild>
                <Link href="/login">登录</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}