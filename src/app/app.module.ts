import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'
import {provideStorage,getStorage} from '@angular/fire/storage'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule, _MatTableDataSource } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { RegisterParentComponent } from './register-parent/register-parent.component';
import { RegisterProfesseurComponent } from './register-professeur/register-professeur.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterNoteComponent } from './register-note/register-note.component';
import { RegisterBulletinComponent } from './register-bulletin/register-bulletin.component';
import { RegisterProgrammeComponent } from './register-programme/register-programme.component';
import { RegisterEmploiTempsComponent } from './register-emploi-temps/register-emploi-temps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EtudeComponent } from './etude/etude.component';
import { AdministrationComponent } from './administration/administration.component';
import { SurveillanceComponent } from './surveillance/surveillance.component';
import { ExamenComponent } from './examen/examen.component';
import { DirectionComponent } from './direction/direction.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterFiliereComponent } from './register-filiere/register-filiere.component';
import { ComptableComponent } from './comptable/comptable.component';
import { ScolariteComponent } from './scolarite/scolarite.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeParentComponent } from './liste-parent/liste-parent.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { ListeReclammationComponent } from './liste-reclammation/liste-reclammation.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { ListeProgrammeComponent } from './liste-programme/liste-programme.component';
import { ListeBulletinComponent } from './liste-bulletin/liste-bulletin.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComptabilteComponent } from './register-comptabilte/register-comptabilte.component';
import { SidebarDirectionComponent } from './sidebar-direction/sidebar-direction.component';
import { ListeNoteComponent } from './liste-note/liste-note.component';
import { ListecomptableComponent } from './listecomptable/listecomptable.component';
import { ListeEmploisTempsComponent } from './liste-emplois-temps/liste-emplois-temps.component';
import { RegisterMatiereComponent } from './register-matiere/register-matiere.component';
import { ListeEtudiantExamenComponent } from './liste-etudiant-examen/liste-etudiant-examen.component';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { RegisterNiveauComponent } from './register-niveau/register-niveau.component';
import { ListeNiveauComponent } from './liste-niveau/liste-niveau.component';
import { ModifierMatiereComponent } from './modifier-matiere/modifier-matiere.component';
import { ModifierNiveauComponent } from './modifier-niveau/modifier-niveau.component';
import { ModifierFiliereComponent } from './modifier-filiere/modifier-filiere.component';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { ModifierParentComponent } from './modifier-parent/modifier-parent.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierProgrammeComponent } from './modifier-programme/modifier-programme.component';
import { ModifierNoteComponent } from './modifier-note/modifier-note.component';
import { ModifierComptabiliteComponent } from './modifier-comptabilite/modifier-comptabilite.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterEtudiantComponent,
    RegisterParentComponent,
    RegisterProfesseurComponent,
    RegisterAdminComponent,
    RegisterNoteComponent,
    RegisterBulletinComponent,
    RegisterProgrammeComponent,
    RegisterEmploiTempsComponent,
    RegisterFiliereComponent,
    HomeComponent,
    LoginComponent,
    EtudeComponent,
    AdministrationComponent,
    SurveillanceComponent,
    ExamenComponent,
    DirectionComponent,
    SidebarComponent,
    RegisterFiliereComponent,
    ComptableComponent,
    ScolariteComponent,
    InformatiqueComponent,
    RendezVousComponent,
    ListeFiliereComponent,
    ListeEtudiantComponent,
    ListeParentComponent,
    ListeProfesseurComponent,
    ListeReclammationComponent,
    ListeAdminComponent,
    ListeProgrammeComponent,
    ListeBulletinComponent,
    FooterComponent,
    RegisterComptabilteComponent,
    SidebarDirectionComponent,
    ListeNoteComponent,
    ListecomptableComponent,
    ListeEmploisTempsComponent,
    RegisterMatiereComponent,
    ListeEtudiantExamenComponent,
    ListeMatiereComponent,
    RegisterNiveauComponent,
    ListeNiveauComponent,
    ModifierMatiereComponent,
    ModifierNiveauComponent,
    ModifierFiliereComponent,
    ModifierEtudiantComponent,
    ModifierParentComponent,
    ModifierAdminComponent,
    ModifierProgrammeComponent,
    ModifierNoteComponent,
    ModifierComptabiliteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    RouterLinkActive,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
