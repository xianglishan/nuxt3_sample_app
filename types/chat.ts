export interface Message {
    role: Role;
    content: string;
  }

export type Role = "function" | "user" | "system" | "assistant";