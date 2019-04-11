import { TestDemoService } from '../services/testdemo.service';
import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { TestDemoObj } from '../objects/testserverdemo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-server',
  templateUrl: './test-server.component.html',
  styleUrls: ['./test-server.component.css']
})
export class TestServerComponent implements OnInit {

  private testObs: Observable<TestDemoObj[]>;
  private testList: TestDemoObj[];
  //two-way data binding applied onto this with ngModel
                   //Be sure to import FormsModule!
  private inputText: string;
  private inputJson;
  testObject: TestDemoObj = { name : " "};
  
  constructor(private testService: TestDemoService) { }

  ngOnInit() {
  }

  loadTest():  void {
    console.log("INSIDE LOAD TEST")
    this.testService.getTest().subscribe(
      resp => {
        this.testList = resp as TestDemoObj[]; 
        console.log(this.testList);
      }
    );
  }

  sendTest(): void {
    console.log("INSIDE SEND TEST");
    console.log("TEST VALUE: "  + this.inputText);
    this.testObject.name = this.inputText;
    let json = JSON.stringify(this.testObject);
    console.log("NOW WE HAVE A JSON made from our Object: " + json);
    this.testService.postTest(json).subscribe(
        testResponse => {
    
          console.log("POST EXECUTED SUCCESSFULLY! 'Load' to see it in our DB");
   
          });
        }
  }

