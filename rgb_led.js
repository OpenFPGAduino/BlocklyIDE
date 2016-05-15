Blockly.Blocks['rgb_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["F0", "1"], ["F1", "2"], ["F2", "3"], ["F3", "4"]]), "led")
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("Red");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("Green");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("Blue");
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
  var code = "fpga.led("+ led + ','+ r +',' + g + ',' + b +");\n";
  return code;
};