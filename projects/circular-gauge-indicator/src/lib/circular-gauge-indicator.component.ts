import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'circular-gauge-indicator',
  templateUrl: './circular-gauge-indicator.component.html',
  styleUrls: ['./circular-gauge-indicator.component.scss']
})

export class CircularGaugeIndicatorComponent  implements AfterViewInit {
  @Input() options: { count: number, total:number, color:string, status:string, size:number };
  percent : number;

  constructor(private renderer: Renderer2, public dom: ElementRef<any>, private cref: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.percent = Math.round((this.options?.count / this.options?.total) * 100);
    
    this.options.color = (!this.options?.color) ? (this.options?.status == 'success')? '#53CAA6' : '#FF7043' : this.options?.color;
    this.options.size = (this.options.size) ? this.options.size : 100;

    this.cref.detectChanges();

    let el = this.dom.nativeElement;
    this.renderer.setStyle(el.querySelector('.set-size'), 'fontSize' , this.options?.size + 'px');
    this.renderer.setStyle(el.querySelectorAll('.half-circle')[0], 'borderColor' , this.options?.color);
    this.renderer.setStyle(el.querySelectorAll('.half-circle')[1], 'borderColor' , this.options?.color);
    this.renderer.setStyle(el.querySelector('.left-side') ,'transform', 'rotate(' + this.percent * 3.6 + 'deg)');
          
    this.options?.status === 'success'? this.renderer.setStyle(el.querySelector('.pie'), 'transform', 'scale(-1, 1)') : null;

    if (this.percent <= 50) {
      this.renderer.setStyle(el.querySelector('.pie'), 'clip', 'rect(0em, 1em, 1em, 0.5em)');
      this.renderer.setStyle(el.querySelector('.right-side'), 'display', 'none');
    }
    else {
      this.renderer.setStyle(el.querySelector('.pie'), 'clip', 'rect(auto, auto, auto, auto)');
      this.renderer.setStyle(el.querySelector('.right-side'), 'display', 'block');
      this.renderer.setStyle(el.querySelector('.right-side'), 'transform', 'rotate(180deg)');
    }
  }
}
