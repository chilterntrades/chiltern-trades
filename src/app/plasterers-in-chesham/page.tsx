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

export default function PlasterersChesham() {
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
            For plasterers working in Chesham
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Plasterers in Chesham — Get more local work without subscriptions
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            Looking for more plastering work in Chesham? Receive local customer
            requests through Chiltern Trades — no monthly fees, no lead charges,
            pay only when you confirm a visit.
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
                  This page is for plasterers looking for work in Chesham — not
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
                Receive local plastering jobs without subscription costs
              </h2>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                If you're a plasterer based in or around Chesham, you know how
                valuable good local work is — and how frustrating it can be when
                lead platforms eat into your earnings with monthly fees or
                charges for enquiries that never materialise into jobs.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades is a verified network of tradespeople covering
                the Chilterns. When customers in Chesham, Amersham, Berkhamsted,
                or the surrounding villages need a plasterer, we send their
                request directly to you. There's no subscription, no bidding,
                and you only pay when work actually happens.
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
                The kinds of plastering requests you'll receive
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Chesham has a varied housing stock — Victorian terraces with old
                lath and plaster, 1930s semis, post-war council builds, and
                modern developments. The plastering work reflects this variety,
                and the requests we see include:
              </p>

              <ul
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                }}
              >
                <li>Skim coats over existing plaster or plasterboard</li>
                <li>Ceiling repairs and Artex removal</li>
                <li>
                  Boarding and plastering in extensions and loft conversions
                </li>
                <li>Patch repairs after electrical or plumbing work</li>
                <li>Full room re-plasters in renovation projects</li>
                <li>Rendering and external plastering on older properties</li>
              </ul>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Each request includes details about the job, the property,
                customer availability, and often photos. You see what's involved
                before deciding whether it's worth your time. For a complete
                overview, visit our{" "}
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
                An alternative to Checkatrade and MyBuilder for plasterers
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Traditional lead platforms charge you monthly, or per lead,
                regardless of whether you get the job. You end up paying for
                leads that go to competitors, for customers who don't respond,
                or for jobs that were never serious in the first place. It's a
                model that benefits the platform, not the tradesperson.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades works differently. There's no joining fee, no
                monthly subscription. You only pay a small fee when you confirm
                you've actually visited the customer. If a job falls through —
                for any reason — you pay nothing.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Payments are handled through Stripe. When you accept a job, a
                pre-authorisation is held. That amount is only captured after
                you confirm the visit happened. It's designed to be fair to the
                people doing the actual work.
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
                Verification means better quality enquiries
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Every plasterer on Chiltern Trades is verified before they can
                receive requests. We ask for evidence of your trade — a Google
                Business profile, photos of your work on social media, a
                website, or reviews on established platforms.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                This benefits you directly. Customers contacting trades through a
                verified network tend to be more serious and better prepared.
                You'll spend less time on time-wasters and more time on genuine
                work. Read more about our approach on the{" "}
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
                Control your workload and service area
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                When you join, you set your base postcode and service radius.
                You'll only receive requests from customers within that area —
                no wasted time on jobs that are too far away. There's no
                algorithm penalising you for declining work, and no obligation to
                respond to every request.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Whether you're looking to supplement your existing plastering
                work, fill quiet periods, or find a steadier source of local
                jobs in Chesham, Chiltern Trades gives you control over how you
                receive work.
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
                Join Chiltern Trades as a local plasterer
              </h3>
              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: COLORS.muted }}
              >
                Looking for plastering work in Chesham without paying for leads
                that go nowhere? Apply to join and start receiving local customer
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
              description="Serious enquiries from genuine customers"
            />
            <InfoCard
              icon={<PoundSterling className="h-5 w-5" />}
              title="No subscriptions"
              description="Pay only when you confirm a customer visit"
            />
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="You're in control"
              description="Choose your jobs and set your own service area"
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
