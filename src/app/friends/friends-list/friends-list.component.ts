import { Component } from '@angular/core';
import { Friend } from 'src/app/friend.model';
import { FriendService } from 'src/app/services/friend.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent {
  friends: Friend[];

  constructor(private friendService: FriendService) {
    this.friends = this.friendService.getFriends();
  }
}
