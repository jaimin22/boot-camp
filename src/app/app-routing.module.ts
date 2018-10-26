import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ComponentComponent } from './component/component.component';
import { ModelsComponent } from './models/models.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { SaveFormComponent } from './form/save-form/save-form.component';
import { LoginComponent } from './login/login.component';
import { OtherLibraryComponent } from './other-library/other-library.component';
import { BroadcastingComponent} from './broadcasting/broadcasting.component';
const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },

    {
        path: '',
        component: LayoutComponent,

        children: [
            {
                path: 'component',
                component: ComponentComponent,
            },
            {
                path: 'models',
                component: ModelsComponent
            }, {
                path: 'directives',
                component: DirectivesComponent
            }, {
                path: 'pipes',
                component: PipesComponent
            }, {
                path: 'form',
                component: FormComponent
            }, {
                path: 'save-form',
                component: SaveFormComponent
            }, {
                path: 'save-form/:id',
                component: SaveFormComponent
            },
            {
                path: 'other-library',
                component: OtherLibraryComponent
            },
            {
                path: 'broadcasting',
                component: BroadcastingComponent
            },
            { path: '', redirectTo: '/login', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },

    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //{ path: 'dashboard', component: DashboardComponent },
    //{ path: 'detail/:id', component: HeroDetailComponent },
    //{ path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy
        }
    ]
})
export class AppRoutingModule { }
