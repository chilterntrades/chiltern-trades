"use client";

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
  Mail,
} from "lucide-react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

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
  hero: "/assets/hero-tradesperson.jpg",
  pattern: "/assets/pattern-bg.jpg",
  ukNetwork: "/assets/uk-network.png",
  logo: "/logo.png",
};

const inputClass =
  "w-full rounded-xl px-4 py-3.5 text-sm text-[#0B1220] placeholder:text-[#7A879A] ring-1 ring-[#D8CEC3] bg-white focus:outline-none focus:ring-2 focus:ring-[#C47B3A]/40 transition-all duration-200";

export default function Index() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // If you want to keep your existing /api/submit route, post to it here:
      const res = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submit failed");

      router.push("/thanks");
    } catch (err) {
      // Fallback: stop spinner and let user try again
      console.error(err);
      setIsSubmitting(false);
      alert("Something went wrong submitting your application. Please try again.");
    }
  };

  return (
    <main
      className="min-h-screen antialiased"
      style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url(${ASSETS.pattern})`,
            backgroundSize: "420px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-[#C47B3A]/10" />
        <div className="absolute -top-24 right-[-10%] h-[340px] w-[340px] rounded-full bg-[#C47B3A]/10 blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-[340px] w-[340px] rounded-full bg-[#0B1220]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-6 sm:px-6 sm:pb-14">
          <header className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Chiltern Trades"
                className="h-12 w-12 shrink-0 rounded-xl object-contain"
                style={{
                  boxShadow: "0 14px 30px -18px rgba(11,18,32,0.22)",
                }}
              />

              <div className="leading-tight">
                <div className="text-base font-black tracking-tight sm:text-lg">
                  Chiltern Trades
                </div>
                <div
                  className="text-xs font-semibold sm:text-sm"
                  style={{ color: COLORS.accent }}
                >
                  Premium Trade Network
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/how-it-works"
                className="text-sm font-semibold transition-colors hover:opacity-70"
                style={{ color: COLORS.ink }}
              >
                How it works
              </Link>
              <Link
                href="/who-we-are"
                className="text-sm font-semibold transition-colors hover:opacity-70"
                style={{ color: COLORS.ink }}
              >
                Who we are
              </Link>
              <a
                href="#apply"
                className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 60%, #A86830 100%)`,
                  color: "white",
                  boxShadow:
                    "0 14px 28px -14px rgba(196,123,58,0.7), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                Apply now
              </a>
            </nav>

            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold md:hidden"
              style={{
                background: `linear-gradient(135deg, ${COLORS.accentHover} 0%, ${COLORS.accent} 60%, #A86830 100%)`,
                color: "white",
                boxShadow:
                  "0 14px 28px -14px rgba(196,123,58,0.7), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              Apply
            </a>
          </header>

          {/* Mobile nav links */}
          <div className="mt-4 flex items-center gap-4 md:hidden">
            <Link
              href="/how-it-works"
              className="text-sm font-semibold"
              style={{ color: COLORS.muted }}
            >
              How it works
            </Link>
            <Link
              href="/who-we-are"
              className="text-sm font-semibold"
              style={{ color: COLORS.muted }}
            >
              Who we are
            </Link>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            <GlowPill>✨ Sign up free</GlowPill>
            <GlowPill>🚫 No subscriptions</GlowPill>
            <GlowPill>💰 Pay per visit only</GlowPill>
          </div>

          <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative z-10">
              <div
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.92) 0%, rgba(253,249,245,0.92) 100%)",
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 10px 26px -18px rgba(11,18,32,0.25)",
                }}
              >
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span>Now onboarding — Early applicants get priority</span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Apply to join{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background:
                      "linear-gradient(135deg, #C47B3A 0%, #D08A4F 55%, #C47B3A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  the UK's fastest-growing
                </span>{" "}
                verified trades network
              </h1>

              <p
                className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                style={{ color: COLORS.muted }}
              >
                Get <strong>real customer requests</strong> with location,
                availability & photos. No vague leads. No subscriptions.{" "}
                <strong>Only pay when you confirm a visit.</strong>
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                <StatBox icon={<Users className="h-5 w-5" />} value="500+" label="Trades joined" />
                <StatBox icon={<Star className="h-5 w-5" />} value="98%" label="Satisfaction" />
                <StatBox icon={<TrendingUp className="h-5 w-5" />} value="£0" label="To join" />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-3">
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

              <div className="mt-7 lg:hidden">
                <HeroCard />
              </div>
            </div>

            <div className="relative hidden lg:block">
              <HeroCard />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div id="apply" className="order-1 lg:order-2 lg:col-span-3">
              <div
                className="relative overflow-hidden rounded-[1.75rem]"
                style={{
                  backgroundColor: COLORS.paper,
                  boxShadow:
                    "0 40px 80px -24px rgba(11,18,32,0.16), 0 0 0 1px rgba(255,255,255,0.85) inset",
                }}
              >
                <div className="h-2 bg-gradient-to-r from-[#C47B3A] via-[#D08A4F] to-[#C47B3A]" />

                <div className="p-6 sm:p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-700">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Limited spots available
                      </div>
                      <h2 className="mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                        Apply to join
                      </h2>
                      <p className="mt-2 text-sm sm:text-base" style={{ color: COLORS.muted }}>
                        Takes ~2 minutes. We'll verify and email confirmation.
                      </p>
                    </div>
                  </div>

                  <form className="mt-7 grid gap-5" onSubmit={handleSubmit}>
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

                    <div>
                      <FieldLabel label="What type of work do you mainly do?" />
                      <p className="mb-2 text-sm" style={{ color: COLORS.muted }}>
                        Select the closest match — you can clarify later.
                      </p>
                      <select name="trade" required className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select your trade…
                        </option>
                        <option value="plumber">Plumber</option>
                        <option value="electrician">Electrician</option>
                        <option value="painter_decorator">Painter & Decorator</option>
                        <option value="plasterer">Plasterer</option>
                        <option value="handyman">Handyman</option>
                        <option value="locksmith">Locksmith</option>
                        <option value="mixed">Mixed / multiple trades</option>
                      </select>
                    </div>

                    <div>
                      <FieldLabel label="Business type" />
                      <select name="businessType" required className={inputClass} defaultValue="">
                        <option value="" disabled>
                          Select one…
                        </option>
                        <option value="sole_trader">Sole Trader</option>
                        <option value="limited_company">Limited Company</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <FieldLabel label="Base postcode" />
                        <input name="postcode" required placeholder="e.g. HP5" className={inputClass} />
                      </div>
                      <div>
                        <FieldLabel label="Service radius" />
                        <select name="radiusMiles" required className={inputClass} defaultValue="">
                          <option value="" disabled>
                            Select radius…
                          </option>
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
                          <option value="" disabled>
                            Select range…
                          </option>
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
                          <option value="" disabled>
                            Select…
                          </option>
                          <option value="email">Email</option>
                        </select>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl p-5 sm:p-6"
                      style={{
                        backgroundColor: COLORS.bg,
                        border: `2px solid ${COLORS.border}`,
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5" style={{ color: COLORS.accent }} />
                            <h3 className="text-base font-bold">Proof you're a real trade (one required)</h3>
                          </div>
                          <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                            Just enough for us to verify you — we'll follow up if needed.
                          </p>
                        </div>
                        <span
                          className="hidden rounded-lg px-3 py-1.5 text-xs font-bold sm:inline-block"
                          style={{
                            backgroundColor: COLORS.accent,
                            color: "white",
                          }}
                        >
                          Required
                        </span>
                      </div>

                      <div className="mt-4 grid gap-4">
                        <div>
                          <label className="mb-1.5 block text-sm font-semibold" style={{ color: COLORS.ink }}>
                            Business name, profile name, or link *
                          </label>
                          <input
                            name="verificationProof"
                            required
                            placeholder="e.g. Smith Plumbing, @smithplumbing, or a link"
                            className={inputClass}
                          />
                          <p className="mt-1.5 text-xs" style={{ color: COLORS.muted }}>
                            This helps us find you online. Can be a business name, social handle, or partial link.
                          </p>
                        </div>

                        <div className="border-t pt-4" style={{ borderColor: COLORS.border }}>
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}>
                            Optional — add more if you have them
                          </p>
                          <div className="grid gap-3">
                            <div>
                              <label className="mb-1 block text-xs font-medium" style={{ color: COLORS.muted }}>
                                Google Business name (optional)
                              </label>
                              <input
                                name="googleBusinessName"
                                placeholder="e.g. Smith Plumbing Chesham"
                                className={inputClass}
                              />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium" style={{ color: COLORS.muted }}>
                                Instagram handle (optional)
                              </label>
                              <input name="instagram" placeholder="e.g. @smithplumbing" className={inputClass} />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium" style={{ color: COLORS.muted }}>
                                Website (optional)
                              </label>
                              <input name="website" placeholder="e.g. https://smithplumbing.co.uk" className={inputClass} />
                            </div>
                            <div>
                              <label className="mb-1 block text-xs font-medium" style={{ color: COLORS.muted }}>
                                Platform profile (optional)
                              </label>
                              <input
                                name="platformProfile"
                                placeholder="e.g. Checkatrade, MyBuilder, Rated People"
                                className={inputClass}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-2xl p-5"
                      style={{
                        backgroundColor: COLORS.bg,
                        border: `1px solid ${COLORS.border}`,
                      }}
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
                          I consent to onboarding updates and understand sign-up is <strong>free</strong>, and I only pay
                          when I confirm a visit.
                        </label>
                      </div>
                    </div>

                    {/* What happens next */}
                    <div
                      className="rounded-2xl p-5"
                      style={{
                        backgroundColor: "rgba(196,123,58,0.06)",
                        border: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <h4 className="flex items-center gap-2 text-sm font-bold" style={{ color: COLORS.ink }}>
                        <Zap className="h-4 w-4" style={{ color: COLORS.accent }} />
                        What happens next
                      </h4>
                      <div className="mt-3 grid gap-2">
                        <WhatNextStep number="1" text="Apply — you're doing this now" />
                        <WhatNextStep number="2" text="We verify your details (usually 24–48hrs)" />
                        <WhatNextStep number="3" text="Stripe pre-auth when jobs appear in your area" />
                        <WhatNextStep number="4" text="Pay only when you confirm a visit" />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative mt-1 w-full overflow-hidden rounded-2xl px-7 py-5 text-base font-black tracking-wide sm:text-lg disabled:opacity-70"
                      style={{
                        background:
                          "linear-gradient(135deg, #D08A4F 0%, #C47B3A 55%, #A86830 100%)",
                        color: "#FFFFFF",
                        boxShadow:
                          "0 20px 50px -12px rgba(196,123,58,0.55), 0 8px 18px rgba(196,123,58,0.25), inset 0 2px 0 rgba(255,255,255,0.22)",
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isSubmitting ? "Submitting..." : "Submit Application"}
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

            <div className="order-2 lg:order-1 lg:col-span-2">
              <div
                className="relative overflow-hidden rounded-3xl p-7 sm:p-8"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ink} 0%, #1a2537 100%)`,
                  boxShadow: "0 32px 64px -16px rgba(11,18,32,0.38)",
                }}
              >
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F] grid place-items-center">
                      <Zap className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">How it works</h3>
                  </div>

                  <div className="mt-7 space-y-6">
                    <StepDark n="1" icon={<BadgeCheck className="h-5 w-5" />} title="Apply (free)" body="Share your trade, area & one verification link." />
                    <StepDark n="2" icon={<ShieldCheck className="h-5 w-5" />} title="Get verified" body="We review & send confirmation by email." />
                    <StepDark n="3" icon={<Zap className="h-5 w-5" />} title="Receive requests" body="Accept what fits. You stay in complete control." />
                  </div>
                </div>
              </div>

              <div
                className="mt-6 rounded-3xl p-7 sm:p-8"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(196,123,58,0.12) 0%, rgba(255,255,255,0.96) 50%, rgba(11,18,32,0.04) 100%)",
                  border: `2px solid ${COLORS.border}`,
                  boxShadow: "0 24px 48px -12px rgba(196,123,58,0.15)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F] grid place-items-center shadow-lg">
                    <PoundSterling className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide" style={{ color: COLORS.muted }}>
                      Pricing
                    </div>
                    <div className="text-2xl font-black">Transparent & Fair</div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <PriceRow highlight>
                    <span className="text-3xl font-black" style={{ color: COLORS.accent }}>
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
                    <CreditCard className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: COLORS.accent }} />
                    <span className="text-sm" style={{ color: COLORS.muted }}>
                      <strong>Stripe pre-authorisation</strong> — clean, secure, auditable payments.
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="mt-6 rounded-3xl p-6 text-center"
                style={{
                  backgroundColor: COLORS.paper,
                  border: `1px solid ${COLORS.border}`,
                }}
              >
                <div className="mx-auto max-w-[320px]">
                  <img src={ASSETS.ukNetwork} alt="UK Network Coverage" className="mx-auto h-44 w-auto sm:h-48" />
                </div>
                <div className="mt-4 text-lg font-bold">Nationwide coverage</div>
                <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                  Join trades across all regions of the UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8" style={{ borderColor: COLORS.border, color: COLORS.muted }}>
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6">
          <div className="text-sm">
            © {new Date().getFullYear()} Chiltern Trades. All rights reserved. · Premium Trade Network
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

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#C47B3A]/18 to-[#0B1220]/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{ border: `4px solid ${COLORS.paper}` }}>
        <img
          src={ASSETS.hero}
          alt="Professional tradesperson"
          className="h-[320px] w-full object-cover object-top sm:h-[420px] lg:h-[520px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/50 via-transparent to-transparent" />

        <div
          className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 backdrop-blur-md"
          style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
        >
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[#C47B3A] to-[#D08A4F] grid place-items-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-bold">Average earnings boost</div>
              <div className="text-2xl font-black" style={{ color: COLORS.accent }}>
                +47% more jobs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlowPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
      style={{
        background: COLORS.paper,
        border: `1px solid ${COLORS.border}`,
        color: COLORS.ink,
        boxShadow: "0 10px 22px -18px rgba(11,18,32,0.25)",
      }}
    >
      {children}
    </span>
  );
}

