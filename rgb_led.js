Blockly.Blocks['rgb_led'] = {
  init: function() {
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

Blockly.JavaScript['rgb_led'] = function() {
  var r = Blockly.JavaScript.valueToCode(this, 'r',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
  var g = Blockly.JavaScript.valueToCode(this, 'g',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
  var b = Blockly.JavaScript.valueToCode(this, 'b',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '255';
  return "fpga.led("+ r +',' + g + ',' + b +")";
};