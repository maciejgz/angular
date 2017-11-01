import { Directive, ElementRef , OnInit, Renderer2,HostListener, HostBinding, Input} from '@angular/core';

//dyrektywa z użyciem renderera - dzięki temu nie musimy odwoływać się bezpośrednio do atrybutu elementu przez NativeElement

@Directive({
	selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

	@Input() defaultColor: string = "transparent";
	@Input() highlightColor: string = "blue";

	constructor(private elRef: ElementRef, private renderer: Renderer2) {

	}

	//określa do którego elementu hostowanego template chcemy coś przypisać - ten element jest zdefiniowany w parametrze. wartość zmiennej będzie przypisywana na stałe do tego paramtru
	//używamy camel case, bo DOM nie zna myślników
	@HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
		//this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
	}

	//element pozwalający na reakcję na zdarzenia, które miały miejsce na elemencie, na którym
	// 'siedzi' dyrektywa
	//jako parametr w adnotacji jest przekazywana nazwa eventu. eventy są standardowe takie jak na obiektach w DOM
	@HostListener('mouseenter') mouseOver(eventData: Event) {
		//wersja 1 z rendererem
		//this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');

		//wersja 2 z HostBinding
		this.backgroundColor = this.highlightColor;
	}

	@HostListener('mouseleave') mouseLeave(eventData: Event) {
		//wersja 1 z rendererem
		this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');

		//wersja 2 z HostBinding
		this.backgroundColor = this.defaultColor;

	}

}