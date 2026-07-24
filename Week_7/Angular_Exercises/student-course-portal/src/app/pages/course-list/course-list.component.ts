import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../../models/course.model';
import { loadCourses } from '../../store/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courses$: Observable<Course[]> = this.store.select(selectAllCourses);
  loading$ = this.store.select(selectCoursesLoading);
  error$ = this.store.select(selectCoursesError);

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
  }

  onEnroll(courseId: number): void {
    console.log('Enrolling in course: ' + courseId);
    this.router.navigate(['courses', courseId]);
  }

  trackByCourseId(_: number, course: Course): number {
    return course.id;
  }
}
