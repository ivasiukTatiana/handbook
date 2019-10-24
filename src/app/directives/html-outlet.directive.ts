import { Directive, Input, Compiler, ViewContainerRef, Component, NgModule, ViewEncapsulation, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList, } from '@angular/core';
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

      @ViewChildren('canvas') canvases: QueryList<ElementRef>;

      canvasExamples = {
        stroke: ctx => {
          ctx.lineWidth = 10;
          ctx.lineCap = "round";
          ctx.strokeStyle = "green";
          ctx.beginPath();
          ctx.moveTo(20, 20);
          ctx.lineTo(100, 100);
          ctx.lineTo(125, 75);
          ctx.stroke();
        },
        strokerect: ctx => {
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
        },
        arc: ctx => {
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000";
          ctx.arc(75, 75, 45, 0, Math.PI*1.5, false);
          ctx.stroke();
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(75, 20);
          ctx.lineTo(75, 135);
          ctx.moveTo(24, 75);
          ctx.lineTo(130, 75);
          ctx.stroke();
          ctx.fillStyle = "red";
          ctx.fillRect(117,72,5,5);
          ctx.fill();
          ctx.fillStyle = "blue";
          ctx.fillRect(73,28,5,5);
          ctx.fill();
          ctx.fillStyle = "green";
          ctx.fillRect(72,72,5,5);
          ctx.fill();
          ctx.fillStyle = "#000";
          ctx.font = "12px arial";
          ctx.fillText('0',137,79);
          ctx.fillText('0.5*PI',55,141);
          ctx.fillText('1*PI',1,79);
          ctx.fillText('1.5*PI',55,18);
          ctx.font = "italic bold 10px arial";
          ctx.fillText('center',60,70);
          ctx.fillText('radius',80,85);
          ctx.fillText('start',117,70);
          ctx.fillText('end',81,33);
        },
        arcto: ctx => {
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000";
          ctx.beginPath();
          ctx.moveTo(38, 32);
          ctx.arcTo(101, 33, 105, 87, 60);
          ctx.stroke();
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(20, 30);
          ctx.lineTo(130, 35);
          ctx.moveTo(100, 20);
          ctx.lineTo(110, 130);
          ctx.moveTo(43, 87);
          ctx.lineTo(103, 87);
          ctx.stroke();
          ctx.fillStyle = "green";
          ctx.fillRect(99,31,5,5);
          ctx.fill();
          ctx.fillStyle = "blue";
          ctx.fillRect(103,85,5,5);
          ctx.fill();
          ctx.fillStyle = "red";
          ctx.fillRect(36,29,5,5);
          ctx.fill();
          ctx.fillStyle = "#000";
          ctx.font = "italic bold 10px arial";
          ctx.fillText('start',34,26);
          ctx.fillText('(x1, y1)',106,30);
          ctx.fillText('(x2, y2)',110,90);
          ctx.fillText('radius',55,82);
        },
        quadratic: ctx => {
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(13, 20);
          ctx.lineTo(20, 130);
          ctx.lineTo(133, 20);
          ctx.stroke();
          ctx.beginPath();
          ctx.fillStyle = "blue";
          ctx.fillRect(12, 16,5,5);
          ctx.fill();
          ctx.fillStyle = "green";
          ctx.fillRect(18, 127,5,5);
          ctx.fill();
          ctx.fillStyle = "red";
          ctx.fillRect(128, 16,5,5);
          ctx.fill();
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000";
          ctx.beginPath();
          ctx.moveTo(15, 20);
          ctx.quadraticCurveTo(20, 130, 130, 20);
          ctx.stroke();
          ctx.fillStyle = "#000";
          ctx.font = "italic bold 10px arial";
          ctx.fillText('start',19,22);
          ctx.fillText('(endX, endY)',85,15);
          ctx.fillText('(controlX, controlY)',27,129);
        },
        bezier: ctx => {
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(14, 20);
          ctx.lineTo(14, 110);
          ctx.lineTo(112,80);
          ctx.moveTo(131, 20);
          ctx.lineTo(131, 110);
          ctx.lineTo(38, 80);
          ctx.stroke();
          ctx.beginPath();
          ctx.fillStyle = "blue";
          ctx.fillRect(13, 16,5,5);
          ctx.fill();
          ctx.fillStyle = "green";
          ctx.fillRect(12, 108,5,5);
          ctx.fill();
          ctx.fillStyle = "red";
          ctx.fillRect(128, 16,5,5);
          ctx.fill();
          ctx.fillStyle = "orange";
          ctx.fillRect(128, 108,5,5);
          ctx.fill();
          ctx.lineWidth = 3;
          ctx.strokeStyle = "#000";
          ctx.moveTo(15, 20);
          ctx.bezierCurveTo(20, 110, 130,110,130, 20);
          ctx.stroke();
          ctx.fillStyle = "#000";
          ctx.font = "italic bold 10px arial";
          ctx.fillText('start',19,22);
          ctx.fillText('(endX, endY)',85,15);
          ctx.fillText('(controlX1, controlY1)',2,122);
          ctx.fillText('(controlX2, controlY2)',44,103);
        },
        text: ctx => {
          ctx.fillStyle = 'rgba(0, 0, 128, 0.9)';
          ctx.strokeStyle = 'rgba(128, 0, 0, 1.0)';
          ctx.lineWidth = 2;
          ctx.font = "bold 32px sans-serif";
          ctx.strokeText("Привіт!", 12, 77);
          ctx.fillText("Привіт!", 10, 75);
        },
        lngradient: ctx => {
          var grd=ctx.createLinearGradient(5,5,140,5);
          grd.addColorStop(0,"red");
          grd.addColorStop(0.33,"orange");
          grd.addColorStop(0.66,"yellow");
          grd.addColorStop(1,"lime");
          ctx.fillStyle=grd;
          ctx.fillRect(5,5,140,140);
        },
        rdgradient: ctx => {
          var grd=ctx.createRadialGradient(75,150,50,75,150,170);
          grd.addColorStop(0,"orange");
          grd.addColorStop(0.45,"yellow");
          grd.addColorStop(1,"aqua");
          ctx.fillStyle=grd;
          ctx.fillRect(5,5,140,140);
        },
        image3: ctx => {
          let img = new Image();
          img.src = "./assets/images/imgmini.jpg";
          img.onload = () => ctx.drawImage(img, 0, 0);
        },
        image5: ctx => {
          let img = new Image();
          img.src = "./assets/images/imgmini.jpg";
          img.onload = () => ctx.drawImage(img, 25, 25, 100, 100);
        },
        image9: ctx => {
          let img = new Image();
          img.src = "./assets/images/imgmini.jpg";
          img.onload = () => ctx.drawImage(img, 30, 15, 100, 50, 30, 50, 100, 50);
        }
      };

      ngAfterViewInit() {
        this.canvases.forEach( (item: ElementRef, index: number) => {
          const canvas= item.nativeElement;
          if (canvas != null && canvas.getContext) {
            const ctx = canvas.getContext('2d');
            if (this.canvasExamples[canvas.id] !== undefined) {
              this.canvasExamples[canvas.id](ctx);
            }
          }
        });
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
