import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Service
import { CommonService } from '../common/common.service';

// plugin
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-spacex-program',
  templateUrl: './spacex-program.component.html'
})
export class SpacexProgramComponent implements OnInit {

  public spaceLaunuchList: any = [];
  public filterYear: any;
  public filterLaunch: any;
  public filterLand: any;
  public param: any = {};
  public launchYear: any = [];
  public successLaunch: any = [
    { value: 'true', selected: false },
    { value: 'false', selected: false }
  ];
  public successLand: any = [
    { value: 'true', selected: false },
    { value: 'false', selected: false }
  ];

  constructor(
    public commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ngxService: NgxUiLoaderService
  ) {
    // to generate launch array from 2006-2020
    for (var i = 2006; i < 2021; i++) {
      this.launchYear.push({ year: i, selected: false })
    }

    // getting params from url
    this.activatedRoute.queryParams.subscribe((param) => {
      this.param = param;
    })

    // called when filters are present in router on refresh
    if (Object.getOwnPropertyNames(this.param).length > 0) {
      this.commonFilter(this.param);
    }
  }

  ngOnInit() {
  // called when no filters are present in router on refresh
    if (!Object.getOwnPropertyNames(this.param).length) {
      this.ngxService.start();
      this.commonService.callApi('launches?limit=100', this.param, 'get').then((success) => {
        this.spaceLaunuchList = success;
        this.ngxService.stop();
      });
    }

  }
  /*******************************************************
    @PURPOSE : called on clicking of Successlaunch option
  *******************************************************/
      successfulLand(land) {
        this.commonFilterLand(land);
        this.commonMethod();
      }

  /******************************************************
   @PURPOSE : called on click of Successlaunch option
  ******************************************************/
  successfulLaunch(launch) {
    this.commonFilterLaunch(launch);
    this.commonMethod();
  }

  /******************************************
   @PURPOSE : called on click of any year
  *******************************************/
  selectedLaunchYear(year) {
    this.commonFilterYear(year);
    this.commonMethod();
  }

  /*****************************************************************
   @PURPOSE : To set true value on selected launchYear button
  ******************************************************************/
  commonFilterYear(year) {
    this.filterYear = year;
    this.launchYear.map((e) => {
      e.selected = (e.year == this.filterYear ? true : false);
    });
  }

  /******************************************************************
   @PURPOSE : To set true value on selected successLaunch button
  *******************************************************************/
  commonFilterLaunch(launch) {
    this.filterLaunch = launch;
    this.successLaunch.map((e) => {
      e.selected = (e.value === this.filterLaunch ? true : false);
    });
  }

  /******************************************************************
   @PURPOSE : To set true value on selected successLand button
  *******************************************************************/
  commonFilterLand(land) {
    this.filterLand = land;
    this.successLand.map((e) => {
      e.selected = (e.value === this.filterLand ? true : false);
    });
  }

  /***********************************************************
   @PURPOSE : To set true value on selected launchYear button
  ************************************************************/
  commonFilter(params) {
    if (params.launch_year) {
      this.commonFilterYear(params.launch_year);
    }
    if (params.launch_success != undefined) {
      this.commonFilterLaunch(params.launch_success);
    }
    if (params.land_success != undefined) {
      this.commonFilterLand(params.land_success);
    }
    this.commonMethod();
  }

  /******************************************
   @PURPOSE : For getting the List from API
  /******************************************/
  commonMethod() {
    this.ngxService.start();
    this.param = {};
    if (this.filterYear && this.filterLaunch !== undefined && this.filterLand !== undefined) {
      this.param.launch_year = this.filterYear;
      this.param.launch_success = this.filterLaunch;
      this.param.land_success = this.filterLand;
    } else if (this.filterLand !== undefined && this.filterYear) {
      this.param.launch_year = this.filterYear;
      this.param.land_success = this.filterLand;
    } else if (this.filterLaunch !== undefined && this.filterYear) {
      this.param.launch_success = this.filterLaunch;
      this.param.launch_year = this.filterYear;
    } else if (this.filterLaunch !== undefined && this.filterLand !== undefined) {
      this.param.launch_success = this.filterLaunch;
      this.param.land_success = this.filterLand;
    } else if (this.filterLand !== undefined) {
      this.param.land_success = this.filterLand;
    } else if (this.filterLaunch !== undefined) {
      this.param.launch_success = this.filterLaunch;
    } else if (this.filterYear) {
      this.param.launch_year = this.filterYear;
    }
    this.router.navigate([],
      {
        relativeTo: this.activatedRoute,
        queryParams: this.param,
        replaceUrl: true, // remove to replace all query params by provided
      });
    this.commonService.callApi('launches?limit=100', this.param, 'get').then((success) => {
      this.spaceLaunuchList = success;
      this.ngxService.stop();
    });

  }
}
