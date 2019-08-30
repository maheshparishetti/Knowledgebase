import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NgbModal,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-kbase',
  templateUrl: './kbase.component.html',
  styleUrls: ['./kbase.component.css']
})
export class KbaseComponent implements OnInit {
  article_id:string;
  article_name:string;
  published_date:string;
  published_time:string;
  category:string;
  created_by:string;
  description:string;
  image1:string;
  image2:string;
  isAdmin:boolean;
  arr:Article[]=[
  new Article('1','testing','8/29/2019','6:15:09 AM',' Office - Practice Management','Admin Manju','google testing','http://qa.zoomteams.com/images/a3.jpg','',true),
  new Article('2','Hundreds Defy Curfew in Kargil','8/6/2019','7:49:14 AM','Office - Practice Management','Harsha Mitlakod','Kargil: Several people were detained in Kargil on Thursday after they defied res...','http://qa.zoomteams.com/images/a3.jpg','',false),
  new Article('3','Govt to Double National Fellowship for SC Stu','8/6/2019','7:46:20 AM','Surgical Authorizations & Verifications',' Harsha Mitlakod','The National Fellowship was launched by the government in 2005 as the Rajiv Gand...','http://qa.zoomteams.com/images/a3.jpg','',false),
  new Article('4','All-New BMW 3-Series Launched in India at Rs','8/6/2019','5:36:39 AM',' Accounts Recivables - Collections','Admin Manju','The all-new BMW 3 Series is available in two diesel variants (BMW 320d Sport and...','http://qa.zoomteams.com/images/a3.jpg','',true),
  new Article('5','Govt to Double National Fellowship for SC Stu','8/2/2019 ','10:45:59 AM',' Accounts Recivables - Collections','Harsha Mitlakod','he all-new BMW 3 Series is available in two diesel variants (BMW 320d Sport and ...','http://qa.zoomteams.com/images/a3.jpg','',false),
  new Article('5','Petrol in the national capital costs Rs 71.84 per litre and diesel is priced at Rs 65.11 a litre. In adjoining Noida','8/1/2019 ','1:25:07 PM',' Accounts Recivables - Collections',' Admin Manju','Petrol in the national capital costs Rs 71.84 per litre and diesel is priced at ...','http://qa.zoomteams.com/images/a3.jpg','',true),
  new Article('5','Pakistan Asks UNICEF to Remove Priyanka Chopr','8/1/2019 ',' 1:21:14 PM',' Accounts Recivables - Collections','Admin Manju','Pakistan Human Rights Minister has written to the UNICEF demanding the removal o...','http://qa.zoomteams.com/images/a3.jpg','',true)
];

  constructor(private modalService: NgbModal,private fb: FormBuilder) { }
kbase:FormGroup;
closeResult: string;
updatedItem;
  ngOnInit() {
    this.kbase=this.fb.group({
      article_id:new FormControl(),
      article_name:new FormControl(),
      published_date:new FormControl(),
      published_time:new FormControl(),
      category:new FormControl(),
      created_by:new FormControl(),
      description:new FormControl(),
      image1:new FormControl(),
      image2:new FormControl()

    });

  }
  openEdit(content,i){
    console.log(i);

    this.updatedItem = i;
    this.kbase.patchValue({
      article_id : this.arr[i].article_id,
      article_name:this.arr[i].article_name,
      published_date: this.arr[i].published_date,
      category: this.arr[i].category,
      created_by:this.arr[i].created_by,
      description:this.arr[i].description,
      image1:this.arr[i].image1,
      image2: this.arr[i].image2

    });
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    result => {
    this.closeResult = `Closed with: ${result}`;
    },
    reason => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    }
    );
    }
    private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
    } else {
    return `with: ${reason}`;
    }
    }
    UpdateItem() {
      let data = this.updatedItem;
      // console.log(data);
      for (let i = 0; i < this.arr.length; i++) {
      if (i == data) {
      this.arr[i].article_id= this.kbase.value.article_id;
      this.arr[i].article_name = this.kbase.value.article_name;
      this.arr[i].published_date = this.kbase.value.published_date;
      this.arr[i].category = this.kbase.value.category;
      this.arr[i].created_by = this.kbase.value.created_by;
      this.arr[i].description = this.kbase.value.description;
      this.arr[i].image1 = this.kbase.value.image1;
      this.arr[i].image2 = this.kbase.value.image2;
this.modalService.dismissAll();

      // console.log(this.arr);
      // this.task_id='';
      // this.title='';
      // this.due_date='';
      // this.desc='';
      // this.priority='';
      // this.assigned_to='';
      // this.assigned_date='';
      // this.comments='';
      // this.status='';
      // alert('Updated Successfully');
      }
      }
      }
    }

