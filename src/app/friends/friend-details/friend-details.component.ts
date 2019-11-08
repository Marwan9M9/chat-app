import { FriendService } from 'src/app/services/friend.service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Friend } from 'src/app/friend.model';

@Component({
  selector: 'app-friend-details',
  templateUrl: './friend-details.component.html',
  styleUrls: ['./friend-details.component.css']
})
export class FriendDetailsComponent {
  msgInput: string;
  @ViewChild('MsgInput') MsgInput: ElementRef;

  @Input() friend: Friend;


  constructor(private friendService: FriendService) {}

  onAddMsg() {
    this.friendService.addMsg(this.friend, this.MsgInput.nativeElement.value);
  }

}
