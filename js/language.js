var language = document.documentElement.lang;
if(language=='en'){
	Blockly.Msg.LED_COLOUR = "Colour";
	Blockly.Msg.LED_R      = "Red";
	Blockly.Msg.LED_G      = "Green";
	Blockly.Msg.LED_B      = "Blue";
	Blockly.Msg.WAIT       = "Wait";
	Blockly.Msg.WAIT_SECONDS =  "Seconds";
	Blockly.Msg.TEMP_SENSOR = "Temperate sensor";
	Blockly.Msg.MOIS_SENSOR = "Moisture sensor";
	
} else {
	Blockly.Msg.LED_COLOUR= "色彩";
	Blockly.Msg.LED_R      = "红色";
	Blockly.Msg.LED_G      = "绿色";
	Blockly.Msg.LED_B      = "蓝色";
	Blockly.Msg.WAIT       = "等待";
	Blockly.Msg.WAIT_SECONDS =  "秒";
	Blockly.Msg.TEMP_SENSOR = "温度传感器";
	Blockly.Msg.MOIS_SENSOR = "湿度传感器";
}
//Load Blockly's language strings.
document.write('<script src="blockly/msg/js/' + language + '.js"></script>\n');
document.write('<script src="blockly/demos/msg/js/' + language + '.js"></script>\n');

var categories = ['catLogic', 'catLoops', 'catMath', 'catText', 'catLists',
				'catColour', 'catVariables', 'catFunctions'];
for (var i = 0, cat; cat = categories[i]; i++) {
document.getElementById(cat).setAttribute('name', MSG[cat]);
}
var textVars = document.getElementsByClassName('textVar');
for (var i = 0, textVar; textVar = textVars[i]; i++) {
textVar.textContent = MSG['textVariable'];
}
var listVars = document.getElementsByClassName('listVar');
for (var i = 0, listVar; listVar = listVars[i]; i++) {
listVar.textContent = MSG['listVariable'];
}