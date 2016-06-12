Blockly.Blocks['stepmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("StepMotor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["back", "back"]]), "step");
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("Step");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.JavaScript['stepmotor'] = function(block) {
  var value_id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_step = block.getFieldValue('step');
  var value_step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};