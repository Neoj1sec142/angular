import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customif]'
})
export class CustomIfDirective {

  @Input() customif: boolean = false;

  constructor(private templateRef: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnInit(): void{
    if(this.customif){
      this.vcr.createEmbeddedView(this.templateRef);
    }else{
      this.vcr.clear();
    }
  }
  
}
