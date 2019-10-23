import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HeaderNav } from '../models/header-nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerNav: HeaderNav[] = [
    {
      headerId: 0,
      headerImg: "./assets/images/icon-html.gif",
      headerEn: "Hyper Text Markup Language ",
      headerUk: " мова гіпертекстової розмітки.",
      headerNav: "HTML",
      headerLink: "/html"
    },
    {
      headerId: 1,
      headerImg: "./assets/images/icon-css.gif",
      headerEn: "Cascading Style Sheets",
      headerUk: "каскадні таблиці стилів.",
      headerNav: "CSS",
      headerLink: "/css"
    },
    {
      headerId: 2,
      headerImg: "./assets/images/icon-js.gif",
      headerEn: "",
      headerUk: "JavaScript - скриптова мова програмування.",
      headerNav: "JavaScript",
      headerLink: "/js"
    },
    {
      headerId: 3,
      headerImg: "./assets/images/icon-canvas.jpg",
      headerEn: " ",
      headerUk: " Canvas - графічна область на web-сторінці.",
      headerNav: "Canvas",
      headerLink: "/canvas"
    },
  ];

  activeHeaderNav: HeaderNav = this.headerNav[0];
  activeLink = "";

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        for (let i = 0; i < this.headerNav.length; i++) {
          this.activeLink = event.url;
          if (this.activeLink.startsWith(this.headerNav[i].headerLink)) {
            this.activeHeaderNav = this.headerNav[i];
          }
        }
        this.router.navigate([this.activeHeaderNav.headerLink]);
      });
  }

  onRouterClick(headerId: number) {
    this.activeHeaderNav = this.headerNav[headerId];
  }
}
