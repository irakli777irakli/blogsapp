import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { SingleBlogComponent } from './single-blog/single-blog.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  {path: 'add-blog', component: AddBlogComponent, canActivate: [AuthGuard]},
  {path: 'blog/:id', component: SingleBlogComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
