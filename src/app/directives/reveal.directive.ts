import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * Marca el elemento como oculto y lo revela al entrar en el viewport.
 *
 * Toda la lógica va en afterNextRender (solo corre en navegador) para que el
 * prerender del build no toque window/IntersectionObserver. El estado oculto
 * inicial lo aplica CSS solo bajo `html.js` (ver index.html y styles.css), así
 * el HTML prerenderizado queda visible para rastreadores sin JavaScript.
 * Con prefers-reduced-motion el contenido se muestra de inmediato.
 */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class Reveal implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => this.observe());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private observe(): void {
    const node = this.el.nativeElement;
    const reduceMotion =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reduceMotion) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    this.observer.observe(node);
  }
}
