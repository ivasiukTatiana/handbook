import { Directive, Input, Compiler, ViewContainerRef, Component, NgModule, ViewEncapsulation, OnInit, AfterViewInit, ViewChild, ElementRef, } from '@angular/core';
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
    class DynamicArticleComponent implements AfterViewInit {

      @ViewChild('canvas', {static: false}) canvas: ElementRef;

      canvasExamples = {
        strokerect: function(ctx) {
          ctx.fillStyle = "rgb(192, 192, 192)";
          ctx.fillRect(18, 33, 89, 64);
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000";
          ctx.shadowBlur = 3;
          ctx.shadowColor = "grey";
          ctx.shadowOffsetX = 5;
          ctx.shadowOffsetY = 5;
          ctx.strokeRect(15, 30, 95, 70);
          ctx.fillStyle = "red";
          ctx.fillRect(13,28,5,5);
          ctx.fill();
          ctx.fillStyle = "#000";
          ctx.font = "italic bold 10px arial";
          ctx.fillText('(x, y)',7,24);
          ctx.fillText('height',114,70);
          ctx.fillText('width',50,42);
        }
      }

      ngAfterViewInit() {
        if (this.canvas !== undefined) {
          const canvas= this.canvas.nativeElement;
          if (canvas != null && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            this.canvasExamples[canvas.id](ctx);
          }
        }
      }
    };

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
