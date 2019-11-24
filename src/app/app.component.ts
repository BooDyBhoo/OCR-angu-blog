import { Component } from '@angular/core';
import * as firebase from 'firebase';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' my angu-blog OCR exercice ';

  constructor() {
   const firebaseConfig = {
      apiKey: 'AIzaSyA0_9pwrAid4QtfoEez7__dJBqkGI43c98',
      authDomain: 'boodyblog-ocr.firebaseapp.com',
      databaseURL: 'https://boodyblog-ocr.firebaseio.com',
      projectId: 'boodyblog-ocr',
      storageBucket: 'boodyblog-ocr.appspot.com',
      messagingSenderId: '17848938130',
      appId: '1:17848938130:web:dfd899478defd8debc804b'
    };
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  }

}

