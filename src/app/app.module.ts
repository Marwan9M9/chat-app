import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendComponent } from './friends/friends-list/friend/friend.component';
import { FriendDetailsComponent } from './friends/friend-details/friend-details.component';
import { DisabledDirective } from './disabled.directive';

@NgModule({
  declarations: [
    AppComponent,
    FriendsListComponent,
    FriendsComponent,
    FriendComponent,
    FriendDetailsComponent,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
