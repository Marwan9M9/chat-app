import { FriendService } from 'src/app/services/friend.service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Friend } from 'src/app/friend.model';
import * as $ from "jquery";

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

$(Document).ready(function () {
  $('.close-icon').on('click', function () {
    $('.chat-page').css({display: 'none', visibility : 'hidden'});
    $('.chat-page-button').css({display : 'block', visibility : 'visible'});
  })

  $('.chat-page-button').on('click', function () {
    $(this).css({display: 'none', visibility : 'hidden'});
    $('.chat-page').css({display : 'block', visibility : 'visible'});
  })
})