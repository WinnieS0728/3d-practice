import { cn } from "@/src/utils/cn";

export function Footer({ className }) {
  return (
    <div className={cn("p-4 w-full text-center backdrop-blur-md", className)}>
      © 2023 WinnieS. All rights reserved
    </div>
  );
}
