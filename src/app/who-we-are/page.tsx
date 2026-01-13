import Link from "next/link";
import { Heart, Users, ShieldCheck, Scale, Mail, ArrowRight } from "lucide-react";

const COLORS = {
  bg: "#F6F3EF",
  paper: "#FFFFFF",
  ink: "#0B1220",
  muted: "#42526E",
  border: "#E6DFD7",
  accent: "#C47B3A",
  accentHover: "#D08A4F",
};

const ASSETS = {
  pattern: "/assets/pattern-bg.jpg",
  logo: "/logo.png",
};

export default function WhoWeAre() {
  return (
    <main
      className="min-h-screen antialiased"
      style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}
    >
      {/* HEADER */}
      <header className="border-b" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="Chiltern Trades"
              className="h-10 w-10 shrink-0 rounded-xl object-contain"
            />
            <div className="leading-tight">
              <div className="text-base font-black tracking-tight">
                Chiltern Trades
              </div>
              <div
                className="text-xs font-semibold"
                style={{ color: COLORS.accent }}
              >
                Premium Trade Network
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/how-it-works"
              className="hidden text-sm font-semibold transition-colors hover:opacity-70 sm:block"
              style={{ color: COLORS.ink }}
            >
              How it works
            </Link>
            <Link
              href="/who-we-are"
              className="hidden text-sm font-semibold sm:block"
              style={{ color: COLORS.accent }}
            >
              Who we are
            </Link>
            <Link
              href="/#apply"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 60%, #A86830 100%)`,
                color: "white",
              }}
            >
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url(${ASSETS.pattern})`,
            backgroundSize: "420px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Who we are
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            A small team building something fair for trades.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          {/* Main story */}
          <div
            className="rounded-3xl p-6 sm:p-10"
            style={{
              backgroundColor: COLORS.paper,
              border: `2px solid ${COLORS.border}`,
            }}
          >
            <div className="prose prose-lg max-w-none">
              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                }}
              >
                <strong style={{ color: COLORS.ink }}>Chiltern Trades</strong>{" "}
                started because we saw how the existing lead platforms treat
                tradespeople — high fees, vague leads, subscription traps, and a
                race to the bottom on pricing.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                We thought: what if there was a network that actually worked{" "}
                <em>for</em> the trade, not against them?
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                That's why we built Chiltern Trades. No subscriptions. No
                upfront fees. No bidding wars. You only pay when you confirm a
                visit — and even then, below market rates.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                We verify every tradesperson who joins, and every customer
                request comes with real details — location, availability,
                photos. You choose what to accept. You stay in control.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.125rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                We're based in the Chilterns (hence the name), but the network
                is growing across the UK. We're a small team, and we care about
                getting this right.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <ValueCard
              icon={<Scale className="h-6 w-6" />}
              title="Fairness"
              description="No hidden fees, no subscription traps. Pay only for what you use."
            />
            <ValueCard
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Transparency"
              description="Clear pricing, real customer details, and honest communication."
            />
            <ValueCard
              icon={<Users className="h-6 w-6" />}
              title="Control"
              description="You choose which jobs to accept. No pressure, no obligations."
            />
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="Respect"
              description="We treat tradespeople as partners, not leads to be sold."
            />
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-3xl p-8 text-center"
            style={{
              background: `linear-gradient(135deg, ${COLORS.ink} 0%, #1a2537 100%)`,
            }}
          >
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Join the network
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              If this sounds like the kind of platform you'd want to be part of,
              we'd love to have you.
            </p>
            <Link
              href="/#apply"
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 60%, #A86830 100%)`,
                color: "white",
              }}
            >
              Apply now — it's free
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="border-t py-8"
        style={{ borderColor: COLORS.border, color: COLORS.muted }}
      >
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
          <div className="text-sm">
            © {new Date().getFullYear()} Chiltern Trades. All rights reserved. ·
            Premium Trade Network
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 text-sm">
            <Mail className="h-4 w-4" style={{ color: COLORS.accent }} />
            <span>Questions?</span>
            <a
              href="mailto:onboarding@chilterntrades.co.uk"
              className="font-semibold underline underline-offset-4"
              style={{ color: COLORS.ink }}
            >
              onboarding@chilterntrades.co.uk
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl p-5 sm:p-6"
      style={{
        backgroundColor: COLORS.paper,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
        style={{
          backgroundColor: "rgba(196,123,58,0.1)",
          color: COLORS.accent,
        }}
      >
        {icon}
      </div>
      <h3 className="mt-3 text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
        {description}
      </p>
    </div>
  );
}
