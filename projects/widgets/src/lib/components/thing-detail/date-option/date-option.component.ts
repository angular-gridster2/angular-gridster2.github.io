import { AfterViewChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-date-option',
  templateUrl: './date-option.component.html',
  styleUrls: ['./date-option.component.scss']
})
export class DateOptionComponent implements OnInit, AfterViewChecked {
  @Input() globalConfig: any;

  viewOnly: boolean;
  blocked: boolean;

  days: any[] = [];
  months: any[] = [];
  years: any[] = [];

  fromHours: any[] = [];
  fromMinutes: any[] = [];
  toHours: any[] = [];
  toMinutes: any[] = [];

  selectedDay: any;
  selectedMonth: any;
  selectedYear: any;
  selectedFromHour: any;
  selectedFromMinute: any;
  selectedToHour: any;
  selectedToMinute: any;

  constructor() { }

  ngOnInit() {

      // Days
      for (let i = 1; i <= 31; i++) {
          this.days.push({ label: i.toString(), value: i });
      }
      // Mounths
      const strMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      for (let i = 1; i <= 12; i++) {
          this.months.push({ label: strMonths[i - 1].toString(), value: i });
      }
      // Years
      for (let i = 2000; i <= 3000; i++) {
          this.years.push({ label: i.toString(), value: i });
      }
      // Hours
      for (let i = 1; i <= 24; i++) {
          this.fromHours.push({ label: i.toString(), value: i });
          this.toHours.push({ label: i.toString(), value: i });
      }
      // Minutes
      for (let i = 1; i <= 60; i++) {
          this.fromMinutes.push({ label: i.toString(), value: i });
          this.toMinutes.push({ label: i.toString(), value: i });
      }
  }

  ngAfterViewChecked() {
    this.viewOnly = localStorage.getItem('switchMode') === 'preview' ? true : false;
  }

  onSelectDay(value) {
      this.selectedDay = value;
  }
  onSelectMonth(value) {
      this.selectedMonth = value;
  }
  onSelectYear(value) {
      this.selectedYear = value;
  }
  onSelectFromHour(value) {
      this.selectedFromHour = value;
  }
  onSelectFromMinute(value) {
      this.selectedFromMinute = value;
  }
  onSelectToHour(value) {
      this.selectedToHour = value;
  }
  onSelectToMinute(value) {
      this.selectedToMinute = value;
  }
}
