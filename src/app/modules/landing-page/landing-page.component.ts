import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  Intro: string = `
  
   Hey, glad you are here. Well a little intro about me. 
   I am a front-end and UI/UX developer by profession with the core focus on UI/UX and Research. 
   I am a freelancer too doing projects in my free time.
  
  `;

  Intro2: string = `

  My most awesome skill is getting the customer on your web/mobile application because I know how to grab the attention of your user. 
  Well, I also love to interact with new startup "starters" over a cup of coffee. 
  Happy to help in any way.
  `;

  Intro3: string = `
  Right now working upon AI and learning about Blockchain technologies.
    
  Cryptocurrencies are what I am reading a lot about.
  `;

  Interests: string = `
  Well for the interests, I love to cook and definitely for my special ones and I can also play some chords on guitar too. ;)

  `;


  startupTalker: string = `
  I love to interact with new startups. If you some solid idea that can create an impact,
  let's have a cup of coffee.
  Ping me or mail me and I will reach you out by myself.
  `;


  AIEnthusiast: string = `

  When I hear about Artifical Intelligence, it drives me crazy. 
  
  Learning a lot about the impact of AI in our society and following Elon Musk a lot (The Ironman itself).

  `;

  UIDeveloper: string = `
  
  My mojo is to Design and Develop.

  I am very much into user experience research and psychology of interaction of a user with the web/mobile app. This is how I roll!

  `;



  constructor() { }

  ngOnInit() {
  }

}
