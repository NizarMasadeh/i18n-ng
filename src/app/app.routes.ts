
import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
        data: {
            animation: 'homePage'
        }
    },
    {
        path: 'about',
        component: About,
        data: {
            animation: 'aboutPage'
        }
    },
    {
        path: 'services',
        component: Services,
        data: {
            animation: 'servicesPage'
        }
    },
    {
        path: 'contact',
        component: Contact,
        data: {
            animation: 'contactPage'
        }
    },
    {
        path: '**',
        redirectTo: 'home',
        data: {
            animation: 'homeRoutePage'
        }
    }
];