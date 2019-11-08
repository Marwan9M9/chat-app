import { Component, OnInit } from '@angular/core';
import { FriendService } from '../services/friend.service';
import { Friend } from '../friend.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendService]
})
export class FriendsComponent implements OnInit {
  selectedFriend: Friend;

  constructor(private friendService: FriendService) {}

  ngOnInit() {
    this.friendService.friendSelected.subscribe(
      (friend: Friend) => {
        this.selectedFriend = friend;
      }
    );
  }

}
