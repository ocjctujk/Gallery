import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  renderer : Renderer2;
  constructor(
    private rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null,null);
  }

  toggleTheme(checked: boolean, mode: string) {
    if(checked){
      this.renderer.addClass(this.document.body,mode);
      return;
    }
    this.renderer.removeClass(this.document.body,mode)
    
  }
}
