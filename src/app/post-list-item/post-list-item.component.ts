import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../services/blog.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})

export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: string;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  onVote(id: number, vote: string) {
   this.blogService.onVote(id, vote);
  }

  getLoveIt() {
    return this.postLoveIts;
  }

  onDeletePost(id: number) {
    this.blogService.removePost(id);
  }

}
