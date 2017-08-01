import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {Animal} from '../interfaces/animal';

@Component({
		selector: 'some-content',
		templateUrl: 'app/components/some-content.html',
})
export class SomeContentComponent implements OnInit {
	public animals: Animal[] = [
		{ name: 'Billy', type: 'Dog' },
		{ name: 'Blaze', type: 'Pig' },
		{ name: 'Clucky', type: 'Chicken' }
	];
	public animalOfTheDay: Animal;

	ngOnInit() {
		let randomIndex: number = _.random(0, this.animals.length);
		this.animalOfTheDay = this.animals[randomIndex];
	}

}
