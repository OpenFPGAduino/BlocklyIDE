Blockly.Blocks['brushmotorinit'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("brushmotor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
    this.appendValueInput("frequence")
        .setCheck("Number")
        .appendField("frequence");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['brushmotorinit'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var frequence = Blockly.JavaScript.valueToCode(block, 'frequence', Blockly.JavaScript.ORDER_ATOMIC);
  var code =  "ajax_post('/fpga/api/call/brushmotor_init', ["+id+','+ frequence+','+ duty_cycle +"]);\n";
  //void brushmotor_init(int id, unsigned int frequence, unsigned int duty_cycle);
  return code;
};

Blockly.Blocks['brushmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("brushmotor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.appendValueInput("speed")
        .setCheck("Number")
        .appendField("speed");
        this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STEPMOTORF, "forward"], [Blockly.Msg.STEPMOTORB, "backward"]]), "step");
            this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STEPMOTORF, "on"], [Blockly.Msg.STEPMOTORB, "off"]]), "onoff");    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['brushmotor'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_step = block.getFieldValue('step');
  var dropdown_step = block.getFieldValue('onoff');
  var code = "ajax_post('/fpga/api/call/brushmotor_run', ["+id+','+ on_off +','+ forward_back +','+ speed +"]);\n";
  //void brushmotor_run(int id, unsigned int on_off, unsigned int forward_back, unsigned int duty_cycle);
  return code;
};