import { RouteData } from '../models/route-data.model';
import { HomeComponent } from '../components/views/home/home.component';
import { ResumeComponent } from '../components/views/resume/resume.component';
import { ContactComponent } from '../components/views/contact/contact.component';

export const routeData: RouteData[] = [
  {
    name: 'Home',
    path: '',
    component: HomeComponent
  },
  {
    name: 'Resume',
    path: 'resume',
    component: ResumeComponent
  },
  {
    name: 'Contact',
    path: 'contact',
    component: ContactComponent
  }
];
