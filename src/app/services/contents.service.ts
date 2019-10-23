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
   * Method gets data with titles and HTML templates of articles from a Jason-file
   * @param cntName - Name of Jason-file
   * @returns - Jason-data with titles and HTML templates
   */
  getContent(cntName: string): Observable<MainContent[]> {
    return this.http.get<{content: MainContent[]}>(`assets/contentstore/${cntName}.json`)
      .pipe(map((data) => {
        return data[cntName];
      }));
  }
}
