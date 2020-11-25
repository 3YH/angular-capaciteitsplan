import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-availability-form',
  templateUrl: './availability-form.component.html',
  styleUrls: ['./availability-form.component.scss']
})
export class AvailabilityFormComponent implements OnInit {
  availabilityForm: FormGroup;

  ngOnInit(): void {
    this.availabilityForm = this.createFormGroup();
  }

  private createFormGroup() {
    return new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      middlename: new FormControl(''),
      lastname: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      minHours: new FormControl('', [Validators.required]),
      maxHours: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required])
    });
  }

  public onSubmit() {
    const formObj = this.availabilityForm.value;
    const serializedForm = JSON.stringify(formObj);
  }
}
