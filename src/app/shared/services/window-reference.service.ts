import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class WindowReferenceService {
    getNativeWindow() {
        return window;
    }
}
