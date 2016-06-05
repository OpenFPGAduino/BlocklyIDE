Blockly.Blocks['plot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PLOT);
    this.appendValueInput("Name")
        .setCheck("String")
        .appendField(Blockly.Msg.PLOTNAME);
    this.appendValueInput("y")
        .setCheck("Array")
        .appendField(Blockly.Msg.PLOTDATA);
    this.appendValueInput("colour")
        .setCheck("Colour")
        .appendField(Blockly.Msg.PLOTCOLOUR);
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