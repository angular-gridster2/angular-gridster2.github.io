export class ColorUtil {
    static convertHexOpacity(hexCode, opacity): string {
        if (hexCode) {
            let hex = hexCode.replace('#', '');
            if (hex.length === 3) {
                hex += hex;
            }
            const r = parseInt(hex.substring(0, 2), 16);
            const g = parseInt(hex.substring(2, 4), 16);
            const b = parseInt(hex.substring(4, 6), 16);
            return this.RGBAToHexA(r, g, b, opacity / 100);
        } else {
            return '';
        }
    }

    static RGBAToHexA(r, g, b, a): string {
        r = r.toString(16);
        g = g.toString(16);
        b = b.toString(16);
        a = Math.round(a * 255).toString(16);

        if (r.length == 1)
            r = "0" + r;
        if (g.length == 1)
            g = "0" + g;
        if (b.length == 1)
            b = "0" + b;
        if (a.length == 1)
            a = "0" + a;

        return "#" + r + g + b + a;
    }

    static bgGradient2(deg, color, amount): string {
        return `transparent linear-gradient(${deg}deg, ${color} 0%, ${this.colorShade(color, amount)} 100%) 0% 0% no-repeat padding-box`;
    }

    static bgGradient3(deg, color, amount): string {
        return `transparent linear-gradient(${deg}deg, ${color} -40%, ${this.colorShade(color, amount + 50)} 50%, ${this.colorShade(color, amount)} 100%) 0% 0% no-repeat padding-box`;
    }

    static colorShade(color, amount): string {
        if (color && amount) {
            return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
        } else {
            return '';
        }
    }
}
