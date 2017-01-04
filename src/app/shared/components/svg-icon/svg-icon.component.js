import { Component, Input, ElementRef } from '@angular/core';
import { SvgIconService } from './svg-icon.service';

@Component({
  selector: 'workshop-svg-icon',
  styles: [require('./svg-icon.component.styl')],
  template: ''
})

export class SvgIconComponent {

  @Input() glyph;

  constructor(element: ElementRef, svgIconService: SvgIconService) {
    this.glyphs = svgIconService.glyphs;
    this.element = element;
  }

  ngAfterViewInit() {
    let svgns = "http://www.w3.org/2000/svg";
    let xlinkns = "http://www.w3.org/1999/xlink";
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    let use = document.createElementNS(svgns, "use");
    use.setAttributeNS(xlinkns, "href", this.glyphs[this.glyph]);
    svg.classList.add('icon');
    svg.appendChild(use);
    this.element.nativeElement.appendChild(svg);
  }

}