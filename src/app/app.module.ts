import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } 		from '@angular/forms';

import { AppComponent }  from './components/app.component';
import { SomeContentComponent }  from './components/some-content.component';

@NgModule({
	imports:      [ BrowserModule, FormsModule ],
	declarations: [ AppComponent, SomeContentComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
