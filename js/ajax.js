function ajax_post(url, json) {
    var xhr = new XMLHttpRequest()
    xhr.open('post', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    var ret = xhr.send(JSON.stringify(json));
    if (typeof variable !== "undefined" && variable !== null) {
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

function ajax_rest_json_get(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    debuginf(xhr.responseText);
    return (JSON.parse(xhr.responseText));
}

function ajax_rest_json_post(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.responseText);
    return (JSON.parse(xhr.responseText));
}

function ajax_rest_json_delete(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("delete", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.status);
}


function ajax_rest_post(url, arg1, arg2) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    if (arg1 != undefined)
        post = encodeURIComponent("arg1") + "=" + encodeURIComponent(arg1) + "&";
    else
        post = null;
    if (arg2 != undefined)
        post += encodeURIComponent("arg2") + "=" + encodeURIComponent(arg2) + "&";
    xhr.send(post);
    debuginf(xhr.status);
}