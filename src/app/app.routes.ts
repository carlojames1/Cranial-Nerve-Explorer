import { Routes } from '@angular/router';

// MAIN PAGES
import { Landing } from './pages/landing/landing';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Overview } from './pages/overview/overview';
import { Disorders } from './pages/disorders/disorders';

// CRANIAL NERVES
import { Olfactory } from './pages/nerves/olfactory/olfactory';
import { Optic } from './pages/nerves/optic/optic';
import { Oculomotor } from './pages/nerves/oculomotor/oculomotor';
import { Trochlear } from './pages/nerves/trochlear/trochlear';
import { Trigeminal } from './pages/nerves/trigeminal/trigeminal';
import { Abducens } from './pages/nerves/abducens/abducens';
import { Facial } from './pages/nerves/facial/facial';
import { Vestibulocochlear } from './pages/nerves/vestibulocochlear/vestibulocochlear';
import { Glossopharyngeal } from './pages/nerves/glossopharyngeal/glossopharyngeal';
import { Vagus } from './pages/nerves/vagus/vagus';
import { Accessory } from './pages/nerves/accessory/accessory';
import { Hypoglossal } from './pages/nerves/hypoglossal/hypoglossal';

export const routes: Routes = [

  // LANDING (default page)
  { path: '', component: Landing },

  // MAIN NAVIGATION
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  // CONTENT
  { path: 'overview', component: Overview },
  { path: 'disorders', component: Disorders },

  // CRANIAL NERVES ROUTES
  { path: 'olfactory', component: Olfactory},
  { path: 'optic', component: Optic },
  { path: 'oculomotor', component: Oculomotor },
  { path: 'trochlear', component: Trochlear },
  { path: 'trigeminal', component: Trigeminal },
  { path: 'abducens', component: Abducens },
  { path: 'facial', component: Facial },
  { path: 'vestibulocochlear', component: Vestibulocochlear },
  { path: 'glossopharyngeal', component: Glossopharyngeal},
  { path: 'vagus', component: Vagus},
  { path: 'accessory', component: Accessory },
  { path: 'hypoglossal', component: Hypoglossal },

  // FALLBACK (if route not found)
  { path: '**', redirectTo: '' }

];