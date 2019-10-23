import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'html', component: ContentComponent },
  { path: 'css', component: ContentComponent },
  { path: 'js', component: ContentComponent },
  { path: 'canvas', component: CanvasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
