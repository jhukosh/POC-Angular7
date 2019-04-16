import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateKittenComponent} from './create-kitten/create-kitten.component';
import { ListKittenComponent} from './list-kitten/list-kitten.component';
import { UserKittenComponent } from './user-kitten/user-kitten.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'create',
    component : CreateKittenComponent
  },
  {
    path:'list',
    component: ListKittenComponent
  },
  {
    path:'user',
    component: UserKittenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
