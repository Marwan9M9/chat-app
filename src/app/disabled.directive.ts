import { Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDisabled]'
})
export class DisabledDirective {

    constructor(private elRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('click') toggleDisabled() {
        const button = this.elRef;
        console.log(button);
        // if (button.value !== '') {
        //     this.renderer.removeAttribute(button, 'disabled');
        // } else {
        //     this.renderer.removeAttribute(button, 'disabled');
        // }
    }
}
