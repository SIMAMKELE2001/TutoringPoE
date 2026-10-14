"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import * as L from "lucide-react";
import { site, stats, pages, bars, cats, evidence, delivery, testimonials, videos, screenshots, tools, type Ev } from "@/lib/data";

function Img({ srcs, ...p }: { srcs: string[] } & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [i, setI] = useState(0);
  useEffect(() => setI(0), [srcs[0]]);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={srcs[i]} onError={() => i < srcs.length - 1 && setI(i + 1)} {...p} />;
}

function Rich({ t }: { t: string }) {
  const parts = t.split(/(\[[^\]]+\]\([^)]+\))/g);
  return <>{parts.map((s, i) => { const m = s.match(/^\[([^\]]+)\]\(([^)]+)\)$/); return m ? <a key={i} className="lnk" href={m[2]}>{m[1]}</a> : s; })}</>;
}

export default function Portfolio() {
  const [slug, setSlug] = useState("home");
  const [more, setMore] = useState(false);
  const [menu, setMenu] = useState(false);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<Ev | null>(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => { const t = setTimeout(() => setLoading(false), 2400); return () => clearTimeout(t); }, []);
  const [tab, setTab] = useState("Documents"); const [shot, setShot] = useState(0); const [yr, setYr] = useState(0);
  const cv = useRef<HTMLDivElement>(null);
  const page = pages.find((p) => p.slug === slug) ?? pages[0];
  const menuPages = pages.filter((p) => p.slug !== "home");
  const shown = menuPages.slice(0, 5), rest = menuPages.slice(5);

  useEffect(() => { const h = () => { const s = location.hash.slice(1); if (pages.some((p) => p.slug === s)) setSlug(s); }; h(); window.addEventListener("hashchange", h); return () => window.removeEventListener("hashchange", h); }, []);
  useEffect(() => { window.scrollTo({ top: 0 }); document.title = `${page.title} | ${site.name}`; }, [slug]);
  useEffect(() => { const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMore(false); setMenu(false); } }; window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);

  const go = (s: string) => { location.hash = s; setMore(false); setMenu(false); };
  const hits = evidence.filter((e) => (cat === "All" || e.cat === cat) && (e.title + e.cat + e.id).toLowerCase().includes(q.toLowerCase()));
  const nav = (n: number) => setShot((shot + n + screenshots.length) % screenshots.length);
  const sh = screenshots[shot], dl = delivery[yr];
  const tabBtn = (on: boolean) => `border px-4 py-2 ${on ? "border-oxide bg-oxide text-white" : "border-ikota/40 hover:bg-dune"}`;
  const navBtn = "inline-flex items-center gap-2 bg-ikota px-5 py-3 text-white hover:bg-oxide";
  const evTabs = <div role="tablist" className="mb-8 flex flex-wrap gap-2">{["Documents", "Screenshots", "Videos"].map((t) => <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={tabBtn(tab === t)}>{t}{t === "Screenshots" ? ` (${screenshots.length})` : t === "Videos" ? ` (${videos.length})` : ""}</button>)}</div>;
  const gallery = <div><figure className="bg-dune p-3"><Img srcs={[sh.file.replace(".svg", ".jpg"), sh.file]} alt={sh.caption} className="w-full" /><figcaption className="p-3"><b>Screenshot {shot + 1} of {screenshots.length}.</b> {sh.caption}</figcaption></figure>
    <div className="mt-4 flex items-center justify-between"><button onClick={() => nav(-1)} className={navBtn}><L.ChevronLeft size={18} />Previous</button><span>{shot + 1} / {screenshots.length}</span><button onClick={() => nav(1)} className={navBtn}>Next<L.ChevronRight size={18} /></button></div></div>;
  const vids = <ul className="grid gap-6 sm:grid-cols-2">{videos.map((v) => <li key={v.file} className="bg-dune"><video controls preload="none" poster={v.poster} className="aspect-video w-full bg-black"><source src={v.file} type="video/mp4" /></video><div className="p-4"><p className="font-bold">{v.title}</p><p className="text-base">{v.caption}</p></div></li>)}</ul>;
  const quotes = <div className="mt-14"><h2 className="text-3xl font-bold md:text-4xl">Testimonials</h2><p className="mt-3 text-base font-bold text-oxide">What students had to say.</p>
    <div className="mt-6 grid gap-6 md:grid-cols-2">{testimonials.map((t) => <blockquote key={t.who} className="border-l-4 border-ochre bg-dune p-6"><p className="italic">“{t.text}”</p><footer className="mt-3 text-base font-bold">{t.who}<span className="font-normal"> · {t.role}</span></footer></blockquote>)}</div></div>;
  const techView = (
    <div className="mt-12">
      <p className="font-bold">Tools</p>
      <ul className="mt-3 flex flex-wrap gap-2">{tools.map((t) => <li key={t.slug}><button onClick={() => document.getElementById(`tool-${t.slug}`)?.scrollIntoView({ behavior: "smooth" })} className="border border-ikota/40 px-3 py-1 text-base hover:bg-dune">{t.name}</button></li>)}</ul>
      <div className="mt-14 space-y-24">
        {tools.map((t) => (
          <section key={t.slug} id={`tool-${t.slug}`} className="scroll-mt-28">
            <h2 className="text-3xl font-bold md:text-4xl">{t.name}</h2>
            {([["Why it was used", t.why], ["How it was used", t.how], ["Impact on student learning", t.impact]] as [string, string][]).map(([h, x]) => (
              <div key={h} className="mt-6"><h3 className="text-xl font-bold">{h}</h3><p className="mt-2"><Rich t={x} /></p></div>
            ))}
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {([["platform", "The platform"], ["use", "In use during tutoring"]] as [string, string][]).map(([k, c]) => (
                <figure key={k} className="bg-dune p-3"><Img srcs={[`/evidence/technology/${t.slug}-${k}.jpg`, `/evidence/technology/${t.slug}-${k}.svg`]} alt={`${t.name}: ${c}`} className="w-full" /><figcaption className="mt-2 text-base">{t.name}: {c}</figcaption></figure>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
  const deliveryView = (
    <div className="mt-10">
      <div role="tablist" className="flex flex-wrap gap-2">{delivery.map((x, i) => <button key={x.year} role="tab" aria-selected={yr === i} onClick={() => setYr(i)} className={tabBtn(yr === i)}>{x.year}: {x.role}</button>)}</div>
      <h2 className="mt-10 text-4xl font-bold md:text-5xl">{dl.year}: {dl.role}</h2>
      {dl.sections.map((s) => (
        <section key={s.h} className="mt-12">
          <h3 className="text-2xl font-bold md:text-3xl">{s.h}</h3>
          {s.text?.map((t) => <p key={t} className="mt-5"><Rich t={t} /></p>)}
          {s.list && <ul className="mt-5 list-disc space-y-2 pl-6">{s.list.map((x) => <li key={x}><Rich t={x} /></li>)}</ul>}
          {s.after?.map((t) => <p key={t} className="mt-5"><Rich t={t} /></p>)}
          {s.rows.length > 0 && <dl className="mt-5 space-y-4">{s.rows.map(([k, v], i) => <div key={k + i} className="grid gap-1 md:grid-cols-[220px_1fr] md:gap-6"><dt className="font-bold">{k}</dt><dd><Rich t={v} /></dd></div>)}</dl>}
        </section>
      ))}
    </div>
  );
  const cvUrl = `${site.cv}#view=FitH`;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.6 }}
            role="status"
            aria-label="Loading portfolio"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ikota"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative h-56 w-56 md:h-64 md:w-64"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(200,134,42,0) 0%, #8E3B2F 30%, #C8862A 65%, #EAE0CC 100%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
              />
              <div className="absolute inset-[7px] rounded-full bg-ikota" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/splash.jpg"
                alt=""
                className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] rounded-full object-cover"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-2xl font-bold text-dune"
            >
              {site.name}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-1 text-base text-ochre"
            >
              Loading portfolio…
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-white focus:p-2"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-ochre">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-4">
          <button
            onClick={() => go("home")}
            className="text-2xl font-bold"
            aria-label="Go to home page"
          >
            {site.name}
          </button>
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 xl:flex"
          >
            {shown.map((p) => (
              <button
                key={p.slug}
                onClick={() => go(p.slug)}
                aria-current={p.slug === slug}
                className={`underline-offset-8 hover:underline ${p.slug === slug ? "underline" : ""}`}
              >
                {p.label}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setMore(!more)}
                aria-expanded={more}
                className="flex items-center gap-1"
              >
                More <L.ChevronDown size={18} />
              </button>
              {more && (
                <ul className="absolute right-0 top-9 w-56 bg-dune py-2 shadow-lg">
                  {rest.map((p) => (
                    <li key={p.slug}>
                      <button
                        onClick={() => go(p.slug)}
                        className="w-full px-4 py-2 text-left hover:bg-ochre/40"
                      >
                        {p.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>
          <button
            className="xl:hidden"
            onClick={() => setMenu(!menu)}
            aria-label="Menu"
            aria-expanded={menu}
          >
            {menu ? <L.X /> : <L.Menu />}
          </button>
        </div>
        {menu && (
          <ul className="max-h-[70vh] overflow-auto bg-dune px-4 py-2 xl:hidden">
            {menuPages.map((p) => (
              <li key={p.slug}>
                <button
                  onClick={() => go(p.slug)}
                  className="w-full py-2 text-left"
                >
                  {p.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </header>

      {slug === "home" ? (
        <div className="bg-ikota"><Img srcs={["/banners/home.jpg", "/banners/home.svg"]} alt="" className="mx-auto block h-auto max-h-[480px] w-full object-cover" /></div>
      ) : (
        <div className="h-4" />
      )}

      <div className="mx-auto grid max-w-[1150px] gap-10 px-5 pb-24 md:grid-cols-[270px_1fr]">
        <aside
          className={`relative z-10 ${slug === "home" ? "md:-mt-[130px]" : "md:mt-10"} md:self-start`}
        >
          <div className="bg-white p-1 shadow-sm">
            <motion.div
              key={slug}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Img
                srcs={[`/portraits/${slug}.jpg`, ...site.portrait]}
                alt={`Portrait of ${site.name}`}
                className="block h-auto max-h-[560px] w-full object-cover"
              />
            </motion.div>
          </div>
          <h2 className="mt-8 text-3xl font-bold">{site.name}</h2>
          <p className="mt-1">{site.title}</p>
          <p className="mt-6">
            <a className="lnk" href={site.cv} download>
              Curriculum vitae
            </a>
          </p>
          <p className="mt-6">{site.tagline}</p>
          <ul className="mt-6 space-y-2" aria-label="Social links">
            {site.socials.map(([n, u, ic]) => {
              const I = (L as any)[ic];
              return (
                <li key={n}>
                  <a className="lnk inline-flex items-center gap-2" href={u}>
                    <I size={18} />
                    {n}
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>

        <main id="content" className="pt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slug}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="mt-10 text-5xl font-bold md:text-7xl">
                {page.title}
              </h1>
              <p className="mt-10 font-bold">{page.lead}</p>
              {page.intro.map((t) => (
                <p key={t} className="mt-6">
                  <Rich t={t} />
                </p>
              ))}

              {slug === "home" && (
                <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-ikota/20 py-8 md:grid-cols-4">
                  {stats.map(([l, v]) => (
                    <div key={l}>
                      <dd className="text-5xl font-bold text-oxide">{v}</dd>
                      <dt className="text-base">{l}</dt>
                    </div>
                  ))}
                </dl>
              )}
              {page.callout && (
                <div className="mt-10 rounded bg-dune p-6">
                  <p>{page.callout}</p>
                </div>
              )}

              {slug === "impact" && (
                <div className="mt-10 space-y-5">
              
                 
                  {bars.map(([l, v]) => (
                    <div key={l}>
                      <div className="flex justify-between text-base">
                        <span>{l}</span>
                        <span>{v}%</span>
                      </div>
                      <div
                        className="mt-1 h-3 bg-dune"
                        role="img"
                        aria-label={`${l}: ${v}%`}
                      >
                        <motion.div
                          className="h-3 bg-ochre"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${v}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {slug === "delivery" && deliveryView}
              {slug === "technology" && techView}
              {slug === "impact" && quotes}
              {page.items?.map((it) => (
                <motion.section
                  key={it.h}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-16"
                >
                  <h2 className="text-3xl font-bold md:text-4xl">{it.h}</h2>
                  {it.text?.map((t) => (
                    <p key={t} className="mt-6">
                      <Rich t={t} />
                    </p>
                  ))}
                  {it.list && (
                    <ul className="mt-6 list-disc space-y-2 pl-6">
                      {it.list.map((x) => (
                        <li key={x}>
                          <Rich t={x} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {it.after?.map((t) => (
                    <p key={t} className="mt-6">
                      <Rich t={t} />
                    </p>
                  ))}
                  {it.table && (
                    <table className="mt-6 w-full border-collapse text-left">
                      <caption className="sr-only">{it.h}</caption>
                      <thead>
                        <tr className="border-b-2 border-ikota">
                          <th className="py-2 pr-4">{it.table.head[0]}</th>
                          <th className="py-2">{it.table.head[1]}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {it.table.rows.map(([s, v]) => (
                          <tr key={s} className="border-b border-ikota/20">
                            <td className="py-3 pr-4">{s}</td>
                            <td className="w-1/2 py-3">
                              <div className="flex items-center gap-3">
                                <div
                                  className="h-3 flex-1 bg-dune"
                                  role="img"
                                  aria-label={`${s}: ${v}%`}
                                >
                                  <motion.div
                                    className="h-3 bg-ochre"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${v}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                  />
                                </div>
                                <span className="w-12 text-right">{v}%</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  {it.rows.length > 0 && (
                    <dl className="mt-6 space-y-4">
                      {it.rows.map(([k, v], i) => (
                        <div
                          key={k + i}
                          className="grid gap-1 md:grid-cols-[200px_1fr] md:gap-6"
                        >
                          <dt className="font-bold">{k}</dt>
                          <dd>
                            <Rich t={v} />
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {it.parts?.map((pt) => (
                    <div key={pt.h} className="mt-8">
                      <h3 className="text-xl font-bold">{pt.h}</h3>
                      {pt.text.map((t) => (
                        <p key={t} className="mt-3">
                          <Rich t={t} />
                        </p>
                      ))}
                    </div>
                  ))}
                </motion.section>
              ))}

              {slug === "cv" && (
                <div
                  ref={cv}
                  className="mt-10 overflow-hidden rounded-xl bg-[#323639] [&:fullscreen_iframe]:h-[calc(100vh-76px)]"
                >
                  <div className="flex flex-wrap items-center gap-3 p-4 text-base text-white">
                    <button
                      onClick={() => cv.current?.requestFullscreen?.()}
                      className="rounded border border-white/60 px-4 py-2 hover:bg-white/10"
                    >
                      Full Screen
                    </button>
                    <a
                      href={site.cv}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded border border-white/60 px-4 py-2 hover:bg-white/10"
                    >
                      <L.ExternalLink size={16} />
                      Open in New Tab
                    </a>
                    <a
                      href={site.cv}
                      download
                      className="ml-auto inline-flex items-center gap-2 rounded border border-white/60 px-4 py-2 hover:bg-white/10"
                    >
                      <L.Download size={16} />
                      Download
                    </a>
                  </div>
                  <iframe
                    src={cvUrl}
                    title="Curriculum vitae PDF"
                    className="h-[720px] w-full bg-white"
                  />
                </div>
              )}

              {slug === "contact" && (
                <form
                  className="mt-10 max-w-xl space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const f = new FormData(e.currentTarget);
                    location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(`${f.get("message")}\n\nReply to: ${f.get("email")}`)}`;
                    setSent(true);
                  }}
                >
                  {[
                    ["name", "Your name", "text"],
                    ["email", "Your email", "email"],
                  ].map(([n, l, t]) => (
                    <label key={n} className="block">
                      {l}
                      <input
                        name={n}
                        type={t}
                        required
                        className="mt-1 w-full border border-ikota/40 p-3"
                      />
                    </label>
                  ))}
                  <label className="block">
                    Message
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-1 w-full border border-ikota/40 p-3"
                    />
                  </label>
                  <button className="bg-ikota px-6 py-3 text-white hover:bg-oxide">
                    Send message
                  </button>
                  {sent && (
                    <p role="status">
                      Your email app should open with the message ready to send.
                    </p>
                  )}
                </form>
              )}

              {slug === "evidence" && (
                <div className="mt-10">
                  {evTabs}
                  {tab === "Screenshots" && gallery}
                  {tab === "Videos" && vids}
                  {tab === "Documents" && (
                    <div>
                      <label className="relative block max-w-md">
                        <span className="sr-only">Search evidence</span>
                        <L.Search
                          size={18}
                          className="absolute left-3 top-3.5"
                        />
                        <input
                          value={q}
                          onChange={(e) => setQ(e.target.value)}
                          placeholder="Search evidence"
                          className="w-full border border-ikota/40 py-3 pl-10 pr-3"
                        />
                      </label>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {["All", ...cats].map((c) => (
                          <button
                            key={c}
                            onClick={() => setCat(c)}
                            aria-pressed={cat === c}
                            className={`border px-3 py-1 text-base ${cat === c ? "border-oxide bg-oxide text-white" : "border-ikota/40 hover:bg-dune"}`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                        {hits.map((e) => (
                          <li key={e.id} className="bg-dune">
                            <button
                              onClick={() => setOpen(e)}
                              className="block aspect-[16/9] w-full overflow-hidden bg-white"
                              aria-label={`View ${e.title}`}
                            >
                              {e.kind === "image" ? (
                                <Img
                                  srcs={[e.file]}
                                  alt=""
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <span className="grid h-full place-items-center text-oxide">
                                  <L.FileText size={56} />
                                </span>
                              )}
                            </button>
                            <div className="p-5">
                              <p className="text-sm">
                                {e.id} · {e.cat}
                              </p>
                              <p className="font-bold">{e.title}</p>
                              <div className="mt-3 flex gap-5 text-base">
                                <button
                                  className="lnk"
                                  onClick={() => setOpen(e)}
                                >
                                  View
                                </button>
                                <a className="lnk" href={e.file} download>
                                  Download
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                      {!hits.length && (
                        <p className="mt-6">
                          No evidence matches. Clear the search or pick another
                          category.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <footer className="bg-ikota px-5 py-10 text-center text-base text-dune">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>

      {open && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4"
          onClick={() => setOpen(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            className="h-[85vh] w-full max-w-3xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-dune p-3">
              <p className="font-bold">{open.title}</p>
              <button onClick={() => setOpen(null)} aria-label="Close">
                <L.X />
              </button>
            </div>
            {open.kind === "pdf" ? (
              <iframe
                src={open.file}
                title={open.title}
                className="h-[calc(100%-3.5rem)] w-full"
              />
            ) : (
              <Img
                srcs={[open.file]}
                alt={open.title}
                className="h-[calc(100%-3.5rem)] w-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
