import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  onVote(vote) {
    var actualVote = this.postLoveIts;
    if (vote === 'up') {
      this.postLoveIts ++;
    } else if (vote === 'down') {
      this.postLoveIts --;
    } else  {
      console.log('no vote');
    };

    console.log('Actual Vote=' + this.postLoveIts + ' Action=' + vote);

    //return this.postLoveIts;
  }

  getLoveIt(){
    return this.postLoveIts;
  }

  ngOnInit() {
  }

}
