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
import { ListeNiveauComponent } from './liste-niveau/liste-niveau.component';
import { ListeNoteComponent } from './liste-note/liste-note.component';
import { ListeParentComponent } from './liste-parent/liste-parent.component';
import { ListeProfesseurComponent } from './liste-professeur/liste-professeur.component';
import { ListeProgrammeComponent } from './liste-programme/liste-programme.component';
import { ListeReclammationComponent } from './liste-reclammation/liste-reclammation.component';
import { ListecomptableComponent } from './listecomptable/listecomptable.component';
import { LoginComponent } from './login/login.component';
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

const routes: Routes = [
  {path:'administration',component:AdministrationComponent},
  {path:'direction',component:DirectionComponent},
  {path:'etude',component:EtudeComponent},
  {path:'examen',component:ExamenComponent},
  {path:'comptabilite',component:ComptableComponent},
  {path:'scolarite',component:ScolariteComponent},
  {path:'informatique',component:InformatiqueComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'registerAdmin',component:RegisterAdminComponent},
  {path:'registerBulletin',component:RegisterBulletinComponent},
  {path:'registerEmploiTemps',component:RegisterEmploiTempsComponent},
  {path:'registerEtudiant',component:RegisterEtudiantComponent},
  {path:'registerNote',component:RegisterNoteComponent},
  {path:'registerParent',component:RegisterParentComponent},
  {path:'registerProfesseur',component:RegisterProfesseurComponent},
  {path:'registerProgrammes',component:RegisterProgrammeComponent},
  {path:'registerFiliere',component:RegisterFiliereComponent},
  {path:'registerComptabilite',component:RegisterComptabilteComponent},
  {path:'registerMatiere',component:RegisterMatiereComponent},
  {path:'registerNiveau',component:RegisterNiveauComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'rendezvous',component:RendezVousComponent},
  {path:'listeFiliere',component:ListeFiliereComponent},
  {path:'listeStudent',component:ListeEtudiantComponent},
  {path:'listeAdmin',component:ListeAdminComponent},
  {path:'listeParent',component:ListeParentComponent},
  {path:'listeProfesseur',component:ListeProfesseurComponent},
  {path:'ListeRecclammation',component:ListeReclammationComponent},
  {path:'listeProgramme',component:ListeProgrammeComponent},
  {path:'listeBulletin',component:ListeBulletinComponent},
  {path:'listeNote',component:ListeNoteComponent},
  {path:'listeComptable',component:ListecomptableComponent},
  {path:'listeEmploisTemps',component:ListeEmploisTempsComponent},
  {path:'listeEtudiantExamen',component:ListeEtudiantExamenComponent},
  {path:'listeNiveau',component:ListeNiveauComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
