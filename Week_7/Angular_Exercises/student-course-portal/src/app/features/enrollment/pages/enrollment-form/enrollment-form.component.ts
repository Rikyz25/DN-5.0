import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CourseService } from '../../../../services/course.service';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent {
  model = {
    studentName: '',
    studentEmail: '',
    courseId: null as number | null,
    preferredSemester: 'Odd',
    agreeToTerms: false
  };

  constructor(private courseService: CourseService) {}

  onSubmit(form: NgForm): void {
    console.log(form.value, form.valid);
    if (form.valid) {
      this.courseService.createCourse({
        name: this.model.studentName,
        code: 'NEW101',
        credits: this.model.courseId,
        gradeStatus: 'pending'
      }).subscribe();
    }
  }
}
