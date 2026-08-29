"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STAGES = [
  { label: "INITIALIZING SYSTEM",    sub: "boot sequence started",         ms: "31ms", color: "#a78bfa" }, // soft purple  — system/boot
  { label: "FETCHING PROFILE DATA",  sub: "loading developer metadata",    ms: "44ms", color: "#38bdf8" }, // sky blue     — data/network
  { label: "COMPILING SKILL MODULES",sub: "next.js · react · postgresql",  ms: "58ms", color: "#f472b6" }, // pink         — code/compile
  { label: "LOADING PROJECT ASSETS", sub: "importing portfolio entries",   ms: "54ms", color: "#fb923c" }, // orange       — assets/files
  { label: "RENDERING COMPONENTS",   sub: "hydrating ui layer",            ms: "80ms", color: "#34d399" }, // emerald      — UI/render
  { label: "RENDER COMPLETE",        sub: "all systems operational",       ms: "12ms", color: "#4ade80" }, // light green  — success
];

// how long each stage takes in ms
const STAGE_DURATION = 620;
const TOTAL = STAGES.length * STAGE_DURATION;

function useTypewriter(text: string, active: boolean, speed = 38) {
  const [out, setOut] = useState("");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!active) { setOut(""); return; }
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

type StageState = "pending" | "active" | "done";

function Row({
  stage,
  index,
  state,
}: {
  stage: typeof STAGES[0];
  index: number;
  state: StageState;
}) {
  const typed = useTypewriter(stage.label, state === "active", 36);
  const label = state === "active" ? typed : stage.label;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.22rem",
      opacity: state === "pending" ? 0.18 : 1,
      transition: "opacity 0.3s",
    }}>
      {/* Main row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "clamp(0.5rem, 1.5vw, 0.9rem)",
        fontFamily: "var(--font-space-mono), monospace",
      }}>
        {/* Icon */}
        <div style={{ width: "clamp(10px, 1.5vw, 14px)", flexShrink: 0, textAlign: "center" }}>
          {state === "done" && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 22 }}
              style={{ color: "#02bf47", fontSize: "clamp(0.55rem, 1.1vw, 0.7rem)" }}
            >✓</motion.span>
          )}
          {state === "active" && <span className="preloader-spinner" />}
          {state === "pending" && (
            <span style={{ color: "#2a2a2a", fontSize: "clamp(0.5rem, 1vw, 0.62rem)" }}>–</span>
          )}
        </div>

        {/* Index */}
        <span style={{
          fontSize: "clamp(0.5rem, 1vw, 0.62rem)",
          color: state === "done" ? "#3a3a3a" : "#2a2a2a",
          flexShrink: 0,
          userSelect: "none",
          fontFamily: "var(--font-space-mono), monospace",
        }}>
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Label */}
        <span style={{
          flex: 1,
          fontSize: "clamp(0.62rem, 1.3vw, 0.8rem)",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: stage.color,
          opacity: state === "done" ? 0.5 : state === "pending" ? 0 : 1,
          fontFamily: "var(--font-space-mono), monospace",
          transition: "opacity 0.3s",
        }}>
          {label}
          {state === "active" && typed.length < stage.label.length && (
            <span className="preloader-cursor" style={{ marginLeft: "2px" }} />
          )}
        </span>

        {/* ms — only when done */}
        <span style={{
          fontSize: "clamp(0.44rem, 0.85vw, 0.54rem)",
          color: state === "done" ? "#2a2a2a" : "transparent",
          fontFamily: "var(--font-space-mono), monospace",
          flexShrink: 0,
          minWidth: "2.5rem",
          textAlign: "right",
          transition: "color 0.3s",
          userSelect: "none",
        }}>
          {stage.ms}
        </span>
      </div>

      {/* Sub-line — only shown when active or done */}
      <div style={{
        paddingLeft: "clamp(22px, 3.5vw, 36px)",
        fontFamily: "var(--font-space-mono), monospace",
        fontSize: "clamp(0.48rem, 0.95vw, 0.58rem)",
        color: state === "done" ? "#2a3040" : state === "active" ? "#4b5563" : "transparent",
        letterSpacing: "0.06em",
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
        transition: "color 0.3s",
      }}>
        <span style={{ color: state === "pending" ? "transparent" : "#1e2535", flexShrink: 0 }}>└─</span>
        {stage.sub}
      </div>
    </div>
  );
}

