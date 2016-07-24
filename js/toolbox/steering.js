Blockly.Blocks['steering'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEERING);
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "angle");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['steering'] = function(block) {
  var angle = block.getFieldValue('angle');
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 
      "ajax_post('/fpga/api/call/steering', ["+id+','+ angle+"]);\n"
  return code;
};