import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-alert',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {


  message: string = 'Hey !';

  ngOnInit() {

  }

  constructor(public snackBar: MatSnackBar,
    private router: Router ,
    private route: ActivatedRoute) { }

  openSnackBar() {
    
    this.router.navigate(['/movies' , 1]) ;
  
  }
}


@Component({
  selector: 'alert',
  templateUrl: 'alert.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {
  message = "it's me Arafat !"
}



