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

  /**
   * Method gets styles for a dynamic component from a Jason-file
   * @returns - Jason-data with styles
   */
  getStyle(): Observable<string> {
    return this.http.get<{css: string}>('assets/contentstore/css/style.json')
      .pipe(map((data) => {
        return data.css;
      }));
  }

  /**
   * Method gets HTML-template for a dynamic component from a Jason-file with JavaScript content
   * @returns - Jason-data with HTML-template
   */
  getContentJs(): Observable<MainContent[]> {
    return this.http.get<{contentjs: MainContent[]}>('assets/contentstore/contentjs.json')
      .pipe(map((data) => {
        //console.log(data.contentjs);
        return data.contentjs;
      }));
  }

  /**
   * Method gets HTML-template for a dynamic component from a Jason-file with HTML content
   * @returns - Jason-data with HTML-template
   */
  getContentHtml(): Observable<MainContent[]> {
    return this.http.get<{contenthtml: MainContent[]}>('assets/contentstore/contenthtml.json')
      .pipe(map((data) => {
        return data.contenthtml;
      }));
  }

  /**
   * Method gets HTML-template for a dynamic component from a Jason-file with CSS content
   * @returns - Jason-data with HTML-template
   */
  getContentCss(): Observable<MainContent[]> {
    return this.http.get<{contentcss: MainContent[]}>('assets/contentstore/contentcss.json')
      .pipe(map((data) => {
        return data.contentcss;
      }));
  }
}
