import { Directive, ElementRef , OnInit} from '@angular/core';

	//własna dyrektywa attribute zmieniająca kolor background na elemencie


//dodanie selectora dyrektywy w bracketach pozwala na dostęp do niej po tej nazwie niezależnie skąd tego używamy
@Directive({
	selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

	//!!!dodanie private przed parametrem konstruktora 
	//pozwala od razu na utworzenie obiektu dostępnego 
	//w tej klasie
	constructor(private elementRef: ElementRef) {
	}


	ngOnInit(){
		this.elementRef.nativeElement.style.backgroundColor = 'green';

	}

}