import { Directive, ElementRef , OnInit, Renderer2} from '@angular/core';

//dyrektywa z użyciem renderera - dzięki temu nie musimy odwoływać się bezpośrednio do atrybutu elementu przez NativeElement

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


	constructor(private elRef: ElementRef, private renderer: Renderer2) {

	}

	ngOnInit(){
		this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
	}

}