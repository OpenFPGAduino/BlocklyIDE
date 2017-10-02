function ajax_post(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.responseText);
    if (xhr.readyState==4 && xhr.status==200)
    	return (JSON.parse(xhr.responseText));
    else
        return null;
}

function ajax_get(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    //xhr.setRequestHeader("Cache-Control", "max-age=0");
    xhr.send();
    if (xhr.readyState==4 && xhr.status==200) {
        debuginf(xhr.responseText);
        // if (xhr.status == 304) {
        //      return window.localStorage.getItem(url)
        // }
        var json = JSON.parse(xhr.responseText)
        //window.localStorage.getItem(url,json)
        return (json);
    }
    else 
        return null;
}

function ajax_delete(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("delete", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.status);
}
