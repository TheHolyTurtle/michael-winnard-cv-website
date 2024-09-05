import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // you have to add animations in each component in order to use that animation in the xxxxxx.component.html
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s ease-out', style({ opacity: 0 })),
      ])
    ]),
  ],
})
export class HomeComponent implements OnInit {
  testimonials: any[];
  currentTestimonial: any;
  autoplayInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeTestimonials();
    this.startAutoplay();
  }

  initializeTestimonials() {
    this.testimonials = [
      {
        content:
          'Tag dagens bedste beslutning og tag en spændende snak med Michael!',
        author: 'Lasse Klokker Hansen',
        authorLink: 'https://www.linkedin.com/in/lasseklokker/',
      },
      {
        content:
          'Jeg kan stærkt anbefale Michael Winnard. Vi har arbejdet sammen gennem 18 år og han har været en kompentence stærk og inspirerende leder.',
        author: 'Jimmy Toksvig',
        authorLink: 'https://www.linkedin.com/in/jimmy-toksvig/',
      },
      {
        content:
          'Jeg kan kun give mine allerbedste anbefalinger. Jeg har arbejdet tæt sammen med Michael i mange år, og bedre sparringspartner omkring kundeservice, change management og process optimering skal man lede længe efter 😊',
        author: 'Jannie Lørup',
        authorLink: 'https://www.linkedin.com/in/jannie-lørup-1970b34/',
      },
      {
        content:
          'Dette er ikke kun tomme ORD - det er sådan du ER. Fantastisk inspirerende at arbejde sammen med og hjertet på rette sted❤️ Har selv mærket din empatiske måde at lede på og evne til at få det bedste frem i dem, som er omkring dig. De varmeste anbefalinger til dig chef og din næste arbejdsplads er heldige at få dig ombord. 🙏',
        author: 'Mette Dalsgaard Kristensen',
        authorLink:
          'https://www.linkedin.com/in/mette-dalsgaard-kristensen-b803a81b/',
      },
      {
        content:
          'Michael du lærte mig, at ud af frustration kommer udvikling - det har jeg taget med mig videre i livet og hold nu k…., hvor holder det stik 😊 Du er en chef, der ikke er bange for at udvikle og skubbe lidt til de mennesker, der er rundt om dig og det bliver aldrig kedeligt!',
        author: 'Helle Nielsen',
        authorLink: 'https://www.linkedin.com/in/hellenielsen75/',
      },
      {
        content:
          'Jeg kan på det varmeste anbefale Michael! Jeg har fra HR-og ledelsessiden arbejdet sammen med Michael Winnard i mange år. Sjældent finder du en mere dynamisk og innovativ leder og kollega med et højt og positivt energiniveau. Hvis du ansætter Michael får du samtidigt en empatisk leder med høj integritet. Tag dagens bedste beslutning og inviter Michael til en kaffesnak',
        author: 'Claus Johannessen',
        authorLink: 'https://www.linkedin.com/in/clausjohannessen/',
      },
      {
        content:
          'Jeg kan også på det varmeste anbefale Michael, vi havde et super godt samarbejde i min tid som Key Account Manager hos Air France KLM.',
        author: 'Helle Jakobsen',
        authorLink: 'https://www.linkedin.com/in/helle-jakobsen-4a157a4/',
      },
      {
        content:
          'De bedste anbefalinger herfra. Tak fordi du udfordrede mig og for din opbakning. Michael du er en inspirerende leder og et fantastisk menneske.',
        author: 'Lise Svidt Malle',
        authorLink: 'https://www.linkedin.com/in/lise-svidt-malle-4774b499/',
      },
      {
        content:
          'Michael, I will join the crowd in providing my highest recommendation for you. You are a true inspiration as a Leader, and I’m thankful for time we had together in our Team.',
        author: 'Mario (Angelucci) Costa',
        authorLink: 'https://www.linkedin.com/in/mario-costa-40648134/',
      },
      {
        content:
          'Vil på det kraftigeres opfordre mulige ny arbejdsgiver til at tage en snak med dig.💪',
        author: 'Morten Liisborg',
        authorLink: 'https://www.linkedin.com/in/mortenliisborg/',
      },
      {
        content:
          'Du er helt klart empatisk og inspirerende Michael Winnard , og jeg ønsker dig og din næste arbejdsplads alt det bedste 😘💪 Dem der får fat i dig bliver ikke skuffede 😇',
        author: 'Michael Køhler-Jacobsen',
        authorLink:
          'https://www.linkedin.com/in/michael-køhler-jacobsen-15568122/',
      },
      {
        content:
          'Kan kun give dig de bedste og varmeste anbefalinger. Du skabte rum, tryghed og en masse tillid. Du har været én leder, som man ikke kan andet end at se op til.',
        author: 'Laila Gehrt Larsen',
        authorLink: 'https://www.linkedin.com/in/laila-gehrt-larsen-20871b99/',
      },
      {
        content:
          'It was such a joy working together with you and you have been a great inspiration.',
        author: 'Madeleine Hulterström',
        authorLink:
          'https://www.linkedin.com/in/madeleine-hulterström-809916b4/',
      },
      {
        content:
          'De varmeste anbefalinger til Michael. En fantastisk chef, der indeholder de nutidige kompetencer som efterspørges hos en leder i dag.',
        author: 'Marianne Sand',
        authorLink: 'https://www.linkedin.com/in/marianne-sand/',
      },
      {
        content:
          'Jeg kan på det varmeste anbefale Michael. Den mest inspirerende chef jeg har haft, som jeg samtidig ikke kan takke nok for den udvikling han lod mig opleve på bedste vis under hans ledelse. TAK, Michael 🙏',
        author: 'Anne-Cathrine Bangsgaard',
        authorLink:
          'https://www.linkedin.com/in/anne-cathrine-bangsgaard-2642a63/',
      },
      {
        content:
          'Bedste anbefaling fra en, der en gang har haft Michael som chef. Der var aldrig en dårlig dag i mellem Michael.',
        author: 'Peter Thomasen',
        authorLink: 'https://www.linkedin.com/in/p2masen/',
      },
      // Add more testimonials here
    ];
  }

  // As the version of primNG does not autoplay properly, we implement a manual way to "shift" the testimonials to "kickstart" the autoplay
  // we offset the timer, so vi have 10000 ms here and set the [autoplayInterval]="5000" so ever 5 sec, the testimonial shifts
  // (put this in the constructor of this component to have the ref for the function: "private cdr: ChangeDetectorRef" )

  startAutoplay() {

      this.autoplayInterval = setInterval(() => {
        console.log("autoplay")
      }, 1000);  // used to start the autoplay function, this is NOT the way to do it, but the best I can do right now...
    }
  

  ngOnDestroy() {
    console.log('killed autoplay');
    this.stopAutoplay();
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      console.log("stop autoplay")
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }

  // Optimization of the *ngFor loop: https://dev.to/chintanonweb/optimizing-angular-performance-with-trackby-in-ngfor-3i9c#:%7E:text=The%20trackBy%20function%20is%20an,DOM%20when%20the%20list%20changes.
  /*
The trackBy function is an optimization technique in Angular that allows you to specify a unique identifier for each item in the list. 
Angular will then use this identifier to track changes and update only the necessary parts of the DOM when the list changes. 
This can greatly improve the performance of your application when working with large datasets.
*/
  trackByFn(index: string, testimonial) {
    return testimonial.content; // Use content as the unique identifier
  }
}
