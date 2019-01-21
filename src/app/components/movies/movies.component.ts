import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
) { 
     console.log(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {

  }

}
