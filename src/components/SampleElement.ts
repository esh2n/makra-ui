import {LitElement, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('sample-element')
export class SampleElement extends LitElement {
    static styles = css`
        :host {
            color: blue;
        }
    `
    @property({type: String})
    text?: string

    render() {
        return `
            <p>
                Sample Element's Text: ${this.text}
            </p>
        `
    }
}