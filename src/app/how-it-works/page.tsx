import Link from "next/link";
import {
  BadgeCheck,
  ShieldCheck,
  Zap,
  CreditCard,
  CheckCircle2,
  Mail,
  ArrowRight,
} from "lucide-react";

const COLORS = {
  bg: "#F6F3EF",
  paper: "#FFFFFF",
  ink: "#0B1220",
  muted: "#42526E",
  border: "#E6DFD7",
  border2: "#D8CEC3",
  accent: "#C47B3A",
  accentHover: "#D08A4F",
};

const ASSETS = {
  pattern: "/assets/pattern-bg.jpg",
  logo: "/logo.png",
};

export default function HowItWorks() {
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
              className="hidden text-sm font-semibold sm:block"
              style={{ color: COLORS.accent }}
            >
              How it works
            </Link>
            <Link
              href="/who-we-are"
              className="hidden text-sm font-semibold transition-colors hover:opacity-70 sm:block"
              style={{ color: COLORS.ink }}
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
            How it works
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            From application to your first job — here's how Chiltern Trades
            connects you with real customers.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <div className="space-y-8">
            <StepCard
              number="1"
              icon={<BadgeCheck className="h-6 w-6" />}
              title="Apply (free)"
              description="Fill in the short application form with your trade, service area, and one form of verification (Google Business, Instagram, website, or a platform profile like Checkatrade)."
              details={[
                "Takes about 2 minutes",
                "No payment required to apply",
                "We just need to confirm you're a real, working tradesperson",
              ]}
            />

            <StepCard
              number="2"
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Get verified"
              description="Our team reviews your application and checks your verification link. Once approved, you'll receive a confirmation email with next steps."
              details={[
                "Most applications reviewed within 24–48 hours",
                "We may reach out if we need more info",
                "No charges at this stage",
              ]}
            />

            <StepCard
              number="3"
              icon={<Zap className="h-6 w-6" />}
              title="Receive customer requests"
              description="When a customer in your area needs your trade, you'll receive a request with their location, availability, photos, and job details. You choose which jobs to accept."
              details={[
                "Real requests from verified customers",
                "Full control — accept or decline any job",
                "No vague leads or auction-style bidding",
              ]}
            />

            <StepCard
              number="4"
              icon={<CreditCard className="h-6 w-6" />}
              title="Stripe pre-authorisation"
              description="When you accept a job, we use Stripe to pre-authorise a small fee. This is industry-standard, secure, and auditable. No money leaves your account yet."
              details={[
                "Pre-auth only — not a charge",
                "Held securely by Stripe",
                "Released if you don't confirm the visit",
              ]}
            />

            <StepCard
              number="5"
              icon={<CheckCircle2 className="h-6 w-6" />}
              title="Pay only when you confirm a visit"
              description="You only get charged when you confirm you've visited the customer. If the job falls through or you decline, you pay nothing."
              details={[
                "No subscriptions, no monthly fees",
                "Below market rates for confirmed visits",
                "Completely transparent pricing",
              ]}
              highlight
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
              Ready to get started?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-white/70">
              Join hundreds of verified trades already receiving real customer
              requests.
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

function StepCard({
  number,
  icon,
  title,
  description,
  details,
  highlight = false,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
      style={{
        backgroundColor: highlight ? "rgba(196,123,58,0.08)" : COLORS.paper,
        border: `2px solid ${highlight ? COLORS.accent : COLORS.border}`,
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl text-xl font-black"
          style={{
            background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 100%)`,
            color: "white",
          }}
        >
          {number}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span style={{ color: COLORS.accent }}>{icon}</span>
            <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
          </div>
          <p
            className="mt-2 text-sm sm:text-base"
            style={{ color: COLORS.muted }}
          >
            {description}
          </p>
          <ul className="mt-4 space-y-2">
            {details.map((detail, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm"
                style={{ color: COLORS.muted }}
              >
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  style={{ color: COLORS.accent }}
                />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
