import { Component } from '@angular/core';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { Process } from './components/process';
import { Testimonials } from './components/testimonials';
import { Contact } from './components/contact';
import { Footer } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Services, Gallery, Process, Testimonials, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
