import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this._watchAuthState();
  }

  public signInWithGoogle(): void {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  public signInWithEmailAndPassword(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public createUserWithEmailAndPassword(email: string, password: string): void {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  private _watchAuthState(): void {
    this.afAuth.authState.do(user =>
      console.log('[Auth] State Changed:', user)
    );
  }
}
