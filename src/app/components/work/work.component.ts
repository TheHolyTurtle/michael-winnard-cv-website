import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

// Interface for work experience
interface WorkExperience {
  title: string;
  company: string;
  years: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  image: string;
}

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  // you have to add animations in each component in order to use that animation in the xxxxxx.component.html
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class WorkComponent {
  // We create a data model WorkExperience that holds details of each job (title, company, years, description, responsibilities, skills).
  // List of previous work experiences
  workExperiences: WorkExperience[] = [];

  ngOnInit(): void {
    // Populating workExperiences with data extracted from the CV
    this.workExperiences = [
      {
        title: 'Forretningschef – Projektering',
        company: 'OBH Rådgivende Ingeniører',
        years: '2022 - Present',
        description:
          'As a Business Manager at OBH Consulting Engineers, I drive and lead business development initiatives, ensuring that ongoing projects achieve results aligned with strategic goals.',
        responsibilities: [
          'Leading cross-functional change processes and knowledge-sharing activities',
          'Developing and implementing strategic action plans',
          'Supporting and motivating a team of 40 engineers, 5 project managers, and 4 team leaders',
        ],
        skills: [
          'Business Development',
          'Leadership',
          'Strategic Planning',
          'Project Management',
        ],
        image: 'assets/images/obh.jpg',
      },
      {
        title: 'Head of Operations - Global Marine, Offshore and Energy',
        company:
          'Egencia Denmark A/S (now Amex GBT Egencia, an Expedia Company)',
        years: '2018 - 2022',
        description:
          'Led a team of over 100 employees across five global locations, driving operational efficiency in complex, culturally diverse, and international environments.',
        responsibilities: [
          'Defining the organizational design and strategic baseline for the Global Marine, Offshore, and Energy department',
          'Successfully managing global teams and implementing a 24/7, 365-day service offering',
          'Maintaining a focus on quality and performance, continuously exceeding KPI targets',
        ],
        skills: [
          'Global Operations Management',
          'Organizational Design',
          'Performance Management',
          'Stakeholder Communication',
        ],
        image: 'assets/images/offshore.jpg',
      },
      {
        title: 'Head of Operations - Denmark',
        company: 'Egencia Denmark A/S',
        years: '2013 - 2017',
        description:
          'Managed operations in Denmark, optimizing processes, improving service delivery, and increasing efficiency to support the company’s strategic goals.',
        responsibilities: [
          'Led a team of 160 employees',
          'Enhanced service delivery and employee well-being',
          'Ensured a smooth transition to Egencia’s technology platform',
        ],
        skills: [
          'Operations Management',
          'Process Optimization',
          'Team Leadership',
          'Service Quality Improvement',
        ],
        image: 'assets/images/Egencia.png',
      },
      {
        title: 'Travel Agency Manager',
        company: 'Via Travel Group, Denmark',
        years: '2005 - 2012',
        description:
          'Led and coached a team of 60 employees, overseeing daily operations and driving business growth through strategic planning and team development.',
        responsibilities: [
          'Full responsibility for personnel and budget for all agencies in Denmark',
          'Analyzed results and implemented systematic problem-solving strategies',
          'Drove business growth through team development and strategic planning',
        ],
        skills: [
          'Business Management',
          'Team Development',
          'Strategic Planning',
          'Budget Management',
        ],
        image: 'assets/images/via_travel.png',
      },
    ];
  }

  scrollToTop() {
    //if we want to scroll to the top "just quick"
    // document.documentElement.scrollTop = 0;

    //if we want to scroll to the top "slow but nice"
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
