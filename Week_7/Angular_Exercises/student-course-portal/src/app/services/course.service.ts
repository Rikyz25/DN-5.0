import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses').pipe(
      map(courses => courses.filter(c => (c.credits ?? 0) > 0)),
      tap(courses => console.log('Courses loaded:', courses.length)),
      retry(2),
      catchError(err => throwError(() => new Error('Failed to load courses. Please try again.')))
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3000/courses/${id}`);
  }

  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>('http://localhost:3000/courses', course);
  }

  updateCourse(course: Course): Observable<Course> {
    return this.http.put<Course>(`http://localhost:3000/courses/${course.id}`, course);
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/courses/${id}`);
  }
}
