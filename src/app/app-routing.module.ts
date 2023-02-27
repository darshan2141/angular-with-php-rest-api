import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ViewComponent, pathMatch: 'full' },
  { path: 'view', component: ViewComponent },
  { path: 'add', component: AddComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
