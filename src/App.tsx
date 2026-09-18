import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  Gamepad2,
  Gift,
  LogIn,
  Menu,
  ShieldCheck,
  Smartphone,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Trophy,
    title: "Sports Betting",
    description:
      "Bet on football, basketball, tennis and many other sports.",
  },
  {
    icon: Zap,
    title: "Live Betting",
    description:
      "Follow matches live and place bets while the action is happening.",
  },
  {
    icon: Gamepad2,
    title: "Casino",
    description:
      "Explore casino games and other entertainment available on the platform.",
  },
  {
    icon: Gift,
    title: "Promotions",
    description:
      "Check available promotions and enter eligible promo codes.",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#070b09] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b09]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#16c784] font-black text-black">
              1X
            </div>

            <span className="text-xl font-black tracking-tight">
              1x<span className="text-[#16c784]">BET</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#sports" className="nav-link">
              Sports
            </a>
            <a href="#live" className="nav-link">
              Live
            </a>
            <a href="#casino" className="nav-link">
              Casino
            </a>
            <a href="#promotions" className="nav-link">
              Promotions
            </a>
            <a href="#login" className="nav-link">
              How to Login
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="#login" className="rounded-lg bg-[#16c784] px-5 py-2.5 text-sm font-bold text-black transition hover:bg-[#20e094]">
              Log In
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#070b09] px-5 py-5 md:hidden">
            <nav className="flex flex-col gap-5">
              <a onClick={closeMenu} href="#sports">
                Sports
              </a>
              <a onClick={closeMenu} href="#live">
                Live
              </a>
              <a onClick={closeMenu} href="#casino">
                Casino
              </a>
              <a onClick={closeMenu} href="#promotions">
                Promotions
              </a>
              <a onClick={closeMenu} href="#login">
                How to Login
              </a>

              <a
                onClick={closeMenu}
                href="#login"
                className="rounded-lg bg-[#16c784] px-5 py-3 text-center font-bold text-black"
              >
                Log In
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#16c784]/10 blur-3xl" />
          <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#16c784]/10 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#16c784]/20 bg-[#16c784]/10 px-3 py-1.5 text-xs font-semibold text-[#16c784]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16c784]" />
                1xBet Tanzania
              </div>

              <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl">
                Bet on the
                <span className="text-[#16c784]"> action.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Sports betting, live betting, casino and promotions — all in
                one place.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#16c784] px-6 py-3.5 font-bold text-black transition hover:bg-[#20e094]"
                >
                  Register
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#login"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold transition hover:bg-white/5"
                >
                  <LogIn size={18} />
                  Log In
                </a>
              </div>

              <p className="mt-5 text-xs text-white/35">
                18+ | Please gamble responsibly.
              </p>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-[#0d1310] p-4 shadow-2xl shadow-black/40">
                <div className="rounded-2xl border border-white/10 bg-[#101713] p-5">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/40">LIVE</p>
                      <p className="font-bold">Football</p>
                    </div>

                    <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
                      ● LIVE
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#0a0f0c] p-5">
                    <div className="flex items-center justify-between text-sm">
                      <span>Manchester</span>
                      <span className="font-bold">2</span>
                    </div>

                    <div className="my-4 h-px bg-white/10" />

                    <div className="flex items-center justify-between text-sm">
                      <span>United</span>
                      <span className="font-bold">1</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {["1", "X", "2"].map((item, index) => (
                      <div
                        key={item}
                        className={`rounded-lg border p-3 text-center ${
                          index === 0
                            ? "border-[#16c784]/40 bg-[#16c784]/10 text-[#16c784]"
                            : "border-white/10 bg-white/[0.02]"
                        }`}
                      >
                        <p className="text-xs text-white/40">Odds</p>
                        <p className="mt-1 font-bold">
                          {index === 0 ? "1.82" : index === 1 ? "3.40" : "4.10"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions */}
        <section
          id="promotions"
          className="border-y border-white/10 bg-[#0a0f0c]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-widest text-[#16c784]">
                Promotions
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Get more from your account
              </h2>

              <p className="mt-4 text-white/50">
                Check the current promotions before registering or making a
                deposit.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {/* Promo code */}
              <div className="rounded-2xl border border-[#16c784]/20 bg-[#16c784]/[0.05] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16c784]/10 text-[#16c784]">
                  <Gift size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">Promo Code</h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Enter the promotional code provided by the current official
                  offer when registering or claiming an eligible promotion.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-white/20 bg-black/20 p-4">
                  <span className="font-mono text-sm text-white/40">
                    PROMO CODE
                  </span>
                  <span className="ml-auto text-xs text-white/30">
                    Check current offer
                  </span>
                </div>
              </div>

              {/* Welcome */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5">
                  <Trophy size={22} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Welcome Promotions
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  New-user promotions may be available. Eligibility,
                  wagering requirements and other conditions apply.
                </p>

                <a
                  href="#login"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#16c784]"
                >
                  Learn how to register
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="sports">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#16c784]">
                Features
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Everything in one place
              </h2>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:-translate-y-1 hover:border-[#16c784]/30"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#16c784]/10 text-[#16c784]">
                      <Icon size={21} />
                    </div>

                    <h3 className="mt-5 font-bold">{feature.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/45">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Login instructions */}
        <section
          id="login"
          className="border-y border-white/10 bg-[#0a0f0c]"
        >
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-[#16c784]">
                  How to log in
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Access your account in three steps
                </h2>

                <p className="mt-4 leading-7 text-white/50">
                  Use the official 1xBet website or application and keep your
                  login credentials private.
                </p>

                <a
                  href="#home"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#16c784] px-6 py-3.5 font-bold text-black"
                >
                  Open 1xBet
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "Open the official platform",
                    text: "Visit the official website or open the official app.",
                  },
                  {
                    number: "02",
                    title: "Select Log In",
                    text: "Tap or click the Log In button to open the login form.",
                  },
                  {
                    number: "03",
                    title: "Enter your credentials",
                    text: "Enter your registered details and complete any required verification.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <div className="font-mono text-sm font-bold text-[#16c784]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="font-bold">{step.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/45">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Responsible gaming */}
        <section id="casino">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#16c784]/10 text-[#16c784]">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-bold">
                    Play responsibly
                  </h2>

                  <p className="mt-2 max-w-3xl text-sm leading-6 text-white/50">
                    Gambling involves financial risk. Set limits, only use
                    money you can afford to lose, and take breaks when needed.
                    This service is intended for adults aged 18 and above.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Help */}
        <section>
          <div className="mx-auto max-w-3xl px-5 py-16">
            <div className="mb-8 text-center">
              <CircleHelp className="mx-auto text-[#16c784]" size={28} />

              <h2 className="mt-3 text-3xl font-black">
                Need help?
              </h2>
            </div>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                How do I log in?
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </summary>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Open the official platform, select Log In and enter your
                registered credentials.
              </p>
            </details>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                Where can I find the current promo code?
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </summary>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Promotional codes and their conditions should be taken from
                the current official promotion.
              </p>
            </details>

            <details className="group border-b border-white/10 py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                Can I bet while an event is live?
                <ChevronDown className="transition group-open:rotate-180" size={18} />
              </summary>

              <p className="mt-4 text-sm leading-6 text-white/45">
                Live betting may be available for eligible sporting events.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050806]">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#16c784] text-xs font-black text-black">
                  1X
                </div>

                <span className="font-black">
                  1x<span className="text-[#16c784]">BET</span>
                </span>
              </div>

              <p className="mt-3 text-xs text-white/30">
                18+ | Gamble responsibly.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 text-xs text-white/40">
              <a href="#home" className="hover:text-white">
                Home
              </a>
              <a href="#promotions" className="hover:text-white">
                Promotions
              </a>
              <a href="#login" className="hover:text-white">
                How to Login
              </a>
              <a href="#casino" className="hover:text-white">
                Responsible Gaming
              </a>
              <a href="#" className="hover:text-white">
                Terms
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 text-xs text-white/20">
            © {new Date().getFullYear()} 1xBet Tanzania. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating mobile CTA */}
      <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
        <a
          href="#login"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#16c784] px-5 py-3.5 font-bold text-black shadow-xl shadow-black/50"
        >
          <Smartphone size={18} />
          Register / Log In
        </a>
      </div>
    </div>
  );
}

export default App;
