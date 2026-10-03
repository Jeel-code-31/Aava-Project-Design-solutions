import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function ArrowLink({
  href,
  children,
  className = "",
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link className={`group inline-flex items-center gap-2 text-[13.5px] font-semibold text-[var(--terracotta)] transition-colors hover:text-[var(--terracotta-hover)] ${className}`} href={href}>
      <span>{children}</span>
      <ArrowUpRight className="shrink-0 text-current transition-none" size={15} strokeWidth={2} aria-hidden="true" />
    </Link>
  )
}
