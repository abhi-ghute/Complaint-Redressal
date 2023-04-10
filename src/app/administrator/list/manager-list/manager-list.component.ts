import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  managers: any;

  constructor(private router: Router, private managerService: ManagerService) { }

  ngOnInit(): void {
    this.managerService.getAll().subscribe(data => {
      this.managers = data;
    });
  }

  updateform(){

  }

  deleteForm(){
    
  }
  
}
