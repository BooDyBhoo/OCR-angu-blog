import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = ' my angu-blog OCR exercice ';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.',
      loveIts: 1,
      created_at: new Date("2019-11-06 19:47")
    },
    {
      title: 'Mon deuxième post',
      content: 'Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.',
      loveIts: 0,
      created_at: new Date("2019-11-07 13:07")
    },
    {
      title: 'Mon dernier post',
      content: 'Et quia Mesopotamiae tractus omnes crebro inquietari sueti praetenturis et stationibus servabantur agrariis, laevorsum flexo itinere Osdroenae subsederat extimas partes, novum parumque aliquando temptatum commentum adgressus. quod si impetrasset, fulminis modo cuncta vastarat. erat autem quod cogitabat huius modi.',
      loveIts: -1,
      created_at: new Date("2019-11-08 17:27")
    },
  ];

}

