import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../../service/user.service';
@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})

export class RegisterFormComponent {
  inscriptionForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl('', [Validators.required]),
    motDePass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmMotDePass: new FormControl('', [Validators.required]),
  });

  constructor (private userService: UserService) {}
  //Vérification que le mot de passe correspond au confirme mdp
  motDePAsseCorrespond(){
    return this.inscriptionForm.value.motDePass === this.inscriptionForm.value.confirmMotDePass;
  }

  //Méthode de soumission du formulaire
  onSubmit() {
    if (this.inscriptionForm.valid && this.motDePAsseCorrespond()) {
      const userLoad = {
        nom: this.inscriptionForm.value.nom,
        prenom: this.inscriptionForm.value.prenom,
        email: this.inscriptionForm.value.email,
        profession: this.inscriptionForm.value.profession,
        motDePass: this.inscriptionForm.value.motDePass,
        confirmMotDePass: this.inscriptionForm.value.confirmMotDePass,
      };
      this.userService.addUser(userLoad).subscribe({
        next: (response) => {
          console.log('Utilisateur créé avec succès :', response);
        },
        error: (error) => {
          console.error('Erreur lors de la création de l\'utilisateur :', error);
        },
      });
    } else {
      console.log('Le formulaire est invalide ou les mots de passe ne correspondent pas.');
    }
  }
}
