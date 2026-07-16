import { Component } from '@angular/core';
import { Reveal } from '../directives/reveal.directive';

interface Photo {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Fotos verticales recortadas a 4:3: ajusta qué franja de la imagen queda visible. */
  objectPosition?: string;
}

@Component({
  selector: 'app-gallery',
  imports: [Reveal],
  templateUrl: './gallery.html',
})
export class Gallery {
  
  protected readonly principal: Photo = {
    src: 'img/materiales-flatlay.webp',
    alt: 'Telas, botones y cintas rosadas listos para un proyecto de costura',
    caption: 'Todo lo que vas a usar, listo para ti',
    width: 1320,
    height: 2901,
    objectPosition: '50% 15%',
  };

  protected readonly laterales: Photo[] = [
    {
      src: 'img/maquina-etiqueta.webp',
      alt: 'Máquina de coser terminando una prenda con la etiqueta PatchNim cosida',
      caption: 'Máquinas con las cuales puedes realizar tu trabajo',
      width: 800,
      height: 1761,
      objectPosition: '50% 40%',
    },
    {
      src: 'img/gato-ovillos.webp',
      alt: 'Ilustración de un gato entre ovillos de lana de colores',
      caption: 'Un espacio cálido y creativo',
      width: 900,
      height: 900,
    },
  ];
}
