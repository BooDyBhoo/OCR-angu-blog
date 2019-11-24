import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  @Input() posts: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.postSubscription = this.blogService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.blogService.getPosts();
    this.blogService.emitPosts();
  }

  ngOnDestroy(): void {
    this.postSubscription.unsubscribe();
  }

}
