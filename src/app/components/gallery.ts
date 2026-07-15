import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

@Component({
  selector: 'app-gallery',
  imports: [Reveal],
  templateUrl: './gallery.html',
})
export class Gallery {
  // Imágenes temporales: reemplazar por fotos reales del taller (máximo 3).
  protected readonly principal: Photo = {
    src: 'img/herramientas.jpg',
    alt: 'Herramientas de costura ordenadas: tijeras, hilo, descosedor y botón',
    caption: 'Todo lo que vas a usar, listo para ti',
    width: 3712,
    height: 5560,
  };

  protected readonly laterales: Photo[] = [
    {
      src: 'img/taller-maniqui.jpg',
      alt: 'Maniquí con cinta métrica junto a una máquina overlock',
      caption: 'Máquinas y maniquí para practicar',
      width: 1335,
      height: 2000,
    },
    {
      src: 'img/gato-ovillos.webp',
      alt: 'Ilustración de un gato entre ovillos de lana de colores',
      caption: 'Un espacio cálido y creativo',
      width: 1920,
      height: 1920,
    },
  ];
}
