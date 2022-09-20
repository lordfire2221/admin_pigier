import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { getStorage, ref, listAll } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}
  createUser(value:any){
    return this.db.collection('userDatas').add(value);
  }
  createParent(value:any){
    return this.db.collection('parent').add(value)
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
    return this.db.collection('Programme').add(value)
  }
  createBulletin(value:any){
    return this.db.collection('bulletin').add(value)
  }
  createNote(value:any){
    return this.db.collection('bulletin').add(value)
  }
  createComptabilite(value:any){
    return this.db.collection('comptabilite').add(value)
  }
  getEtudiant(){
    return this.db.collection('etudiants').valueChanges({ idField: 'id' });
  }
  getImageUrl() {
    const storage = getStorage()
  }

  getParent(){
    return this.db.collection('parent').snapshotChanges();
  }
  getProfesseur(){
    return this.db.collection('professeur').snapshotChanges();
  }
  getAdmin(){
    return this.db.collection('admin').snapshotChanges();
  }
  getFiliere(){
    return this.db.collection("filiere").snapshotChanges();
  }
  getService(){
    return this.db.collection("service").snapshotChanges();
  }
  getEmploiTemps(){
    return this.db.collection("emploitemps").snapshotChanges();
  }
  getProgramme(){
    return this.db.collection("programme").snapshotChanges();
  }
  getBulletin(){
    return this.db.collection("bulletin").snapshotChanges();
  }
  getNote(){
    return this.db.collection("note").snapshotChanges();
  }
  getComptabilite(){
    return this.db.collection("comptabilite").snapshotChanges();
  }
  getUsers(){
    return this.db.collection("userDatas").snapshotChanges();
  }
  getUser(email:string){
    return this.db.collection("admin",ref=>ref.where("email","==",email)).get();
  }
  getEtudiants(email:string){
    return this.db.collection("etudiant",ref=>ref.where("email","==",email)).get();
  }
  getParents(email:string){
    return this.db.collection("parent",ref=>ref.where("email","==",email)).get();
  }
  getProfesseurs(email:string){
    return this.db.collection("professeur",ref=>ref.where("email","==",email)).get();
  }
  deleteFiliere(id:any){
    return this.db.collection("filiere").doc(id).delete();  }
    deleteEtudiant(id:any){
      return this.db.collection("etudiant").doc(id).delete();  }
}
