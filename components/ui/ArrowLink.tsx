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
    <Link className={`group inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#141a1e] transition-colors hover:text-[#b85d34] ${className}`} href={href}>
      <span className="transition-transform duration-200 group-hover:translate-x-0.5">{children}</span>
      <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} strokeWidth={2} aria-hidden="true" />
    </Link>
  )
}
