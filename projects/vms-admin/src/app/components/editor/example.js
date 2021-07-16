export default {
    "login": {
        type: 'auth',
        name: 'Login',
        widgets: [
            {
                id: 1, cols: 9, rows: 18, y: 0, x: 0, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    name: 'AreaContainerWidget',
                    required:true,
                    config: {  }
                }
            },
                        {
                id: 9, cols: 2, rows: 3, y: 7, x: 4, layerIndex: 2, resizeEnabled:true,
                widget: {
                    name: 'ImgWidget',
                    required:true,
                    config: { src: 'assets/images/Graphic-Sample logo 1.png', disabled: false },
                }
            },
            {
                id: 2, cols: 6, rows: 1, y: 4, x: 14, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    config: { value: 'Welcome', 
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '40px', 'text-align': 'left', opacity: 100 
                        }
                    },
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 5, x: 14, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    config: { value: 'Please login to your account', 
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '16px', 'text-align': 'left', opacity: 100 
                        }
                    }
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 6, x: 14, layerIndex: 2,
                widget: {
                    name: 'TextboxWidget',
                    config: { type: 'text', placeholder: 'E-mail', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 5, cols: 6, rows: 1, y: 7, x: 14, layerIndex: 2,
                widget: {
                    name: 'TextboxWidget',
                    config: { type: 'password', placeholder: 'Password', inputStyle: 'roundCorner' },
                }
            },
            {
                id: 6, cols: 6, rows: 1, y: 9, x: 14, layerIndex: 2,
                widget: {
                    name: 'ButtonWidget',
                    config: { type: 'button', value: 'Next', buttonStyle: 'roundCorner', bgStyle: 'solid' },
                }
            },
            {
                id: 7, cols: 6, rows: 1, y: 10, x: 14, layerIndex: 2,
                widget: {
                    name: 'LinkWidget',
                    config: { value: 'Forgot password ?', url: 'https://www.google.com',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '16px', 'text-align': 'left', opacity: 100 
                        }
                    }
                }
            },
            {
                id: 8, cols: 6, rows: 1, y: 12, x: 14, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    config: { value: 'Need help? Contact 02 123-4567', 
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '16px', 'text-align': 'left', opacity: 100 
                        }
                    }
                }
            },
            {
                id: 10, cols: 6, rows: 1, y: 11, x: 14, layerIndex: 2,
                widget: {
                    name: 'ShapeWidget',
                    config: { },
                }
            }
        ]
    },
    "dashboard-1": {
        type: 'dashboard',
        name: 'Dashboard 1',
        widgets: [
            {
                id: 1, cols: 1, rows: 1, y: 0, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Simple1Widget',
                    config: { faTopLeft: 'fa fa-battery-full', format: 'square', value: '100', centerVariable: '%', bottomVariable: 'Battery', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 2, cols: 1, rows: 1, y: 0, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge3Widget',
                    config: { faCenter: 'feather-droplet', type: 'full', value: 75, centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 3, cols: 2, rows: 1, y: 0, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    name: 'ChartWidget',
                    config: {
                        type: 'area', // TYPE: area, line, bar, hbar, bar3d, pie
                        graphOption: {
                            stack: 100,
                            // defaulColor: '#9FFFB1', 
                            hAxis: null,
                            vAxis: null,
                            valueScaleX: null,
                            valueScaleY: null,
                        },
                        thresholdColor: { 4: { color: '#9FFFB1' }},
                        values: [
                            [0,1,10,'#cc0000'], // scaleX, chartValue, pieValue, pieVolor
                            [1,4,20,'#ff6600'],
                            [2,1,30,'#ffcc00'],
                            [3,2,10,'#88cc00'],
                            [4,1,30,'#66ccff']
                        ]
                    }
                }
            },
            {
                id: 4, cols: 2, rows: 2, y: 0, x: 4, layerIndex: 2, minItemCols: 1, minItemRows: 1,
                widget: {
                    name: 'MapWidget',
                    config: {
                        lat: '1231',
                        lng: '12312'
                    },
                }
            },
            {
                id: 5, cols: 1, rows: 1, y: 1, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge2Widget',
                    config: { faCenter: 'feather-layers', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 6, cols: 1, rows: 1, y: 1, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge1Widget',
                    config: { type: 'arch', value: 25, centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            },
            {
                id: 7, cols: 2, rows: 1, y: 1, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Simple1Widget',
                    config: { faTopLeft: 'feather-cloud-rain', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfall', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 8, cols: 2, rows: 1, y: 2, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge2Widget',
                    config: { faCenter: 'feather-layers', type: 'semi', value: '75', centerVariable: '%', bottomVariable: 'RH%', thick: 15, gaugeMin: 0, gaugeMax: 100, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 9, cols: 2, rows: 1, y: 2, x: 2, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge1Widget',
                    config: { type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Humidity', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            },
            {
                id: 10, cols: 2, rows: 1, y: 2, x: 4, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge3Widget',
                    config: { faCenter: 'feather-thermometer', type: 'arch', value: '25', centerVariable: '℃', bottomVariable: 'Temperature', thick: 15, gaugeMin: 0, gaugeMax: 40, iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 11, cols: 1, rows: 2, y: 3, x: 0, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Simple1Widget',
                    config: { faTopLeft: 'feather-cloud-rain', value: '101', centerVariable: 'mm', bottomVariable: 'Rainfall', iconMin: 0, iconMax: 100 },
                }
            },
            {
                id: 12, cols: 1, rows: 2, y: 3, x: 1, layerIndex: 2, minItemCols: 1, minItemRows: 1, maxItemCols: 2, maxItemRows: 2,
                widget: {
                    name: 'Gauge1Widget',
                    config: { type: 'full', value: '75', centerVariable: '%', bottomVariable: 'Rainfall', thick: 15, gaugeMin: 0, gaugeMax: 100 },
                }
            }
        ]
    },
    "all-thing":{
        type:'page',
        name:'All Thing',
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    name: 'AllThingWidget',
                    required:true,
                    config:{}
                }
            },
        ]   
    },
    "thing-detail":{
        type:'page',
        name:'Thing Detail',
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false, dragEnabled: false,
                widget: {
                    name: 'ThingDetailWidget',
                    required:true,
                    config:{}
                }
            },
        ]   
    },
    "user-management":{
        type:'page',
        name:'User Management',
        widgets:[
            {
                id: 1, cols: 28, rows: 18, y: 0, x: 0, layerIndex: 2, resizeEnabled: false,
                widget: {
                    name: 'UserManagementWidget',
                    required:true,
                    config:{}
                }
            },
        ]   
    },
    "user-information": {
        type: 'page',
        name: 'User Infomation',
        widgets: [
            {
                id: 10, cols: 3, rows: 1, y: 1, x: 3, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    required:true,
                    config: { value: 'Basic Information', 
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '18px', 'text-align': 'left', opacity: 100 
                        }
                    }
                }
            },
            {
                id: 1, cols: 5, rows: 6, y: 3, x: 3, layerIndex: 2,
                widget:{
                    name:'ImgInputWidget',
                    required:true,
                    config: { src:'https://i0.wp.com/danongonline.com.vn/wp-content/uploads/2018/02/anh-girl-xinh-9x-kute-24.jpg' }
                }
            },
            {
                id: 2, cols: 5, rows: 2, y: 3, x: 9, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    required:true,
                    config: { value: 'Rachel Bradley', systemText: true,
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '30px', 'text-align': 'left', opacity: 100 
                        }
                    }
                }
            },
            {
                id: 3, cols: 6, rows: 1, y: 5, x: 9, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    required:true,
                    config: { value: 'rachel.bl@gmail.com', systemText: true,
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '16px', 'text-align': 'left', opacity: 100 
                        }
                    }    
                }
            },
            {
                id: 4, cols: 6, rows: 1, y: 6, x: 9, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    required:true,
                    config: { value: 'Admin', systemText: true,
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '16px', 'text-align': 'left', opacity: 100 
                        }
                    }  
                }
            },
            {
                id: 5, cols: 6, rows: 1, y: 7, x: 9, layerIndex: 2,
                widget: {
                    name: 'LinkWidget',
                    config: { value: 'Update Info', url: 'https://www.google.com',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '18px', 'text-align': 'left', 'text-decoration': 'none', opacity: 100
                        }
                    } 
                }
            },
            {
                id: 6, cols: 5, rows: 1, y: 1, x: 17, layerIndex: 2,
                widget: {
                    name: 'LabelWidget',
                    required:true,
                    config: { value: 'Security and Login', 
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '18px', 'text-align': 'left', opacity: 100
                        }
                    } 
                }
            },
            {
                id: 7, cols: 5, rows: 1, y: 3, x: 17, layerIndex: 2,
                widget: {
                    name: 'LinkWidget',
                    config: { value: 'Change Password', faRight: 'fa fa-pencil', url: 'https://www.google.com',
                        styles: {
                            'font-family': 'SF Pro Text-Medium', 'font-size': '18px', 'text-align': 'left', 'text-decoration': 'none', opacity: 100
                        }
                    } 
                }
            },
            {
                id: 8, cols: 13, rows: 18, y: 0, x: 15, layerIndex: 1, resizeEnabled: false, dragEnabled: false,
                widget: {
                    name: 'AreaContainerWidget',
                    required:true,
                    config: {  }
                }
            },
        ]
    },
}