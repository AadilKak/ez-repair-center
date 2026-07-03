import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/ez-repair-logo.png";
import heroTruck from "@/assets/hero-truck.jpg";
import {
  Wrench,
  Truck,
  Cog,
  Gauge,
  Zap,
  CircleDot,
  ShieldCheck,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  Snowflake,
  Flame,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const PHONE_DISPLAY = "717-856-2436";
const PHONE_HREF = "tel:+17178562436";
const AFTER_HOURS_DISPLAY = "717-460-4434";
const AFTER_HOURS_HREF = "tel:+17174604434";

const services = [
  { icon: Truck, title: "Heavy & Light Duty Trucks", desc: "Full repairs for semis, box trucks, pickups and work trucks — engine, drivetrain, brakes and more." },
  { icon: Cog, title: "Trailer Repair", desc: "Brakes, lights, suspension, axles, landing gear and DOT-ready trailer service." },
  { icon: Flame, title: "Radiator", desc: "Radiator repair, replacement, coolant flushes and cooling system diagnostics for all truck types." },
  { icon: Zap, title: "Clutch & Transmission", desc: "Clutch replacement, transmission rebuilds, driveline repair and differential service." },
  { icon: CircleDot, title: "Brakes", desc: "Air brakes, hydraulic brakes, pads, rotors, drums, ABS and complete brake system overhauls." },
  { icon: Gauge, title: "Diagnostics", desc: "Advanced computer diagnostics and engine scanning to find the real problem fast." },
  { icon: ShieldCheck, title: "PM Service", desc: "Preventive maintenance, oil changes, fluids, filters and scheduled fleet service plans." },
  { icon: Snowflake, title: "A/C", desc: "A/C repair and recharge for cab comfort — compressors, refrigerant, hoses and climate control." },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "24/7", label: "Emergency Support" },
  { value: "100%", label: "ASE-Level Work" },
  { value: "All", label: "Makes & Models" },
];

