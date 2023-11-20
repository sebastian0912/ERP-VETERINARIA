import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, from, Observable, of, throwError, map, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore

  ) { }

  signIn(params: SignIn): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(params.email, params.password))
      .pipe(
        catchError((error: FirebaseError) =>
          throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
        ),
        map((userCredential) => userCredential.user) // Agrega esta línea
      );
  }


  recoverPassword(email: string): Observable<void> {
    return from(this.auth.sendPasswordResetEmail(email)).pipe(
      catchError((error: FirebaseError) =>
        throwError(() => new Error(this.translateFirebaseErrorMessage(error)))
      )
    );
  }

  private translateFirebaseErrorMessage({ code, message }: FirebaseError) {
    if (code === "auth/user-not-found") {
      return "User not found.";
    }
    if (code === "auth/wrong-password") {
      return "User not found.";
    }
    return message;
  }

  obtenerUsuarioPorUID(uid: string): Observable<any> {
    return this.firestore.collection('Usuarios').doc(uid).valueChanges();
  }

  signOut(): Observable<void> {
    return from(this.auth.signOut());
  }

  registrarYGuardarUsuario(datosUsuario: any): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(datosUsuario.correo, datosUsuario.contrasena))
      .pipe(
        switchMap((userCredential) => {
          // Comprobar si userCredential.user no es nulo
          if (userCredential.user) {
            const uid = userCredential.user.uid;
            return this.firestore.collection('Usuarios').doc(uid).set({
              nombre: datosUsuario.nombre,
              cedula: datosUsuario.cedula,
              perfil: datosUsuario.perfil
            });
          } else {
            // Lanzar un error si user es nulo
            return throwError(() => new Error('User data is null'));
          }
        }),
        catchError((error) => throwError(() => new Error(error.message)))
      );
  }






}

type SignIn = {
  email: string;
  password: string;
}

type FirebaseError = {
  code: string;
  message: string
};
