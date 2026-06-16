import { useState, useRef, useEffect } from "react";
import { cn } from "./utils/cn";

// ─── Icon Base ───
function Icon({ children, className, strokeWidth = 1.6 }: { children: React.ReactNode; className?: string; strokeWidth?: number }) {
  return (
    <svg
      className={cn("h-5 w-5", className)}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

// ─── Small UI icons ───
const ui = {
  arrowRight: <Icon><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Icon>,
  arrowLeft: <Icon><path d="m15 18-6-6 6-6" /></Icon>,
  calendar: <Icon><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></Icon>,
  pin: <Icon><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>,
  search: <Icon><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></Icon>,
  menu: <Icon><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></Icon>,
  close: <Icon><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>,
  shield: <Icon><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>,
  embed: <Icon><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></Icon>,
  qr: <Icon><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><path d="M14 14h3v3h-3z" /><path d="M20 14v3" /><path d="M14 20h3" /><path d="M20 20v.01" /></Icon>,
  chart: <Icon><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></Icon>,
  zap: <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>,
  tag: <Icon><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></Icon>,
};

// ─── Large illustrative category icons (tix.africa style, hand-drawn feel) ───
function BigIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      className={cn("h-16 w-16", className)}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

const catIcons = {
  music: (
    <BigIcon>
      <path d="M20 44V18l24-4v26" />
      <circle cx="16" cy="44" r="6" />
      <circle cx="40" cy="40" r="6" />
      <path d="M20 24l24-4" />
    </BigIcon>
  ),
  party: (
    <BigIcon>
      <path d="M14 30l-6 22 22-6" />
      <path d="M22 36c4 4 8 6 10 4s0-6-4-10-8-6-10-4 0 6 4 10z" />
      <path d="M40 16l-1 2-2 1 2 1 1 2 1-2 2-1-2-1z" />
      <path d="M52 28l-1 2-2 1 2 1 1 2 1-2 2-1-2-1z" />
      <path d="M48 44l-1 2-2 1 2 1 1 2 1-2 2-1-2-1z" />
      <circle cx="32" cy="14" r="1.5" fill="currentColor" />
      <circle cx="48" cy="22" r="1" fill="currentColor" />
    </BigIcon>
  ),
  business: (
    <BigIcon>
      <rect x="8" y="20" width="48" height="32" rx="3" />
      <path d="M22 20V14a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
      <path d="M8 32h48" />
      <circle cx="32" cy="32" r="2" />
    </BigIcon>
  ),
  comedy: (
    <BigIcon>
      <circle cx="32" cy="32" r="22" />
      <path d="M20 36c2 6 7 10 12 10s10-4 12-10" />
      <circle cx="24" cy="26" r="1.5" fill="currentColor" />
      <circle cx="40" cy="26" r="1.5" fill="currentColor" />
      <path d="M16 36c4 0 6 2 8 2M48 36c-4 0-6 2-8 2" />
    </BigIcon>
  ),
  sports: (
    <BigIcon>
      <circle cx="32" cy="32" r="22" />
      <path d="M32 10c-6 6-10 14-10 22s4 16 10 22M32 10c6 6 10 14 10 22s-4 16-10 22" />
      <path d="M10 32h44" />
      <circle cx="32" cy="32" r="4" />
    </BigIcon>
  ),
  art: (
    <BigIcon>
      <path d="M32 10C20 10 10 19 10 32c0 7 5 12 12 12h4a3 3 0 0 1 3 3v1a4 4 0 0 0 4 4c11 0 21-9 21-20S43 10 32 10z" />
      <circle cx="22" cy="26" r="2" fill="currentColor" />
      <circle cx="32" cy="20" r="2" fill="currentColor" />
      <circle cx="42" cy="26" r="2" fill="currentColor" />
      <circle cx="44" cy="38" r="2" fill="currentColor" />
    </BigIcon>
  ),
  food: (
    <BigIcon>
      <path d="M12 8v14c0 3 2 5 5 5h6c3 0 5-2 5-5V8" />
      <path d="M19 8v48" />
      <path d="M50 36V12a8 8 0 0 0-8 8v12c0 2 1 4 3 4h5zm0 0v20" />
    </BigIcon>
  ),
  workshop: (
    <BigIcon>
      <path d="M12 50V14a4 4 0 0 1 4-4h36v44H16a4 4 0 0 1 0-8h36" />
      <path d="M22 22h22M22 30h18" />
    </BigIcon>
  ),
};

// ─── Data ───
const categories = [
  { name: "Concerts", icon: catIcons.music, count: 24 },
  { name: "Parties", icon: catIcons.party, count: 18 },
  { name: "Conferences", icon: catIcons.business, count: 32 },
  { name: "Comedy", icon: catIcons.comedy, count: 15 },
  { name: "Sports", icon: catIcons.sports, count: 21 },
  { name: "Art & Culture", icon: catIcons.art, count: 12 },
  { name: "Food & Drink", icon: catIcons.food, count: 9 },
  { name: "Workshops", icon: catIcons.workshop, count: 27 },
];

const featuredEvents = [
  {
    title: "Lagos Summer Fest 2026",
    date: "Aug 15",
    location: "Eko Atlantic, Lagos",
    price: "₦15,000",
    img: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Concert",
    attendees: 1247,
  },
  {
    title: "Afrobeat Night Rave",
    date: "Aug 22",
    location: "Freedom Park, Lagos",
    price: "₦10,000",
    img: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Party",
    attendees: 890,
  },
  {
    title: "Tech Founders Summit",
    date: "Sep 5",
    location: "Landmark Centre, VI",
    price: "₦25,000",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Conference",
    attendees: 543,
  },
  {
    title: "Laugh Fest Lagos",
    date: "Sep 12",
    location: "The Arena, Lekki",
    price: "₦8,000",
    img: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Comedy",
    attendees: 2100,
  },
  {
    title: "Art Basel Lagos",
    date: "Sep 20",
    location: "Nike Gallery, Lekki",
    price: "₦5,000",
    img: "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Art",
    attendees: 678,
  },
  {
    title: "Naija Sports Festival",
    date: "Oct 1",
    location: "National Stadium, Surulere",
    price: "₦3,000",
    img: "https://images.pexels.com/photos/163452/basketball-dunk-ball-game-163452.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Sports",
    attendees: 3200,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(3);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#events", label: "Events" },
    { href: "#categories", label: "Categories" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#features", label: "Features" },
  ];

  const scrollEvents = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-ink-900 antialiased">
      {/* ===== NAVBAR (over dark hero) ===== */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-tix-dark/90 backdrop-blur-xl border-b border-white/5 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="text-lg font-bold tracking-tight text-white">
              tix<span className="text-tix-red">.</span>king
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium text-tix-gray-300 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2">
              <button className="rounded-lg px-4 py-2 text-sm font-medium text-tix-gray-300 transition-colors hover:text-white">
                Sign in
              </button>
              <button className="rounded-lg bg-tix-red px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-tix-red-dark">
                Get started
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden rounded-lg p-2 text-tix-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? ui.close : ui.menu}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/5 bg-tix-gray-950 backdrop-blur-xl">
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-tix-gray-400 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-white/5 my-3" />
              <button className="w-full rounded-lg px-3 py-2.5 text-sm font-medium text-tix-gray-300 text-left">Sign in</button>
              <button className="w-full rounded-lg bg-tix-red px-3 py-2.5 text-sm font-semibold text-white">Get started</button>
            </div>
          </div>
        )}
      </nav>

      {/* ===== HERO (DARK with video) ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center bg-tix-dark text-white">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            poster="/images/hero-bg.jpg"
          >
            <source src="https://videos.pexels.com/video-files/34059094/14445520_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-tix-dark via-tix-dark/50 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1] mb-6 animate-fade-up">
            Your next
            <br />
            <span className="text-tix-red">experience</span>
            <br />
            starts here
          </h1>

          <p className="text-base sm:text-lg text-tix-gray-400 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Discover the hottest events, sell tickets your way, and create unforgettable moments. From concerts to conferences — tix.king powers it all.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-tix-gray-500">{ui.search}</div>
              <input
                type="text"
                placeholder="Search events, locations, categories..."
                className="w-full rounded-xl border border-white/10 bg-white/5 pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-tix-gray-500 focus:border-tix-red/50 focus:outline-none transition-colors"
              />
            </div>
            <button className="rounded-xl bg-tix-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tix-red-dark whitespace-nowrap inline-flex items-center justify-center gap-2">
              Discover events
              {ui.arrowRight}
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mt-14 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {[
              { number: "10K+", label: "Events" },
              { number: "500K+", label: "Tickets sold" },
              { number: "5K+", label: "Organizers" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-xs text-tix-gray-500 mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="h-8 w-5 rounded-full border border-tix-gray-600 flex justify-center">
            <div className="h-1.5 w-1 rounded-full bg-tix-red mt-1.5 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ===== EVERYTHING BELOW IS LIGHT/WHITE ===== */}
      {/* ============================================ */}

      {/* ===== CATEGORIES — "Something for everyone" ===== */}
      <section id="categories" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Split header: title left, description right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900">
              There is something here for everyone
            </h2>
            <p className="text-base text-ink-500 leading-relaxed md:pb-3">
              From dance parties to power talks, there's something for everyone. We make it easy for you to find events that match your vibe.
            </p>
          </div>

          {/* Categories grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-10">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(activeCategory === i ? null : i)}
                className="group flex flex-col items-center text-center gap-3"
              >
                <div
                  className={cn(
                    "flex h-24 w-24 items-center justify-center rounded-2xl transition-all",
                    activeCategory === i
                      ? "bg-tix-red-soft text-tix-red"
                      : "text-ink-300 group-hover:bg-tix-red-soft group-hover:text-tix-red"
                  )}
                >
                  {cat.icon}
                </div>
                <div className="text-sm font-semibold text-ink-900 leading-tight">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED EVENTS (white) ===== */}
      <section id="events" className="bg-ink-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-12 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900">
              Trending events you can't miss
            </h2>
            <div className="flex items-end justify-between md:pb-3 gap-6">
              <p className="text-base text-ink-500 leading-relaxed">
                Hand-picked events happening across Nigeria. Book before they sell out.
              </p>
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <button onClick={() => scrollEvents("left")} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-500 hover:text-tix-red hover:border-tix-red transition-colors">
                  {ui.arrowLeft}
                </button>
                <button onClick={() => scrollEvents("right")} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-100 text-ink-500 hover:text-tix-red hover:border-tix-red transition-colors">
                  {ui.arrowRight}
                </button>
              </div>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          >
            {featuredEvents.map((event) => (
              <div
                key={event.title}
                className="group card-hover card-hover-light w-[300px] shrink-0 snap-start rounded-2xl border border-ink-100 bg-white overflow-hidden"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-md bg-tix-red px-2.5 py-1 text-xs font-semibold text-white">
                    {event.price}
                  </div>
                  <div className="absolute top-3 left-3 rounded-md bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink-900">
                    {event.category}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="text-sm font-semibold leading-snug text-ink-900 group-hover:text-tix-red transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-ink-500">
                    <span className="flex items-center gap-1.5">
                      <span className="text-ink-300">{ui.calendar}</span>
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1.5 truncate">
                      <span className="text-ink-300">{ui.pin}</span>
                      {event.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-ink-100">
                    <span className="text-xs text-ink-500">
                      <span className="text-ink-900 font-medium">{event.attendees.toLocaleString()}</span> attending
                    </span>
                    <button className="rounded-md border border-tix-red bg-white px-3 py-1.5 text-xs font-semibold text-tix-red hover:bg-tix-red hover:text-white transition-colors">
                      Get ticket
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== "Planning an event?" — split with mockup ===== */}
      <section id="how-it-works" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900 mb-6">
                Planning an event? Selling tickets has never been easier
              </h2>
              <p className="text-base text-ink-500 leading-relaxed mb-8 max-w-md">
                Sell tickets online, promote your event, and manage everything in one place. Whether on our marketplace or embedded on your own site.
              </p>
              <button className="inline-flex items-center justify-center rounded-xl border-2 border-tix-red px-7 py-3.5 text-sm font-semibold text-tix-red hover:bg-tix-red hover:text-white transition-colors">
                Create an event
              </button>
            </div>

            {/* Right mockup */}
            <div className="relative">
              {/* Background image of crowd */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-ink-100">
                <img
                  src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Event organizer at concert"
                  className="h-full w-full object-cover"
                />

                {/* Floating earnings card top-left */}
                <div className="absolute top-4 left-4 rounded-xl bg-white p-3 shadow-lg w-44">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-7 w-7 rounded-full bg-tix-red flex items-center justify-center text-white text-[10px] font-bold">AT</div>
                    <div>
                      <div className="text-[10px] text-ink-500">Welcome</div>
                      <div className="text-xs font-semibold text-ink-900">Ayodeji T.</div>
                    </div>
                  </div>
                  <div className="text-[10px] text-ink-500 mt-2">Your earnings</div>
                  <div className="text-lg font-bold text-ink-900">₦70,000</div>
                </div>

                {/* Floating check-in card top-right */}
                <div className="absolute top-4 right-4 rounded-xl bg-white p-3 shadow-lg w-44">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-2xl font-bold text-tix-red">40%</div>
                    <div className="text-right">
                      <div className="text-[10px] font-semibold text-ink-900">Total checkins</div>
                      <div className="text-[10px] text-ink-500">400 / 1,000</div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
                    <div className="h-full w-2/5 bg-tix-red rounded-full" />
                  </div>
                </div>

                {/* Floating ticket-type card bottom-right */}
                <div className="absolute bottom-4 right-4 rounded-xl bg-white p-4 shadow-lg w-52">
                  <div className="text-xs font-semibold text-ink-900 mb-3">What kind of ticket is it?</div>
                  <div className="flex gap-1.5 mb-3">
                    <button className="flex-1 text-[10px] py-1.5 rounded-md border border-ink-100 text-ink-700">Free</button>
                    <button className="flex-1 text-[10px] py-1.5 rounded-md bg-tix-red-soft text-tix-red font-semibold">Paid</button>
                    <button className="flex-1 text-[10px] py-1.5 rounded-md border border-ink-100 text-ink-700">Invite</button>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-[9px] text-ink-500">Ticket name</div>
                    <div className="h-6 rounded-md border border-ink-100 bg-ink-50" />
                  </div>
                </div>

                {/* Floating summary card bottom-left */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-white p-3 shadow-lg w-48">
                  <div className="flex items-center justify-between mb-2 text-[10px] text-ink-500">
                    <span>‹ Summary</span>
                  </div>
                  <div className="text-xs font-semibold text-ink-900 mb-2">Lagos Tech Summit</div>
                  <div className="space-y-1 text-[10px]">
                    <div className="flex justify-between text-ink-500"><span>Regular</span><span>₦25,000</span></div>
                    <div className="flex justify-between text-ink-500"><span>Fee</span><span>₦875</span></div>
                    <div className="flex justify-between font-semibold text-ink-900 pt-1 border-t border-ink-100"><span>Total</span><span>₦25,875</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — 3 steps ===== */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900">
              Three simple steps to sell out
            </h2>
            <p className="text-base text-ink-500 leading-relaxed md:pb-3">
              From event creation to your first sold ticket — get started in under five minutes. No setup fees, no hidden costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Create your event", desc: "Set up in minutes. Add details, choose ticket types, set pricing. Free events cost you nothing." },
              { num: "02", title: "Sell your way", desc: "List on our marketplace, embed on your website, or both. You choose how tickets are sold." },
              { num: "03", title: "Manage & celebrate", desc: "Track sales live, scan QR at the door, message attendees, and get paid instantly." },
            ].map((step) => (
              <div key={step.num} className="bg-white rounded-2xl border border-ink-100 p-8">
                <div className="text-3xl font-mono font-bold text-tix-red mb-6">{step.num}</div>
                <h4 className="text-xl font-semibold text-ink-900 mb-3">{step.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES (white) ===== */}
      <section id="features" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900">
              Built for serious organizers
            </h2>
            <p className="text-base text-ink-500 leading-relaxed md:pb-3">
              Everything you need to run amazing events — from secure payments to instant payouts and beyond.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: ui.shield, title: "Secure payments", desc: "PCI-DSS compliant. Paystack & Stripe integrated. Your attendees' data is always protected." },
              { icon: ui.embed, title: "Embed anywhere", desc: "Sell tickets directly on your website with our embed widget. Your brand, your domain." },
              { icon: ui.qr, title: "QR check-in", desc: "Scan unique QR codes at any door with any phone. Real-time attendance, fraud-proof." },
              { icon: ui.chart, title: "Live analytics", desc: "Track sales, attendance, and revenue as they happen. Know how your event is performing." },
              { icon: ui.zap, title: "Instant payouts", desc: "Get paid directly to your bank account. No waiting periods, no hidden fees." },
              { icon: ui.tag, title: "Discount codes", desc: "Create promo codes, VIP invites, and tiered pricing. Full control over your sales." },
            ].map((feature) => (
              <div
                key={feature.title}
                className="card-hover card-hover-light rounded-2xl border border-ink-100 bg-white p-7"
              >
                <div className="inline-flex items-center justify-center rounded-xl bg-tix-red-soft p-3 text-tix-red mb-5">
                  {feature.icon}
                </div>
                <h4 className="text-base font-semibold text-ink-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS (light) ===== */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900">
              Trusted by the best in the game
            </h2>
            <p className="text-base text-ink-500 leading-relaxed md:pb-3">
              From small meetups to sold-out festivals — organizers love tix.king. Here's what some of them have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Sarah Mitchell", role: "Event Director, FestHub", content: "Tix.king transformed our ticketing. The marketplace reach plus embed option is unbeatable. Best decision we made this year.", initials: "SM" },
              { name: "Marcus Johnson", role: "Independent Organizer", content: "Finally a platform that gets it. The fees are fair, check-in is smooth, and my attendees love the experience.", initials: "MJ" },
              { name: "Emily Chen", role: "VP of Events, TechConnect", content: "We run 50+ events a year. Tix.king handles everything flawlessly. The analytics alone are worth it.", initials: "EC" },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl border border-ink-100 bg-white p-7">
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4 text-tix-red" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-base text-ink-700 leading-relaxed mb-6">"{t.content}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-ink-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-tix-red-soft text-tix-red text-xs font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-ink-900">{t.name}</div>
                    <div className="text-xs text-ink-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ (white) ===== */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900 mb-6">
                Questions, answered
              </h2>
              <p className="text-base text-ink-500 leading-relaxed mb-8 max-w-md">
                Everything you need to know about tix.king. Still curious? Drop us a line — we usually reply within an hour.
              </p>
              <button className="inline-flex items-center gap-2 text-sm font-semibold text-tix-red hover:underline">
                Contact support
                {ui.arrowRight}
              </button>
            </div>
            <div className="space-y-3">
              {[
                { q: "Can I sell tickets on my own website?", a: "Yes — embed our widget directly on your site. Your attendees never leave your brand." },
                { q: "What payment methods do you support?", a: "Paystack, Stripe, Flutterwave, and major credit cards. Payouts to your Nigerian bank account in 2-3 days." },
                { q: "Is there a fee for free events?", a: "No. Free events are completely free on all plans. We only take a small percentage on paid tickets." },
                { q: "How does QR check-in work?", a: "Every ticket gets a unique QR code. Use any phone to scan at the door for instant verification." },
                { q: "Can I issue refunds?", a: "Yes. Issue full or partial refunds at any time directly from your dashboard." },
              ].map((faq, i) => (
                <FaqItem key={i} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA (light) ===== */}
      <section className="bg-ink-50 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-ink-900 mb-6">
            Ready to sell your first ticket?
          </h2>
          <p className="text-base text-ink-500 leading-relaxed mb-10">
            Join thousands of organizers already using tix.king. Start in minutes — no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-xl border border-ink-100 bg-white px-4 py-3.5 text-sm text-ink-900 placeholder:text-ink-300 focus:border-tix-red focus:outline-none transition-colors"
            />
            <button className="rounded-xl bg-tix-red px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-tix-red-dark whitespace-nowrap">
              Start free
            </button>
          </div>
        </div>
      </section>

      {/* ===== FOOTER (dark) ===== */}
      <footer className="bg-tix-dark text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            <div className="lg:col-span-2 space-y-4">
              <a href="#" className="text-lg font-bold tracking-tight text-white">
                tix<span className="text-tix-red">.</span>king
              </a>
              <p className="text-sm text-tix-gray-400 leading-relaxed max-w-xs">
                The ticketing platform for event organizers. Create, sell, and manage — your way.
              </p>
            </div>

            {[
              { title: "Platform", links: ["Events", "Categories", "Marketplace", "Integrations"] },
              { title: "Company", links: ["About", "Blog", "Careers", "Partners"] },
              { title: "Support", links: ["Help center", "Documentation", "Contact", "Status"] },
            ].map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-tix-gray-400 mb-4">{group.title}</h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-tix-gray-400 transition-colors hover:text-white">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-tix-gray-500">© 2026 tix.king. All rights reserved.</p>
            <div className="flex gap-5">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <a key={link} href="#" className="text-xs text-tix-gray-500 hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* FAQ Item */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-ink-100 bg-white overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-5 py-4 text-left gap-4">
        <span className="text-sm font-semibold text-ink-900">{question}</span>
        <svg
          className={cn("h-4 w-4 shrink-0 text-ink-500 transition-transform duration-200", open && "rotate-180 text-tix-red")}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={cn("grid transition-all duration-200", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm text-ink-500 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