function StatBox({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div
      className="rounded-2xl p-3 text-center sm:p-4"
      style={{
        background: "linear-gradient(135deg, #FFFFFF 0%, #FDF9F5 100%)",
        border: `1px solid ${COLORS.border}`,
        boxShadow: "0 8px 24px -10px rgba(11,18,32,0.08)",
      }}
    >
      <div
        className="mx-auto mb-2 grid h-9 w-9 place-items-center rounded-xl sm:h-10 sm:w-10"
        style={{
          backgroundColor: "rgba(196,123,58,0.1)",
          color: COLORS.accent,
        }}
      >
        {icon}
      </div>
      <div className="text-xl font-black sm:text-2xl" style={{ color: COLORS.ink }}>
        {value}
      </div>
      <div className="text-[11px] font-medium sm:text-xs" style={{ color: COLORS.muted }}>
        {label}
      </div>
    </div>
  );
}

function TrustBadge({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
      style={{
        backgroundColor: "rgba(196,123,58,0.08)",
        color: COLORS.accent,
      }}
    >
      {icon}
      {children}
    </div>
  );
}

function StepDark({ n, icon, title, body }: { n: string; icon: React.ReactNode; title: string; body: string }) {
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

function PriceRow({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) {
  return (
    <div className={`flex items-center ${highlight ? "text-base sm:text-lg" : "text-sm"}`}>
      <CheckCircle2 className="mr-2 h-5 w-5 flex-shrink-0" style={{ color: COLORS.accent }} />
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

function WhatNextStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex items-center gap-3 text-sm" style={{ color: COLORS.muted }}>
      <span
        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
        style={{ backgroundColor: COLORS.accent, color: "white" }}
      >
        {number}
      </span>
      {text}
    </div>
  );
}
