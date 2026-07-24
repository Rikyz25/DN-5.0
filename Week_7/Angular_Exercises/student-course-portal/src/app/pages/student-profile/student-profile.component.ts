import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  template: `<section class="profile-card"><h2>Student Profile</h2><p>Logged-in profile content.</p></section>`,
  styles: [`.profile-card { padding: 24px; background: #fff; border-radius: 16px; }`]
})
export class StudentProfileComponent {}
