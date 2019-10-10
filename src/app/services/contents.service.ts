import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MainContent } from '../models/main-content';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(private http: HttpClient) { }

  getStyle(): Observable<string> {
    return this.http.get<{css: string}>('assets/contentstore/css/style.json')
      .pipe(map((data) => {
        return data.css;
      }));
  }

  getContentJs(): Observable<MainContent[]> {
    return this.http.get<{contentjs: MainContent[]}>('assets/contentstore/contentjs.json')
      .pipe(map((data) => {
        //console.log(data.contentjs);
        return data.contentjs;
      }));
  }

  getContentHtml(): Observable<MainContent[]> {
    return this.http.get<{contenthtml: MainContent[]}>('assets/contentstore/contenthtml.json')
      .pipe(map((data) => {
        return data.contenthtml;
      }));
  }

  getContentCss(): Observable<MainContent[]> {
    return this.http.get<{contentcss: MainContent[]}>('assets/contentstore/contentcss.json')
      .pipe(map((data) => {
        return data.contentcss;
      }));
  }
}
