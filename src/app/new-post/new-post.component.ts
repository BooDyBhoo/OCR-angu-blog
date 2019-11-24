import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import {BlogService} from '../services/blog.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  isValidFormSubmitted = null;

  constructor(private formBuilder: FormBuilder,
              private BlogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      content: ['', [Validators.required, Validators.maxLength(500)]]
    });
  }

  onSavePost() {
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const loveIts = 0;
    const createdAt = formatDate(new Date(),  'dd/MM/yyyy HH:mm', 'fr');
    const newPost = new Post(title, content, loveIts, createdAt);
    this.BlogService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

  get titleToValidate() {
    return this.postForm.get('title');
  }

  get contentToValidate() {
    return this.postForm.get('content');
  }


}
