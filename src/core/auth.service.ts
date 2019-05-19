import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

const ADMINS = [
  'jlessard93@gmail.com',
  'patriots15fan@gmail.com'
];

@Injectable()
export class AuthService {

  user: Observable<User>;
  isAdmin: boolean;

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) {
    this.isAdmin = false;
    // Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .pipe(switchMap(user => {
        if (user) {
          this.ifAdmin(user.email);
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }));
  }

  ifAdmin(email) {
    for (const adminEmail of ADMINS) {
      if (email === adminEmail) {
        this.isAdmin = true;
      }
    }
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user);
      }).catch((error) => {
        alert('you already have tried signing in with Google. Please try again and select "Connect with Google"');
      });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, {merge: true});

  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }
}
