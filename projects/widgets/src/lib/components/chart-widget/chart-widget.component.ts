import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
declare var zingchart: any;
// refer: https://www.zingchart.com/gallery/stacked-area-chart-with-crosshair

@Component({
  selector: 'lib-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  @ViewChild('chartContainerRef') el: ElementRef;
  @Input() widget: any;
  @Input() gridInfo: any;
  public graphConfig: any;
  private id: string;

  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit(): void {
    this.initConfig();
    // Key is unique
    this.id = `graph-${new Date().getTime()}`;
  }

  ngAfterViewInit() {
    // Use Angular's Renderer2 to create the div element
    const divContainer = this.renderer2.createElement('div');
    // Set the id of the div
    this.renderer2.setProperty(divContainer, 'id', this.id);
    // Add class
    this.renderer2.addClass(divContainer, 'h-100');
    this.renderer2.addClass(divContainer, 'w-100');
    // Append the created div to the body element
    this.renderer2.appendChild(this.el.nativeElement, divContainer);
    // Render
    setTimeout(() => {
      zingchart.render({
        id: this.id,
        data: this.graphConfig,
        height: '100%',
        width: '100%'
      });
    }, 0);
  }

  ngAfterViewChecked() {
    // Remove "Power by zingchart"
    const loop = setInterval(() => {
      const els = document.querySelectorAll('[id*="license-text"]');
      if (els.length > 0) {
        els.forEach(e => {
          e.innerHTML = '';
        });
      }
    }, 1000);
    // after 5 seconds stop
    setTimeout(() => clearInterval(loop), 5000);
  }

  ngOnDestroy() {
    zingchart.exec(this.id, 'destroy');
  }

  initConfig() {
    switch (this.widget.config.type) {
      case 'line':
        this.graphConfig = this.lineJSON(this.widget);
        break;
      case 'area':
        this.graphConfig = this.areaJSON(this.widget);
        break;
      case 'bar':
        this.graphConfig = this.barJSON(this.widget);
        break;
      case 'hbar':
        this.graphConfig = this.barJSON(this.widget);
        break;
      case 'bar3d':
        this.graphConfig = this.barJSON(this.widget);
        break;
      case 'pie':
        this.graphConfig = this.pieJSON(this.widget);
        break;
      default:
        break;
    }
  }

  lineJSON(widget) {
    const xAxis = widget.config.graphOption.xAxis;
    const yAxis = widget.config.graphOption.yAxis;
    const valueScaleX = widget.config.graphOption.valueScaleX;
    const valueScaleY = widget.config.graphOption.valueScaleY;
    const series = [{
      values: widget.config.values,
      lineWidth: '1px',
      lineColor: widget.config.graphOption.defaulColor,
      marker: {
        visible: false
      }
    }];
    return {
      type: widget.config.type,
      theme: 'classic',
      backgroundColor: 'transparent', // bg black
      plot: {
        legend: {
          visible: false, // hidden
        }
      },
      plotarea: {
        'adjust-layout': true, // align-center
      },
      scaleX: {
        values: valueScaleX,
        label: {
          text: xAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetY: '5%'
        },
        lineColor: '#808080',
        lineStyle: 'solid',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      scaleY: {
        values: valueScaleY,
        label: {
          text: yAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontFamily: 'arial',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetX: '-5%'
        },
        lineColor: '#808080',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      series: series // []
    };
  }

  areaJSON(widget) {
    const xAxis = widget.config.graphOption.xAxis;
    const yAxis = widget.config.graphOption.yAxis;
    const valueScaleX = widget.config.graphOption.valueScaleX;
    const valueScaleY = widget.config.graphOption.valueScaleY;
    const series = [{
      values: widget.config.values,
      backgroundColor: widget.config.graphOption.defaulColor,
      lineWidth: '0px',
      marker: {
        visible: false
      }
    }];
    return {
      type: widget.config.type,
      theme: 'classic',
      backgroundColor: 'transparent', // bg black
      plot: {
        legend: {
          visible: false, // hidden
        }
      },
      plotarea: {
        'adjust-layout': true, // align-center
      },
      scaleX: {
        values: valueScaleX,
        label: {
          text: xAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetY: '5%'
        },
        lineColor: '#808080',
        lineStyle: 'solid',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      scaleY: {
        values: valueScaleY,
        label: {
          text: yAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontFamily: 'arial',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetX: '-5%'
        },
        lineColor: '#808080',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      series: series // []
    };
  }

  barJSON(widget) {
    const stack = widget.config.graphOption.stack;
    const xAxis = widget.config.graphOption.xAxis;
    const yAxis = widget.config.graphOption.yAxis;
    const valueScaleX = widget.config.graphOption.valueScaleX;
    const valueScaleY = widget.config.graphOption.valueScaleY;
    const series = [{
      values: widget.config.values,
      backgroundColor: widget.config.graphOption.defaulColor,
      lineWidth: '0px',
      marker: {
        visible: false
      }
    }];
    return {
      type: widget.config.type,
      theme: 'classic',
      backgroundColor: 'transparent', // bg black
      plot: {
        legend: {
          visible: false, // hidden
        },
        stacked: stack ? true : false,
        'stack-type': stack
      },
      plotarea: {
        'adjust-layout': true, // align-center
      },
      scaleX: {
        values: valueScaleX,
        label: {
          text: xAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetY: '5%'
        },
        lineColor: '#808080',
        lineStyle: 'solid',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      scaleY: {
        values: valueScaleY,
        label: {
          text: yAxis,
          fontColor: '#959393',
          fontSize: 12,
          fontFamily: 'SF Pro Text-Regular',
        },
        guide: {
          lineColor: '#808080',
          lineStyle: 'solid'
        },
        item: {
          fontColor: '#808080',
          fontFamily: 'arial',
          fontSize: '12px',
          fontWeight: 'normal',
          offsetX: '-5%'
        },
        lineColor: '#808080',
        lineWidth: '1px',
        tick: {
          lineColor: '#808080',
          lineWidth: '1px'
        }
      },
      series: series // []
    };
  }

  pieJSON(widget) {
    const series: any[] = [];
    widget.config.values.forEach(e => {
      series.push({
        values: [e[2]],
        backgroundColor: e[3]
      });
    });
    console.log(series);
    return {
      type: widget.config.type,
      backgroundColor: 'transparent', // bg black
      plotarea: {
        'adjust-layout': true, // align-center
      },
      series: series // []
    };
  }
}

export const ChartWidget = {
  name: 'Chart',
  type: 'component',
  component: ChartWidgetComponent,
  // TYPE: area, line, bar, hbar, bar3d, pie
  defaultConfig: [
    {
      type: 'area', // TYPE: area, line, bar, hbar, bar3d, pie
      graphOption: {
        stack: 100,
        defaulColor: '#9FFFB1',
        hAxis: null,
        vAxis: null,
        valueScaleX: null,
        valueScaleY: null,
      },
      thresholdColor: { 4: { color: '#9FFFB1' } },
      values: [
        [0, 1, 10, '#cc0000'], // scaleX, chartValue, pieValue, pieVolor
        [1, 4, 20, '#ff6600'],
        [2, 1, 30, '#ffcc00'],
        [3, 2, 10, '#88cc00'],
        [4, 1, 30, '#66ccff']
      ]
    }
    // {
    //   type: 'line',
    //   valueScaleX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //   valueScaleY: '0:150:50',
    //   series: [
    //     {
    //       text: 'Line',
    //       values: [44, 140, 44, 137, 35, 46],
    //       lineWidth: '1px',
    //       lineColor: '#9FFFB1',
    //       marker: {
    //         visible: false
    //       }
    //     }
    //   ]
    // },
    // {
    //   type: 'bar',
    //   valueScaleX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //   valueScaleY: '0:150:50',
    //   series: [
    //     {
    //       text: 'Bar',
    //       values: [44, 140, 44, 137, 35, 46],
    //       backgroundColor: '#9FFFB1',
    //       marker: {
    //         visible: false
    //       }
    //     }
    //   ]
    // },
    // {
    //   type: 'hbar',
    //   valueScaleX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //   valueScaleY: '0:150:50',
    //   series: [
    //     {
    //       text: 'Bar',
    //       values: [44, 140, 44, 137, 35, 46],
    //       backgroundColor: '#9FFFB1',
    //       marker: {
    //         visible: false
    //       }
    //     }
    //   ]
    // },
    // {
    //   type: 'bar3d',
    //   valueScaleX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //   valueScaleY: '0:150:50',
    //   series: [
    //     {
    //       text: 'Bar3D',
    //       values: [44, 140, 44, 137, 35, 46],
    //       backgroundColor: '#9FFFB1',
    //       marker: {
    //         visible: false
    //       }
    //     }
    //   ]
    // },
    // {
    //   type: 'pie',
    //   valueScaleX: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    //   valueScaleY: '0:150:50',
    //   series: [
    //     { values: [59] },
    //     { values: [55] },
    //     { values: [30] },
    //     { values: [28] },
    //     { values: [15] }
    //   ]
    // }
  ]
}
