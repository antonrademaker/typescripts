// Type definitions for Bootstrap 2.2
// Project: http://mjolnic.github.io/bootstrap-colorpicker/
// Definitions by: Anton Rademaker <https://github.com/antonrademaker/>
// Inspired by https://github.com/borisyankov/DefinitelyTyped/blob/master/bootstrap.datepicker/bootstrap.datepicker.d.ts from Boris Yankov

/// <reference path="../jquery/jquery.d.ts"/>

interface ColorPickerOptions {
	format?: string;
	color?: string;
	container?: any;
	component?: any;
	input?: any;
	horizontal? : boolean;
	template? : string;
}

interface RGBAColor {
	r: number;
	g: number;
	b: number;
	a?:number;
}

interface HSLAColor {
	h: number;
	s: number;
	l: number;
	a: number;
}

interface ColorpickerObject {
	setColor(value : any) : void;
	setHue(value : number) : void;
	setSaturation(value: number) : void;
	setLightness(value: number) : void;
	setAlpha(value: number) : void;
	toRGB() : RGBAColor;
	toHex() : string;
	toHSL() : HSLAColor;
}

interface JQuery {
	colorpicker(): JQuery;
	colorpicker(methodName: string): JQuery;
	colorpicker(methodName: string, params: any): ColorpickerObject;
	colorpicker(options: ColorPickerOptions): ColorpickerObject;
}
