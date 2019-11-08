import { Friend } from '../friend.model';
import { EventEmitter } from '@angular/core';

export class FriendService {
    friendSelected = new EventEmitter<Friend>();

    private friends: Friend[] = [
        new Friend('khaled Mohamed', 'https://i.pravatar.cc/', ['Hi', 'how are u?']),
        new Friend('Mohamed Ahmed', 'https://i.pravatar.cc', ['Hi', 'how are u?']),
        new Friend('Ahmed Mohamed', 'https://i.pravatar.cc', ['Hi', 'how are u?']),
        new Friend('Hassan Ali', 'https://i.pravatar.cc', ['Hi', 'how are u?']),
        new Friend('Tamer Mohamed', 'https://i.pravatar.cc', ['Hi', 'how are u?']),
        new Friend('Ali Ahmed', 'https://i.pravatar.cc', ['Hi', 'how are u?']),
    ];

    getFriends() {
        return this.friends.slice();
    }

    addMsg(friend, msg: string) {
        const i = this.friends.indexOf(friend);
        // tslint:disable-next-line:no-unused-expression
        this.friends[i].msg.push(msg);
    }
}
