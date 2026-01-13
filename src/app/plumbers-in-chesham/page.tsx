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

export default function PlumbersChesham() {
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
            For plumbers working in Chesham
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Plumbers in Chesham — Get more local work without subscriptions
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            Looking for more plumbing work in Chesham? Chiltern Trades connects
            you with local customer requests — no monthly fees, no bidding, pay
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
                  This page is for plumbers looking for work in Chesham — not
                  homeowners searching for services.
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
                A different way to receive local plumbing work
              </h2>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                If you're a plumber already working in Chesham or the surrounding
                Chiltern area, you know how the lead platforms work: monthly
                subscriptions, paying for enquiries that go nowhere, racing to
                quote before someone else does. Chiltern Trades offers an
                alternative.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                We're a network of verified trades covering the Chilterns —
                Chesham, Amersham, Great Missenden, and the surrounding villages.
                When customers in your area need a plumber, we send their request
                directly to you. You decide whether to respond. No bidding wars,
                no subscription fees, no pressure.
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
                The kinds of requests you'll receive
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Chesham has a mix of property types — Victorian terraces near the
                town centre, 1930s semis, post-war estates, rural cottages, and
                newer builds around Hivings Hill. The plumbing requests we see
                reflect this variety:
              </p>

              <ul
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                }}
              >
                <li>Boiler repairs and servicing in older properties</li>
                <li>Bathroom installations and refurbishments</li>
                <li>Leaking taps, radiator issues, and general repairs</li>
                <li>Blocked drains and pipework problems</li>
                <li>Central heating work and cylinder replacements</li>
                <li>Emergency callouts for burst pipes or leaks</li>
              </ul>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Each request includes the customer's location, when they're
                available, and often photos of the issue. You see exactly what's
                involved before deciding whether to take it on. For a complete
                walkthrough, see our{" "}
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
                An alternative to Checkatrade, MyBuilder, and subscription
                platforms
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Most lead platforms charge you monthly, or per lead, regardless
                of whether the work materialises. You end up paying for enquiries
                that don't convert, competing on price, and feeling like the
                system is designed to extract money rather than help you grow.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades works differently. There's no subscription, no
                joining fee, and no charge for receiving requests. You only pay
                a small fee when you confirm you've actually visited the
                customer. If a job doesn't go ahead, you pay nothing.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Payments are handled securely through Stripe. When you accept a
                job, we hold a pre-authorisation. That amount is only captured
                once you confirm the visit happened. It's designed to be fair to
                the people doing the work.
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
                Why verification benefits you
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Every plumber on Chiltern Trades is verified before they can
                receive requests. We ask for proof of your trade — a Google
                Business listing, Instagram showing your work, a website, or a
                profile on an established platform.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                This might seem like extra effort, but it works in your favour.
                Being part of a verified network means customers trust the
                trades they're contacting, which leads to fewer time-wasters and
                more genuine enquiries. You can read more about our approach on
                the{" "}
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
                Control over your workload
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                You set your base postcode and service radius, so you'll only
                receive requests from customers you can realistically reach. You
                choose which jobs to accept — there's no algorithm penalising you
                for declining work, and no obligation to respond to every
                request.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Whether you're looking to fill gaps in your diary, supplement
                your existing work, or find a better alternative to subscription
                platforms, Chiltern Trades puts you in control.
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
                Join Chiltern Trades as a local plumber
              </h3>
              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: COLORS.muted }}
              >
                Looking for plumbing work in Chesham without the usual
                subscription fees? Apply to join the network and start receiving
                local customer requests.
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
              description="Fewer time-wasters, more genuine customer enquiries"
            />
            <InfoCard
              icon={<PoundSterling className="h-5 w-5" />}
              title="No subscriptions"
              description="Pay only when you confirm a customer visit"
            />
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="You're in control"
              description="Choose which jobs to accept, set your own radius"
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
