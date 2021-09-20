import { LitElement } from 'lit';
export declare class LoadingButton extends LitElement {
    text?: string;
    isPrimary: boolean;
    static styles: import("lit").CSSResult[];
    render(): import("lit-html").TemplateResult<1>;
    private _submit;
}
declare global {
    interface HTMLElementTagNameMap {
        'loading-button': LoadingButton;
    }
}
