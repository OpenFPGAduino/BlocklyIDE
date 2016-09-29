var toolbox = ["wait","led", "rgb_led", "temperature","moisture","steering","analoginput", 
"shield_init","digitaloutput","stepmotor","plot","plotclean","plotpush","plotxy","console","error"];
for( i in toolbox)
document.write('<script src="js/toolbox/' + toolbox[i] + '.js"></script>\n');
