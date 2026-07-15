import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  templateUrl: './contact.html',
})
export class Contact {}
