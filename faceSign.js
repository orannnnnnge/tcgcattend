let bodyString = $request.body;
bodyString = bodyString.replace(/lng.*?active=1/, 'lng=112.5465600585938&lat=37.78620659722223&location=%E5%A4%AA%E5%8E%9F%E5%B8%82%E5%B0%8F%E5%BA%97%E5%8C%BA%E4%B8%9C%E6%B2%BA%E4%B8%89%E5%B7%B73%E5%8F%B7%E5%A4%AA%E5%8E%9F%E5%A4%A9%E7%84%B6%E6%B0%94%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8&active=1');
$done({body:bodyString});
