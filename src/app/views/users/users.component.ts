import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[] = []
  usersSave = {
    Id:'11',
    name:'Jonathan Adrian',
    username: 'Aguirre',
    email:'jonathan.com',
    address: 'Calle 895',
    city: 'Quilmes',
    zipcode: '1881',
    phone: '1125592688'
  }

 constructor(private usersService: UserServicesService) {}

  ngOnInit(){
    this.usersService.traerUsuarios().subscribe({
      next: (response)=>{
        this.users = response
      }
    })
  }

  saveUsers() {
    this.usersService.saveUsers(this.usersSave).subscribe({
      next: (response)=>{
        console.log(response)
      }
    })
  }
}
