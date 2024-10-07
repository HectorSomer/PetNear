import { Routes } from '@angular/router';
import { LoginVetirinariaComponent } from '../components/login-vetirinaria/login-vetirinaria.component';
import { LoginClienteComponent } from '../components/login-cliente/login-cliente.component';
import { RegisterVeterinariaComponent } from '../components/register-veterinaria/register-veterinaria.component';
import { RegisterClienteComponent } from '../components/register-cliente/register-cliente.component';
import { AcceptProposaleComponent } from '../components/accept-proposale/accept-proposale.component';
import { AcceptPackageComponent } from '../components/accept-package/accept-package.component';
import { AddProposalComponent } from '../components/add-proposal/add-proposal.component';
import { ViewMyProposalsComponent } from '../components/view-my-proposals/view-my-proposals.component';
import { FormEditProposalComponent } from '../components/form-edit-proposal/form-edit-proposal.component';

export const routes: Routes = [
    {path:"veterinaria/registro", component: RegisterVeterinariaComponent},
    {path:"", component: RegisterClienteComponent},
    {path:"login/cliente", component: LoginClienteComponent},
    {path:"login/veterinaria", component: LoginVetirinariaComponent},
    {path:"proposales", component: AcceptProposaleComponent},
    {path:"packages", component: AcceptPackageComponent},
    {path:"addProposal", component: AddProposalComponent},
    {path: "viewProposals", component: ViewMyProposalsComponent},
    {path: "editProposal", component: FormEditProposalComponent}
];