const reasons = [
  "Straight talk — real diagnostics, no upsells",
  "Fair, upfront pricing before we start the job",
  "All makes and models of trucks and trailers",
  "Fast turnaround to keep you on the road",
  "Experienced techs with the right equipment",
  "Fleet accounts and repeat-customer discounts",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--surface-dark)]/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="EZ Repair Center LLC" className="h-14 w-auto" />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#why" className="transition hover:text-white">Why Us</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={AFTER_HOURS_HREF}
            className="hidden items-center gap-2 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 transition hover:bg-white/10 sm:inline-flex"
          >
            <Phone className="h-3.5 w-3.5" />
            After Hours
          </a>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-[color:var(--secondary-foreground)] shadow-[var(--shadow-card)] transition hover:brightness-110"
            style={{ background: "var(--gradient-accent)" }}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{PHONE_DISPLAY}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0">
        <img
          src={heroTruck}
          alt="Diesel truck being serviced at repair bay"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, oklch(0.16 0.03 250 / 0.6) 0%, oklch(0.16 0.03 250 / 0.9) 100%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full" style={{ background: "oklch(0.72 0.17 55)" }} />
            Fast · Honest · Affordable
          </div>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-7xl">
            Trucks & Trailers —{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, oklch(0.72 0.17 55), oklch(0.82 0.14 65))" }}
            >
              Repaired Right
            </span>{" "}
            the First Time.
          </h1>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur">
            <Wrench className="h-4 w-4 text-[oklch(0.82_0.14_65)]" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">All Makes & Models</span>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">
            From check-engine lights and computer diagnostics to full truck and trailer overhauls — EZ Repair Center gets your rig back on the road fast, without surprise bills.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur">
            <Clock className="h-4 w-4 text-[oklch(0.82_0.14_65)]" />
            <span className="text-sm font-bold uppercase tracking-wider text-white">Mon–Fri 8am – 5pm · Sat 8am – 12pm</span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Radiator", "Clutch & Transmission", "Brakes", "Diagnostics", "PM Service", "A/C"].map((s) => (
              <span
                key={s}
                className="inline-flex items-center rounded-md border border-white/15 bg-white/[0.07] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-white/90"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
              style={{ background: "var(--gradient-primary)" }}
            >
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={AFTER_HOURS_HREF}
              className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" /> After Hours {AFTER_HOURS_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-white/10" style={{ background: "var(--surface-dark)" }}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div
              className="text-3xl font-black tracking-tight sm:text-4xl"
              style={{
                background: "var(--gradient-accent)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {s.value}
            </div>
            <div className="mt-1 text-sm font-medium text-white/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-primary">What We Do</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            Full-Service Truck & Trailer Repair
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One shop for every rig. From commercial trucks and trailers to fleet maintenance — done fast, done right, done affordably.
          </p>
        </div>
        <div className="mt-12 rounded-xl border border-primary/20 p-4 sm:p-5" style={{ background: "var(--gradient-primary)" }}>
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-base font-bold text-white sm:text-lg">All Makes & Models</div>
                <div className="text-sm text-white/80">No matter the manufacturer — we service every truck & trailer.</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Freightliner", "Peterbilt", "Kenworth", "Volvo", "Mack", "International"].map((make) => (
                <span key={make} className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white">
                  {make}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elevated)]"
            >
              <div
                className="inline-flex h-12 w-12 items-center justify-center rounded-lg text-white transition group-hover:scale-110"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden py-24 sm:py-32" style={{ background: "var(--surface-dark)" }}>
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-primary)" }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="text-sm font-bold uppercase tracking-widest" style={{ color: "oklch(0.82 0.14 65)" }}>
            Why EZ Repair
          </div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Drivers and fleets trust us because we do it straight.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            You shouldn't need a mechanic to talk to a mechanic. We diagnose with real equipment, explain the fix in plain language, and give you an honest price before we touch a wrench.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-8 inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold text-white transition hover:brightness-110"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Phone className="h-5 w-5" /> Talk to a Tech
          </a>
        </div>
        <ul className="grid gap-4 self-center">
          {reasons.map((r) => (
            <li
              key={r}
              className="flex items-start gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0" style={{ color: "oklch(0.82 0.14 65)" }} />
              <span className="text-base font-medium text-white/90">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-2xl px-8 py-12 shadow-[var(--shadow-elevated)] sm:px-12 sm:py-16"
          style={{ background: "var(--gradient-primary)" }}
        >
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                Broke down or check-engine light on?
              </h2>
              <p className="mt-3 text-lg text-white/90">
                Don't wait it out — one call and we'll get you a real diagnosis and a fair price.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 rounded-md bg-white px-7 py-4 text-base font-bold text-primary shadow-lg transition hover:bg-white/95"
              >
                <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
              </a>
              <a
                href={AFTER_HOURS_HREF}
                className="inline-flex items-center gap-3 rounded-md border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-4 w-4" /> After Hours {AFTER_HOURS_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const items = [
    { icon: Phone, label: "Call Us", value: PHONE_DISPLAY, href: PHONE_HREF },
    { icon: Phone, label: "After Hours", value: AFTER_HOURS_DISPLAY, href: AFTER_HOURS_HREF },
    { icon: MapPin, label: "Shop Location", value: "1779 West Trindle Road, Carlisle, PA 17015", href: "https://maps.google.com/?q=1779+West+Trindle+Road,+Carlisle,+PA+17015" },
    { icon: Clock, label: "Hours", value: "Mon–Fri 8am – 5pm\nSat 8am – 12pm", href: undefined as string | undefined },
  ];
  return (
    <section id="contact" className="border-t border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-primary">Contact</div>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            Get a Quote or Roadside Help
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Call or stop by the shop. We answer real people, fast.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <>
                <div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-1 whitespace-pre-line text-base font-semibold text-card-foreground">{value}</div>
                </div>
              </>
            );
            const cls =
              "flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-primary/40";
            return href ? (
              <a key={label} href={href} className={cls}>
                {content}
              </a>
            ) : (
              <div key={label} className={cls}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10" style={{ background: "var(--surface-dark)" }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="EZ Repair Center LLC" className="h-10 w-auto" />
            <span className="text-sm text-white/60">
              © {new Date().getFullYear()} EZ Repair Center LLC. All rights reserved.
            </span>
          </div>
          <span className="text-sm text-white/50">1779 West Trindle Road, Carlisle, PA 17015</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/70">
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#why" className="transition hover:text-white">Why Us</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
