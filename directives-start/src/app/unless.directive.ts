import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
	//set pozwala na ustawienie metody na variable
	@Input() set appUnless(condition: boolean) {
		if(!condition) {
			//dobranie się do templatu
			this.vcRef.createEmbeddedView(this.templateRef);
		} else {
			this.vcRef.clear();
		}
	}

//parametry pozwolą określić, gdzie w dokumencie jest ta dyrektywa
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
