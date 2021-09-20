import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles.css';
let GradientText = class GradientText extends LitElement {
    render() {
        return html `
            <span>
            ${this.text}
            </span>
        `;
    }
};
GradientText.styles = [styles];
__decorate([
    property({ type: String })
], GradientText.prototype, "text", void 0);
GradientText = __decorate([
    customElement('gradient-text')
], GradientText);
export { GradientText };
//# sourceMappingURL=gradient-text.js.map