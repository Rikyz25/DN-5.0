import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { CreditLabelPipe } from '../../pipes/credit-label.pipe';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, HighlightDirective, CreditLabelPipe],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnChanges {
  @Input() course!: Course;
  @Output() enrollRequested = new EventEmitter<number>();
  isExpanded = false;
  enrolled = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course changed', changes['course']?.previousValue, changes['course']?.currentValue);
  }

  get cardClasses() {
    return {
      'card--enrolled': this.enrolled,
      'card--full': (this.course?.credits ?? 0) >= 4,
      expanded: this.isExpanded
    };
  }

  get borderColor(): string {
    switch (this.course?.gradeStatus) {
      case 'passed':
        return 'green';
      case 'failed':
        return 'red';
      default:
        return 'gray';
    }
  }

  enroll(): void {
    this.enrolled = true;
    this.enrollRequested.emit(this.course.id);
  }
}
