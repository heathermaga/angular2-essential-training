import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ], // used to bring in other angular modules that your module will need
    declarations: [
        AppComponent

    ], // used to make components, directive and pipes avail to module that don't come from another module
    bootstrap: [
        AppComponent
    ] // root module. Entry point for app code
})
export class AppModule{}