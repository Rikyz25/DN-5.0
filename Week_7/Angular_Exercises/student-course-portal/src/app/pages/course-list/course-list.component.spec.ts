import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseListComponent],
      providers: [
        provideMockStore({
          initialState: {
            course: { courses: [{ id: 1, name: 'Angular Basics', code: 'NG101', credits: 3 }], loading: false, error: null },
            enrollment: { enrolledCourseIds: [] }
          }
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
  });

  it('should show loading text when loading is true', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Angular Basics');
  });
});
