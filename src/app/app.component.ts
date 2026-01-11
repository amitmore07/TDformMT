import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'TDformMT';
  @ViewChild('singUpForm') singUpForm! : NgForm

  userDetails={
    userName:'Amit More',
    Email: 'amitmore50921@gmail.com',
    secretQuestion: 'FavSport',
    answer:'Cricket',
    isSubscribed:true,
    modeofContact:'Phone'
  }

  mocArr =[
    {

      contactMode: 'Email',
      id: 123
    },
   {

      contactMode: 'Phone',
      id: 124
    },
  ]


  ngOnInit(): void{

  }

  onSubmit(){

  }

  patchdata(){
    this.singUpForm.form.patchValue(this.userDetails)
  }
  
}
