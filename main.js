export function callApi(method, url, data, callbacksuccess, callbackerror)
{
    var xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(data);

    xhttp.onreadystatechange = function(){
        if(this.readyState === 4)
        {
            if(this.status === 200)
                callbacksuccess(this.responseText);
            else
                callbackerror("Error: 404 - Service not available");
        }
    };
}

export function errorResponse(res)
{
    alert(res);
}