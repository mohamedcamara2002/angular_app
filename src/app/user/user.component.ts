import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   nom :any ='DIOP';
   prenom:string ="Abdou";
   age = 18;
   age1 = 20;
   isDisabled = false;
   tabNom = ["DIOP","FALL","NDOYE"];

   afficheAlert(){
     alert('Bonjour !!!');
   }
   
}
