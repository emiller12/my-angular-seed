import { Component } from '@angular/core';
import {Animal} from '../interfaces/animal';

@Component({
		selector: 'some-content',
		templateUrl: 'app/components/some-content.html',
})
export class SomeContentComponent {
	public animals: Animal[] = [
		{ name: 'Billy', type: 'Dog' },
		{ name: 'Blaze', type: 'Pig' },
		{ name: 'Clucky', type: 'Chicken' }
	];

}
