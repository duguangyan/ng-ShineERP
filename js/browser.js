//ie9以下提示用户更新浏览器
if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i)=="7.")
{ 
window.location.href="browser.html";	
//alert("IE 7.0"); 
} 
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i)=="8.") 
{ 
window.location.href="browser.html";	
//alert("IE 8.0"); 
} 
else if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.") 
{ 
window.location.href="browser.html";	
//alert("IE 9.0"); 
} 
else if(navigator.appName == "Microsoft Internet Explorer") 
{ 
window.location.href="browser.html";	
//alert("IE 6.0"); 
} 