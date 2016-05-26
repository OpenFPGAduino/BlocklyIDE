Blockly.Blocks['temperature'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.TEMP_SENSOR);
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['temperature'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "ajax_post('fpga/api/call/am2301_temperature', ["+ id+"])"
  return [code, Blockly.JavaScript.ORDER_NONE];
};