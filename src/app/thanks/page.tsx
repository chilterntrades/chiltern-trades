import { CheckCircle, ArrowLeft, Shield, Clock, Mail, MapPin } from "lucide-react";

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

export default function ThanksPage() {
  return (
    <main className="min-h-screen antialiased" style={{ backgroundColor: COLORS.bg, color: COLORS.ink }}>
      {/* Header */}
      <header className="relative border-b" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between gap-6">
            {/* Premium integrated brand lockup (matches homepage) */}
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
                    background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,243,239,1) 100%)",
                    border: `1px solid ${COLORS.border2}`,
                    boxShadow: "0 12px 26px rgba(11,18,32,0.10)",
                  }}
                >
                  <img src="/logo.png" alt="Chiltern Trades" className="h-14 w-14 object-contain" />
                </div>

                <div className="pr-1">
                  <h1 className="text-xl font-black tracking-tight leading-none">Chiltern Trades</h1>
                  <p className="mt-1 text-sm font-semibold" style={{ color: COLORS.accent }}>
                    Premium Trade Network
                  </p>
                </div>
              </div>
            </div>

            {/* Optional right-side helper link (subtle) */}
            <a
              href="/"
              className="hidden md:inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition"
              style={{
                background: COLORS.paper,
                border: `1px solid ${COLORS.border}`,
                color: COLORS.ink,
                boxShadow: "0 8px 20px rgba(11,18,32,0.06)",
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Success Card */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 text-center shadow-xl"
          style={{
            backgroundColor: COLORS.paper,
            border: `1px solid ${COLORS.border}`,
          }}
        >
          {/* Accent top bar */}
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#C47B3A] via-[#D08A4F] to-[#C47B3A]" />

          <div className="relative">
            {/* Success icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#C47B3A] to-[#D08A4F] shadow-lg shadow-[#C47B3A]/20">
              <CheckCircle className="h-10 w-10 text-white" strokeWidth={2.5} />
            </div>

            <h2 className="text-3xl font-bold md:text-4xl" style={{ color: COLORS.ink }}>
              Application Received!
            </h2>

            <p className="mx-auto mt-4 max-w-md text-lg" style={{ color: COLORS.muted }}>
              Thanks for applying to join Chiltern Trades. We&apos;re reviewing your details now.
            </p>

            {/* What happens next */}
            <div className="mt-10 grid gap-4 text-left md:grid-cols-2">
              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: COLORS.bg, border: `1px solid ${COLORS.border}` }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${COLORS.accent}15` }}
                >
                  <Clock className="h-5 w-5" style={{ color: COLORS.accent }} />
                </div>
                <h3 className="font-semibold" style={{ color: COLORS.ink }}>
                  Quick Review
                </h3>
                <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                  We&apos;ll verify your credentials within 24–48 hours
                </p>
              </div>

              <div
                className="rounded-2xl p-5"
                style={{ backgroundColor: COLORS.bg, border: `1px solid ${COLORS.border}` }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${COLORS.accent}15` }}
                >
                  <Mail className="h-5 w-5" style={{ color: COLORS.accent }} />
                </div>
                <h3 className="font-semibold" style={{ color: COLORS.ink }}>
                  Verification Email
                </h3>
                <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                  You&apos;ll receive an email once you&apos;re verified
                </p>
              </div>

              <div
                className="rounded-2xl p-5 md:col-span-2"
                style={{ backgroundColor: COLORS.bg, border: `1px solid ${COLORS.border}` }}
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${COLORS.accent}15` }}
                >
                  <MapPin className="h-5 w-5" style={{ color: COLORS.accent }} />
                </div>
                <h3 className="font-semibold" style={{ color: COLORS.ink }}>
                  Launch Notification
                </h3>
                <p className="mt-1 text-sm" style={{ color: COLORS.muted }}>
                  We&apos;re expanding soon — you&apos;ll get an email when we launch in your area so you can start receiving
                  leads.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="/"
              className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#C47B3A] to-[#D08A4F] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#C47B3A]/20 transition-all hover:shadow-xl hover:shadow-[#C47B3A]/30"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </a>
          </div>
        </div>

        {/* Trust footer */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: COLORS.muted }}>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" style={{ color: COLORS.accent }} />
            <span>Verified tradespeople only</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" style={{ color: COLORS.accent }} />
            <span>Check your inbox for updates</span>
          </div>
        </div>
      </div>
    </main>
  );
}
