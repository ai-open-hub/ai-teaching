'use client'

import { nanoid } from 'nanoid'; // 使用 nanoid 替代 UUID

import { Chat } from "@/components/custom/chat";
// import { generateUUID } from "@/lib/utils";

export default function Page() {
  const id = nanoid();
  return <Chat key={id} id={id} initialMessages={[]} />;
}
