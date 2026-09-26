export function PageIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text?: string
}) {
  return (
    <section className="mx-auto w-[min(1160px,calc(100%-48px))] pb-16 pt-24 md:pb-24 md:pt-32">
      <span className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-[#b85d34]">{eyebrow}</span>

      <h1 className="mt-4 max-w-4xl font-[var(--font-display)] text-[clamp(32px,3.8vw,46px)] font-semibold leading-[1.22] tracking-[-0.02em] text-[#141a1e]">{title}</h1>

      {text && <p className="mt-5 max-w-2xl text-[15.5px] leading-[1.68] text-[#242d35]">{text}</p>}
    </section>
  )
}
