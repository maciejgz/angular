import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appDropdown]'
})
export class DropdownDirective {

	//host binding bezpośrednio do konkretnej klasy, która będzie dodawana i idejmowana na true i false
	@HostBinding('class.open') dropdownOpened: boolean = false;

	//nasłuchiwanie akcji hosta
	@HostListener('click') clickDropdown(eventData : Event) {
		this.dropdownOpened = !this.dropdownOpened;
	}

}