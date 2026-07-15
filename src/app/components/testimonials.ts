import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [Reveal],
  templateUrl: './testimonials.html',
})
export class Testimonials {}
