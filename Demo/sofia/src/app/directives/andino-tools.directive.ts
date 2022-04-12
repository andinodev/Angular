import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[andinotools]'
})
export class AndinoToolsDirective {

  @Input('andinotools') config: any

  @HostBinding('class') isHover: string = ''

  constructor(private elem:ElementRef,private renderer:Renderer2) { 

    this.config = {
      colorHover: 'white'
    }

    this.renderer.setStyle(this.elem.nativeElement,'font-size','24px')
  }
  @HostListener('mouseover') onHover(){
    this.isHover = 'hover'
  }

  @HostListener('mouseout') onOut(){
    this.isHover = ''
    this.renderer.setStyle(this.elem.nativeElement,'color',this.config.colorHover)
  }

}
