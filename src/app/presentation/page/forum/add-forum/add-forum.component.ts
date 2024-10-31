import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-add-forum',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet
  ],
  templateUrl: './add-forum.component.html',
  styleUrl: './add-forum.component.scss'
})
export class AddForumComponent implements OnInit{

  forumForm!: FormGroup;

  ngOnInit(): void {
    this.forumForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(5)]),
      description: new FormControl("",[Validators.required, Validators.minLength(5)])
    });
  }
  saveForm(){
    console.log(this.forumForm.value)
  }

}
