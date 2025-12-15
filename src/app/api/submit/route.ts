// src/app/api/submit/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData();

  const payload = {
    trade: String(form.get("trade") || ""),
    postcode: String(form.get("postcode") || ""),
    urgency: String(form.get("urgency") || ""),
    job: String(form.get("job") || ""),
    name: String(form.get("name") || ""),
    contact: String(form.get("contact") || ""),
    createdAt: new Date().toISOString(),
  };

  // For now: just confirm OK so we can test end-to-end.
  // Next step: forward this payload to Zapier webhook OR your existing endpoint.
  console.log("[chiltern] new request", payload);

  return NextResponse.redirect(new URL("/thanks", req.url), { status: 303 });
}
