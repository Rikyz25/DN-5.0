import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  { path: 'profile', component: StudentProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'enroll',
    loadChildren: () => import('./features/enrollment/enrollment.routes').then(m => m.ENROLLMENT_ROUTES)
  },
  { path: '**', component: NotFoundComponent }
];
