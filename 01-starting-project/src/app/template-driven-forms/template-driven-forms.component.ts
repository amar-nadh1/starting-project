import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.css'
})
export class TemplateDrivenFormsComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  get filledPercentage(): number {
    const fields = Object.values(this.user);
    const filled = fields.filter(value => value && value.trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  }

  onSubmit() {
    console.log('Form submitted:', this.user);
  }

}
