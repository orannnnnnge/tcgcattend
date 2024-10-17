let bodyString = $response.body;
let bodyObject = JSON.parse(bodyString);

bodyObject.data.locations[0].scope = 1000000;
bodyString = JSON.stringify(bodyObject, null, 2);
$done({body:bodyString});
