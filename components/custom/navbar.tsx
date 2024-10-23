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
} from "../ui/dropdown-menu";

export const Navbar = async () => {
  let session = await auth();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/40 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-medium hover:text-primary transition-colors">
            AI Teaching
          </Link>
          
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/#vision" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              愿景
            </Link>
            <Link 
              href="/#experience" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              体验
            </Link>
            <Link 
              href="/chat" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              开始对话
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* History - Only show for authenticated users */}
          {session && <History user={session.user} />}

          {/* Theme Toggle & Auth */}
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" className="h-9">
                  {session.user?.email}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/dashboard" className="w-full">
                    学习中心
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemeToggle />
                </DropdownMenuItem>
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
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="h-9" asChild>
                <Link href="/login">登录</Link>
              </Button>
              <Button variant="default" className="h-9" asChild>
                <Link href="/register">立即开始</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};