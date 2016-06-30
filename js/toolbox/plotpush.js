Blockly.Blocks['plot_push'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PlotP");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name");
    this.appendValueInput("Point")
        .setCheck("Number")
        .appendField("Point");
    this.appendValueInput("colour")
        .setCheck("Colour")
        .appendField("Colour");
    this.setInputsInline(false);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['plot_push'] = function(block) {
  var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var point = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);
  var colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'plotp(' + name + ',' + y +',' + colour +');\n';
  return code;
};
   
