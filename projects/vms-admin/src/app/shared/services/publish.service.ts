import { Injectable, Inject } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { RestClientService, RestResponseType } from 'projects/rest-client/src/public-api';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { PublishRequestModel, PublishResponseModel } from '../models/publish-model';

@Injectable({
  providedIn: 'root'
})
export class PublishService {

  constructor(
    private loginService: AuthenticationService,
    private restClient: RestClientService,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }


  doPublish(loginGridData: string, dashboardGridData: string, successResponse: (result: PublishResponseModel) => void) {

    let publishRequestModel: PublishRequestModel = {
      username: this.loginService.getUsername(),
      loginGridData: loginGridData,
      dashboardGridData: dashboardGridData
    };

    let url = this.config.apiEndpoint + "design/publish";
    console.log(url);

    this.restClient.post(url, publishRequestModel,
      RestResponseType.RestObservable,
      response => {
        let result: PublishResponseModel = response;
        successResponse(result);
      }
    );
  }

}
