import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';

export const routes: Routes = [  
    {path: '', redirectTo: '/acceuil', pathMatch: 'full'},
    {path: 'acceuil', component: Acceuil},
];
