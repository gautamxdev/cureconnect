export function NetworkTrust() {
  const text = "Currently building relationships with multispeciality hospitals in Nashik";
  const items = Array.from({ length: 8 }, () => text);

  return (
    <section className="overflow-x-clip border-y border-white/8 bg-[#07130e] py-4" aria-hidden>
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...items, ...items].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center gap-3 text-sm text-white/45"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--cure-green)]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
