import { 
	Component, 
	OnInit, 
	Input, 
	ViewEncapsulation, 
	OnChanges,
	SimpleChanges,
	DoCheck ,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
ViewChild,
ElementRef,
ContentChild
	} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
	//publiczny obiekt z aliasem srvElement - input pozwala udostępniać obiekt na zewnątrz. obiekty nadrzędne moga z niego korzystać, edytować itp.
  // z aliasem jest dostępny na zewnątrz. bez aliasu - wewnątrz
	@Input('srvElement') element: {type: string, name: string, content: string};
	@Input('name') name: string;

  //odwołanie do elementu DOM poprzez localReference -  bardzo wygodne
  @ViewChild('heading') header: ElementRef;

  //tak samo jak veiwChild tylko dla contentu
  @ViewChild('contentParagraph') paragraph: ElementRef;

  // tak jak view child tylko do elementów zawartych w tagach ng-content czyli dodanych do parenta
  @ContentChild('contentParagraph') contentParagraph: ElementRef;

	constructor() {
		console.log('constructor called');
	 }

	 /** jedyny hook z arguemntem, który zawiera informacje o komponencie zmienianym - przed i po zmianuie. przydatne do śledzenia zmian **/
	 ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnCHanges called');
		console.log(changes);
	 }

	ngOnInit() {
		console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.contentParagraph.nativeElement.textContent);
  	}

/**
wywolywane zawsze kiedy angular szuka zmian - w bardzo wielu miejscach i bardzo niewydajne
*/
  	ngDoCheck() {
  		console.log('ngDoCheck called');
  	}


  	ngAfterContentInit() {
  		console.log('ngAfterContentInit called');
  	}

  	ngAfterContentChecked() {
  		console.log('ngAfterContentChecked called');
  	}

  		ngAfterViewInit() {
  		console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
  	}

  	ngAfterViewChecked() {
  		console.log('ngAfterViewChecked called');
    console.log(this.header.nativeElement.textContent);
  	}

    //wywoływany przy usuwaniu elementu
  	ngOnDestroy() {
  		console.log('ngOnDestroy called');
  	}


}
