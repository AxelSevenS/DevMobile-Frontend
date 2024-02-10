import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MediaService } from 'src/app/media/media.service';

@Component({
  selector: 'app-mark',
  templateUrl: 'mark.page.html',
  styleUrls: ['mark.page.scss']
})
export class MarkPage {

  publishMediaForm: FormGroup = this.formBuilder.group(
    {
      name: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required]
    }
  );

  private file?: File;



  constructor(
    private router: Router,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private mediaService: MediaService
  ) {}
  
  ngOnInit(): void {
  }
  
  setImage(_event: any) {
    this.file = _event.target.files![0];
  }

  onSubmit(): void {
    if ( ! this.file ) return;
    if ( ! this.publishMediaForm.valid ) return;

    this.mediaService.createMedia(
      this.publishMediaForm.controls['name'].value, 
      this.publishMediaForm.controls['description'].value, 
      this.file
    )
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/media', res.id]);
        }
      })
  }
}