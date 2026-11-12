import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-[#a3e635]/40 bg-[#a3e635]/10 text-[#a3e635]",
        secondary:
          "border-neutral-800 bg-[#181b1e] text-[#e5e7eb]",
        outline:
          "border-neutral-700 text-neutral-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
