import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SnippetComponent } from './snippet/snippet.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'snippet/:id', component: SnippetComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
