import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ComptableComponent } from './comptable/comptable.component';
import { DirectionComponent } from './direction/direction.component';
import { EtudeComponent } from './etude/etude.component';
import { ExamenComponent } from './examen/examen.component';
import { HomeComponent } from './home/home.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { ListeAdminComponent } from './liste-admin/liste-admin.component';
import { ListeBulletinComponent } from './liste-bulletin/liste-bulletin.component';
import { ListeEmploisTempsComponent } from './liste-emplois-temps/liste-emplois-temps.component';
import { ListeEtudiantExamenComponent } from './liste-etudiant-examen/liste-etudiant-examen.component';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { ListeFiliereComponent } from './liste-filiere/liste-filiere.component';
import { ListeMatiereComponent } from './liste-matiere/liste-matiere.component';
import { ListeNiveauComponent } from './liste-niveau/liste-niveau.component';
import { ListeNoteComponent } from './liste-note/liste-note.component';
import { ListeParentComponent } from './liste-parent/liste-parent.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { ListeProgrammeComponent } from './liste-programme/liste-programme.component';
import { ListeReclammationComponent } from './liste-reclammation/liste-reclammation.component';
import { ListecomptableComponent } from './listecomptable/listecomptable.component';
import { LoginComponent } from './login/login.component';
import { ModifierAdminComponent } from './modifier-admin/modifier-admin.component';
import { ModifierBulletinComponent } from './modifier-bulletin/modifier-bulletin.component';
import { ModifierComptabiliteComponent } from './modifier-comptabilite/modifier-comptabilite.component';
import { ModifierEmploisTempsComponent } from './modifier-emplois-temps/modifier-emplois-temps.component';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { ModifierFiliereComponent } from './modifier-filiere/modifier-filiere.component';
import { ModifierMatiereComponent } from './modifier-matiere/modifier-matiere.component';
import { ModifierNiveauComponent } from './modifier-niveau/modifier-niveau.component';
import { ModifierNoteComponent } from './modifier-note/modifier-note.component';
import { ModifierParentComponent } from './modifier-parent/modifier-parent.component';
import { ModifierProgrammeComponent } from './modifier-programme/modifier-programme.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterBulletinComponent } from './register-bulletin/register-bulletin.component';
import { RegisterComptabilteComponent } from './register-comptabilte/register-comptabilte.component';
import { RegisterEmploiTempsComponent } from './register-emploi-temps/register-emploi-temps.component';
import { RegisterEtudiantComponent } from './register-etudiant/register-etudiant.component';
import { RegisterFiliereComponent } from './register-filiere/register-filiere.component';
import { RegisterMatiereComponent } from './register-matiere/register-matiere.component';
import { RegisterNiveauComponent } from './register-niveau/register-niveau.component';
import { RegisterNoteComponent } from './register-note/register-note.component';
import { RegisterParentComponent } from './register-parent/register-parent.component';
import { RegisterProfesseurComponent } from './register-professeur/register-professeur.component';
import { RegisterProgrammeComponent } from './register-programme/register-programme.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { ScolariteComponent } from './scolarite/scolarite.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
const redirect = ()=> redirectUnauthorizedTo(['login'])


const routes: Routes = [
  {path:'administration',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:AdministrationComponent},
  {path:'direction',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:DirectionComponent},
  {path:'etude',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:EtudeComponent},
  {path:'examen',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ExamenComponent},
  {path:'comptabilite',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ComptableComponent},
  {path:'scolarite',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ScolariteComponent},
  {path:'informatique',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:InformatiqueComponent},
  {path:'home',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'registerAdmin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterAdminComponent},
  {path:'registerBulletin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterBulletinComponent},
  {path:'registerEmploiTemps',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterEmploiTempsComponent},
  {path:'registerEtudiant',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterEtudiantComponent},
  {path:'registerNote',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterNoteComponent},
  {path:'registerParent',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterParentComponent},
  {path:'registerProfesseur',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterProfesseurComponent},
  {path:'registerProgrammes',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterProgrammeComponent},
  {path:'registerFiliere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterFiliereComponent},
  {path:'registerComptabilite',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterComptabilteComponent},
  {path:'registerMatiere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterMatiereComponent},
  {path:'registerNiveau',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RegisterNiveauComponent},
  {path:'sidebar',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:SidebarComponent},
  {path:'rendezvous',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:RendezVousComponent},
  {path:'listeFiliere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeFiliereComponent},
  {path:'listeStudent',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeEtudiantComponent},
  {path:'listeAdmin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeAdminComponent},
  {path:'listeParent',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeParentComponent},
  {path:'listeProfesseur',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeProfesseurComponent},
  {path:'ListeRecclammation',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeReclammationComponent},
  {path:'listeProgramme',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeProgrammeComponent},
  {path:'listeBulletin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeBulletinComponent},
  {path:'listeNote',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeNoteComponent},
  {path:'listeComptable',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListecomptableComponent},
  {path:'listeEmploisTemps',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeEmploisTempsComponent},
  {path:'listeEtudiantExamen',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeEtudiantExamenComponent},
  {path:'listeNiveau',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeNiveauComponent},
  {path:'listeMatiere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ListeMatiereComponent},
  {path:'ModifierMatiere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierMatiereComponent},
  {path:'ModifierNiveau',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierNiveauComponent},
  {path:'ModifierFiliere',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierFiliereComponent},
  {path:'ModifierEtudiant',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierEtudiantComponent},
  {path:'ModifierParent',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierParentComponent},
  {path:'ModifierAdmin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierAdminComponent},
  {path:'ModifierProgramme',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierProgrammeComponent},
  {path:'ModifierNote',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierNoteComponent},
  {path:'ModifierComptabilite',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierComptabiliteComponent},
  {path:'ModifierEmploisTemps',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierEmploisTempsComponent},
  {path:'ModifierBulletin',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redirect},component:ModifierBulletinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule,BrowserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
