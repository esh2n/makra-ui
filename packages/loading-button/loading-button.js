import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';
let LoadingButton = class LoadingButton extends LitElement {
    constructor() {
        super(...arguments);
        this.isPrimary = true;
    }
    render() {
        return html `
            <button class="submit-button"  @click="${this._submit}">
                <span>${this.text}</span>
                <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
                </svg>
            </button>
        `;
    }
    _submit(_) {
        var _a;
        const submitButton = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('button');
        submitButton.disabled = true;
        submitButton.classList.add("submitting");
        setTimeout(() => {
            submitButton.classList.remove("submitting");
            submitButton.disabled = false;
        }, 3000);
    }
};
LoadingButton.styles = [styles];
__decorate([
    property({ type: String })
], LoadingButton.prototype, "text", void 0);
__decorate([
    property({ type: Boolean })
], LoadingButton.prototype, "isPrimary", void 0);
LoadingButton = __decorate([
    customElement('loading-button')
], LoadingButton);
export { LoadingButton };
//# sourceMappingURL=loading-button.js.map