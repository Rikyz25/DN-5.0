import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="detail-card"><h2>Course Detail</h2><p>Course ID: {{ id }}</p><p *ngIf="course">{{ course.name }} - {{ course.code }}</p></section>`,
  styles: [`.detail-card { padding: 24px; background: #fff; border-radius: 16px; }`]
})
export class CourseDetailComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  course?: Course;

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

  ngOnInit(): void {
    const courseId = Number(this.id);
    if (!Number.isNaN(courseId)) {
      this.courseService.getCourseById(courseId).subscribe(course => (this.course = course));
    }
  }
}
