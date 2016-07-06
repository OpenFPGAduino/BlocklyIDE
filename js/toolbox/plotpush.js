Blockly.Blocks['plotpush'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.PLOTP);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField(Blockly.Msg.PLOTNAME);
    this.appendValueInput("Point")
        .setCheck("Number")
        .appendField(Blockly.Msg.PLOTPOINT);
    this.appendValueInput("Colour")
        .setCheck("Colour")
        .appendField(Blockly.Msg.PLOTCOLOUR);
    this.appendValueInput("Size")
        .setCheck("Number")
        .appendField(Blockly.Msg.PLOTSIZE);    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['plotpush'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var point = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);
  var colour = Blockly.JavaScript.valueToCode(block, 'Colour', Blockly.JavaScript.ORDER_ATOMIC);
  var size = Blockly.JavaScript.valueToCode(block, 'Size', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'plotp(' + name + ',' + point +',' + colour +',' + size +');\n';
  return code;
};
   
