Blockly.Blocks['plot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plot");
    this.appendValueInput("Name")
        .setCheck("String")
        .appendField("Name");
    this.appendValueInput("y")
        .setCheck("Array")
        .appendField("Data");
    this.appendValueInput("colour")
        .setCheck("Colour")
        .appendField("colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['plot'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'Name', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'plot(' + name + ',' + y +',' + colour +');\n';
  return code;
};