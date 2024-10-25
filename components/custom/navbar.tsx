import { 
  BookOpen, 
  Brain, 
  Calculator, 
  FlaskConical,
  Layout,
  ChevronDown 
} from "lucide-react";
import Link from "next/link";

import { auth, signOut } from "@/app/(auth)/auth";

import { History } from "./history";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";

export const Navbar = async () => {
  let session = await auth();

  const navItems = [
    {
      title: "个人中心",
      href: "/dashboard",
      icon: Layout,
    },
    {
      title: "数学思维",
      href: "/math",
      icon: Calculator,
    },
    {
      title: "阅读训练",
      href: "/reading",
      icon: BookOpen,
    },
    {
      title: "思维培养",
      href: "/thinking",
      icon: Brain,
    },
    {
      title: "科学探索",
      href: "/explore",
      icon: FlaskConical,
    },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur fixed top-0 left-0 right-0 border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">AI Teaching</span>
            </Link>
          </div>

          {/* Navigation Items */}
          {session && (
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
          )}

          {/* Auth & Theme */}
          <div className="flex items-center space-x-4">
            {session ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="space-x-2">
                    <span>{session.user?.email}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <History user={session?.user} />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ThemeToggle />
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
      </div>
    </nav>
  );
};