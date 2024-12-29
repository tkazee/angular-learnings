import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  constructor() { }
  
  //appointment:number=100;

  // appointment: Appointment = {
  //   id: 1,
  //   title: 'Dentist',
  //   date: new Date('2020-11-01')
  // }
  appointmentTitle:string='';
  appointmentDate:Date=new Date();

  appointments: Appointment[] = []
  ngOnInit(): void {
    let appointments=localStorage.getItem('appointments');
    if(appointments){
      this.appointments=JSON.parse(appointments);
    }
  }
  addAppointment(){
    // alert("added");
    if(this.appointmentTitle.trim().length && this.appointmentDate){
      let newAppointment:Appointment={
        id:this.appointments.length+1,
        title:this.appointmentTitle,
        date:this.appointmentDate
      }
      this.appointments.push(newAppointment);
      localStorage.setItem('appointments',JSON.stringify(this.appointments));
      //alert(this.appointments.length);
    }

  }

  deleteAppointment(id:number){
    this.appointments.splice(id,1);
    localStorage.setItem('appointments',JSON.stringify(this.appointments));
  }

}
