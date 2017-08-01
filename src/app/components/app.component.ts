import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/components/app.html',
})
export class AppComponent {

	public name = 'Angular';
	public animalTypes: string[] = ['Dog', 'Pig', 'Chicken'];
	public selectedType: string = 'Dog';

}
