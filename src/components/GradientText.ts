import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('gradient-text')
export class GradientText extends LitElement {
    static styles = css`
        :host {
            display: inline;
            background:linear-gradient(
            90deg,#2e4f8b 0%,#3e589d 35%,#8f619b 60%,#d0718f 70%);
            -webkit-background-clip: text;
            color: transparent;
            font-weight: bold;
        }
    `
    @property({type: String})
    text?: string

    render() {
        return html`
            <span>
            ${this.text}
            </span>
        `
    }
}