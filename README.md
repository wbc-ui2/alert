<p align="center">
  <img src="https://cdn.jsdelivr.net/npm/@wbc-ui2/alert/logo/alert2.svg" alt="@wbc-ui2/alert" width="220" style="max-width: 100%;"/>
</p>

<p align="center">
  <strong>Alerts as Data. Vue 2. Declarative.</strong><br/>
  <em>Pass an array of alert descriptors and render a notification panel — titles, severities, layout, all from JSON. No per-toast component, no imperative wiring.</em>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@wbc-ui2/alert"><img src="https://img.shields.io/npm/v/@wbc-ui2/alert?color=1976D2" alt="npm"></a>
<a href="https://www.npmjs.com/package/@wbc-ui2/alert?activeTab=versions"><img src="https://img.shields.io/npm/dm/@wbc-ui2/alert?color=1976D2" alt="downloads"></a>
<a href="https://github.com/wbc-ui2/alert/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/@wbc-ui2/alert?color=blue" alt="license"></a>
<a href="https://vuejs.org"><img src="https://img.shields.io/badge/vue-2.7%2B-42b883" alt="vue"></a>
</p>

<p align="center">
  <a href="https://github.com/wbc-ui2/alert">🐙 GitHub</a> ·
  <a href="https://wbc-ui.com">💎 Pro</a>
</p>

<p align="center">
  <img src="./assets/hero-alert-panel.webp"
       alt="@wbc-ui2/alert — data-driven notification panel for Vue"
       width="780"/>
</p>

<p align="center">
  <img src="./assets/mermaid-architecture.png"
       alt="Architecture diagram"
       width="680"/>
</p>

---

## Why?

**@wbc-ui2/alert** replaces the bespoke notification/toast stack — per-severity components, a queue, layout logic — with a single `<WBAlert>` driven by an array of descriptors.

### Render alerts in one component

```html
<WBAlert
  title="System status"
  :items="[
    { type: 'success', text: 'Deploy finished' },
    { type: 'warning', text: 'Cache nearly full' }
  ]"
/>
```

> **One component. One `<WBAlert>` tag.** The alerts are data. No per-toast component to register.

---

## What is @wbc-ui2/alert?

A **Vue 2.7+ component** — `<WBAlert>` — that renders a notification panel from a list of alert descriptors. Works standalone or as a plugin inside the `@wbc-ui2/core` (WBC) ecosystem.

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `title` | `string` | `'WBC Alert'` | Panel heading. |
| `items` | `array` | `[]` | The alert descriptors to render (text + severity + per-item options). |
| `layout` | `object` | `null` | Layout overrides for the panel (positioning / arrangement). |
| `mode` | `string` | `'prod'` | Render mode (`'prod'` for production output; dev modes expose extra affordances). |

**Who's it for?** Apps that need a consistent, data-driven notification surface — dashboards, admin panels, form-submission feedback — without hand-rolling a toast component per severity.

---

## Usage Examples

### Level 1 — A single alert
```html
<WBAlert :items="[{ type: 'info', text: 'Saved.' }]" />
```

### Level 2 — A titled panel of mixed severities
```html
<WBAlert
  title="Build report"
  :items="[
    { type: 'success', text: 'Tests passed' },
    { type: 'error',   text: '2 lint warnings' }
  ]"
/>
```

### Level 3 — Inside a WBC tree
```html
<WBC :item="{
  comp: 'WBAlert',
  options: { props: { title: 'Notifications', items: alertItems } }
}" />
```

---

## Installation

### Prerequisites

