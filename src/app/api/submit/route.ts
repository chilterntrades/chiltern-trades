// src/app/api/submit/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function s(v: FormDataEntryValue | null) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(req: Request) {
  const form = await req.formData();

  // ✅ Map to YOUR ACTUAL FORM FIELD NAMES from Index.tsx
  const payload = {
    source: "chilterntrades-web",
    createdAt: new Date().toISOString(),

    fullName: s(form.get("fullName")),
    businessName: s(form.get("businessName")),
    phone: s(form.get("phone")),
    email: s(form.get("email")),

    trade: s(form.get("trade")),
    tradeOther: s(form.get("tradeOther")),
    businessType: s(form.get("businessType")),
    postcode: s(form.get("postcode")),
    radiusMiles: s(form.get("radiusMiles")),
    yearsExperience: s(form.get("yearsExperience")),
    preferredContact: s(form.get("preferredContact")),

    facebook: s(form.get("facebook")),
    instagram: s(form.get("instagram")),
    googleBusiness: s(form.get("googleBusiness")),
    website: s(form.get("website")),
    platformProfiles: s(form.get("platformProfiles")),

    agree: s(form.get("agree")) === "on" || s(form.get("agree")) === "true",
  };

  const webhookUrl = process.env.ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("[chiltern] Missing ZAPIER_WEBHOOK_URL env var");
    // Still redirect so UX isn't broken
    return NextResponse.redirect(new URL("/thanks", req.url), { status: 303 });
  }

  try {
    const r = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      console.error("[chiltern] Zapier webhook failed:", r.status, text);
    } else {
      console.log("[chiltern] Sent to Zapier OK");
    }
  } catch (err) {
    console.error("[chiltern] Zapier webhook error:", err);
  }

  return NextResponse.redirect(new URL("/thanks", req.url), { status: 303 });
}
