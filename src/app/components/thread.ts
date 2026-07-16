import { Component, input } from '@angular/core';

export type ThreadVariant = 'a' | 'b' | 'c';

/**
 * Separador de secciones: un hilo de coser suelto, con ondulación irregular
 * y alguna lazada, en el terracota de marca. Tres trazados distintos para que
 * los separadores de la página no se vean idénticos entre sí.
 */
@Component({
  selector: 'app-thread',
  templateUrl: './thread.html',
  host: { 'aria-hidden': 'true' },
  styles: `
    /*
     * En la capa components para que las utilidades de Tailwind del punto de
     * uso puedan sobreescribir al host (sin capa, este display ganaría siempre).
     */
    @layer components {
      :host {
        display: block;
      }
    }
  `,
})
export class Thread {
  readonly variant = input<ThreadVariant>('a');

  /** Trazados dibujados a mano alzada sobre un lienzo de 1200x36. */
  protected readonly paths: Record<ThreadVariant, string> = {
    // Lazada hacia el primer tercio, ondas amplias a la derecha
    a: 'M -10 22 C 70 12, 150 27, 240 19 C 320 12, 355 24, 398 20 C 424 17, 430 4, 407 5 C 389 6, 396 22, 434 21 C 530 18, 610 10, 715 19 C 810 27, 890 11, 985 17 C 1065 22, 1140 14, 1210 19',
    // Ondas cortas y nerviosas, lazada pasado el centro-derecha
    b: 'M -10 14 C 60 28, 155 4, 255 17 C 350 29, 425 7, 535 18 C 630 26, 695 6, 788 15 C 828 19, 852 28, 876 18 C 890 10, 872 4, 861 11 C 853 18, 874 24, 918 19 C 1010 11, 1115 27, 1210 14',
    // Sin lazada: vaguadas amplias y asimétricas con un quiebre seco al final
    c: 'M -10 18 C 85 32, 175 4, 280 19 C 380 31, 455 3, 560 13 C 625 19, 668 30, 748 17 C 850 3, 935 32, 1040 14 C 1090 6, 1128 26, 1160 12 C 1178 5, 1198 18, 1210 9',
  };
}
