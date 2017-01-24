Blockly.Blocks['stepmotorinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPMOTOR);
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("frequence")
        .setCheck("Number")
        .appendField(Blockly.Msg.FREQUENCE);
    this.appendValueInput("duty_cycle")
        .setCheck("Number")
        .appendField(Blockly.Msg.DUTYCYCLE);
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField(Blockly.Msg.DEALY);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['stepmotorinit'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var frequence = Blockly.JavaScript.valueToCode(block, 'frequence', Blockly.JavaScript.ORDER_ATOMIC);
  var duty_cycle = Blockly.JavaScript.valueToCode(block, 'duty_cycle', Blockly.JavaScript.ORDER_ATOMIC);
  var delay = Blockly.JavaScript.valueToCode(block, 'delay', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "ajax_post('/fpga/api/call/stepmotor_init', ["+id+','+ frequence+','+ duty_cycle +','+ delay+','+"]);\n";
  return code;
};

Blockly.Blocks['stepmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPMOTOR);
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STEPMOTORF, "forward"], [Blockly.Msg.STEPMOTORB, "backward"]]), "step");
    this.appendValueInput("step")
        .setCheck("Number")
        .appendField("");
    this.appendDummyInput()
        .appendField(Blockly.Msg.STEPMOTORSTEP);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};
Blockly.JavaScript['stepmotor'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_step;
  if (block.getFieldValue('step') == "forward") dropdown_step = 1;
  else dropdown_step = 0;
  var step = Blockly.JavaScript.valueToCode(block, 'step', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "ajax_post('/fpga/api/call/stepmotor', ["+id+','+ dropdown_step+','+ step+"]);\n";
  return code;
};