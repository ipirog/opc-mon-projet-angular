import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
    private users : User[] = [
        {
            firstName : 'James',
            lastName : 'Smith',
            email : 'james@smith.com',
            drinkPreference : 'Coca',
            hobbies : [
                'coder', 'dégustation de café'
            ] 
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice()); // copie de l'array
    }

    adUser(user : User) {
        this.users.push(user);
        this.emitUsers();
    }
}