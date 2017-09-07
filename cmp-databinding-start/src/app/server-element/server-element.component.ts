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
	//publiczny obiekt z aliasem srvElement
	@Input('srvElement') element: {type: string, name: string, content: string};
	@Input('name') name: string;

  //odwołanie do elementu DOM poprzez localReference -  bardzow yogodne
  @ViewChild('heading') header: ElementRef;

  //tak samo jak veiwChild tylko dla contentu
  @ViewChild('contentParagraph') paragraph: ElementRef;

	constructor() {
		console.log('constructor called');
	 }

	 /** jedyny hook z arguemntem, który zawiera informacje o komponencie **/
	 ngOnChanges(changes: SimpleChanges) {
		console.log('ngOnCHanges called');
		console.log(changes);
	 }

	ngOnInit() {
		console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
  	}

/**
wywolywane zawsze kiedy angular szuka zmian - w bardzo wielu miejscach i bardzo niewydajne
*/
  	ngDoCheck() {
  		console.log('ngDoCheck called');
  	}


  	ngAfterContentInit() {
  		console.log('ngAfterContentInit called');
    console.log(this.paragraph.nativeElement.textContent);
  	}

  	ngAfterContentChecked() {
  		console.log('ngAfterContentChecked called');
    console.log(this.paragraph.nativeElement.textContent);
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
