import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ScriptService } from './script.service';

const loadCaptcha = function () {
    let resolve, reject;
    const promise = new Promise(function () {
        resolve = arguments[0];
        reject = arguments[1];
    });
    return {
        resolve: resolve,
        reject: reject,
        promise: promise,
    };
};
@Injectable({
    providedIn: 'root',
})
export class CaptchaService {

    private baseUrl = 'https://www.google.com/recaptcha/api.js';
    private siteKey;
    private isLoaded: Boolean = false;
    private loadCaptcha = loadCaptcha();
    public constructor(private _scriptService: ScriptService) {
        window['ngRecaptcha3Loaded'] = () => {
            this.isLoaded = true;
            this.loadCaptcha.resolve();
        };

        this.siteKey = `${environment.captchaSiteKey}`;
        this.init();
    }

    public getToken(action: string): Promise<string> {
        return this.loadCaptcha.promise.then(() => {
            return window['grecaptcha'].execute(this.siteKey, { action: action });
        });
    }

    public init(): Promise<boolean> {
        if (this.isLoaded) {
            return;
        }
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = this.baseUrl + `?render=${this.siteKey}&onload=ngRecaptcha3Loaded`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    }
}