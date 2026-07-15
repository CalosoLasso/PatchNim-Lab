import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [Reveal],
  templateUrl: './services.html',
})
export class Services {}
