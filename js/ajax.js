function ajax_post(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("post", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.responseText);
    return (JSON.parse(xhr.responseText));
}

function ajax_get(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("get", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    // if (xhr.status == 304) {
    //     return window.localStorage.getItem(url)
    // }
    debuginf(xhr.responseText);
    var json = JSON.parse(xhr.responseText)
    window.localStorage.getItem(url,json)
    return (json);
}

function ajax_delete(url, json) {
    var xhr = new XMLHttpRequest();
    var post;
    xhr.open("delete", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(json));
    debuginf(xhr.status);
}