import { Friend } from 'src/app/friend.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFriend'
})
export class FilterFriendPipe implements PipeTransform {

  transform(friends: Friend[], name?: any): any {


    if (name === undefined) {
      return friends;
    }
    return friends.filter(
      (friend) => {
        return friend.name.toLowerCase().includes(name.toLowerCase());
      });
  }

}