export default function Preloader() {
  const [stageIndex, setStageIndex]   = useState(0);
  const [doneList, setDoneList]       = useState<number[]>([]);
  const [progress, setProgress]       = useState(0);
  const [exiting, setExiting]         = useState(false);
  const [visible, setVisible]         = useState(true);
  const elapsedRef                    = useRef(0);

  useEffect(() => {
    const runStage = (idx: number) => {
      if (idx >= STAGES.length) return;
      setStageIndex(idx);

      const startElapsed = elapsedRef.current;
      const startTime = performance.now();

      const tick = (now: number) => {
        const delta = now - startTime;
        elapsedRef.current = startElapsed + delta;
        setProgress(Math.min(100, Math.round((elapsedRef.current / TOTAL) * 100)));

        if (delta < STAGE_DURATION) {
          requestAnimationFrame(tick);
        } else {
          setDoneList(prev => [...prev, idx]);
          const next = idx + 1;
          if (next < STAGES.length) {
            setTimeout(() => runStage(next), 55);
          } else {
            setProgress(100);
            setTimeout(() => {
              setExiting(true);
              setTimeout(() => setVisible(false), 880);
            }, 480);
          }
        }
      };
      requestAnimationFrame(tick);
    };

    runStage(0);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.015, filter: "blur(10px)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#030307",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(1rem, 4vw, 2rem)",
            overflow: "hidden",
          }}
        >
          {/* Ambient glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -58%)",
              width: "clamp(200px, 55vw, 520px)",
              height: "clamp(200px, 55vw, 520px)",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(109,40,217,0.13) 0%, transparent 70%)",
              filter: "blur(55px)",
              pointerEvents: "none",
            }}
          />

          {/* ── Terminal card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "clamp(280px, 85vw, 560px)",
              background: "rgba(6, 6, 12, 0.97)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "clamp(0.5rem, 1.5vw, 0.75rem)",
              overflow: "hidden",
              boxShadow: `
                0 32px 80px rgba(0,0,0,0.75),
                0 0 0 1px rgba(109,40,217,0.1),
                inset 0 1px 0 rgba(255,255,255,0.04)
              `,
            }}
          >
            {/* Title bar */}
            <div style={{
              padding: "clamp(0.45rem,1.2vw,0.65rem) clamp(0.7rem,2vw,1.1rem)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              background: "rgba(255,255,255,0.012)",
              display: "flex",
              alignItems: "center",
              gap: "0.45rem",
            }}>
              <div style={{ display: "flex", gap: "5px" }}>
                {["#ff5f57","#febc2e","#28c840"].map((c, i) => (
                  <div key={i} style={{
                    width: "clamp(7px,1.2vw,10px)",
                    height: "clamp(7px,1.2vw,10px)",
                    borderRadius: "50%",
                    background: c,
                    opacity: 0.88,
                    boxShadow: `0 0 4px ${c}44`,
                  }} />
                ))}
              </div>
              <span style={{
                flex: 1, textAlign: "center",
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "clamp(0.44rem,0.9vw,0.54rem)",
                color: "#2e2e2e",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                portfolio.init — bash
              </span>
            </div>

            {/* Prompt line */}
            <div style={{
              padding: "clamp(0.55rem,1.5vw,0.85rem) clamp(0.7rem,2vw,1.1rem) clamp(0.3rem,0.8vw,0.45rem)",
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "clamp(0.52rem,1.1vw,0.66rem)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0.3rem",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
              <span style={{ color: "#6d28d9" }}>~/portfolio</span>
              <span style={{ color: "#3a3a3a" }}>on</span>
              <span style={{ color: "#02bf47", fontWeight: 700 }}>main</span>
              <span style={{ color: "#3a3a3a" }}>›</span>
              <span style={{ color: "#555" }}>node boot.js</span>
            </div>

            {/* Stages */}
            <div style={{
              padding: "clamp(0.6rem,1.5vw,0.9rem) clamp(0.7rem,2vw,1.1rem)",
              display: "flex",
              flexDirection: "column",
              gap: "clamp(0.55rem,1.3vw,0.85rem)",
            }}>
              {STAGES.map((stage, i) => {
                const state: StageState =
                  doneList.includes(i) ? "done"
                  : stageIndex === i   ? "active"
                  : "pending";
                return <Row key={i} stage={stage} index={i} state={state} />;
              })}
            </div>

            {/* Progress bar */}
            <div style={{ height: "2px", background: "rgba(255,255,255,0.03)" }}>
              <div style={{
                height: "100%",
                width: `${progress}%`,
                background: "linear-gradient(90deg, #4c1d95, #7c3aed, #6d28d9, #a78bfa)",
                boxShadow: "0 0 10px rgba(167,139,250,0.55)",
                transition: "width 0.12s linear",
              }} />
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              marginTop: "clamp(0.6rem,1.5vw,0.9rem)",
              width: "clamp(280px, 85vw, 560px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span className="status-dot" style={{ width: 5, height: 5 }} />
              <span style={{
                fontFamily: "var(--font-space-mono), monospace",
                fontSize: "clamp(0.44rem,0.85vw,0.54rem)",
                color: "#252525",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}>
                {progress < 100 ? "LOADING" : "LAUNCHING"}
              </span>
            </div>
            <span style={{
              fontFamily: "var(--font-space-mono), monospace",
              fontSize: "clamp(0.44rem,0.85vw,0.54rem)",
              color: progress === 100 ? "#3a3a3a" : "#1e1e1e",
              letterSpacing: "0.1em",
              transition: "color 0.4s",
            }}>
              {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
