import {ChangeDetectionStrategy, Component} from '@angular/core';
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent {
  public title: string = 'ngProject';

  constructor(public loadingService: LoadingService) {
  }
}

