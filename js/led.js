Blockly.Blocks['led'] = {
    init: function() {
		this.appendDummyInput()
        .appendField("LED");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["F0", "0"], ["F1", "1"], ["F2", "2"], ["F3", "3"]]), "led")
        this.appendValueInput("colour")
            .setCheck("Colour")
            .appendField(Blockly.Msg.LED_COLOUR);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip('');
        this.setHelpUrl('http://openfpgaduino.github.io/');
    }
};

function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}

Blockly.JavaScript['led'] = function(block) {
    var led = block.getFieldValue('led');
    var colour = Blockly.JavaScript.valueToCode(this, 'colour',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '#000000';
	color = color.replace(/'/g,"");
	console.log(color);
	var b = hexToB(color);
	var g = hexToG(color);
	var r = hexToR(color);
    var code = 
    "var url = 'fpga/api/call/led';\n" + 
    "var xhr = new XMLHttpRequest();\n" +
    "var post = ["+led+','+ b +','+g+','+r+"];\n" +
    "xhr.open('post', url, false);\n" + 
    "xhr.setRequestHeader('Content-Type', 'application/json');\n" +
    "xhr.send(JSON.stringify(post));"
    return code;
};