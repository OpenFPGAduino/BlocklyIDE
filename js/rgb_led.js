Blockly.Blocks['rgb_led'] = {
    init: function() {
		this.appendDummyInput()
        .appendField("LED");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["F0", "0"], ["F1", "1"], ["F2", "2"], ["F3", "3"]]), "led")
        this.appendValueInput("r")
            .setCheck("Number")
            .appendField(Blockly.Msg.LED_R);
        this.appendValueInput("g")
            .setCheck("Number")
            .appendField(Blockly.Msg.LED_G);
        this.appendValueInput("b")
            .setCheck("Number")
            .appendField(Blockly.Msg.LED_B);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(260);
        this.setTooltip('');
        this.setHelpUrl('http://openfpgaduino.github.io/');
    }
};

Blockly.JavaScript['rgb_led'] = function(block) {
    var led = block.getFieldValue('led');
    var r = Blockly.JavaScript.valueToCode(this, 'r',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
    var g = Blockly.JavaScript.valueToCode(this, 'g',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
    var b = Blockly.JavaScript.valueToCode(this, 'b',
        Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
    //var code = "fpga.led("+ led + ','+ r +',' + g + ',' + b +");\n";
    var code = 
    "var url = 'fpga/api/call/led';\n" + 
    "var xhr = new XMLHttpRequest();\n" +
    "var post = ["+led+','+ b +','+g+','+r+"];\n" +
    "xhr.open('post', url, false);\n" + 
    "xhr.setRequestHeader('Content-Type', 'application/json');\n" +
    "xhr.send(JSON.stringify(post));"
    return code;
};