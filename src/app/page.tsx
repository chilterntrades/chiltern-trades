// src/app/page.tsx
import {
  ShieldCheck,
  Zap,
  MapPin,
  PoundSterling,
  BadgeCheck,
  Link as LinkIcon,
  ArrowRight,
  CreditCard,
  Star,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const ASSETS = {
  hero: "/assets/hero-tradesperson.jpg",
  pattern: "/assets/pattern-bg.jpg",
  ukNetwork: "/assets/uk-network.png",
  logo: "/logo.png",
};

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

const inputClass =
  "w-full rounded-xl px-4 py-3.5 text-sm text-[#0B1220] placeholder:text-[#7A879A] ring-1 ring-[#D8CEC3] bg-white focus:outline-none focus:ring-2 focus:ring-[#C47B3A]/40 transition-all duration-200";

export default function Page() {
  return (
    <main
      className="min-h-screen antialiased"
      style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url(${ASSETS.pattern})`,
            backgroundSize: "400px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220]/5 via-transparent to-[#C47B3A]/10" />
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-[#C47B3A]/8 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-6">
          {/* Header */}
          <header className="flex items-center justify-between gap-6">
            {/* Brand lockup (cleaner + premium + integrated) */}
            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-4 rounded-2xl px-3 py-2"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 10px 30px rgba(11,18,32,0.08)",
                }}
              >
                <div
                  className="grid place-items-center rounded-2xl"
                  style={{
                    width: 72,
                    height: 72,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,243,239,1) 100%)",
                    border: `1px solid ${COLORS.border2}`,
                    boxShadow: "0 12px 26px rgba(11,18,32,0.10)",
                  }}
                >
                  <img
                    src={ASSETS.logo}
                    alt="Chiltern Trades"
                    className="h-14 w-14 object-contain"
                  />
                </div>

                <div className="pr-1">
                  <div className="text-xl font-black tracking-tight leading-none">
                    Chiltern Trades
                  </div>
                  <div
                    className="mt-1 text-sm font-semibold"
                    style={{ color: COLORS.accent }}
                  >
                    Premium Trade Network
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <GlowPill>✨ Sign up free</GlowPill>
              <GlowPill>🚫 No subscriptions</GlowPill>
              {/* Requested: make this white like the others */}
              <GlowPill>💰 Pay per visit only</GlowPill>
            </div>
          </header>

          {/* Hero content */}
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left */}
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span>Now onboarding — Early applicants get priority</span>
              </div>

              <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                The UK's{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #C47B3A 0%, #D08A4F 50%, #C47B3A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  #1
                </span>{" "}
                verified trades network
              </h1>

              <p
                className="mt-6 max-w-lg text-lg leading-relaxed md:text-xl"
                style={{ color: COLORS.muted }}
              >
                Get <strong>real customer requests</strong> with location,
                availability & photos. No vague leads. No subscriptions.{" "}
                <strong>Only pay when you confirm a visit.</strong>
              </p>

              {/* Stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                <StatBox
                  icon={<Users className="h-5 w-5" />}
                  value="2,400+"
                  label="Trades joined"
                />
                <StatBox
                  icon={<Star className="h-5 w-5" />}
                  value="98%"
                  label="Satisfaction"
                />
                <StatBox
                  icon={<TrendingUp className="h-5 w-5" />}
                  value="£0"
                  label="To join"
                />
              </div>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <TrustBadge icon={<ShieldCheck className="h-4 w-4" />}>
                  Verified trades only
                </TrustBadge>
                <TrustBadge icon={<CheckCircle2 className="h-4 w-4" />}>
                  Stripe protected
                </TrustBadge>
                <TrustBadge icon={<MapPin className="h-4 w-4" />}>
                  Nationwide UK
                </TrustBadge>
              </div>
            </div>

            {/* Right (hero image) */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#C47B3A]/20 to-[#0B1220]/10 blur-3xl" />
              <div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                style={{ border: `4px solid ${COLORS.paper}` }}
              >
                <img
                  src={ASSETS.hero}
                  alt="Professional tradesperson"
                  className="h-[500px] w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/60 via-transparent to-transparent" />

                <div
                  className="absolute bottom-6 left-6 right-6 rounded-2xl p-4 backdrop-blur-md"
                  style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F]">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Average earnings boost</div>
                      <div
                        className="text-2xl font-black"
                        style={{ color: COLORS.accent }}
                      >
                        +47% more jobs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left column */}
            <div className="lg:col-span-2">
              {/* How it works */}
              <div
                className="relative overflow-hidden rounded-3xl p-8"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ink} 0%, #1a2537 100%)`,
                  boxShadow: "0 32px 64px -16px rgba(11,18,32,0.4)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url(${ASSETS.pattern})`,
                    backgroundSize: "300px",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F]">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-white">How it works</h2>
                  </div>

                  <div className="mt-8 space-y-6">
                    <StepDark
                      n="1"
                      icon={<BadgeCheck className="h-5 w-5" />}
                      title="Apply (free)"
                      body="Share your trade, area & one verification link."
                    />
                    <StepDark
                      n="2"
                      icon={<ShieldCheck className="h-5 w-5" />}
                      title="Get verified"
                      body="We review & send confirmation by email."
                    />
                    <StepDark
                      n="3"
                      icon={<Zap className="h-5 w-5" />}
                      title="Receive requests"
                      body="Accept jobs that fit. Stay in complete control."
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div
                className="mt-6 rounded-3xl p-8"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(196,123,58,0.12) 0%, rgba(255,255,255,0.95) 50%, rgba(11,18,32,0.04) 100%)",
                  border: `2px solid ${COLORS.border}`,
                  boxShadow: "0 24px 48px -12px rgba(196,123,58,0.15)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F] shadow-lg">
                    <PoundSterling className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: COLORS.muted }}
                    >
                      Pricing
                    </div>
                    <div className="text-2xl font-black">Transparent & Fair</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <PriceRow highlight>
                    <span
                      className="text-3xl font-black"
                      style={{ color: COLORS.accent }}
                    >
                      £0
                    </span>
                    <span className="ml-2">to join — forever free</span>
                  </PriceRow>

                  <PriceRow>
                    <strong>Pay only on confirmed visits</strong>
                    <span className="ml-1 text-sm" style={{ color: COLORS.muted }}>
                      (below market rates)
                    </span>
                  </PriceRow>

                  <div className="flex items-start gap-3 rounded-xl bg-white/60 p-4">
                    <CreditCard
                      className="mt-0.5 h-5 w-5 flex-shrink-0"
                      style={{ color: COLORS.accent }}
                    />
                    <span className="text-sm" style={{ color: COLORS.muted }}>
                      <strong>Stripe pre-authorisation</strong> — clean, secure,
                      auditable payments.
                    </span>
                  </div>
                </div>
              </div>

              {/* UK Map */}
              <div
                className="mt-6 rounded-3xl p-6 text-center"
                style={{
                  backgroundColor: COLORS.paper,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <img
                  src={ASSETS.ukNetwork}
                  alt="UK Network Coverage"
                  className="mx-auto h-48 w-auto"
                />
                <div className="mt-4 text-lg font-bold">Nationwide Coverage</div>
                <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                  Join trades across all regions of the UK
                </p>
              </div>
            </div>

            {/* Right column - form */}
            <div className="lg:col-span-3">
              <div
                className="relative overflow-hidden rounded-[2rem]"
                style={{
                  backgroundColor: COLORS.paper,
                  boxShadow:
                    "0 40px 80px -20px rgba(11,18,32,0.18), 0 0 0 1px rgba(255,255,255,0.8) inset",
                }}
              >
                <div className="h-2 bg-gradient-to-r from-[#C47B3A] via-[#D08A4F] to-[#C47B3A]" />

                <div className="p-8 md:p-10">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                      <span className="h-2 w-2 rounded-full bg-green-500" />
                      Limited spots available
                    </div>
                    <h2 className="mt-3 text-3xl font-black tracking-tight">
                      Apply to join
                    </h2>
                    <p className="mt-2 text-base" style={{ color: COLORS.muted }}>
                      Takes ~2 minutes. We'll verify and email confirmation.
                    </p>
                  </div>

                  <form className="mt-8 grid gap-5" method="post" action="/api/submit">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Full name" />
                        <input name="fullName" required placeholder="Your name" className={inputClass} />
                      </div>
                      <div>
                        <FieldLabel label="Business name (optional)" />
                        <input name="businessName" placeholder="e.g. Smith Plumbing" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Phone number" />
                        <input name="phone" required placeholder="07…" className={inputClass} inputMode="tel" />
                      </div>
                      <div>
                        <FieldLabel label="Email address" />
                        <input name="email" required placeholder="you@domain.com" className={inputClass} inputMode="email" />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Trade type" />
                        <select name="trade" required className={inputClass} defaultValue="">
                          <option value="" disabled>Select your trade…</option>
                          <option value="plumber">Plumber</option>
                          <option value="electrician">Electrician</option>
                          <option value="handyman">Handyman</option>
                          <option value="heating_engineer">Heating engineer</option>
                          <option value="drainage">Drainage</option>
                          <option value="locksmith">Locksmith</option>
                          <option value="carpenter">Carpenter</option>
                          <option value="builder">Builder</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <FieldLabel label="Business type" />
                        <select name="businessType" required className={inputClass} defaultValue="">
                          <option value="" disabled>Select one…</option>
                          <option value="sole_trader">Sole Trader</option>
                          <option value="limited_company">Limited Company</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <FieldLabel label="If 'Other', what trade?" />
                      <input name="tradeOther" placeholder="Optional" className={inputClass} />
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Base postcode" />
                        <input name="postcode" required placeholder="e.g. HP5" className={inputClass} />
                      </div>
                      <div>
                        <FieldLabel label="Service radius" />
                        <select name="radiusMiles" required className={inputClass} defaultValue="">
                          <option value="" disabled>Select radius…</option>
                          <option value="5">5 miles</option>
                          <option value="10">10 miles</option>
                          <option value="15">15 miles</option>
                          <option value="20">20 miles</option>
                          <option value="25">25 miles</option>
                          <option value="30">30 miles</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Years of experience" />
                        <select name="yearsExperience" required className={inputClass} defaultValue="">
                          <option value="" disabled>Select range…</option>
                          <option value="0-1">0–1</option>
                          <option value="1-3">1–3</option>
                          <option value="3-5">3–5</option>
                          <option value="5-10">5–10</option>
                          <option value="10+">10+</option>
                        </select>
                      </div>
                      <div>
                        <FieldLabel label="Preferred contact method" />
                        <select name="preferredContact" required className={inputClass} defaultValue="">
                          <option value="" disabled>Select…</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="email">Email</option>
                        </select>
                      </div>
                    </div>

                    {/* Verification links */}
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: COLORS.bg, border: `2px solid ${COLORS.border}` }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <LinkIcon className="h-5 w-5" style={{ color: COLORS.accent }} />
                            <h3 className="text-base font-bold">Verification links</h3>
                          </div>
                          <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                            At least <strong>one link</strong> required for fast verification
                          </p>
                        </div>
                        <span
                          className="rounded-lg px-3 py-1.5 text-xs font-bold"
                          style={{ backgroundColor: COLORS.accent, color: "white" }}
                        >
                          Required
                        </span>
                      </div>

                      <div className="mt-5 grid gap-3">
                        <input name="facebook" placeholder="Facebook page URL" className={inputClass} />
                        <input name="instagram" placeholder="Instagram profile URL" className={inputClass} />
                        <input name="googleBusiness" placeholder="Google Business Profile URL" className={inputClass} />
                        <input name="website" placeholder="Website URL" className={inputClass} />
                        <input name="platformProfiles" placeholder="Checkatrade / MyBuilder / etc URL" className={inputClass} />
                      </div>

                      <p className="mt-4 flex items-center gap-2 text-xs" style={{ color: COLORS.muted }}>
                        <Star className="h-4 w-4" style={{ color: COLORS.accent }} />
                        Pro tip: Google Business Profile = fastest verification
                      </p>
                    </div>

                    {/* Agreement */}
                    <div
                      className="rounded-2xl p-5"
                      style={{ backgroundColor: COLORS.bg, border: `1px solid ${COLORS.border}` }}
                    >
                      <div className="flex items-start gap-3">
                        <input
                          id="agree"
                          name="agree"
                          type="checkbox"
                          required
                          className="mt-1 h-5 w-5 rounded accent-[#C47B3A]"
                        />
                        <label htmlFor="agree" className="text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                          I consent to onboarding updates and understand sign-up is <strong>free</strong>, and I only pay when I confirm a visit.
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group relative mt-2 w-full overflow-hidden rounded-2xl px-8 py-5 text-lg font-black tracking-wide transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, #D08A4F 0%, #C47B3A 50%, #A86830 100%)",
                        color: "#FFFFFF",
                        boxShadow:
                          "0 20px 50px -10px rgba(196,123,58,0.5), 0 8px 20px rgba(196,123,58,0.3), inset 0 2px 0 rgba(255,255,255,0.2)",
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Submit Application
                        <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </button>

                    <p className="text-center text-sm" style={{ color: COLORS.muted }}>
                      🔒 Your data is secure. We never sell your details.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t py-8 text-center text-sm"
        style={{ borderColor: COLORS.border, color: COLORS.muted }}
      >
        © {new Date().getFullYear()} Chiltern Trades. All rights reserved. · Premium Trade Network
      </footer>
    </main>
  );
}

