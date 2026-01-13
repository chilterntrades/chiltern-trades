import Link from "next/link";
import {
  Mail,
  ArrowRight,
  MapPin,
  ShieldCheck,
  PoundSterling,
  Users,
  Wrench,
} from "lucide-react";

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

export default function HandymanGreatMissenden() {
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
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: "rgba(196,123,58,0.1)",
              color: COLORS.accent,
            }}
          >
            <MapPin className="h-4 w-4" />
            For handymen working in Great Missenden
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Handyman in Great Missenden — Get more local work without
            subscriptions
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            Looking for more handyman work in Great Missenden? Chiltern Trades
            sends you local customer requests — no monthly fees, no bidding, pay
            only when you confirm a visit.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <article
            className="rounded-3xl p-6 sm:p-10"
            style={{
              backgroundColor: COLORS.paper,
              border: `2px solid ${COLORS.border}`,
            }}
          >
            <div className="prose prose-lg max-w-none">
              <div
                className="mb-6 rounded-xl p-4"
                style={{
                  backgroundColor: "rgba(196,123,58,0.08)",
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <p className="m-0 text-sm font-semibold" style={{ color: COLORS.ink }}>
                  <Wrench
                    className="mr-2 inline h-4 w-4"
                    style={{ color: COLORS.accent }}
                  />
                  This page is for handymen looking for work in Great Missenden —
                  not homeowners searching for services.
                </p>
              </div>

              <h2
                style={{
                  color: COLORS.ink,
                  fontSize: "1.5rem",
                  fontWeight: 800,
                  marginBottom: "1rem",
                }}
              >
                Receive local handyman jobs without platform fees
              </h2>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                If you're a handyman working in Great Missenden and the
                surrounding villages, you probably rely on a mix of repeat
                customers, word of mouth, and the occasional lead from online
                platforms. The problem with most platforms is the cost —
                subscriptions that eat into your earnings, or paying for leads
                that don't go anywhere.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades offers a different approach. We're a network of
                verified trades covering the Chilterns — Great Missenden,
                Prestwood, Little Missenden, The Lee, and the surrounding area.
                When homeowners need a handyman, we send their request to you. No
                subscription, no bidding wars, and you only pay when you confirm
                a visit.
              </p>

              <h3
                style={{
                  color: COLORS.ink,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                The kinds of handyman requests you'll receive
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Great Missenden is a village with character — period cottages,
                family homes, and properties that often need someone reliable
                for the jobs that don't fit a specialist. The requests we see
                reflect the variety of handyman work in the area:
              </p>

              <ul
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                }}
              >
                <li>Furniture assembly and flat-pack builds</li>
                <li>Shelving, curtain rails, and picture hanging</li>
                <li>Door repairs, lock changes, and minor carpentry</li>
                <li>Garden maintenance, fence repairs, shed builds</li>
                <li>General repairs and property maintenance</li>
                <li>Odd jobs and "to-do list" clearances</li>
              </ul>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Each request includes the customer's location, what they need
                done, when they're available, and often photos. You see exactly
                what's involved before deciding whether to respond. For the full
                process, see our{" "}
                <Link
                  href="/how-it-works"
                  className="font-semibold underline"
                  style={{ color: COLORS.accent }}
                >
                  How it works
                </Link>{" "}
                page.
              </p>

              <h3
                style={{
                  color: COLORS.ink,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                A fairer alternative to lead-buying platforms
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Most platforms charge you whether or not the lead converts. You
                pay for enquiries from people who don't respond, jobs that go to
                someone else, or customers who weren't serious in the first place.
                Over time, it adds up — and it can feel like you're working to
                pay for leads rather than earning from actual jobs.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades uses a pay-per-confirmed-visit model. There's no
                subscription, no joining fee, and no charge for receiving
                requests. You only pay a small fee when you confirm you've
                actually been to see the customer. If the job doesn't happen,
                you pay nothing.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Payments are handled through Stripe — secure and straightforward.
                A pre-authorisation is held when you accept a request, and it's
                only captured once you confirm the visit.
              </p>

              <h3
                style={{
                  color: COLORS.ink,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                Being verified helps you stand out
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Every handyman on Chiltern Trades is verified before they can
                receive requests. We ask for proof of your work — a Google
                Business profile, an Instagram showing completed jobs, a website,
                or reviews on platforms like MyBuilder or Bark.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                This works in your favour. Customers reaching out through a
                verified network are more likely to be genuine and less likely
                to waste your time with no-shows or vague enquiries. It builds
                trust before you've even made contact. Read more on our{" "}
                <Link
                  href="/who-we-are"
                  className="font-semibold underline"
                  style={{ color: COLORS.accent }}
                >
                  Who we are
                </Link>{" "}
                page.
              </p>

              <h3
                style={{
                  color: COLORS.ink,
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginTop: "2rem",
                  marginBottom: "0.75rem",
                }}
              >
                Work on your own terms
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                When you join, you set your base postcode and how far you're
                willing to travel. You'll only receive requests from customers
                within that radius. There's no pressure to accept every job —
                you choose what suits your schedule and skills.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Whether you're looking to supplement your existing work, fill
                gaps in your diary, or find a steadier flow of local handyman
                jobs in Great Missenden, Chiltern Trades puts you in control.
              </p>
            </div>

            {/* CTA */}
            <div
              className="mt-10 rounded-2xl p-6 text-center"
              style={{
                backgroundColor: COLORS.bg,
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <h3 className="text-xl font-bold" style={{ color: COLORS.ink }}>
                Join Chiltern Trades as a local handyman
              </h3>
              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: COLORS.muted }}
              >
                Looking for handyman work in Great Missenden without subscriptions
                or lead fees? Apply to join and start receiving local customer
                requests.
              </p>
              <Link
                href="/#apply"
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-bold"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 60%, #A86830 100%)`,
                  color: "white",
                }}
              >
                Apply to join the network
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </article>

          {/* Info cards */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <InfoCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Verified network"
              description="Genuine customers, fewer time-wasters"
            />
            <InfoCard
              icon={<PoundSterling className="h-5 w-5" />}
              title="No subscriptions"
              description="Pay only when you confirm a customer visit"
            />
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="You're in control"
              description="Choose which jobs suit you, set your own area"
            />
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

function InfoCard({
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
      className="rounded-2xl p-5"
      style={{
        backgroundColor: COLORS.paper,
        border: `1px solid ${COLORS.border}`,
      }}
    >
      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ backgroundColor: "rgba(196,123,58,0.1)", color: COLORS.accent }}
      >
        {icon}
      </div>
      <h4 className="mt-3 font-bold" style={{ color: COLORS.ink }}>
        {title}
      </h4>
      <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
        {description}
      </p>
    </div>
  );
}
