import Link from "next/link";
import type React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    href: string;
  };

export function LinkButton({ className, variant, size, href, ...props }: LinkButtonProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
  const classes = cn(buttonVariants({ variant, size }), className);

  if (external) {
    return <a href={href} className={classes} {...props} />;
  }

  return <Link href={href} className={classes} {...props} />;
}
