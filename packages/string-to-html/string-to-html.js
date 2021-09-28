import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import hljs from 'highlight.js';
let StringToHtml = class StringToHtml extends LitElement {
    firstUpdated() {
        var _a;
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el);
        });
    }
    render() {
        return html `
        <article class="container">
            ${unsafeHTML(this.stringifiedHTML)}
        </article>
        `;
    }
};
StringToHtml.styles = [styles];
__decorate([
    property({ type: String })
], StringToHtml.prototype, "stringifiedHTML", void 0);
StringToHtml = __decorate([
    customElement('string-to-html')
], StringToHtml);
export { StringToHtml };
//# sourceMappingURL=string-to-html.js.map