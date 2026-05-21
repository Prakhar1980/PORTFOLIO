"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, MapPinned, RadioTower, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { infrastructureNodes, type InfrastructureNode } from "@/lib/portfolio-data";

const stateShapes = [
  { id: "Punjab", d: "M157 102 L201 87 L231 119 L211 156 L162 151 Z" },
  { id: "Delhi", d: "M237 168 L273 157 L293 187 L267 218 L231 203 Z" },
  { id: "Bihar", d: "M374 216 L468 205 L511 242 L476 289 L384 279 L351 241 Z" },
  { id: "Maharashtra", d: "M178 337 L287 325 L338 404 L308 508 L205 497 L144 421 Z" },
  { id: "Telangana", d: "M327 383 L421 370 L467 439 L427 513 L334 497 L292 431 Z" },
  { id: "Karnataka", d: "M264 520 L362 500 L421 583 L384 705 L281 689 L232 602 Z" },
  { id: "Gujarat", d: "M76 258 L172 233 L221 303 L160 371 L62 348 L37 300 Z" },
  { id: "Rajasthan", d: "M132 154 L269 121 L346 215 L277 315 L151 297 L80 226 Z" },
  { id: "UP", d: "M279 196 L396 184 L451 245 L390 325 L284 302 L246 236 Z" },
  { id: "MP", d: "M242 293 L381 306 L406 391 L316 448 L205 386 Z" },
  { id: "Odisha", d: "M468 368 L548 394 L537 497 L463 532 L423 459 Z" },
  { id: "West Bengal", d: "M510 250 L570 278 L572 358 L529 401 L486 340 Z" },
  { id: "Tamil Nadu", d: "M346 693 L429 682 L448 784 L389 862 L331 801 Z" },
  { id: "Kerala", d: "M286 688 L330 706 L340 838 L314 884 L279 776 Z" },
  { id: "Andhra", d: "M407 512 L519 500 L516 591 L422 667 L369 598 Z" }
];

function BuildingCluster({ node }: { node: InfrastructureNode }) {
  const bars = useMemo(() => [0.62, 0.86, 1, 0.72, 0.48], []);

  return (
    <g transform={`translate(${node.position.x * 6.4} ${node.position.y * 8.8})`}>
      {bars.map((scale, index) => (
        <rect
          key={scale}
          className="building"
          x={index * 9 - 20}
          y={-node.height * scale}
          width="6"
          height={node.height * scale}
          rx="2"
          fill={node.color}
          opacity={0.82 - index * 0.08}
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
            animationDelay: `${index * 70}ms`,
            filter: `drop-shadow(0 0 12px ${node.color})`
          }}
        />
      ))}
      <circle r="5" fill={node.color} filter={`drop-shadow(0 0 16px ${node.color})`} />
    </g>
  );
}

export function IndiaInfrastructureMap() {
  const [activeId, setActiveId] = useState(infrastructureNodes[0].id);
  const active = infrastructureNodes.find((node) => node.id === activeId) ?? infrastructureNodes[0];

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative min-h-[560px] overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_50%_46%,rgba(73,245,215,0.18),transparent_36rem),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-2 shadow-2xl md:min-h-[720px]">
        <div className="absolute inset-0 section-grid opacity-45" />
        <svg viewBox="0 0 650 900" className="relative z-10 h-full min-h-[560px] w-full md:min-h-[720px]" role="img">
          <defs>
            <linearGradient id="stateGradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
              <stop offset="100%" stopColor="rgba(73,245,215,0.08)" />
            </linearGradient>
            <filter id="softGlow">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M154 85 L300 72 L429 161 L572 259 L599 377 L548 519 L455 636 L408 850 L313 884 L246 704 L134 498 L39 349 L76 211 Z"
            fill="rgba(73,245,215,0.03)"
            stroke="rgba(73,245,215,0.35)"
            strokeWidth="2"
            filter="url(#softGlow)"
          />
          {stateShapes.map((shape) => {
            const node = infrastructureNodes.find((item) => item.state === shape.id);
            const isActive = active.state === shape.id;
            return (
              <path
                key={shape.id}
                className={`map-path ${isActive ? "active" : ""}`}
                d={shape.d}
                fill={node ? "rgba(255,255,255,0.13)" : "url(#stateGradient)"}
                stroke={node ? node.color : "rgba(255,255,255,0.16)"}
                strokeWidth={node ? 2 : 1}
                onMouseEnter={() => node && setActiveId(node.id)}
                onClick={() => node && setActiveId(node.id)}
              />
            );
          })}
          {infrastructureNodes.map((node, index) => (
            <line
              key={`connection-${node.id}`}
              x1={active.position.x * 6.4}
              y1={active.position.y * 8.8}
              x2={node.position.x * 6.4}
              y2={node.position.y * 8.8}
              stroke={node.color}
              strokeWidth="1.5"
              strokeDasharray="8 10"
              opacity={node.id === active.id ? 0 : 0.38}
              style={{ animationDelay: `${index * 80}ms` }}
            />
          ))}
          <AnimatePresence mode="wait">
            <motion.g
              key={active.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <BuildingCluster node={active} />
            </motion.g>
          </AnimatePresence>
        </svg>
        <div className="absolute left-5 top-5 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-signal backdrop-blur-xl">
          <RadioTower size={15} />
          Live state hotspots
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.aside
          key={active.id}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.35 }}
          className="glass rounded-[28px] p-6 md:p-8"
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-signal">
            <MapPinned size={18} />
            {active.city}
          </div>
          <h2 className="mt-5 font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            {active.label}
          </h2>
          <p className="mt-3 text-base text-white/66">{active.type}</p>
          <p className="mt-6 text-lg leading-8 text-white/78">{active.summary}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {active.metrics.map((metric) => (
              <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <Zap className="mb-3 text-volt" size={18} />
                <p className="text-sm font-semibold text-white/86">{metric}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {active.stack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-white/72">
                {tech}
              </span>
            ))}
          </div>
          {active.links ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {active.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-signal/35 bg-signal/10 px-4 py-2 text-sm font-semibold text-signal hover:bg-signal hover:text-black"
                >
                  {link.label}
                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          ) : null}
        </motion.aside>
      </AnimatePresence>
    </div>
  );
}
