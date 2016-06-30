Blockly.Blocks['plotpush'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Plot");
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("Name");
    this.appendValueInput("Point")
        .setCheck("Number")
        .appendField("Point");
    this.setInputsInline(false);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['plotpush'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var value_poiny = Blockly.JavaScript.valueToCode(block, 'Point', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};