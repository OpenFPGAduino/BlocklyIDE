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
	colour = colour.replace(/'/g,"");
	var b = hexToB(colour);
	var g = hexToG(colour);
	var r = hexToR(colour);
    var code = 
    "ajax_post('/fpga/api/call/led', ["+led+','+ b +','+g+','+r+"]);\n"
    return code;
};