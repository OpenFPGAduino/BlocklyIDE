// JavaScript Document
   // event handle for webpage
                function run() {
                  // Generate JavaScript code and run it.
                  window.LoopTrap = 1000;
                  Blockly.JavaScript.INFINITE_LOOP_TRAP =
                      'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
                  var code = Blockly.JavaScript.workspaceToCode(workspace);
                  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
                  debuginf(code);
                  try {
                    eval(code);
                  } catch (e) {
                    alert(e);
                  }
                }
                function save() {
                    // Generate XML code and display it.
                    var dom = Blockly.Xml.workspaceToDom(workspace);
                    var xml = Blockly.Xml.domToPrettyText(dom);
                    var file = document.getElementById("dialog_filename").value;
                    debuginf(xml);
                    var json = {
                        file: file,
                        xml: xml
                    }
                    ajax_rest_json_post("/db/add/example", json);
                    load_example_list();
                }
                
                function stop() {
                    // debuginf("stop");
                    // ajax_rest_post("stop");
                }

                var code_runing = false;
                function step(){
                    if(code_runing == false) {
                      parseCode();
                      code_runing = true;
                    }
                    else {
                      stepCode();
                    }
                }
          function stepCode() {
              try {
                var ok = myInterpreter.step();
              } finally {
                if (!ok) {
                  // Program complete, no more code to execute.
                  code_runing = false;
                  return;
                }
              }
              if (highlightPause) {
                // A block has been highlighted.  Pause execution here.
                highlightPause = false;
              } else {
                // Keep executing until a highlight statement is reached.
                stepCode();
              }
            }

                function reboot() {
                    debuginf("reboot");
                    ajax_rest_get("reboot");
                }

                function configrations(event) {
                    var version = event.srcElement.innerText;
                    document.getElementById('broadpic').src = 'config/' + version + '.jpg';
                    debuginf("configrations");
                    debuginf(version);
                    ajax_rest_post("config", version);
                }

                function fpga() {
                    window.location.port = 8686;
                }

                function load_example(event) {
                    var example = event.srcElement.innerText;
                    debuginf(example);
                    debuginf("load code");
                    var query = {"file": { "$eq" : example}}
                    var json = ajax_rest_json_post("/db/query/example", query)
                    debuginf(json[0].xml);
                    debuginf(document.getElementById('startBlocks'));
                    workspace.clear();
                    Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(json[0].xml),
                        workspace);
                }


                var timer = null;

                function mousedown(event) {
                    load_example(event);
                    timer = setTimeout(function() {
                        delete_example(event)
                    }, 1500); //set the timeout
                };

                function mouseup(event) {
                    clearTimeout(timer);
                };

                function delete_example(event) {
                    var file = event.srcElement.innerText;
                    debuginf(file);
                    document.getElementById("pop_message").innerText = file;
                    $("#popdialog").modal();
                }

                function do_delete_example() {
                    file = document.getElementById("pop_message").innerText;
                    debuginf("do delete code");
                    debuginf(file);
                    var json = {file: file}
                    ajax_rest_json_delete("/db/remove/example",json);
                    load_example_list();
                }

                function delay_refresh() {
                    window.location.reload();
                }

                function page_refresh() {
                    setTimeout('delay_refresh()', 60000);

                }