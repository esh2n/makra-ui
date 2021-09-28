import { LitElement } from 'lit';
export declare class StringToHtml extends LitElement {
    firstUpdated(): void;
    stringifiedHTML?: string;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'string-to-html': StringToHtml;
    }
}
