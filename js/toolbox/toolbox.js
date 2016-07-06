var toolbox = ["wait","led", "rgb_led", "temperature","moisture","steering","analoginput","analoginit", 
"shield_init","digitaloutput","stepmotor","plot","plotclean","plotpush"];
for( i in toolbox)
document.write('<script src="js/toolbox/' + toolbox[i] + '.js"></script>\n');
