import {LitElement, css, html, unsafeCSS} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('loading-button')
export class LoadingButton extends LitElement {
    @property({type: String})
    text?: string
    @property({type: Boolean})
    isPrimary: boolean = true

    static get styles() {
        const primaryColor = '#009688'
        const buttonHeight = 48
        return css`
            button {
                width: 120px;
                height: ${buttonHeight}px;
                border-radius: 5px;
                border: 2px solid ${unsafeCSS(primaryColor)};
                background-color: ${unsafeCSS(primaryColor)};
                color: white;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
            }
            span,
            svg {
            position: absolute;
            fill: transparent;
            }

            .submitting {
            width: ${buttonHeight}px;
            background-color: white;
            border: 2px solid transparent;
            border-radius: 100vh;
            border-left: 2px solid ${unsafeCSS(primaryColor)};
            border-bottom: 2px solid ${unsafeCSS(primaryColor)};
            animation: spin 1.2s 0.3s both;
            transition: 0.3s;
            }

            .submitting span {
            color: transparent;
            }

            .submitting svg {
            animation: check 0.5s 1.2s forwards;
            }

            @keyframes spin {
            80% {
                border: 2px solid transparent;
                border-left: 2px solid ${unsafeCSS(primaryColor)};
            }
            100% {
                border: 2px solid ${unsafeCSS(primaryColor)};
                transform: rotate(1080deg);
            }
            }

            @keyframes check {
            to {
                fill: ${unsafeCSS(primaryColor)};
            }
            }

        `
    }

    render() {
        return html`
            <button class="submit-button"  @click="${this._submit}">
                <span>${this.text}</span>
                <svg width="20" height="20" viewBox="0 0 20 20">
                <path d="M0 11c2.761.575 6.312 1.688 9 3.438 3.157-4.23 8.828-8.187 15-11.438-5.861 5.775-10.711 12.328-14 18.917-2.651-3.766-5.547-7.271-10-10.917z" />
                </svg>
            </button>
        `
    }

    private _submit(_: Event) {
        const submitButton = this.shadowRoot?.querySelector('button')
        submitButton!.disabled = true;
        submitButton!.classList.add("submitting");

        setTimeout(() => {
            submitButton!.classList.remove("submitting");
            submitButton!.disabled = false;
        }, 3000);
    }
}