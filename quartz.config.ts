import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Rays Brain ᓚᘏᗢ",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
header: "JetBrains Mono",    // Use this for the "Booting" titles
  body: "IBM Plex Mono",   // Stick with IBM for the body; it's easier on the eyes for long text
  code: "IBM Plex Mono",
},
      colors: {
    lightMode: {
      light: "#fafafa",         // Standard Carbon White
      lightgray: "#e0e0e0",
      gray: "#a8a8a8",
      darkgray: "#393939",
      dark: "#161616",
      secondary: "#0f62fe",     // IBM Blue
      tertiary: "#8a3ffc",      // Soft Purple
      highlight: "rgba(15, 98, 254, 0.1)",
      textHighlight: "#fff2b2",
    },
    darkMode: {
      light: "#161616",         // Pure Black (OLED)
      lightgray: "#262626",     // Subtle Borders
      gray: "#525252",          // Secondary Text
      darkgray: "#dde1e6",      // Body Text
      dark: "#f2f4f8",          // Titles
      secondary: "#50fa7b",     // Oxocarbon Cyan/Blue
      tertiary: "#be95ff",      // Oxocarbon Purple
      highlight: "rgba(120, 169, 255, 0.15)", // Subtle link background
      textHighlight: "#3d3d3d",
    },      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
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
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
