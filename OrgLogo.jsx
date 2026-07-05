// Timeline organization logo marks - editorial monogram style
import React from "react";

const styles = {
  KU: { bg: "#0051BA", fg: "#F6F1E7" },    // University of Kansas navy blue
  IP: { bg: "#556B2F", fg: "#F6F1E7" },    // Independent pharmacy olive
  PH: { bg: "#6B4E71", fg: "#F6F1E7" },    // Population Health plum
  MI: { bg: "#0033A0", fg: "#F6F1E7" },    // Milliman blue
  DCI: { bg: "#0B1C33", fg: "#F6F1E7" },   // Drug Channels Institute
  TL: { bg: "#2A5C7A", fg: "#F6F1E7" },    // Thought Leadership
};

export default function OrgLogo({ code = "KU", label = "", size = 44 }) {
  const s = styles[code] || styles.KU;
  const fontSize = code.length >= 3 ? size * 0.28 : size * 0.36;
  return (
    <div
      title={label}
      className="flex items-center justify-center font-serif tracking-wide flex-shrink-0 shadow-sm"
      style={{ width: size, height: size, background: s.bg, color: s.fg, fontSize }}
    >
      {code}
    </div>
  );
}
