import { Directive, Input, Compiler, ViewContainerRef, Component, NgModule, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Directive({
  selector: 'html-outlet'
})
export class HtmlOutletDirective {

  @Input() htmlArticle: string;
  @Input() styleArticle: string;

  constructor(
    private vcRef: ViewContainerRef,
    private compiler: Compiler ) {}

  ngOnChanges() {
    const template = this.htmlArticle;
    const style = this.styleArticle;

    @Component({
      selector: 'dynamic-article',
      template: template,
      styles: [style],
      encapsulation: ViewEncapsulation.None,
    })
    class DynamicArticleComponent {};

    @NgModule({
      imports: [
        CommonModule,
        MatTooltipModule,
        MatIconModule
      ],
      declarations: [DynamicArticleComponent]
    })
    class DynamicArticleModule {};
    this.compiler.compileModuleAndAllComponentsAsync(DynamicArticleModule)
      .then(factory => {
        const compFactory = factory.componentFactories.find(comp =>
          comp.componentType === DynamicArticleComponent);
        this.vcRef.createComponent(compFactory, 0);
      });
  }
}