- **Node.js** ≥ 18 · **Vue 2.7.x** (Vue 3 tracked as `@wbc-ui3/alert`)
- **[`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core)** — optional; only needed for WBC tree integration

### npm (recommended)

```bash
npm install @wbc-ui2/alert

# Peer dependencies — install once per project
npm install vue@^2.7.16
# Optional, for WBC integration:
npm install @wbc-ui2/core
```

### Yarn / pnpm

```bash
yarn add @wbc-ui2/alert vue@^2.7.16
pnpm add @wbc-ui2/alert vue@^2.7.16
```

### Vue 2 plugin registration

```javascript
// main.js
import Vue from 'vue';
import WBAlertPlugin from '@wbc-ui2/alert';
Vue.use(WBAlertPlugin);
// Or import the component directly:
// import { WBAlert } from '@wbc-ui2/alert';
// Use <WBAlert :items="..."> anywhere in your app.
```

### Troubleshooting common install errors

| Symptom | Cause | Fix |
|---|---|---|
| Alerts render unstyled | Vuetify CSS isn't loaded | Import once in `main.js`: `import 'vuetify/dist/vuetify.min.css';` |
| `WBAlert is not a registered component` | Plugin not installed | `Vue.use(WBAlertPlugin)`, or import `{ WBAlert }` and register locally. |
| `WBC is not registered` (WBC usage) | `@wbc-ui2/core` not registered | `Vue.use(wbcCore)` before using `<WBC>`. |

---

## ⚡ The Component Under the Hood

<details>
<summary>Mermaid diagram (interactive fallback)</summary>
<p align="center">
  <img src="./assets/mermaid-under-the-hood.png"
       alt="Component architecture"
       width="680"/>
</p>
</details>

- **Data-driven rendering**: Pass an array of items, and the component handles mapping severities to styling.
- **Single DOM node**: Replaces the need to conditionally render multiple toast components across your app.
- **WBC Native**: Acts as a perfect plugin within the `@wbc-ui2/core` tree for reactive error states.

---

## 💎 Free vs Pro

> **`@wbc-ui2/alert` is open-source and a complete notification component today** — the descriptor-driven panel, severities, layout, and WBC integration are free. The Pro lane follows the same open-core tiering as the underlying [`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core) engine.

| Capability | Free | Pro |
|---|---|---|
| Descriptor-driven alert panel + severities | ✅ Full | ✅ Full |
| `title` / `layout` / `mode` configuration | ✅ Full | ✅ Full |
| WBC tree integration | ✅ | ✅ |
| Depth / item caps on the rendered WBC tree | core2 free caps | ∞ (via core2 Pro) |
| Advanced engine hooks & headless extraction | — | ✅ (via core2 Pro) |

👉 **[Compare in detail →](https://wbc-ui.com/free-vs-pro)** · **[Buy Pro →](https://wbc-ui.com/pricing)**

---

## 🌐 Ecosystem

`@wbc-ui2/alert` is a sibling package in the **@wbc-ui2** monorepo. Every package is published to npm and shares the same versioning line.

| Package | What it adds | Status |
|---|---|---|
| [`@wbc-ui2/core`](https://www.npmjs.com/package/@wbc-ui2/core) | "UI as Data" engine — the foundation | 🟢 GA |
| [`@wbc-ui2/code`](https://www.npmjs.com/package/@wbc-ui2/code) | JSON-driven code editor + live run | 🟢 GA |
| [`@wbc-ui2/chart`](https://www.npmjs.com/package/@wbc-ui2/chart) | ECharts integration | 🟢 GA |
| [`@wbc-ui2/dataviewer`](https://www.npmjs.com/package/@wbc-ui2/dataviewer) | JSON / data-table explorer | 🟢 GA |
| [`@wbc-ui2/latex`](https://www.npmjs.com/package/@wbc-ui2/latex) | LaTeX math rendering | 🟢 GA |
| [`@wbc-ui2/mermaid`](https://www.npmjs.com/package/@wbc-ui2/mermaid) | Diagram-as-code rendering | 🟢 GA |
| **[`@wbc-ui2/alert`](https://www.npmjs.com/package/@wbc-ui2/alert)** | **Notification / toast system** *(this package)* | 🟢 GA |
| [`@wbc-ui2/press`](https://www.npmjs.com/package/@wbc-ui2/press) | Markdown-driven docs engine | 🟢 GA |

---

## Build artifacts

| Format | File |
|---|---|
| ESM | `dist/alert2.es.js` |
| UMD | `dist/alert2.umd.js` |

---

## 📄 License

MIT © [Wissem Boughamoura](https://github.com/wissemb11) · [wi-bg.com](https://www.wi-bg.com) · [wbc-ui.com](https://wbc-ui.com)
