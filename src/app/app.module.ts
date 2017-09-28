import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';

import {WindowRefService} from './services/window-ref.service';

import { AppComponent }  from './components/app.component';
import { SomeContentComponent }  from './components/some-content.component';

@NgModule({
	imports: [ BrowserModule, FormsModule ],
	providers: [ WindowRefService ],
	declarations: [ AppComponent, SomeContentComponent ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