/* Components */

function GlowPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
      style={{
        background: COLORS.paper,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.ink,
      }}
    >
      {children}
    </span>
  );
}

function StatBox({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div
      className="rounded-2xl p-4 text-center"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
        border: `1px solid ${COLORS.border}`,
        boxShadow: "0 8px 24px -8px rgba(11,18,32,0.08)",
      }}
    >
      <div
        className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl"
        style={{
          backgroundColor: "rgba(196,123,58,0.10)",
          color: COLORS.accent,
        }}
      >
        {icon}
      </div>
      <div className="text-2xl font-black" style={{ color: COLORS.ink }}>
        {value}
      </div>
      <div className="text-xs font-medium" style={{ color: COLORS.muted }}>
        {label}
      </div>
    </div>
  );
}

function TrustBadge({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
      style={{ backgroundColor: "rgba(196,123,58,0.08)", color: COLORS.accent }}
    >
      {icon}
      {children}
    </div>
  );
}

function StepDark({
  n,
  icon,
  title,
  body,
}: {
  n: string;
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-white/10 text-lg font-black text-white">
        {n}
      </div>
      <div>
        <div className="flex items-center gap-2 text-white">
          <span style={{ color: COLORS.accent }}>{icon}</span>
          <span className="font-bold">{title}</span>
        </div>
        <p className="mt-1 text-sm text-white/70">{body}</p>
      </div>
    </div>
  );
}

function PriceRow({
  children,
  highlight = false,
}: {
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div className={`flex items-center ${highlight ? "text-lg" : "text-sm"}`}>
      <CheckCircle2
        className="mr-2 h-5 w-5 flex-shrink-0"
        style={{ color: COLORS.accent }}
      />
      {children}
    </div>
  );
}

function FieldLabel({ label }: { label: string }) {
  return (
    <label className="mb-2 block text-sm font-bold" style={{ color: COLORS.ink }}>
      {label}
    </label>
  );
}
