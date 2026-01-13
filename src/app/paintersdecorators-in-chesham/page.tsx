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

export default function PaintersDecoratorsAmersham() {
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
            For painters & decorators working in Amersham
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Painters & Decorators in Amersham — Get more local work without
            subscriptions
          </h1>
          <p
            className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
            style={{ color: COLORS.muted }}
          >
            Looking for more decorating work in Amersham? Receive local customer
            requests through Chiltern Trades — no monthly fees, no bidding wars,
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
                  This page is for painters and decorators looking for work in
                  Amersham — not homeowners searching for services.
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
                Receive local decorating work without platform subscriptions
              </h2>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                If you're a painter or decorator working in Amersham and the
                surrounding Chiltern area, you'll know the challenges of lead
                generation platforms — paying monthly fees regardless of how busy
                you are, buying leads that don't convert, and competing on price
                before you've even had a conversation with the customer.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Chiltern Trades offers a different model. We're a network of
                verified trades covering the Chilterns — Amersham, Chesham,
                Beaconsfield, and the villages in between. When local customers
                need a painter or decorator, we send their request to you. No
                subscription, no bidding, and you only pay when you confirm a
                visit.
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
                The kinds of decorating requests you'll receive
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Amersham has a distinctive mix of properties — period buildings
                in the Old Town requiring careful colour matching, Edwardian and
                inter-war homes on the Hill, and modern developments. The
                decorating work reflects this range:
              </p>

              <ul
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1rem",
                }}
              >
                <li>Interior repaints — single rooms to full houses</li>
                <li>Exterior painting and weatherproofing</li>
                <li>Wallpapering and feature walls</li>
                <li>Period property restoration and heritage colours</li>
                <li>New build snagging and finishing</li>
                <li>Landlord and tenancy turnaround work</li>
              </ul>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Each request includes details about the job, room sizes, customer
                availability, and often photos. You see exactly what's involved
                before deciding whether to respond. For the full process, see
                our{" "}
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
                Most platforms charge you monthly, or per lead, whether or not
                you win the work. You're paying for enquiries from customers who
                ghost you, jobs that go to someone cheaper, or people who weren't
                serious in the first place. It can feel like you're working to
                feed the platform rather than build your business.
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
                Payments are processed through Stripe — a pre-authorisation is
                held when you accept a request, and only captured after you
                confirm the visit. Transparent and fair.
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
                Verification attracts better quality customers
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                Every painter and decorator on Chiltern Trades is verified before
                joining. We ask for proof of your trade — a Google Business
                profile, Instagram showing your finished work, a website, or
                reviews on platforms like Dulux Select Decorators or Checkatrade.
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
                to waste your time with vague enquiries or no-shows. It creates
                trust before you've even spoken. Read more on our{" "}
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
                Stay in control of your diary
              </h3>

              <p style={{ color: COLORS.muted, fontSize: "1.05rem", lineHeight: 1.8 }}>
                When you join, you set your base postcode and how far you're
                willing to travel. You'll only receive requests from customers
                within that area. There's no pressure to accept every job — you
                choose what fits your schedule, your speciality, and your
                capacity.
              </p>

              <p
                style={{
                  color: COLORS.muted,
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginTop: "1.5rem",
                }}
              >
                Whether you're looking to supplement your existing decorating
                work, fill gaps between larger projects, or find a steadier flow
                of local painting jobs in Amersham, Chiltern Trades puts you in
                control.
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
                Join Chiltern Trades as a local painter & decorator
              </h3>
              <p
                className="mx-auto mt-2 max-w-md text-sm"
                style={{ color: COLORS.muted }}
              >
                Looking for decorating work in Amersham without subscriptions or
                lead fees? Apply to join and start receiving local customer
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
              description="Choose jobs that suit your skills and schedule"
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
