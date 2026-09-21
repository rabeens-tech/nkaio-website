export const THEME = {
  colors: {
    ink: "#090909",
    inkSoft: "#111111",
    paper: "#f1ece2",
    paperMuted: "#b8b0a1",
    gold: "#c7a96b",
    goldLight: "#e0c88e",
    line: "rgba(224, 200, 142, 0.22)",
    borderSoft: "rgba(199, 169, 107, 0.35)",
    panel: "rgba(199, 169, 107, 0.06)",
    panelHover: "rgba(199, 169, 107, 0.12)",
    white: "#ffffff",
  },
} as const;

export const ui = {
  actionButton: {
    backgroundColor: "rgba(199, 169, 107, 0.06)",
    border: `1px solid rgba(199, 169, 107, 0.35)`,
    color: "#e0c88e",
  },
  subtleBorder: `1px solid rgba(224, 200, 142, 0.22)`,
} as const;
