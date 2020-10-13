import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor :string;
@Input() primaryColor: string;
@Input() SecondaryColor: string;
  constructor(private elementRef:ElementRef,private renderer :Renderer2) { }
 ngOnInit(){
  //  this.elementRef.nativeElement.style.color = 'red' or
  // console.log(this.elementRef.nativeElement.innerText)
   this.renderer.setStyle(this.elementRef.nativeElement,'color','black')
 this.backgroundColor = this.primaryColor
 }

 @HostListener('mouseenter') onchange(event:Event){
  this.backgroundColor = this.SecondaryColor
  this.renderer.setStyle(this.elementRef.nativeElement,'color','blue')
}
@HostListener('mouseleave') onchanges(event:Event){

  this.backgroundColor = this.primaryColor
  this.renderer.setStyle(this.elementRef.nativeElement,'color','black')
}

value :number = 3;

}
