import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

import { ContentsService } from '../services/contents.service';
import { MainContent } from '../models/main-content';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  styleContent = {};
  wholeContent: MainContent[] = [];

  constructor(public contentsService: ContentsService) {}

  ngOnInit() {
    this.contentsService.getStyle().subscribe((data: any) => {
      this.styleContent = data;
    });

    this.contentsService.getContent('contentcanvas').subscribe((data:MainContent[]) => {
      this.wholeContent = data;
    });
  }

  ngAfterViewInit() {

    if (this.canvas !== undefined) {
      //console.log(this.strokerectCns);
      const canvas= this.canvas.nativeElement;
      if (canvas != null && canvas.getContext) {
        const ctx = canvas.getContext('2d');

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
			ctx.fillText('start',115,70);
			ctx.fillText('end',81,33);



      }
    }
  }
}
