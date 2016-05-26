Blockly.Blocks['moisture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.MOIS_SENSOR);
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

Blockly.JavaScript['moisture'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "ajax_post('fpga/api/call/am2301_moisture', ["+ id+"])"
  return [code, Blockly.JavaScript.ORDER_NONE];
};