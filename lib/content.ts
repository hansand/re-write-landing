export const GITHUB_URL = "https://github.com/sacsand/re-write";

export const product = {
  name: "AI Compose Assistant",
  oneLiner: "An AI writing assistant inside every input field on the web.",
};

export type Step = {
  id: string;
  title: string;
  body: string;
};

export const steps: Step[] = [
  {
    id: "focus",
    title: "Focus a field",
    body: "Click into any editable field on any site and a compose bubble appears — or skip the mouse with Cmd/Ctrl+Shift+K.",
  },
  {
    id: "dictate",
    title: "Type or dictate",
    body: "Write a rough draft, or talk it out with built-in mic dictation. Filler words get cleaned up automatically.",
  },
  {
    id: "pick",
    title: "Pick a rewrite",
    body: "Choose from several genuinely different variants, tuned by tone presets or a one-off instruction.",
  },
  {
    id: "insert",
    title: "It's inserted",
    body: "Your pick lands right in the field — even inside rich editors like Gmail, Slack, and LinkedIn.",
  },
];

export type Feature = {
  id: string;
  icon: "layers" | "sliders" | "target" | "mic" | "history" | "wand";
  title: string;
  body: string;
};

export const features: Feature[] = [
  {
    id: "variants",
    icon: "layers",
    title: "Multiple real variants",
    body: "Not synonym-swaps — genuinely different takes on the same draft, so you're picking, not editing.",
  },
  {
    id: "tone",
    icon: "sliders",
    title: "Tone presets & instructions",
    body: "Reach for a saved tone in one click, or type a one-off instruction like \"shorter\" or \"more direct.\"",
  },
  {
    id: "insertion",
    icon: "target",
    title: "Insertion that actually works",
    body: "Built to work inside rich editors like Quill, Draft.js, and Lexical — without breaking Enter-to-send.",
  },
  {
    id: "dictation",
    icon: "mic",
    title: "Built-in dictation",
    body: "Talk instead of typing. Runs in an isolated frame, so you grant mic access once, not per site.",
  },
  {
    id: "history",
    icon: "history",
    title: "Local history",
    body: "Every draft is searchable, pinnable, and reusable — stored on your device, never on a server.",
  },
  {
    id: "custom",
    icon: "wand",
    title: "Custom instructions",
    body: "Steer a rewrite exactly how you want it, on top of any tone preset, right from the compose panel.",
  },
];

export type DeepDive = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: string[];
  imageSide: "left" | "right";
};

export const deepDives: DeepDive[] = [
  {
    id: "context-profiles",
    eyebrow: "Context profiles",
    title: "Tell it once. Reuse it everywhere.",
    body: "Save reference text you type constantly — your bio, product facts, a role description — as a named profile, then toggle it into any rewrite that needs it.",
    bullets: [
      "Save any number of reusable text snippets",
      "Toggle a profile on for a single rewrite",
      "No retyping your background for the tenth cold email",
    ],
    imageSide: "left",
  },
  {
    id: "chat-sessions",
    eyebrow: "Chat sessions",
    title: "When one rewrite isn't enough, keep talking.",
    body: "Open a real back-and-forth with the AI right from the compose bubble, save the session, and pull it back in as context for a later draft.",
    bullets: [
      "Full conversational thread, not a single prompt box",
      "Sessions save automatically and stay searchable",
      "Reuse a saved session as context for a new draft",
    ],
    imageSide: "right",
  },
];

export type Provider = {
  id: string;
  name: string;
};

export const providers: Provider[] = [
  { id: "openai", name: "OpenAI" },
  { id: "gemini", name: "Google Gemini" },
  { id: "claude", name: "Anthropic Claude" },
  { id: "deepseek", name: "DeepSeek" },
];

export const worksEverywhere = [
  "LinkedIn",
  "Gmail",
  "X",
  "Slack",
  "+ any input field",
];

export type PrivacyPoint = {
  title: string;
  body: string;
};

export const privacyPoints: PrivacyPoint[] = [
  {
    title: "Requests never leave the background worker",
    body: "The only network call is from the extension's background worker straight to the provider you chose — no relay, no analytics endpoint.",
  },
  {
    title: "Insertion never touches page JS",
    body: "Text lands in the field through the browser's own editing APIs, not by handing your draft to the page's own scripts.",
  },
  {
    title: "Mic access is a single-origin grant",
    body: "Dictation runs in an isolated extension frame, so you grant microphone permission once — not to every site you type on.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: "Is my data sent anywhere?",
    answer:
      "Only to the AI provider you configure, and only when you request a rewrite. Everything else — settings, history, your API key — stays in local browser storage on your device.",
  },
  {
    question: "Which AI providers are supported?",
    answer:
      "OpenAI, Google Gemini, Anthropic Claude, and DeepSeek. You bring your own API key for whichever you prefer.",
  },
  {
    question: "Does it cost anything beyond my API key?",
    answer:
      "No subscription or markup — you pay your provider directly, at their normal rates. Default models are each provider's cheap/fast tier.",
  },
  {
    question: "Does it work on every website?",
    answer:
      "Yes — any editable text field on any site, including rich editors like Gmail, Slack, and LinkedIn's message composer. A few restricted surfaces (chrome:// pages, the Web Store, PDF viewers) are blocked by Chrome itself.",
  },
  {
    question: "Can I use my voice instead of typing?",
    answer:
      "Yes — dictation runs in an isolated extension frame, so you grant microphone access once, not per site.",
  },
  {
    question: "Is this open source?",
    answer:
      "License to be confirmed before launch — check back here, or see the repository directly for the current status.",
  },
];

export const nav = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
];
