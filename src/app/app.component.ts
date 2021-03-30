import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';
  list= "";

  // Create a array for adding items i.e data source
  datas = [

      
  ];

  onSubmit(frm){
    console.log(frm.value.txtjob);
    this.list = frm.value.txtjob;
    this.datas.push(this.list);
    

  }
  


  delete(i){

  }
}
