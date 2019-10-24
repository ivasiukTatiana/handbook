import { Component, OnInit } from '@angular/core';

import { ContentsService } from '../services/contents.service';
import { MainContent } from '../models/main-content';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

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
}
