import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
})
export class Hero {}
