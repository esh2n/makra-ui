import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles.css';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import hljs from 'highlight.js';

@customElement('string-to-html')
export class StringToHtml extends LitElement {

    firstUpdated() {
        this.shadowRoot?.querySelectorAll('pre code').forEach((el) => {
            hljs.highlightElement(el as HTMLElement);
        });
    }

    @property({type: String})
    stringifiedHTML?: string

    static styles = [styles];

    render() {
        return html`
        <article class="container">
            ${unsafeHTML(this.stringifiedHTML)}
        </article>
        `
    }


}

declare global {
    interface HTMLElementTagNameMap {
        'string-to-html': StringToHtml;
    }
}
