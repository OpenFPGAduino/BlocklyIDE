var toolbox = ["wait","led", "rgb_led", "temperature","moisture"];
for( i in toolbox)
document.write('<script src="js/toolbox/' + toolbox[i] + '.js"></script>\n');