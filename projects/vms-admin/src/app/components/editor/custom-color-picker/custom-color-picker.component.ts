import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '@iplab/ngx-color-picker';

@Component({
    selector: 'app-custom-color-picker',
    templateUrl: './custom-color-picker.component.html',
    styleUrls: ['./custom-color-picker.component.scss'],
})
export class CustomColorPickerComponent implements OnInit {
    
    @Input('color') color
    @Output('change') change = new EventEmitter()
    public hueColor: Color = new Color();
    public valueColor: Color = new Color();
    public presetsList = [
        '#FFFFFF', '#FAFAFA', '#959393', '#000000', '#9FFFB1', '#97C9DE', '#919DEB', '#C58ECC', '#E8829A', '#EA857A', '#9DCB7A',
        '#73B18D', '#70AFAA'
    ];
    // Dropdown type of color
    public typeOfColor: string = 'HEX';
    public typeOfColors: any[] = [
        { label: 'HEX', value: 'HEX' },
        { label: 'RGB', value: 'RGB' },
        { label: 'HSB', value: 'HSB' },
    ];

    constructor() { }

    ngOnInit() {
        try{
            this.hueColor = new Color(this.color)
            this.valueColor = new Color(this.color)
        }catch(err){
            console.log(err)
        }
    }

    colorChange(){
        this.change.emit(this.valueColor.toHexString())
    }

    onChangeTypeOfColor(e){
        console.log(e)
    }

    onSelectBase(color) {
        this.change.emit(color);
    }
}
