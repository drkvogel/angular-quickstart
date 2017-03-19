import { Component, Input } from '@angular/core';
 // import the Component and Input decorators from Angular because we're going to need them soon.
import { Hero } from './hero'; // moved Hero class into new file


// create metadata with the @Component decorator where we specify the selector name that identifies this component's element
@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
        </div>`
})


// export the class to make it available to other components.
export class HeroDetailComponent {
    @Input() hero: Hero;
}