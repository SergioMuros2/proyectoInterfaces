import { Routes } from '@angular/router';
import { SeccionUsuario } from './components/seccion-usuario/seccion-usuario';
import { PanelComponent } from './components/panel/panel.component/panel.component';


export const routes: Routes = [
  { path: 'seccion-usuario', component: SeccionUsuario },
  { path: 'panel', component: PanelComponent },
  { path: '', redirectTo: 'seccion-usuario', pathMatch: 'full' },
  { path: '**', redirectTo: 'seccion-usuario' }
];
