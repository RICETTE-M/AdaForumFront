import { Routes } from '@angular/router';
import {AddForumComponent} from './presentation/page/forum/add-forum/add-forum.component';
import {HomeComponent} from './presentation/components/layout/home/home.component';

export const routes: Routes = [
  {path: "add-forum", component: AddForumComponent},
  {path: "", component: HomeComponent}

];
