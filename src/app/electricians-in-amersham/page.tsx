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

export default function ElectriciansAmersham() {
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
            For electricians working in Amersham
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Electricians in Amersham — Get more local work without subscriptions
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            Looking for more electrical work in Amersham? Receive local customer
            requests through Chiltern Trades — no monthly fees, no bidding, pay
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
                  This page is for electricians looking for work in Amersham — not
                  homeowners searching for services.
                </p>
              </div>

              <h2 style={{ color: COLORS.ink }}>
                Receive local electrical work without subscription fees
              </h2>

              <p style={{ color: COLORS.muted }}>
                Chiltern Trades is a verified trade network covering the
                Chilterns. When customers in Amersham and surrounding villages
                need an electrician, you receive the request and choose whether
                to accept it.
              </p>

              <p style={{ color: COLORS.muted }}>
                For details on the process, see our{" "}
                <Link
                  href="/how-it-works"
                  className="font-semibold underline"
                  style={{ color: COLORS.accent }}
                >
                  How it works
                </Link>{" "}
                page.
              </p>

              <p style={{ color: COLORS.muted }}>
                Learn more about our values on the{" "}
                <Link
                  href="/who-we-are"
                  className="font-semibold underline"
                  style={{ color: COLORS.accent }}
                >
                  Who we are
                </Link>{" "}
                page.
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
                Join Chiltern Trades as a local electrician
              </h3>
              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: COLORS.muted }}
              >
                Apply to join the network and start receiving local electrical
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
              description="Serious customers, fewer time-wasters"
            />
            <InfoCard
              icon={<PoundSterling className="h-5 w-5" />}
              title="No subscriptions"
              description="Pay only when you confirm a visit"
            />
            <InfoCard
              icon={<Users className="h-5 w-5" />}
              title="You're in control"
              description="Choose jobs that work for you"
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
            © {new Date().getFullYear()} Chiltern Trades. All rights reserved.
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
        style={{
          backgroundColor: "rgba(196,123,58,0.1)",
          color: COLORS.accent,
        }}
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
