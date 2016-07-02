Blockly.Blocks['plotpush'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PlotP");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name");
    this.appendValueInput("Point")
        .setCheck("Number")
        .appendField("Point");
    this.appendValueInput("Colour")
        .setCheck("Colour")
        .appendField("Colour");
    this.appendValueInput("Size")
        .setCheck("Size")
        .appendField("Number");    
    this.setInputsInline(false);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['plotpush'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var point = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);
  var colour = Blockly.JavaScript.valueToCode(block, 'Colour', Blockly.JavaScript.ORDER_ATOMIC);
  var size = Blockly.JavaScript.valueToCode(block, 'Size', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'plotp(' + name + ',' + y +',' + colour +',' + size +');\n';
  return code;
};
   
