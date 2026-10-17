
export default function ContactDetail({ detail = {} }) {
  return (
    <div key={detail.title} className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background/30 text-2xl text-primary">
        {detail.icon}
      </div>

      <div>
        <h3 className="font-bold text-ink">{detail.title}</h3>
        {detail.lines.map((line) => (
          <p
            key={line}
            className="mt-1 text-sm leading-relaxed text-ink/75 sm:text-base"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}