import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Robocom Docs",
    pageTitleSuffix: " – Robocom",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "ru-RU",
    baseUrl: "docs.robocom.io", // замени на свой поддомен
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f4f4f5",
          gray: "#a1a1aa",
          darkgray: "#3f3f46",
          dark: "#18181b",
          secondary: "#6366f1", // indigo — основной цвет Robocom
          tertiary: "#8b5cf6",
          highlight: "rgba(99, 102, 241, 0.08)",
          textHighlight: "#fef08a",
        },
        darkMode: {
          light: "#18181b",
          lightgray: "#27272a",
          gray: "#71717a",
          darkgray: "#d4d4d8",
          dark: "#fafafa",
          secondary: "#818cf8",
          tertiary: "#a78bfa",
          highlight: "rgba(129, 140, 248, 0.1)",
          textHighlight: "#ca8a0440",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
