import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <span class="terminal-loader">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.terminal-loader {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid var(--secondary); /* The blinking cursor */
  
  /* - 2s: Total typing time
     - steps(25): Number of characters (adjust based on your title length)
     - forwards: Keeps the text visible after the animation ends
  */
  animation: 
    typing 2s steps(25) forwards,
    blink 0.8s infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  0%, 100% { border-color: transparent; }
  50% { border-color: var(--secondary); }
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
