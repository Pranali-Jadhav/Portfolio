import {
  Component,
  HostListener,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AudioService } from 'src/services/audio.service';
import { Router } from '@angular/router';
import { ScrollService } from 'src/services/scroll.service';

export interface Slide {
  imagePath: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

@Component({
  selector: 'app-portfolio1',
  templateUrl: './portfolio1.component.html',
  styleUrls: ['./portfolio1.component.css'],
  animations: [
    trigger('boxEntrance', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-20px)' }),
        animate(
          '500ms ease-in',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ]),
    ]),

    trigger('slideContentAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('slideImageAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('walmartAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('googleAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('sahajAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('contactSlide', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('slideFromLeft', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),

    trigger('slideFromRight', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
    trigger('boxSlide', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(20px)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in')),
    ]),
    trigger('boxHover', [
      state(
        'hover',
        style({
          transform: 'translateY(-10px)',
        })
      ),
      state(
        'rest',
        style({
          transform: 'translateY(0)',
        })
      ),
      transition('rest => hover', animate('200ms ease-in')),
      transition('hover => rest', animate('200ms ease-out')),
    ]),
  ],
})
export class Portfolio1Component implements OnInit {
  activeTab: string = 'content1';

  showContent(tab: string): void {
    this.activeTab = tab;
  }

  scrollTo(elementId: string): void {
    const element = this.el.nativeElement.querySelector(`#${elementId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  h1State = 'hide';
  pState = 'hide';
  walmartState = 'hide';
  googleState = 'hide';
  sahajState = 'hide';

  boxStates: string[] = ['hide', 'hide', 'hide'];
  boxHoverState: string[] = ['rest', 'rest', 'rest'];
  contactState: string = 'hide';
  boxAnimationStates: string[] = ['hide', 'hide', 'hide'];

  slideContentState = 'hide';
  slideImageState = 'hide';

  @HostListener('window:scroll', ['$event'])
  onScroll = () => {
    this.checkScroll();
  };
  onBoxHover(state: string, index: number): void {
    this.boxHoverState[index] = state;
  }

  checkScroll() {
    const scrollPosition = window.pageYOffset;
    const h1ScrollTriggerPosition = 300;
    const pScrollTriggerPosition = 500;
    const boxScrollTriggerPosition = 800;
    const contactScrollTriggerPosition = 300;
    const walmartScrollTriggerPosition = 1000;
    const googleScrollTriggerPosition = 1600;
    const sahajScrollTriggerPosition = 2000;
    const boxScrollTriggerPosition1 = 2500;
    const projectsScrollTriggerPosition = 2500;

    for (let i = 0; i < this.boxAnimationStates.length; i++) {
      const boxOffset = i * 200;

      if (scrollPosition > boxScrollTriggerPosition1 + boxOffset) {
        this.boxAnimationStates[i] = 'show';
      }
    }

    if (scrollPosition > projectsScrollTriggerPosition) {
      this.slideContentState = 'show';
      this.slideImageState = 'show';
    } else {
      this.slideContentState = 'hide';
      this.slideImageState = 'hide';
    }

    if (scrollPosition > h1ScrollTriggerPosition) {
      this.h1State = 'show';
    } else {
      this.h1State = 'hide';
    }

    if (scrollPosition > pScrollTriggerPosition) {
      this.pState = 'show';
    } else {
      this.pState = 'hide';
    }
    if (scrollPosition > contactScrollTriggerPosition) {
      this.contactState = 'show';
    } else {
      this.contactState = 'hide';
    }

    if (scrollPosition > walmartScrollTriggerPosition) {
      this.walmartState = 'show';
    } else {
      this.walmartState = 'hide';
    }

    if (scrollPosition > googleScrollTriggerPosition) {
      this.googleState = 'show';
    } else {
      this.googleState = 'hide';
    }

    if (scrollPosition > sahajScrollTriggerPosition) {
      this.sahajState = 'show';
    } else {
      this.sahajState = 'hide';
    }

    for (let i = 0; i < this.boxStates.length; i++) {
      const boxOffset = i * 200;
      if (scrollPosition > boxScrollTriggerPosition + boxOffset) {
        this.boxStates[i] = 'show';
      } else {
        this.boxStates[i] = 'hide';
      }
    }
  }

  constructor(
    private audioService: AudioService,
    private router: Router,
    private el: ElementRef,
    private scrollService: ScrollService
  ) {}
  ngOnInit(): void {}

  toggleSound() {
    if (this.audioService.isPlaying()) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
  }

  currentIndex = 0;

  slides: Slide[] = [
    {
      imagePath: '../assets/Images/p1.jpg',

      projectName: 'Amusement Park Management System',
      projectDescription:
        ' Built operational amusement management website with MySQL-PHP backend and JavaScript-HTML-CSS frontend.',
      projectLink:
        'https://github.com/Neha-Vaidya/Amusement_Park_Management_System',
    },
    {
      imagePath: '../assets/Images/p6.avif',

      projectName: 'Notes Application',
      projectDescription:
        'Made a fully working educational android application for keeping essential notes using kotlin language.',
      projectLink: 'https://github.com/Pranali-Jadhav/Notes-Application',
    },
    {
      imagePath: '../assets/Images/p8.jpeg',

      projectName: 'Online Shopping Portal',
      projectDescription:
        ' Accomplished a data structure mini project "Online shopping portal"  using Linked List.',
      projectLink:
        'https://github.com/Neha-Vaidya/Online-Shopping-Portal-Project',
    },
    {
      imagePath: '../assets/Images/p4.jpg',

      projectName: 'WorldWatch Application',
      projectDescription:
        'Crafted a responsive Flutter application using Dart language, highlighting time variances across diverse countries.',
      projectLink:
        'https://github.com/Pranali-Jadhav/World-Time-Zone---flutter',
    },
  ];

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
  goToSlide(index: number): void {
    this.currentIndex = index;
  }

  redirectToProjectLink(link: string): void {
    this.router.navigateByUrl(link);
    console.log('Redirecting to:', link);
  }

  downloadResume(): void {
    const resumePath = '../assets/resumepdf/resume.pdf';

    fetch(resumePath)
      .then((response) => response.blob())
      .then((blob) => {
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'resume.pdf';

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      });
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollTo(sectionId);
  }
  changeCursor(cursorStyle: string): void {
    document.body.style.cursor = cursorStyle;
  }
}
