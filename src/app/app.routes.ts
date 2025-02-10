import { RouterModule, Routes } from '@angular/router'
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { Aptitudes2Component } from './aptitudes2/aptitudes2.component';
import { ContactoComponent } from './contacto/contacto.component';

const APP_ROUTES: Routes = [
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'aptitudes2', component: Aptitudes2Component},
  {path: 'contacto', component: ContactoComponent},

  {path:'**', pathMatch:'full', redirectTo:'aptitudes'}

]

export const app_routing = RouterModule.forRoot(APP_ROUTES)
