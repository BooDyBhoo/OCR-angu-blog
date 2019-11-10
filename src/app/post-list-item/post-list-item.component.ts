import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() posts: any;

  constructor() { }

  onVote(id: number, vote: string) {
    if (vote === 'up') {
      this.posts[id].loveIts ++;
    } else if (vote === 'down') {
      this.posts[id].loveIts --;
    } else  {
      console.log('no vote');
    }
    console.log(this.posts[id].loveIts);
  }

  ngOnInit() {
  }

}
