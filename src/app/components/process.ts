import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [Reveal],
  templateUrl: './process.html',
})
export class Process {}
