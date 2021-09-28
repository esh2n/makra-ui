import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styles} from './styles.css';

@customElement('gradient-text')
export class GradientText extends LitElement {

    static styles = [styles];
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

declare global {
    interface HTMLElementTagNameMap {
      'gradient-text': GradientText;
    }
  }