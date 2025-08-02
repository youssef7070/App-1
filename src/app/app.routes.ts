// app.routes.ts
import { Routes } from '@angular/router';
import { About } from './components/About/about';
import { Portfolio } from './components/portfolio/portfolio';
import { Contact } from './components/Contact/contact';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: 'about', component: About, title: 'about' },
    { path: 'portfolio', component: Portfolio, title: 'portfolio' },
    { path: 'contact', component: Contact, title: 'contact' },
    { path: 'home', component: Home, title: 'Home' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '' },
];