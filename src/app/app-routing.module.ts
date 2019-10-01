import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'html', component: ContentComponent },
  { path: 'css', component: ContentComponent },
  { path: 'js', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
