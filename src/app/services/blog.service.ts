import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    console.log('Post to save:' + JSON.stringify(this.posts));
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
        });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    console.log('newPost' + JSON.stringify(newPost));
    this.posts.push(newPost);
    console.log('after Push' + JSON.stringify(this.posts));
    this.savePosts();
    this.emitPosts();
  }

  removePost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }

  onVote(id: number, vote: string) {
    console.log(this.posts[0]);
    if (vote === 'up') {
      this.posts[id].loveIts ++;
    } else if (vote === 'down') {
      this.posts[id].loveIts --;
    } else  {
      console.log('no vote');
    }
    this.savePosts();
    this.emitPosts();
  }


}
