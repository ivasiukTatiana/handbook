import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ContentsService } from '../services/contents.service';
import { MainContent } from '../models/main-content';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {

  styleContent = {};
  wholeContent: MainContent[] = [];
  activeLink: string;

  constructor( public contentsService: ContentsService, private router: Router ) {
    router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd))
    .subscribe(event => {
        this.activeLink = event.url;
    });
  }

  ngOnInit() {
    this.contentsService.getStyle().subscribe((data: any) => {
      this.styleContent = data;
    });

    switch ( true ) {
      case this.activeLink.startsWith("/html"):
        this.contentsService.getContentHtml().subscribe((data:MainContent[]) => {
          this.wholeContent = data;
        });
        break;

      case this.activeLink.startsWith("/js"):
        this.contentsService.getContentJs().subscribe((data:MainContent[]) => {
          this.wholeContent = data;
        });
        break;

      case this.activeLink.startsWith("/css"):
        this.contentsService.getContentCss().subscribe((data:MainContent[]) => {
          this.wholeContent = data;
        });
        break;

      default:
        this.contentsService.getContentHtml().subscribe((data:MainContent[]) => {
          this.wholeContent = data;
        });
        break;
    }
  }
}
