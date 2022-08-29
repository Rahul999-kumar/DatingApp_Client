import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ListsComponent } from './Component/lists/lists.component';
import { MemberDetailComponent } from './Component/member-detail/member-detail.component';
import { MemberListComponent } from './Component/member-list/member-list.component';
import { MessagesComponent } from './Component/messages/messages.component';
import { AppErrorComponent } from './Error/app-error/app-error.component';
import { NotFoundComponent } from './Error/not-found/not-found.component';
import { ServerErrorComponent } from './Error/server-error/server-error.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'members', component: MemberListComponent, canActivate: [AuthGuard] },
      { path: 'members/:id', component: MemberDetailComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'messages', component: MessagesComponent },
    ]
  },
  { path: 'error', component: AppErrorComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
