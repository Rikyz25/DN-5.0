import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export function courseCodeValidator(control: AbstractControl) {
  const value = String(control.value || '');
  return /^CS\d{3}$/.test(value) ? null : { invalidCourseCode: true };
}

@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent {
  form = this.fb.group({
    studentName: ['', [Validators.required, Validators.minLength(3)]],
    studentEmail: ['', [Validators.required, Validators.email]],
    courseCode: ['', [Validators.required, courseCodeValidator]],
    semester: ['Odd', Validators.required],
    notes: ['']
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.form.value);
  }
}
