import { Component } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent {

  users : User[] = [
    {
      'id':1,
      'nom':'DIOP',
      'prenom':'Ibou',
      'age':18
    },
    {
      'id':2,
      'nom':'DIOP',
      'prenom':'Ibou',
      'age':18
    },
    {
      'id':3,
      'nom':'FALL',
      'prenom':'Ibou',
      'age':20
    },
    {
      'id':4,
      'nom':'NDIAYE',
      'prenom':'AWA',
      'age':18
    },
    
  ];

  deleteUser(id:number) {

      this.users = this.users.filter((a)=> a.id != id);
  }

}
