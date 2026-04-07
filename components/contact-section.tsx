import { SectionHeading } from "@/components/section-heading";
import { contactLinks } from "@/data/site";

export function ContactSection() {
  return (
    <section className="section-frame" id="contact">
      <SectionHeading
        description="仕事の相談、展示の案内、今後の更新を受け止められるように、控えめな導線だけを残しています。Instagram と Email の URL は data/site.ts で差し替えられます。"
        eyebrow="Contact"
        title="For exhibitions, commissions, and quiet conversations"
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16">
        {contactLinks.map((link) => (
          <a
            className="paper-panel group flex min-h-40 flex-col justify-between p-6 sm:p-8"
            href={link.href}
            key={link.label}
            rel={link.external ? "noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
          >
            <div>
              <p className="section-kicker">{link.eyebrow}</p>
              <p className="mt-5 font-serif text-[1.8rem] text-foreground">{link.label}</p>
            </div>
            <div className="flex items-end justify-between gap-6">
              <p className="max-w-[18rem] text-sm leading-7 text-muted">{link.note}</p>
              <span className="text-sm text-muted transition group-hover:text-foreground">
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

