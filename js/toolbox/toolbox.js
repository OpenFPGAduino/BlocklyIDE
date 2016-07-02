function ajax_post(url, json) {
    var xhr = new XMLHttpRequest()
    xhr.open('post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var ret = xhr.send(JSON.stringify(json));
    if(typeof variable !== "undefined" && variable !== null) {
    	return JSON.parser(ret);
    } else
	return ret;
}

function ajax_get(url) {
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var ret = xhr.send();
    return JSON.parser(ret);
}

var toolbox = ["wait","led", "rgb_led", "temperature","moisture","steering","analoginput","analoginit", 
"shield_init","digitaloutput","stepmotor","plot","plotclean","plotpush"];
for( i in toolbox)
document.write('<script src="js/toolbox/' + toolbox[i] + '.js"></script>\n');
