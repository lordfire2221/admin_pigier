import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { getStorage, ref, listAll } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}
  //création d'élément

  createUser(value:any){
    return this.db.collection('userDatas').add(value);
  }
  createParent(value:any){
    return this.db.collection('parent').add(value)
  }
  createReclammmation(value:any){
    return this.db.collection('reclammation').add(value)
  }
  createEtudiant(value:any){
    return this.db.collection('etudiants').add(value)
  }
  createProfesseur(value:any){
    return this.db.collection('professeur').add(value)
  }
  createAdmin(value:any){
    return this.db.collection('admin').add(value)
  }
  createFiliere(value:any){
    return this.db.collection('filiere').add(value)
  }
  createService(value:any){
    return this.db.collection('service').add(value)
  }
  createEmploiTemps(value:any){
    return this.db.collection('emploitemps').add(value)
  }
  createProgramme(value:any){
    return this.db.collection('Programmes').add(value)
  }
  createBulletin(value:any){
    return this.db.collection('bulletins').add(value)
  }
  createNote(value:any){
    return this.db.collection('note').add(value)
  }
  createComptabilite(value:any){
    return this.db.collection('comptabilite').add(value)
  }
createMatiere(value:any){
  return this.db.collection('matiere').add(value)
}
createNiveau(value:any){
  return this.db.collection('niveau').add(value)
}

//récuperation des informations

getMatiere(){
  return this.db.collection('matiere').valueChanges({ idField: 'id' });
}

getNiveau(){
  return this.db.collection('niveau').valueChanges({idField: 'id'});
}

getMatieres(filiere:string,niveau:string){
  return this.db.collection("matiere", ref=>ref.where("Filiere",'==',filiere).where("niveau",'==',niveau)).valueChanges()
}

  getEtudiant(){
    return this.db.collection('etudiants').valueChanges({ idField: 'id' });
  }
  getStudent(){
    return this.db.collection('etudiants').snapshotChanges()
  }
  getImageUrl() {
    const storage = getStorage()
  }

  getParent(){
    return this.db.collection('parent').valueChanges({ idField: 'id' });
  }
  getParents1(){
    return this.db.collection('parent').valueChanges({ idField: 'id' });
  }
  getReclammation(){
    return this.db.collection('reclammation').valueChanges({ idField: 'id' });
  }
  getProfesseur(){
    return this.db.collection('professeur').valueChanges({ idField: 'id' });
  }
  getAdmin(){
    return this.db.collection('admin').valueChanges({ idField: 'id' });
  }
  getFiliere(){
    return this.db.collection("filiere").valueChanges({ idField: 'id' });
  }
  getFilieres(){
    return this.db.collection("filiere").valueChanges({ idField: 'id' });
  }
  getService(){
    return this.db.collection("service").valueChanges({ idField: 'id' });
  }
  getEmploiTemps(){
    return this.db.collection("emploitemps").valueChanges({ idField: 'id' });
  }
  getProgramme(){
    return this.db.collection("programmes").valueChanges({ idField: 'id' });;
  }
  getBulletin(){
    return this.db.collection("bulletins").valueChanges({ idField: 'id' });;
  }
  getNote(){
    return this.db.collection("note").valueChanges({ idField: 'id' });
  }
  getComptabilite(){
    return this.db.collection("comptabilite").valueChanges({ idField: 'id' });
  }
  getUsers(){
    return this.db.collection("userDatas").snapshotChanges();
  }
  getUser(email:string){
    return this.db.collection("admin",ref=>ref.where("email","==",email)).get();
  }
  getStudents(email:string){
    return this.db.collection("etudiants",ref=>ref.where("email","==",email)).valueChanges();
  }
  getProgrammeEtudiant(filiere:string,niveau:string){
    return this.db.collection("programmes", ref=>ref.where("Filiere",'==',filiere).where("niveau",'==',niveau)).valueChanges()
  }
  getComptabilites(nom:string,prenom:string){
    return this.db.collection("comptabilite", ref=>ref.where("nom",'==',nom).where("prenom",'==',prenom)).valueChanges()
  }
  getNotes(nom:string,prenom:string){
    return this.db.collection("note", ref=>ref.where("nom",'==',nom).where("prenom",'==',prenom)).valueChanges()
  }
  getBulletins(nom:string,prenom:string){
    return this.db.collection("bulletins", ref=>ref.where("nom",'==',nom).where("prenom",'==',prenom)).valueChanges()
  }
  getParents(email:string){
    return this.db.collection("parent",ref=>ref.where("email","==",email)).valueChanges();
  }
  getProfesseurs(email:string){
    return this.db.collection("professeur",ref=>ref.where("email","==",email)).valueChanges();
  }

  //supression d'élément

  deleteFiliere(id:any){
    return this.db.collection("filiere").doc(id).delete();  }
    deleteProgramme(id:any){
      return this.db.collection("programmes").doc(id).delete();  }
      deleteBulletin(id:any){
        return this.db.collection("bulletins").doc(id).delete();  }
    deleteEtudiant(id:any){
      return this.db.collection("etudiants").doc(id).delete();  }
      deleteParent(id:any){
        return this.db.collection('parent').doc(id).delete ;
      }
      deleteMatiere(id:any){
        return this.db.collection('matiere').doc(id).delete ;
      }
      deleteNote(id:any){
        return this.db.collection('note').doc(id).delete ;
      }
      deleteComptabilite(id:any){
        return this.db.collection('comptabilite').doc(id).delete ;
      }
      deleteEmploisTemps(id:any){
        return this.db.collection('emploitemps').doc(id).delete ;
      }
      deleteNiveau(id:any){
        return this.db.collection('niveau').doc(id).delete ;
      }
      deleteAdmin(id:any){
        return this.db.collection('admin').doc(id).delete ;
      }

      //modification d'élement
      modifierBulletin(value:any,id:any){
        return this.db.doc(`bulletins/${id}`).update(value)
      }
      modifierEtudiant(value:any,id:any){
        return this.db.doc(`etudiants/${id}`).update(value)
      }
      modifierProgramme(value:any,id:any){
        return this.db.doc(`programmes/${id}`).update(value)
      }
      modifierParent(value:any,id:any){
        return this.db.doc(`parent/${id}`).update(value)
      }
      modifierNote(value:any,id:any){
        return this.db.doc(`note/${id}`).update(value)
      }
      modifierEmploisTemps(value:any,id:any){
        return this.db.doc(`emploitemps/${id}`).update(value)
      }
      modifierNiveau(value:any,id:any){
        return this.db.doc(`niveau/${id}`).update(value)
      }
      modifierMatiere(value:any,id:any){
        return this.db.doc(`matiere/${id}`).update(value)
      }
}
