import { WeElement, h, tag } from 'omi'
import { tw, sheet } from 'omi-twind'
import * as MarkdownIt from 'markdown-it'
import * as priseCSS from './prism.css'
import * as anchor from "markdown-it-anchor"
const MdIt = MarkdownIt.default ? MarkdownIt.default : MarkdownIt

interface Props {
  mdContent: string
}

const tagName = 'admin-docs'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & Props
    }
  }

  class Prism {
    static highlight(code: string, la: string, lan: string): string;
    static languages

  }
}

@tag(tagName)
export default class extends WeElement<Props> {

  static defaultProps = {
    mdContent: ''
  }

  static css = [`

.emoji {
  height: 1.2em;
}
.demo-options {
  margin-bottom: 30px;
}
.opt__strict .not-strict {
  opacity: 0.3;
}
.checkbox {
  margin-right: 10px;
}
.source {
  width: 100%;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 13px;
  padding: 2px;
}
.result-html {
  padding: 2px 10px;
  overflow: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.result-html img {
  max-width: 35%;
}
.result-src,
.result-debug {
  display: none;
}
.result-src-content,
.result-debug-content {
  white-space: pre;
}
.result-as-html .result-html {
  display: block;
}
.result-as-html .result-src,
.result-as-html .result-debug {
  display: none;
}
.result-as-src .result-src {
  display: block;
}
.result-as-src .result-html,
.result-as-src .result-debug {
  display: none;
}
.result-as-debug .result-debug {
  display: block;
}
.result-as-debug .result-html,
.result-as-debug .result-src {
  display: none;
}
.demo-control {
  position: absolute;
  right: 15px;
  top: -17px;
  border-radius: 6px 6px 0 0;
  font-size: 12px;
  background-color: #ddd;
}
.demo-control a {
  padding: 0 20px;
}
.demo-control a:first-child {
  padding-left: 30px;
}
.demo-control a:last-child {
  padding-right: 30px;
}
.hljs {
  padding: 9.5px;
}
.hljs code {
  white-space: pre;
}
.footnotes {
  -moz-column-count: 2;
  column-count: 2;
}
.footnotes-list {
  padding-left: 2em;
}
.warning {
  background-color: #ff8;
  padding: 20px;
  border-radius: 6px;
}
.gh-ribbon {
  display: block;
  position: absolute;
  right: -60px;
  top: 44px;
  transform: rotate(45deg);
  width: 230px;
  z-index: 10000;
  white-space: nowrap;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  background-color: #686868;
  box-shadow: 0 0 2px rgba(102,102,102,0.4);
  padding: 1px 0;
}
.gh-ribbon a {
  text-decoration: none !important;
  border: 1px solid #ccc;
  color: #fff;
  display: block;
  font-size: 13px;
  font-weight: 700;
  outline: medium none;
  padding: 4px 50px 2px;
  text-align: center;
}
.form-inline .radio,
.form-inline .checkbox {
  display: inline-block;
  margin-bottom: 0;
  margin-top: 0;
}
.form-inline .form-group {
  display: inline-block;
  margin-bottom: 0;
  vertical-align: middle;
}
.form-inline .form-control {
  display: inline-block;
  vertical-align: middle;
  width: auto;
}`, priseCSS.default]

  md


  install() {
    // @ts-ignore 
    this.md = new MdIt().use(anchor.default, {
      level: 2,
      permalink: true
    })

  }

  installed() {
    this.initCodeStyle()
  }


  initCodeStyle() {
    const codes = this.shadowRoot.querySelectorAll('code')

    const codesArr = Array.prototype.slice.call(codes)
    //const codeHlNumArr = []

    codesArr.forEach((code) => {
      const arr = code.className.match(/{([\S\s]*)}/)
      let pre = code.parentNode
      //bug!
      arr && pre.setAttribute('data-line', arr[1])

      if (code.className) {
        pre.className = code.className

        const temp = code.className.match(/language-\w*/g)[0]
        if (temp) {

          code.innerHTML = Prism.highlight(code.innerText, Prism.languages[temp.split('-')[1]], temp.split('-')[1])
        }
      } else {
        pre = code.parentNode
        code.className = 'language-markup'
        pre.className = 'language-markup'
        code.innerHTML = Prism.highlight(code.innerText, Prism.languages.markup, 'markup')
      }
    })

    //fix line-highlight
    window.dispatchEvent(new Event('resize'))
  }

  render() {
    return <div style="padding:20px;">
      <div dangerouslySetInnerHTML={{ __html: this.md.render(this.props.mdContent) }
      } ></div >
    </div >
  }
}
