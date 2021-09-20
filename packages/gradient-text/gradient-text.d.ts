import { LitElement } from 'lit';
export declare class GradientText extends LitElement {
    static styles: import("lit").CSSResult[];
    text?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'gradient-text': GradientText;
    }
}
