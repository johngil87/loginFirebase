import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth) {}
    
    login1(email:string, password:string){

      return new Promise((resolve, rejectd)=> {
        this.AFauth.signInWithEmailAndPassword(email, password).then(user =>{
          resolve(user);
         }).catch(err => rejectd(err))     
      });
    }
 
    register(email:string, password:string){

      return new Promise((resolve, reject) =>{
      this.AFauth.createUserWithEmailAndPassword(email, password).then( res=>{
            resolve(res)
           alert('Registro exitoso')
      }).catch(err => reject(err))
      
    })
  }
}
