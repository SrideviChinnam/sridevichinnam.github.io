var domainurl ;
var mdomainurl;
var pageprotocol;
var holidayurl;
pageprotocol = window.location.protocol;
var holidayFlag = 0;
var agt = navigator.userAgent.toLowerCase();
if(1 == "10"){
holidayFlag = 1;
}
try{
document.getElementById("ls_topDiv").style.visibility = "visible";
}
catch(e){}
try{
document.getElementById("livprop_popup").style.display = "block";
//document.getElementById("live-button").style.visibility = "visible";
}
catch(e){
}
var urlProtocol = "HTTP/1.1";
domainurl = "http://main.livserv.in/livserv";
mdomainurl = "http://main.livserv.in/livserv";
holidayurl = "http://ms1.livserv.in/livserv";
var formstatus = "0";
var ls_header_blink_flag = 0;
var nsscrdiff=0;
var folderName="newchat";
folderSplit = folderName.split("/");
folderName = folderSplit[0];	
var textHeader = "";
textHeader = folderSplit[1];
var imgpath = domainurl + "/livservtemp3/"+folderName+"/";
var headerMsg = "Quick info channel";
var cs_id="1112020030610173100";
headerMsg = "Live Chat";
var hcode="B1-C1120-D2-R2";
var pid="0";
var AliasName="Raj"; 
var agent="NA";
var greeting="Aakriti Housing";
var countryName="India";
var country_ip="103.242.154.179";
var cityName ="Hyderabad";
var visitorId="NA";
var servertime ="2020/3/6 10:17:31";
var wButtonType ="110101000103000";
var ls_winYPos=1;
var ls_winXPos=3;
var ls_SearchKeywords = " ";
var browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
if(12456 == 6898){
try{
browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
}
catch(e){}
}
else if(12456 == 6466){
try{
browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
}
catch(e){}
}
else if(12456 == 15144){
try{
browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
}
catch(e){}
}
else if(12456 == 7828){
try{
browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
}
catch(e){}
}
try{
browserUrl = "http://www.aakritihousing.com/projects/view/aakriti-honey-dew"
}
catch(e){}
var trans=0;
var mouse=0;
var transNS=0;
var getreapvisid = "";
var ls_winColors = "#4C4D4F,#4C4D4F,#4C4D4F,#71BF44";
var ls_winColor = ls_winColors.split(',');
var scrTop = 0;
var scrTopNS = 0;
var ls_winOpenVal = 0;
var ls_largeWinFlag = 0;
var lsMFrameVisibility = "visible";
var exParam = "null";
var resetSession = "false";
ls_chatsess_s = "1112020030610173100_2020/3/6 10:17:31_1_103.242.154.179_IN_2_2615_Windows 10 _India_Raj_Hyderabad";
ls_chatbox_s = "B1-C1120-D2-R2_Aakriti Housing_3_1_250_300_110101000103000_newchat_1_#4C4D4F,#4C4D4F,#4C4D4F,#71BF44_Live Chat";
ls_brodet_s = "0__null__951149586.1583318295__mozilla%2F5.0+%28windows+nt+10.0%3B+win64%3B+x64%29+applewebkit%2F537.36+%28khtml%2C+like+gecko%29+chrome%2F80.0.3987.132+safari%2F537.36__NA__Chrome+__Windows+10+__http%3A%2F%2Fwww.aakritihousing.com%2Fprojects%2Fview%2Faakriti-honey-dew__+++__0__http%3A%2F%2Fwww.aakritihousing.com%2Fprojects%2Fview%2Faakriti-honey-dew";
if(resetSession == "true")
{
livsrvsetsessid("ls_tempcs_id12456","NA");
livsrvsetsessid("ls_agentID12456","NA");
livsrvsetsessid("ls_visitorId12456","NA");
livsrvsetsessid("ls_serverip12456","NA");
livsrvsetsessid("ls_initsess12456","NA");
}
var ls_tempcs_id = livsrvgetCookie("ls_tempcs_id12456");
var ls_agentID = livsrvgetCookie("ls_agentID12456");
var ls_visitorId = livsrvgetCookie("ls_visitorId12456");
var ls_serverip = livsrvgetCookie("ls_serverip12456");
if (ls_tempcs_id == "")
{
ls_tempcs_id = "NA";
ls_agentID = "NA";
ls_visitorId = "NA";
ls_serverip = "NA";
}
if (ls_tempcs_id != "NA")
{
//20170725	crossDomainChat();
}
/*
1st 1 minimize
2nd 1 trans
3rd 1 close
4th 1 scroll
5th 1 chat form
5th 2 grank chat form
6th 1 delay to load chat window
7th 1 fileupload
8th 1 = click here to chat
9th 1 = resize chat window
10th 1 = custom chat window
11th 1 = https click to chat
12th 3 = fix chat window in right bottom
12th 2 = fix chat window in middle bottom
12th 1 = fix chat window in left bottom
13th 1 = bubble
14th 1 = mobile click to chat 
*/
var chtaMessageBubbleFlag = wButtonType.charAt(12);
var mobileagt = navigator.userAgent.toLowerCase();
var mobileDeviceFlag = 0;
if(mobileagt.indexOf("iphone")!=-1 || mobileagt.indexOf("ipad")!=-1 || mobileagt.indexOf("android")!=-1)
{
mobileDeviceFlag = 1;
}
var ls_LivWinWin_height = 250;
var ls_LivWinWin_width = 300;
var ls_LivWinWin_top = 1;
var ls_LivWinWin_left = 3;
var ls_LivWinLayer;
if(mobileDeviceFlag == 1){
ls_LivWinWin_height = 180;
if(12456 == 16184){
ls_LivWinWin_height = 225;
}
}
livsrvsetsessid("cs_idnew12456",cs_id);
livsrvsetsessid("ls_chatsess12456",ls_chatsess_s);
livsrvsetsessid("ls_chatbox12456",ls_chatbox_s);
livsrvsetsessid("ls_brodet12456",ls_brodet_s);
function livsrvsetsessid(name,value)
{
if(12456 != 9512 && 12456 != 8922 && 12456 != 2022 && 12456 != 6202){
var cookiestring=name+"="+value+";PATH=/";
document.cookie=cookiestring;
}
else{
var liveWebDomain = document.domain;
liveWebDomain = liveWebDomain.replace("http://","");
liveWebDomain = liveWebDomain.replace("www.","");
var cookiestring=name+"="+value+";domain=."+liveWebDomain+";PATH=/";
document.cookie=cookiestring;
}
}
//------------google analytics -------------
if(12456 == "237" || 12456 == "10362" || 12456 == "10385" || 12456 == "2476" || 12456 == "8007" || 12456 == "11797"){
try{
var googleTrackVal = ls_GetCookie("google"+1112020030610173100);
if(googleTrackVal != "yes"){
//alert(googleTrackVal);
//ga('send', 'pageview','chatcount');
//getLsVisitorsCount();
var googlecookiestring="google"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
//------------google analytics iframe -------------
if(12456 == "01310" || 12456 == "6120" || 12456 == "10180" || 12456 == "6127" || 12456 == "2169"|| 12456 == "1937" || 12456 == "833"){
try{
var googleTrackVal = ls_GetCookie("google"+1112020030610173100);
if(googleTrackVal != "yes"){
//alert(googleTrackVal);
//ga('send', 'pageview','chatcount');
//parent.getLsVisitorsCount();
var googlecookiestring="google"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
var eventer = window[eventMethod];
var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
// Listen to message from child IFrame window
eventer(messageEvent, function (e) {
if((e.data + "").indexOf("ls_regSession") > -1)
{
var ls_regSess = e.data.split("__");
livsrvsetsessid("ls_tempcs_id12456",ls_regSess[1]);
ls_tempcs_id = ls_regSess[1];
remote_ls_tempcs_id = ls_tempcs_id;
livsrvsetsessid("ls_agentID12456",ls_regSess[2]);
ls_agentID = ls_regSess[2];
livsrvsetsessid("ls_visitorId12456",ls_regSess[3]);
ls_visitorId = ls_regSess[3];
livsrvsetsessid("ls_initsess12456","NA");
if(ls_regSess.length > 4)
{
livsrvsetsessid("ls_serverip12456",ls_regSess[4]);
ls_serverip = ls_regSess[4];
}
//20170725 crossDomainChat();
}
else if((e.data + "").indexOf("ls_chattransf") > -1 )
{
var ls_agentID = e.data.split("__")[1];
livsrvsetsessid("ls_agentID12456",ls_agentID);
}
else if((e.data + "").indexOf("ls_regnewvisid") > -1 )
{
var ls_newVisid = e.data.split("__")[1];
var ls_tchatsess = ls_chatsess_s.split("_");
ls_tchatsess[0] = ls_newVisid;
ls_chatsess_s = ls_tchatsess.join("_");
livsrvsetsessid("ls_chatsess12456",ls_chatsess_s);
}
else if(e.data == "geAgent"){
if(12456 == "237" || 12456 == "10362" || 12456 == "10385" || 12456 == "2476" || 12456 == "8064" || 12456 == "8007" || 12456 == "11797" || 12456 == "11969"){
//alert(e.data);
try{
var googleTrackVal = ls_GetCookie("lsValidChat"+1112020030610173100);
//alert(googleTrackVal);
if(googleTrackVal != "yes"){
//alert("1")
//ga('send', 'pageview','interactive');
getLsChatCount();
//ga('send', 'event', 'getAgent', 'chat', 'validchatcount', 1);
var googlecookiestring="lsValidChat"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
//----------iframe--------
if(12456 == "01310" || 12456 == "6120" || 12456 == "10180" || 12456 == "6127" || 12456 == "2169" || 12456 == "1937" || 12456 == "833"){
try{
var googleTrackVal = ls_GetCookie("lsValidChat"+1112020030610173100);
//alert(googleTrackVal);
if(googleTrackVal != "yes"){
//alert("1")
//ga('send', 'pageview','interactive');
parent.getLsChatCount();
//ga('send', 'event', 'getAgent', 'chat', 'validchatcount', 1);
var googlecookiestring="lsValidChat"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
}
else if(e.data == "validLead"){
//--------------lead tracking
if(12456 == "10362" || 12456 == "10385" || 12456 == "2476" || 12456 == "8064" || 12456 == "8007" || 12456 == "11797" || 12456 == "11969"){
try{
var googleLeadTrackVal = ls_GetCookie("lsValidLead"+1112020030610173100);
if(googleLeadTrackVal != "yes"){
getLsValidLead();
var googlecookiestring="lsValidLead"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
//----------iframe--------
if( 12456 == "6120" || 12456 == "10180" || 12456 == "6127" || 12456 == "2169" || 12456 == "1937" || 12456 == "833"){
try{
var googleLeadTrackVal = ls_GetCookie("lsValidLead"+1112020030610173100);
if(googleLeadTrackVal != "yes"){
parent.getLsValidLead();
var googlecookiestring="lsValidLead"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
}
else if((e.data + "").indexOf("validLead/") != -1){
if(12456 == "01310"){
try{
var gaLabel = e.data;
var gaLabelSplit = gaLabel.split("/");
//alert(gaLabelSplit[1]);
var googleLeadTrackVal = ls_GetCookie("lsValidLead"+1112020030610173100);
if(googleLeadTrackVal != "yes"){
parent.getLsValidLead(gaLabelSplit[1]);
var googlecookiestring="lsValidLead"+1112020030610173100+"=yes;PATH=/";
document.cookie=googlecookiestring;
}
}
catch(e){
}
}
}
else if((e.data + "").indexOf("validLeadM/") != -1){
if(12456 == "01310"){
var gaLabel = e.data;
var gaLabelSplit = gaLabel.split("/");
window.opener.postMessage("validLead/"+gaLabelSplit[1], "*");
}
}
else if(e.data == "validLeadM"){
window.opener.postMessage("validLead", "*");
}
else if(e.data == "geAgentM"){
window.opener.postMessage("geAgent", "*");
}
else if(e.data == "closeAd"){
try{
document.getElementById("ls_adDiv").style.visibility = "hidden";
cookiestring="ls_bannerAdSubmit=1;PATH=/";
document.cookie=cookiestring;
}
catch(e){
}
}
else if((e.data + "").indexOf("transparentTrigger") != -1){
if(12456 == "12253" || 12456 == "6120" || 12456 == "508"){
try{
ls_transparent();
}
catch(e){}
}
}
else if(e.data == "CWTransparentTrigger"){
if(12456 == "508"){
try{
ls_transparent();
}
catch(e){}
}
}
else if(e.data == "startLsChat"){
try{
setRepeatedVisitorDetails();
}
catch(e){}
try{
ls_chatstarted();
}
catch(e){}
}
else if(e.data == "remotesession"){
try{
if(ls_checksessionptr == 0)
ls_checksessionptr = setInterval("ls_checksession()",5000);
}
catch(e){}
}
else if((e.data + "").indexOf("ls_initsess") > -1){
try{
var ls_initagtserver = e.data.split("__");
livsrvsetsessid("ls_initsess12456",ls_initagtserver[1]);
}
catch(e){}
}
else if(e.data == "ls_contactreg"){
try{
livsrvsetsessid("ls_contactreg12456","1");
}
catch(e){}
}
}, false);
//--------- repeated visitors -----------------
//if(reapvisgetCookie())
var getreapvisidDate = livsrvgetCookie("getreapvisidDate12456");
function setRepeatedVisitorDetails()
{
getreapvisid = livsrvgetCookie("reapvisid12456");
if (getreapvisid == "")
{
reapvissetCookie("reapvisid12456",cs_id)
getreapvisid = cs_id;
}
//var getreapvisidDate = livsrvgetCookie("getreapvisidDate12456");
if (getreapvisidDate == "")
{
reapvissetCookie("getreapvisidDate12456",cs_id+"="+"2020/3/6 14:3:17")
}
else
{
if(getreapvisidDate.indexOf(cs_id) == -1){
var splitRepeatedVisdate = getreapvisidDate.split(",");
var updatedReVisIdDate = "";
if(splitRepeatedVisdate.length < 5){
for(var i = 0; i < splitRepeatedVisdate.length ; i++){
var lscommaVal = "";
if(updatedReVisIdDate != ""){
lscommaVal = ",";
}
updatedReVisIdDate = updatedReVisIdDate + lscommaVal + splitRepeatedVisdate[i];
}
}
else if(splitRepeatedVisdate.length >= 5){
for(var i = 0; i < 4 ; i++){
var lscommaVal = "";
if(updatedReVisIdDate != ""){
lscommaVal = ",";
}
updatedReVisIdDate = updatedReVisIdDate + lscommaVal + splitRepeatedVisdate[i];
}
}
updatedReVisIdDate = cs_id+"="+"2020/3/6 14:3:17" +","+ updatedReVisIdDate;
//alert(updatedReVisIdDate);
reapvissetCookie("getreapvisidDate12456",updatedReVisIdDate);
}
}
}
function getRepeatedVisDetails(){
var repVisDetails = "";
try
{
if(getreapvisidDate != ""){
var updatedReVisIdDateSplit = getreapvisidDate.split(",");
var repeatedVisLength = updatedReVisIdDateSplit.length;
for(var i = 0; i < updatedReVisIdDateSplit.length; i++ ){
var ReVisIdDateSplit = updatedReVisIdDateSplit[i].split("=");
if(ReVisIdDateSplit[0].indexOf(cs_id) == -1){
repVisDetails = repVisDetails + '{ "id" : "'+ReVisIdDateSplit[0]+'" , "date" : "'+ReVisIdDateSplit[1]+'"}';
if(i < repeatedVisLength-1){
repVisDetails = repVisDetails + ",";
}
}
}
}
}
catch(e)
{
repVisDetails = "";
}
return "[" + repVisDetails + "]";
}
var repeatedVisDateDetails = getRepeatedVisDetails();
function livsrvgetCookie(cookiename)
{
var cookiestring=""+document.cookie;
var index1=cookiestring.indexOf(cookiename);
if (index1==-1 || cookiename=="") return "";
var index2=cookiestring.indexOf(';',index1);
if (index2==-1) index2=cookiestring.length;
return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
}
function livsrvgeturlparam(cookiename,url)
{
var cookiestring=""+url;
var index1=cookiestring.indexOf(cookiename);
if (index1==-1) return "";
var index2=cookiestring.indexOf('&',index1);
if (index2==-1) index2=cookiestring.length;
return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
}
function reapvissetCookie(name,value)
{
cookiestring=name+"="+escape(value)+";EXPIRES="+reapvisexpirydate(365)+";PATH=/";
document.cookie=cookiestring;
}
function reapvisexpirydate(nodays)
{
var UTCstring;
Today = new Date();
nomilli=Date.parse(Today);
Today.setTime(nomilli+nodays*24*60*60*1000);
UTCstring = Today.toUTCString();
return UTCstring;
}
var profile = window.location.search;
var profilevalue="na";
if(profile != "")
{
if(profile.indexOf("pr=") > 0 )
{
profilevalue = profile.replace("?","");
}
}
var winUrl = "";
winUrl = document.referrer;
if(12456 == "8228" || 12456 == "1821" || 12456 == "5176" || 12456 == "4515" || 12456 == "8806" || 12456 == "8765" || 12456 == "8404" || 12456 == "3303" || 12456 == "6187" || did =="3661" || did == "833"){
try{
winUrl = window.parent.parent.document.referrer;
}
catch(e){
}
}
if(winUrl == "")
{
winUrl = window.location+"";
winUrl = winUrl.replace("http://","");
winUrl = winUrl.replace("https://","");
var SplitWinUrl = winUrl.split("/");
winUrl = SplitWinUrl[0]+"$Url";
}
else
{
winUrl = document.referrer+"";	
if(12456 == "8228" || did == "1821" || did == "6187" || did =="3661"){
try{
winUrl = window.parent.parent.document.referrer;
}
catch(e){
}
}
winUrl = winUrl.replace("http://","");
winUrl = winUrl.replace("https://","");
var SplitWinUrl = winUrl.split("/");	
winUrl =escape(SplitWinUrl[0])+"$ReferralUrl";
}
var parentUrl;
if(did == "1821"){
try{
parentUrl = window.parent.location.href;
if(parentUrl.indexOf("visitor-management.html") != -1){
//winUrl = parentUrl;
}
}
catch(e){
}
}
var mobilePageLocation = location.href;
var nomobileChatId = "11255,1310,";
var mobileChatId = "4608,237,4456,6075,7030,3591,5110,6127,7478,761,1399,8179,7765,8683,8690,8676,8669,8662,8655,8218,8196,2127,2148,9323,6127,6267,2148,9614,9621,9664,8765,8813,11757,1962,10805,11034,11026,12513,";
if(wButtonType.charAt(13) == "1" || wButtonType.charAt(13) == "2"){
mobileChatId = mobileChatId + 12456+",";
}
var parameter="p0=" + cs_id + "&p1=" + hcode+"&p2="+0+"&p3="+AliasName+"&p4="+agent+"&p5="+greeting+"&p6="+countryName+"&p7="+country_ip+"&p8="+visitorId+"&p9="+folderName + "&p10=" + profilevalue + "&p11=" + getreapvisid + "&p12=" +winUrl+ "&p13=" + cityName + "&p14=" + countryName + "&p15=" + servertime + "&p16=" +escape(browserUrl)+ "&p17=" +wButtonType.charAt(4) + "&p18=" +ls_SearchKeywords+ "&p19=" +ls_LivWinWin_height+"&p20=" +escape(ls_winColor[0])+"&p21=" +escape(ls_winColor[3])+"&p22=" +wButtonType.charAt(6)+"&p23=" +wButtonType.charAt(9)+"&p24="+exParam+"&p25=12456&p26="+chtaMessageBubbleFlag+"&p28="+escape(repeatedVisDateDetails)+ "&ls_LivWinWin_width="+ls_LivWinWin_width+"&ls_agentID=" + ls_agentID + "#ls_chatsess=" + escape(ls_chatsess_s) + "&ls_brodet=" + escape(ls_brodet_s) + "&ls_tempcs_id=" + ls_tempcs_id + "&ls_visitorId=" + escape(ls_visitorId) + "&ls_serverip=" + escape(ls_serverip) + "&date="+new Date().getTime();
if(holidayFlag == 1){
var ls_regcontact = livsrvgetCookie("ls_contactreg12456");
if(ls_regcontact == "")
{
ls_regcontact = "0";
}
parameter = "lscntreg=" + ls_regcontact + "&" + parameter 
}
// begin -------- maintaining sesson across tabs and windows
var remote_ls_tempcs_id = ls_tempcs_id;
var ls_checksessionptr = 0;
function ls_checksession()
{
ls_tempcs_id = livsrvgetCookie("ls_tempcs_id12456");
if(ls_tempcs_id == "")
ls_tempcs_id = "NA";
if(ls_tempcs_id != remote_ls_tempcs_id)
{
remote_ls_tempcs_id = ls_tempcs_id;
ls_agentID = livsrvgetCookie("ls_agentID12456");
if(ls_agentID == "")
ls_agentID = "NA";	
ls_visitorId = livsrvgetCookie("ls_visitorId12456");
if(ls_visitorId == "")
ls_visitorId = "NA";	
ls_serverip = livsrvgetCookie("ls_serverip12456");
if(ls_serverip == "")
ls_serverip = "NA";
ls_chatsess_s = livsrvgetCookie("ls_chatsess12456");
if(ls_chatsess_s.indexOf(cs_id) == -1)
{
var ls_tchatsess = ls_chatsess_s.split("_");
cs_id = ls_tchatsess[0];
}
parameter="p0=" + cs_id + "&p1=" + hcode+"&p2="+0+"&p3="+AliasName+"&p4="+agent+"&p5="+greeting+"&p6="+countryName+"&p7="+country_ip+"&p8="+visitorId+"&p9="+folderName + "&p10=" + profilevalue + "&p11=" + getreapvisid + "&p12=" +winUrl+ "&p13=" + cityName + "&p14=" + countryName + "&p15=" + servertime + "&p16=" +escape(browserUrl)+ "&p17=" +wButtonType.charAt(4) + "&p18=" +ls_SearchKeywords+ "&p19=" +ls_LivWinWin_height+"&p20=" +escape(ls_winColor[0])+"&p21=" +escape(ls_winColor[3])+"&p22=" +wButtonType.charAt(6)+"&p23=" +wButtonType.charAt(9)+"&p24="+exParam+"&p25=12456&p26="+chtaMessageBubbleFlag+"&p28="+escape(repeatedVisDateDetails)+ "&ls_agentID=" + ls_agentID + "#ls_chatsess=" + escape(ls_chatsess_s) + "&ls_brodet=" + escape(ls_brodet_s) + "&ls_tempcs_id=" + ls_tempcs_id + "&ls_visitorId=" + escape(ls_visitorId) + "&ls_serverip=" + escape(ls_serverip) + "&date="+new Date().getTime();
LivWinfilepath = LivWinfilepath.substring(0,LivWinfilepath.indexOf(".jsp?")) + ".jsp?" + parameter;
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
document.getElementById('ls_LivWinFrame').src = LivWinfilepath;
}
else{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('ls_LivWinFrame').src = LivWinfilepath;
}
}
}
//if(12456 == 508)
//ls_checksessionptr = setInterval("ls_checksession()",3000);
// end -------- maintaining sesson across tabs and windows
var liveWinDomain = document.domain;
if(liveWinDomain == "first.livserv.in")
{
var ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
if(navigator.appName.indexOf("Netscape")>-1 || navigator.appName.indexOf("Opera")>-1 || navigator.appName.indexOf("Firefox")>-1)
{
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?"+parameter;
}
if(holidayFlag == 1){
ls_LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter ;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
document.getElementById('lschatframe').src = ls_LivWinfilepath;
}
else if(12456 == 11702 && (browserUrl.indexOf("LivservMchat.jsp") == -1 && browserUrl.indexOf("LivservQRchat.jsp") == -1))
{
var ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
if(navigator.appName.indexOf("Netscape")>-1 || navigator.appName.indexOf("Opera")>-1 || navigator.appName.indexOf("Firefox")>-1)
{
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?"+parameter;
}
if(holidayFlag == 1){
ls_LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
document.getElementById('lschatframe').src = ls_LivWinfilepath;
}
else if((mobileChatId.indexOf(12456+",")!=-1)&& mobileDeviceFlag == 1 && ((navigator.appName.indexOf("Microsoft")==-1) || (navigator.appName.indexOf("MSIE")==-1))){
//(nomobileChatId.indexOf(12456+",")==-1)	
var pageLocation = location.href;
if(pageLocation.indexOf("LivservMchat.jsp")==-1 && pageLocation.indexOf("LivservQRchat.jsp") == -1)
{
var mobileButton = "Click here to chat";
var mobheadderid = "7655,7741,7765,8196,8218,8378,8385,8655,8662,8669,8676,8683,8690,8179,1983,2127,4809,8007,6417,7153,7023,6598,";
if(mobheadderid.indexOf(12456+",")!=-1){
mobileButton = "24 * 7 Live Chat";
}
//ls_LivWinMobilepath = mdomainurl + "/livservtemp3/LivservMchat.jsp?did=12456&livserv_cs_id="+cs_id;
ls_LivWinMobilepath = domainurl + "/livservtemp3/livserv_ns_mobile_new.jsp?" + parameter;
if(holidayFlag == 1){
ls_LivWinMobilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
var mobButtonHeight = 40;
var mobButtonWidth = 140;
var vbhcid = "7655,7741,7765,8196,8218,8378,8385,8655,8662,8669,8676,8683,8690,";
if(vbhcid.indexOf(12456+",")!=-1){
mobButtonHeight = 40;
mobButtonWidth = 240;
}
var mobileChatButton = "<div style='border-width: 0px;position:fixed;width:"+mobButtonWidth+"px;heigth:"+mobButtonHeight+"px;line-height: "+mobButtonHeight+"px;background-color:"+ls_winColor[0]+";z-index:10000;color:"+ls_winColor[3]+" !important;right:10px;bottom:10px;text-align: center;vertical-align: middle;' onClick='openMobileChat(ls_LivWinMobilepath)'><b>"+mobileButton+"</b></div>";
if(12456 == 1955 || 12456 == 6267 || 12456 == 18548){
//mobileChatButton = "<div style='border-width: 0px;position:fixed;z-index:10000;right:10px;bottom:10px;text-align: right;vertical-align: middle;'><input type='image' align='right' src='"+domainurl+"/livservtemp3/mobButton.jpg' alt='Click here to chat' onClick='openMobileChat(ls_LivWinMobilepath)'></div>";
mobileChatButton = "<div style='border-width: 0px;position:fixed;width:95%;heigth:"+mobButtonHeight+"px;line-height: "+mobButtonHeight+"px;z-index:10000;color:"+ls_winColor[3]+" !important;bottom:10px;text-align: center;vertical-align: middle;' ><input type='button' value='Click here to Chat, Our Experts are Online.' style='background-color:#019F29;color: white;font-weight:bold;border-radius: 6px;font-size: 15px;height:40px' onClick='openMobileChat(ls_LivWinMobilepath)'></div>";
}
//-------------pro active mobile chat window
if(wButtonType.charAt(13) == "2"){
//--load chat window in hidden mode----
ls_load_LivWinWin();
mobileChatButton = "<div style='border-width: 0px;position:fixed;width:"+mobButtonWidth+"px;heigth:"+mobButtonHeight+"px;line-height: "+mobButtonHeight+"px;background-color:"+ls_winColor[0]+";z-index:2147483647;color:"+ls_winColor[3]+" !important;right:10px;bottom:10px;text-align: center;vertical-align: middle;visibility:visible' onClick='showMobileChat()' id='ls_mobileChatButton'><b>"+mobileButton+"</b></div>";
}
var ls_bodyObj = document.getElementsByTagName('body').item(0);
var ls_createRange = ls_bodyObj.ownerDocument.createRange();
ls_createRange.setStartBefore(ls_bodyObj);
var ls_parsedHTML = ls_createRange.createContextualFragment(mobileChatButton);
ls_bodyObj.appendChild(ls_parsedHTML);
}
else
{
if(12456 != 508)
{
ls_LivWinMobilepath = domainurl + "/livservtemp3/livserv_ns_mobile_new.jsp?" + parameter;
}
else
{
ls_LivWinMobilepath = domainurl + "/livservtemp3/livserv_ns_mobile_new.jsp?" + parameter;
}
if(holidayFlag == 1){
ls_LivWinMobilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinMobilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
}
}
else if( mobileChatId.indexOf(12456+",")==-1 &&( mobilePageLocation.indexOf("LivservMchat.jsp") != -1 && mobilePageLocation.indexOf("LivservQRchat.jsp") == -1)){
ls_LivWinMobilepath = domainurl + "/livservtemp3/livserv_ns_mobile_new.jsp?" + parameter;
if(holidayFlag == 1){
ls_LivWinMobilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinMobilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinMobilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
}
else if(wButtonType.charAt(9) == "1")
{
var ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
if(navigator.appName.indexOf("Netscape")>-1 || navigator.appName.indexOf("Opera")>-1 || navigator.appName.indexOf("Firefox")>-1)
{
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?"+parameter;
}
if(holidayFlag == 1){
ls_LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
try{
//document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
if(12456 != "10405"){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
}
else if(12456 == "10405" && formstatus != 1){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
try{
document.getElementById("livprop_popup1").style.zIndex = "1";
document.getElementById("livprop_popup1").style.visibility = "visible";
//document.getElementById("live-button").style.visibility = "visible";
} 
catch(e){}
}
else if(12456 == "10405" && formstatus == 1 && ls_agentID != "NA"){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
try{
document.getElementById("livprop_popup1").style.zIndex = "1";
document.getElementById("livprop_popup1").style.visibility = "visible";
//document.getElementById("live-button").style.visibility = "visible";
} 
catch(e){}
}
//--------activate custome chat window
try{
document.getElementById("ls_topDiv").style.visibility = "visible";
}
catch(e){}
try{
document.getElementById("livprop_popup").style.display = "block";
document.getElementById("livprop_popup1").style.display = "block";
//document.getElementById("live-button").style.visibility = "visible";
}
catch(e){}
}
catch(e){
/*
if (window.addEventListener)
{
window.addEventListener("onload", ls_checkCookie(), false)
}
else if (window.attachEvent)
{
window.attachEvent("onload", ls_checkCookie);
}
*/
//ls_checkCookie();
setTimeout(loadCustomCwIframeAfterDelay, 1500);
}
}
function loadCustomCwIframeAfterDelay(){
//--------activate custome chat window
try{
document.getElementById("ls_topDiv").style.visibility = "visible";
}
catch(e){}
try{
document.getElementById("livprop_popup").style.display = "block";
}
catch(e){}
var ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
if(navigator.appName.indexOf("Netscape")>-1 || navigator.appName.indexOf("Opera")>-1 || navigator.appName.indexOf("Firefox")>-1)
{
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
ls_LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?"+parameter;
}
if(holidayFlag == 1){
ls_LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
ls_LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
try{
//document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
if(12456 != "10405"){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
}
else if(12456 == "10405" && formstatus != 1){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
try{
document.getElementById("livprop_popup1").style.zIndex = "1";
document.getElementById("livprop_popup1").style.visibility = "visible";
document.getElementById("live-button").style.visibility = "visible";
} 
catch(e){}
}
else if(12456 == "10405" && formstatus == 1 && ls_agentID != "NA"){
document.getElementById("ls_chatFrameDiv").innerHTML = "<iframe src='"+ls_LivWinfilepath+"' style='width:100%;height:100%;' frameborder='0' vspace='0' hspace='0' marginwidth='0' marginheight='0' scrolling=no></iframe>";
try{
document.getElementById("livprop_popup1").style.zIndex = "1";
document.getElementById("livprop_popup1").style.visibility = "visible";
document.getElementById("live-button").style.visibility = "visible";
} 
catch(e){}
}
}
catch(e){
ls_checkCookie();
}
}
function openMobileChat(path){
window.open(path,"Livserv","resizable=Allow,location=0,status=0,scrollbars=0");
}
function showMobileChat(){
document.getElementById("ls_mobileChatButton").style.visibility = "hidden";
document.getElementById("ls_theLayer").style.visibility = "visible";
}
var LivWinfilepath;
var agt = navigator.userAgent.toLowerCase();
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
if(12456 != 508)
{
LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
}
else
{
LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
}
if(holidayFlag == 1){
LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
if(12456 != "1529" || wButtonType.charAt(7) != "1")
{
if (window.addEventListener)
{	
if(12456 != "2616")
{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.addEventListener("scroll", wscroll, false)
}
}
}
else if (window.attachEvent)
{
if(12456 != "2616")
{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.attachEvent("onscroll", wscroll);
}
}
}
else if (document.getElementById)
{
if(12456 != "2616")
{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.onscroll=wscroll;
}
}
}
}
}
else if(navigator.appName.indexOf("Netscape")>-1 || navigator.appName.indexOf("Opera")>-1)
{
if(12456 != 508)
{
LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
else
{
LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?" + parameter;
}
if(!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)){
LivWinfilepath = domainurl + "/livservtemp3/livserv_ns_new.jsp?"+parameter;
}
if(holidayFlag == 1){
LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
if(12456 != "1529" || 12456 != "2616" || 12456 != "9725" || wButtonType.charAt(7) != "1")
{	
if (window.addEventListener)
{
//if(12456 != "5176")
//{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.addEventListener("scroll", nswscroll, false)
}
//}
}
else if (window.attachEvent)
{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.attachEvent("onscroll", nswscroll);
}
}
else if (document.getElementById)
{
if(agt.indexOf("iphone")==-1 && agt.indexOf("ipad")==-1 && agt.indexOf("android")==-1){
window.onscroll=nswscroll;
}
}
}
}
else
{
LivWinfilepath = domainurl + "/livservtemp3/livserv_new.jsp?"+parameter;
if(holidayFlag == 1){
LivWinfilepath = holidayurl + "/livservtemp/livservContact.jsp?" + parameter;
}
if(12456 == 16661 && formstatus == 1 && ls_agentID == "NA"){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/SankaraForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 15144 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/asterCmiForm.jsp?vs_id="+cs_id ;
}
else if(12456 == 17208 && ls_agentID == "NA" && formstatus == 1){
LivWinfilepath = domainurl + "/livservtemp3/enqForms/emaarForm.jsp?vs_id="+cs_id ;
}
}
function ls_checkCookie()
{
ls_cookie_val = parseInt(ls_GetCookie("transCookie"));
if(!ls_cookie_val )
{
ls_cookie_val = 0;
}
if( parseInt(ls_GetCookie("transCookie")) != 4)
{
if(mobileDeviceFlag == 0){
ls_load_LivWinWin();
}
else if( mobileChatId.indexOf(12456+",")==-1 && (mobilePageLocation.indexOf("LivservMchat.jsp") == -1 && mobilePageLocation.indexOf("LivservQRchat.jsp") == -1)){
ls_load_LivWinWin();	
}
//else if((nomobileChatId.indexOf(12456+",")!=-1) && mobileDeviceFlag == 1){
else if((mobileChatId.indexOf(12456+",")==-1) && mobileDeviceFlag == 1 &&( mobilePageLocation.indexOf("LivservMchat.jsp") == -1 && mobilePageLocation.indexOf("LivservQRchat.jsp") == -1)){
ls_load_LivWinWin();
}
}
/*
if(12456 == "508"){
var perDayCookie = livsrvgetCookie("onechatperday");
var agentId = livsrvgetCookie("livservAgent");
if(perDayCookie == ""){
livsrvsetCookieForOneDay("onechatperday",cs_id);
}
if(agentId == "" || agentId == "NA"){
setCookieForOneDay("livservAgent",agent);
}
}
*/
//crossDomainChat();
}
function ls_load_LivWinWin()
{	
var ls_LivWinWin = "";
var fixedlsChatCss = "";
var ls_chatWBottom = "0px";
var ls_winpos = "absolute";
ls_theLayervisibility = "";
if(wButtonType.charAt(13) == "2"){
ls_theLayervisibility = "visibility:hidden";
lsMFrameVisibility = "";
}
if(12456 == 11912){
ls_chatWBottom = "50px";
}
else if(12456 == 3563){
ls_chatWBottom = "10px";
}
if(wButtonType.charAt(11) == "3" && mobileDeviceFlag == 0){
fixedlsChatCss = "<style>#ls_theLayer{position:fixed !important;	right : 0 !important;	bottom : "+ls_chatWBottom+" !important;	left : auto !important;	top : auto !important;"+ls_theLayervisibility+"}</style>";
}
else if(wButtonType.charAt(11) == "1" && mobileDeviceFlag == 0){
fixedlsChatCss = "<style>#ls_theLayer{position:fixed !important;	right : auto !important;	bottom : "+ls_chatWBottom+" !important;	left : 15px !important;	top : auto !important;"+ls_theLayervisibility+"}</style>";
}
if(mobileDeviceFlag == 1){
fixedlsChatCss = "<style>#ls_theLayer{	top : auto !important;	bottom : 0px !important;}</style>";
}
if(12456 == "2476" || 12456 == "16633" || 12456 == "9725" || 12456 == "11996" || 12456 == "17558" || 12456 == "16661" || 12456 == "18492" || 12456 == "18576" || 12456 == "10180" || 12456 == "18753" || 12456 == "18772" || 12456 == "9042" || 12456 == "1955" || 12456 == "18442"){
fixedlsChatCss = "<style>#ls_theLayer{	top : auto !important;	bottom : "+ls_chatWBottom+" !important;position:fixed !important;}</style>";
}
if(12456 == "11912"){
fixedlsChatCss = "<style>#ls_theLayer{	top : auto !important;right : 0 !important;left : auto !important;	bottom : "+ls_chatWBottom+" !important;position:fixed !important;}</style>";
}
var middleFrameVisibility = "!important";
if(12456 == "572" || 12456 == "16184" || 12456 == "7980"){
middleFrameVisibility = "";
if(mobileDeviceFlag == 1){
fixedlsChatCss = "<style>#ls_theLayer{position:fixed !important;	top : auto !important;	bottom : 0px !important;}</style>";
}
}
if( 12456 =="11912" || 12456 =="11996"){
ls_winpos = "fixed !important;right:0 !important;";
}
if(12456 =="2476"){
ls_winpos = "fixed !important;left:auto !important;right:0 !important;";
}
var livservMiddleFrameDisplay = "display:block !important;";
if(12456 == "11996" || 12456 == "761" || 12456 == "12167"){
livservMiddleFrameDisplay = "";
}
if ( pageprotocol.indexOf("https") != -1 )
{
/*
if(pageprotocol.indexOf("https") == -1 ){
//ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:absolute;width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 " onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px;border: 0 !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px !important;border:0px solid #666666; padding:0px;"><td width="100%" height="5" style="border:0px solid #666666; padding:0px 0px;"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="width:100%;height:5px;z-index:99;border: none;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px;border:0px solid #666666; padding:0px;" id="livservMiddleFrameTd"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="position: relative !important;width:100%;height:100%;z-index:4;border: none;display: block !important;visibility: '+lsMFrameVisibility+' '+middleFrameVisibility+';opacity: 100 !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px !important;"><td width="100%" height="5" style="border:0px solid #666666; padding:0px;"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="width:100%;height:5px;z-index:99;border: none;display: block !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:absolute;width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 ;background-color: transparent" onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px !important;border:0px solid #666666 !important; padding:0px !important;"><td width="100%" height="5" style="border:0px solid #666666 !important; padding:0px !important;background-color: transparent;line-height: 1px !important;" valign="baseline"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="width:100%;height:5px !important;z-index:99;border: none;margin-bottom:0 !important" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px;border:0px solid #666666 !important; padding:0px;" id="livservMiddleFrameTd" bgcolor="'+ls_winColor[0]+'"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="display: block !important;position: relative !important;width:100%;height:100%;z-index:4;border: none;margin-bottom:0 !important;visibility: '+lsMFrameVisibility+' '+middleFrameVisibility+';opacity: 100 !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px !important;"><td width="100%" height="5px" style="border:0px solid #666666 !important; padding:0px;background-color: transparent;font-size: 10px;line-height:0;"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="width:100%;height:5px;z-index:99;border: none;margin-bottom:0 !important" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
}
*/	
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
ls_LivWinWin = '<div id="ls_theLayer" style="position:'+ls_winpos+';width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 " onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table style="padding: 0px 0px !important;border-width:0px !important;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" border="0" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px;"><td width="100%" height="5" style="padding: 0px 0px !important;border-width:0px !important"><style>.raised1 { background:transparent; }.raised1 .b1, .raised1 .b2, .raised1 .b3, .raised1 .b4{ display:block; overflow:hidden; font-size:1px;}.raised1 .b1, .raised1 .b2, .raised1 .b3{ height:1px;}.raised1 .b2 { background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #eee;}.raised1 .b3 { background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #ddd;}.raised1 .b4 { background:'+ls_winColor[0]+'; border-left:1px solid #fff; border-right:0px solid #aaa;}.raised1 .b1 { margin:0 5px; background:#fff;}.raised1 .b2{ margin:0 3px; border-width:0 2px;}.raised1 .b3{ margin:0 2px;}.raised1 .b4{ height:2px; margin:0 1px;}.raised1 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}</style><table style="margin-bottom : 0px !important;" width="100%" cellspacing="0" cellpadding="0" onmousemove="dd(event)" onmouseup="ddEnabled=false"><tr><td style="padding: 0px 0px !important;border-width:0px !important"><div class="raised1" style="height:100%;" ><b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b></div></td></tr></table></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px;padding: 0px 0px !important;border-width:0px !important" id="livservMiddleFrameTd"><style>.raised2 { background:transparent; }.raised2 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style><div class="raised2" style="height:100%;" onmousemove="dd(event)" onmouseup="ddEnabled=false"><div class="boxcontent" style="height:100%"><table width="98%" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" style="padding: 0px 0px !important;border-width:0px !important;" ><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar" style="margin-bottom : 0px !important;"><tr><td height="1" id="titleBar" style="margin-bottom : 0px !important;padding: 0px 0px !important;border-width:0px !important" onSelectStart="return false" onmousedown="ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="fill2"><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px;padding: 0px 0px !important;border-width:0px !important;"></td><td align="center" valign="middle" style="width:0px;padding: 0px 0px !important;border-width:0px !important" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px;padding: 0px 0px !important;border-width:0px !important"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+' " style="padding: 0px 0px !important;border-width:0px !important"></td></tr></table></td></tr><tr style="line-height: 1px;"><td width="100%" height="5" style="padding: 0px 0px !important;border-width:0px !important"><style>.raised3 { background:transparent; }.raised3 .b1b, .raised3 .b2b, .raised3 .b3b, .raised3 .b4b { display:block; overflow:hidden; font-size:1px;}.raised3 .b1b, .raised3 .b2b, .raised3 .b3b { height:1px;}.raised3 .b4b { background:'+ls_winColor[0]+'; border-left:1px solid #eee; border-right:1px solid #999;}.raised3 .b3b { background:'+ls_winColor[0]+'; border-left:1px solid #ddd; border-right:1px solid #999;}.raised3 .b2b { background:'+ls_winColor[0]+'; border-left:1px solid #aaa; border-right:1px solid #999;}.raised3 .b1b { margin:0 5px; background:#999;}.raised3 .b2b { margin:0 3px; border-width:0 2px;}.raised3 .b3b { margin:0 2px;}.raised3 .b4b { height:2px; margin:0 1px;}.raised3 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}</style><table width="100%" cellspacing="0" cellpadding="0" onMousemove="ls_resize_msMove(event)" onMousedown="ls_resize_msDown(event)"><tr><td id="dragTd"><div class="raised3" style="height:100%;" ><b class="b4b" onMouseover="ls_resize_msOver(event)"></b><b class="b3b" ></b><b class="b2b" ></b><b class="b1b" ></b></div></td></tr></table></td></tr></table></div>';
}
else{
//ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:absolute;width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 " onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px;border: 0 !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px;border:0px solid #666666; padding:0px;"><td width="100%" height="0" valign="baseline"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="width:100%;height:5px;z-index:99;border: none;display: block !important; min-height: 0px;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px" id="livservMiddleFrameTd"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="position: relative !important;padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:100%;z-index:4;border: none;display: block !important; min-height: 0px;visibility: visible !important;opacity: 100 !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px;"><td width="100%" height="5"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px;z-index:99;border: none;display: block !important; min-height: 0px;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:'+ls_winpos+';width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 ;background-color: transparent" onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px !important;border:0px solid #666666 !important; padding:0px !important;"><td width="100%" height="5" style="border:0px solid #666666 !important; padding:0px !important;background-color: transparent;line-height: 1px !important;" valign="baseline"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px !important;z-index:99;border: none;margin-bottom:0 !important;display: block !important;min-height: 0px;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px;border:0px solid #666666 !important; padding:0px;" id="livservMiddleFrameTd" bgcolor="'+ls_winColor[0]+'"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="display: block !important;position: relative !important;padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:100%;z-index:4;border: none;margin-bottom:0 !important;"+livservMiddleFrameDisplay+"min-height: 0px;visibility: '+lsMFrameVisibility+' '+middleFrameVisibility+';opacity: 100 !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px !important;"><td width="100%" height="5px" style="border:0px solid #666666 !important; padding:0px;background-color: transparent;font-size: 10px;line-height:0;"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px;z-index:99;border: none;margin-bottom:0 !important;display: block !important;min-height: 0px;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
}
}
else
{
if(pageprotocol.indexOf("https") == -1){
var ls_midIframeHeight = (ls_LivWinWin_height-10)+"px";
if(hcode == "B1-C861-D2-R2"){
ls_midIframeHeight = "100%";
}
ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:'+ls_winpos+';width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 ;background-color: transparent" onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px !important;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px !important;border:0px solid #666666 !important; padding:0px !important;"><td width="100%" height="5" style="border:0px solid #666666 !important; padding:0px !important;background-color: transparent;line-height: 1px !important;" valign="baseline"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px !important;z-index:99;border: none;margin-bottom:0 !important;display: block !important;min-height: 0px;" src="about:blank" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+ls_midIframeHeight+';border:0px solid #666666 !important; padding:0px;min-height: 0px;" id="livservMiddleFrameTd" bgcolor="'+ls_winColor[0]+'"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="display: block !important;position: relative !important;padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:100%;z-index:4;border: none;margin-bottom:0 !important;display: block !important;min-height: 0px;visibility:'+lsMFrameVisibility+' '+middleFrameVisibility+';opacity: 100 !important;" src="about:blank" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px !important;"><td width="100%" height="5px" style="border:0px solid #666666 !important; padding:0px;background-color: transparent;font-size: 10px;line-height:0;"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px;z-index:99;border: none;margin-bottom:0 !important;display: block !important;min-height: 0px;" src="about:blank" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
}
else if(pageprotocol.indexOf("https") != -1 && (navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1)){
ls_LivWinWin = '<div id="ls_theLayer" style="position:'+ls_winpos+';width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 " onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="padding: 0px 0px !important;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px;"><td width="100%" height="5" ><style>.raised1 { background:transparent; }.raised1 .b1, .raised1 .b2, .raised1 .b3, .raised1 .b4{ display:block; overflow:hidden; font-size:1px;}.raised1 .b1, .raised1 .b2, .raised1 .b3{ height:1px;}.raised1 .b2 { background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #eee;}.raised1 .b3 { background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #ddd;}.raised1 .b4 { background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #aaa;}.raised1 .b1 { margin:0 5px; background:#fff;}.raised1 .b2{ margin:0 3px; border-width:0 2px;}.raised1 .b3{ margin:0 2px;}.raised1 .b4{ height:2px; margin:0 1px;}.raised1 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}</style><table width="100%" style=";margin-bottom : 0px !important;" cellspacing="0" cellpadding="0" onmousemove="dd(event)" onmouseup="ddEnabled=false"><tr><td><div class="raised1" style="height:100%;" ><b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b></div></td></tr></table></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px" id="livservMiddleFrameTd"><style>.raised2 { background:transparent; }.raised2 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style><div class="raised2" style="height:100%;" onmousemove="dd(event)" onmouseup="ddEnabled=false"><div class="boxcontent" style="height:100%"><table width="98%" style="margin-bottom : 0px !important;" id="ls_outerTable" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" style="margin-bottom : 0px !important;" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="fill2"><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px"></td><td align="center" valign="middle" style="width:0px" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></td></tr><tr style="line-height: 1px;"><td width="100%" height="5"><style>.raised3 { background:transparent; }.raised3 .b1b, .raised3 .b2b, .raised3 .b3b, .raised3 .b4b { display:block; overflow:hidden; font-size:1px;}.raised3 .b1b, .raised3 .b2b, .raised3 .b3b { height:1px;}.raised3 .b4b { background:'+ls_winColor[0]+'; border-left:1px solid #eee; border-right:1px solid #999;}.raised3 .b3b { background:'+ls_winColor[0]+'; border-left:1px solid #ddd; border-right:1px solid #999;}.raised3 .b2b { background:'+ls_winColor[0]+'; border-left:1px solid #aaa; border-right:1px solid #999;}.raised3 .b1b { margin:0 5px; background:#999;}.raised3 .b2b { margin:0 3px; border-width:0 2px;}.raised3 .b3b { margin:0 2px;}.raised3 .b4b { height:2px; margin:0 1px;}.raised3 .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}</style><table width="100%" cellspacing="0" cellpadding="0" onMousemove="ls_resize_msMove(event)" onMousedown="ls_resize_msDown(event)"><tr><td id="dragTd"><div class="raised3" style="height:100%;" ><b class="b4b" onMouseover="ls_resize_msOver(event)"></b><b class="b3b" ></b><b class="b2b" ></b><b class="b1b" ></b></div></td></tr></table></td></tr></table></div>';
}
else{
ls_LivWinWin = '<div id="ls_theLayer" style="border-width: 0px;position:'+ls_winpos+';width:' + ls_LivWinWin_width + 'px;height:'+ls_LivWinWin_height+'px;left:0;top:0;visibility:hidden;z-index:1000000 " onMouseOver="ls_TransMouseOver()" onMouseOut="ls_TransMouseout()"><table border="0" style="border-width: 0px;margin-bottom:0px;padding: 0px 0px !important;border: 0 !important;width:' + ls_LivWinWin_width + 'px !important;margin-bottom : 0px !important;" width="'+ls_LivWinWin_width+'" height="'+ls_LivWinWin_height+'" cellspacing="0" cellpadding="0" id="ls_LivWinWinTable"><tr style="line-height: 1px;border:0px solid #666666; padding:0px;"><td width="100%" height="5"><iframe id="livservTopFrame" name="livservTopFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px;z-index:99;border: none;;display: block !important;display: block !important;min-height: 0px; " src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="border:0px !important"><td width="100%" style="height:'+(ls_LivWinWin_height-10)+'px" id="livservMiddleFrameTd"><iframe id="livservMiddleFrame" name="livservMiddleFrame1" style="display: block !important;position: relative !important;padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:100%;z-index:4;border: none;display: block !important; min-height: 0px;visibility: '+lsMFrameVisibility+' '+middleFrameVisibility+';opacity: 100 !important;" src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr><tr style="line-height: 1px;"><td width="100%" height="5" style="font-size: 10px;line-height:0;"><iframe id="livservBottomFrame" name="livservBottomFrame1" allowtransparency="true" style="padding : 0px !important;margin-top:0px !important;margin-bottom: 0px !important;width:100%;height:5px;z-index:99;border: none;display: block !important;min-height: 0px; " src="' + domainurl + '/livservtemp3/blank.html" frameborder="0" vspace="0" hspace="0" marginwidth="0" marginheight="0" scrolling=no ></iframe></td></tr></table></div>';
}
}
try
{
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
//document.body.insertAdjacentHTML("beforeEnd", fixedlsChatCss+ls_LivWinWin);
if(12456 != "10405"){
document.body.insertAdjacentHTML("beforeEnd", fixedlsChatCss+ls_LivWinWin);
}
else if(12456 == "10405" && formstatus != 1){
document.body.insertAdjacentHTML("beforeEnd", fixedlsChatCss+ls_LivWinWin);
}
else if(12456 == "10405" && formstatus == 1 && ls_agentID != "NA"){
document.body.insertAdjacentHTML("beforeEnd", fixedlsChatCss+ls_LivWinWin);
}
try{
document.getElementById("ls_theLayer").style.zIndex = "1200000";
}
catch(e){}
}
else
{
var ls_bodyObj = document.getElementsByTagName('body').item(0);
var ls_createRange = ls_bodyObj.ownerDocument.createRange();
ls_createRange.setStartBefore(ls_bodyObj);
var ls_parsedHTML = ls_createRange.createContextualFragment(fixedlsChatCss+ls_LivWinWin);
//ls_bodyObj.appendChild(ls_parsedHTML);
if(12456 != "10405"){
ls_bodyObj.appendChild(ls_parsedHTML);
}
else if(12456 == "10405" && formstatus != 1){
ls_bodyObj.appendChild(ls_parsedHTML);
}
else if(12456 == "10405" && formstatus == 1 && ls_agentID != "NA"){
ls_bodyObj.appendChild(ls_parsedHTML);
}
try{
document.getElementById("ls_theLayer").style.zIndex = "1200000";
}
catch(e){}
}
}
catch(e)
{
}
try{
ls_cookie_val = parseInt(ls_GetCookie("transCookie"));
if(!ls_cookie_val )
{
ls_cookie_val = 0;
}
if(wButtonType.charAt(9) == "1"){
checkTransCookie(ls_cookie_val);
}
}
catch(e){
}
ls_load_iframes();
}
function ls_load_iframes()
{
try
{
var livservTopFrameCont = '<html><head><style>.raised { background:transparent; }.raised .b1, .raised .b2, .raised .b3, .raised .b4{ display:block; overflow:hidden; font-size:1px;}.raised .b1, .raised .b2, .raised .b3{ height:1px;}.raised .b2 { background:'+ls_winColor[0]+'; }.raised .b3 { background:'+ls_winColor[0]+'; }.raised .b4 { background:'+ls_winColor[0]+'; }.raised .b1 { margin:0 5px; background:'+ls_winColor[0]+';}.raised .b2{ margin:0 3px; border-width:0 2px;}.raised .b3{ margin:0 2px;}.raised .b4{ height:2px; margin:0 1px;}.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; }</style></head><body style="background:transparent" onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><table width="100%" style="margin-bottom : 0px !important;" cellspacing="0" cellpadding="0"><tr><td><div class="raised" style="height:100%;" ><b class="b1"></b><b class="b2"></b><b class="b3"></b><b class="b4"></b></div></td></tr></table></body></html>';
var agtBrowser = navigator.userAgent.toLowerCase();
var agt_browType ="";
if(agt.indexOf("chrome")!=-1)
{
agt_browType="Chrome";
}
var livservMiddleFrameCont = "";
if(folderName != "newchat")
{
if(textHeader == "text")
{
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " background="' + imgpath + 'bkground.jpg"><img src="' + imgpath + 'logo1.gif"></img><b>&nbsp;</b><span style="color:'+ls_winColor[3]+'" id="ls_head1"><b>'+headerMsg+'</b></span></td><td align="center" valign="middle" id="td2" style="width:0px" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" style="width:0px" id="td3" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" id="td4" style="width:0px" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" id="td5" style="width:0px" background="' + imgpath + 'bkground.jpg"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';
}
else
{
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " background="' + imgpath + 'bkground.jpg"><img src="' + imgpath + 'logo1.gif"></img> </td><td align="center" valign="middle" id="td2" style="width:0px" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" style="width:0px" id="td3" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" id="td4" style="width:0px" background="' + imgpath + 'bkground.jpg"></td><td align="center" valign="middle" id="td5" style="width:0px" background="' + imgpath + 'bkground.jpg"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';
}
}
else if(wButtonType.charAt(7) == "1" && parseInt(ls_GetCookie("winOpenCookie")) != 1)
{
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="100%" border = 0 cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleMsg" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " id="chatheadtd" width="90%"><b>&nbsp;</b><div class="fill2" onClick="parent.ls_maximize()" id="chatTitle" ><center><b>Click To Chat</b> &nbsp;<img src="' + imgpath + 'sideArrowPng.png" alt="Click To Chat" title="Click To Chat"></center></div></td><td align="center" valign="middle" id="td2" style="width:0px" ></td><td align="center" valign="middle" style="width:0px" id="td3" ></td><td align="center" valign="middle" id="td4" style="width:0px" ></td><td align="center" valign="middle" id="td5" style="width:0px" ></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';
}
else if(agt_browType == "Chrome")
{
if(12456 != "4685")
{
//boxcontent height = 100
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="18px" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="fill2"><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px"></td><td align="center" valign="middle" style="width:0px" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px"></td><td align="center" valign="middle" id="td5" style="width:0px"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';
}
else if(12456 == "4685"){
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" colspan="2"><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="fill2"><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px"></td><td align="center" valign="middle" style="width:0px" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px"></td><td align="center" valign="middle" id="td5" style="width:0px"></td></tr></table></tr><tr><td width="160px" bgColor="white" valign="bottom"><img src="'+ imgpath +'asistente-virtual.jpg"></td><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';
}
}
else
{
if(12456 != "4685")
{
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="18px" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" ><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="light2"><center><b>'+headerMsg+'</b></center></div><div class="shade2" ><center><b>'+headerMsg+'</b></center></div><div class="fill2" ><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px"></td><td align="center" valign="middle" style="width:0px" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px"></td><td align="center" valign="middle" id="td5" style="width:0px"></td></tr></table></tr><tr><td id="livservLivWinWin" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';	
}
else if(12456 == "4685"){
livservMiddleFrameCont = '<html><head><style>.raised { background:transparent; }.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}.light2 { top:-1; left:4; color:'+ls_winColor[1]+';position:absolute; }.shade2 { top:+1; left:8; color:'+ls_winColor[2]+';position:absolute; }.fill2 { top:0; left:6; color:'+ls_winColor[3]+';position:absolute; } body { font-family:arial}</style></head><body onmousemove="parent.dd(event)" onmouseup="parent.ddEnabled=false"><div class="raised" style="height:100%;" ><div class="boxcontent" style="height:100%"><table width="98%" height="100%" cellspacing="0" cellpadding="0" valign="middle" align="center" style="background:transparent;margin-bottom : 0px !important;" border="0"><tr><td height="1" colspan="2"><table style="margin-bottom : 0px !important;" width="100%" border="0" cellspacing="0" cellpadding="0" align="center" valign="middle" id="titleBar"><tr><td height="1" id="titleBar" onSelectStart="return false" onmousedown="parent.ddInit(event)" style="cursor:move " ><b>&nbsp;</b><div class="light2"><center><b>'+headerMsg+'</b></center></div><div class="shade2" ><center><b>'+headerMsg+'</b></center></div><div class="fill2" ><center><b>'+headerMsg+'</b></center></div></td><td align="center" valign="middle" id="td2" style="width:0px"></td><td align="center" valign="middle" style="width:0px" id="td3"></td><td align="center" valign="middle" id="td4" style="width:0px"></td><td align="center" valign="middle" id="td5" style="width:0px"></td></tr></table></tr><tr><td width="160px" bgColor="white" valign="bottom"><img src="'+ imgpath +'asistente-virtual.jpg"></td><td id="livservLivWinWin" valign="top" valign="top" height="'+(ls_LivWinWin_height-25)+'" bgColor="white"></td></tr></table></body></html>';	
}
}
var livservBottomFrameCont = '<html><head><style>.raised { background:transparent; }.raised .b1b, .raised .b2b, .raised .b3b, .raised .b4b { display:block; overflow:hidden; font-size:1px;}.raised .b1b, .raised .b2b, .raised .b3b { height:1px;}.raised .b4b { background:'+ls_winColor[0]+'; border-left:0px solid #eee; border-right:0px solid #999;}.raised .b3b { background:'+ls_winColor[0]+'; border-left:0px solid #ddd; border-right:0px solid #999;}.raised .b2b { background:'+ls_winColor[0]+'; border-left:0px solid #aaa; border-right:0px solid #999;}.raised .b1b { margin:0 5px; background:'+ls_winColor[0]+';}.raised .b2b { margin:0 3px; border-width:0 2px;}.raised .b3b { margin:0 2px;}.raised .b4b { height:2px; margin:0 1px;}.raised .boxcontent { display:block; background:'+ls_winColor[0]+'; border-left:0px solid #fff; border-right:0px solid #999;}</style></head><body style="background:transparent" onMousemove="parent.ls_resize_msMove(event)" onMousedown="parent.ls_resize_msDown(event)" ><table width="100%" cellspacing="0" cellpadding="0" style=";margin-bottom : 0px !important;"><tr><td id="dragTd" width="100%" valign="top" ><div class="raised" style="height:100%;" ><b class="b4b" onMouseover="parent.ls_resize_msOver(event)"></b><b class="b3b" ></b><b class="b2b" ></b><b class="b1b" ></b></div></td></tr></table></body></html>';
if(!(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./)))){
if(12456 != "6808stop" && 12456 != "7212" && 12456 != "4988")
{
livservTopDoc = document.getElementById('livservTopFrame').contentWindow.document;
livservTopDoc.open();
livservTopDoc.write(livservTopFrameCont);
livservTopDoc.close();
document.getElementById('livservTopFrame').contentWindow.document.designMode="off";
}
livservMiddleDoc = document.getElementById('livservMiddleFrame').contentWindow.document;
livservMiddleDoc.open();
livservMiddleDoc.write(livservMiddleFrameCont);
livservMiddleDoc.close();
document.getElementById('livservMiddleFrame').contentWindow.document.designMode="off";
if(12456 != "6808stop" )
{
livservBottomDoc = document.getElementById('livservBottomFrame').contentWindow.document;
livservBottomDoc.open();
livservBottomDoc.write(livservBottomFrameCont);
livservBottomDoc.close();
document.getElementById('livservBottomFrame').contentWindow.document.designMode="off";
}
}
setTimeout('ls_load_livservLivWin()',500);
}
catch(e)
{
setTimeout("ls_load_iframes()", 1000 );
}
}
function ls_load_livservLivWin()
{
var ls_LivWinFrameDisplay = "display:block !important;";
if(12456 == "11996" || 12456 == "761"){
ls_LivWinFrameDisplay = "";
}
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
document.getElementById('livservLivWinWin').innerHTML = '<iframe src="'+LivWinfilepath+'" frameborder="0" id="ls_LivWinFrame" name="ls_LivWinFrame" marginwidth="0" marginheight="0" width="100%" scrolling=no height="100%" style="'+ls_LivWinFrameDisplay+'min-height: 0px;padding:0px !important;margin-top: 0px !important;margin-bottom: 0px !important;"></iframe>';
}
else{
if(12456 != "16764" && 12456 != "89071"){
try{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('livservLivWinWin').innerHTML = '<iframe src="'+LivWinfilepath+'" frameborder="0" id="ls_LivWinFrame" marginwidth="0" marginheight="0" width="100%" scrolling=no height="100%" style="'+ls_LivWinFrameDisplay+'min-height: 0px;padding:0px !important;margin-top: 0px !important;margin-bottom: 0px !important;"></iframe>';
}
catch(e){
document.getElementById('livservMiddleFrameTd').innerHTML = '<iframe src="'+LivWinfilepath+'" frameborder="1" id="ls_LivWinFrame" marginwidth="0" marginheight="0" width="100%" scrolling=no height="100%" style="'+ls_LivWinFrameDisplay+'min-height: 0px;padding:0px !important;margin-top: 0px !important;margin-bottom: 0px !important;"></iframe>';
}
}
else{
document.getElementById('livservMiddleFrameTd').innerHTML = '<iframe src="'+LivWinfilepath+'" frameborder="1" id="ls_LivWinFrame" marginwidth="0" marginheight="0" width="100%" scrolling=no height="100%" style="'+ls_LivWinFrameDisplay+'min-height: 0px;padding:0px !important;margin-top: 0px !important;margin-bottom: 0px !important;"></iframe>';
}
}
topDog=isIE ? "BODY" : "HTML";
whichDog = document.getElementById("ls_theLayer");
ls_LivWinLayer = document.getElementById("ls_theLayer");
try{
ls_Add_WinButton();
}
catch(e){}
checkTransCookie(ls_cookie_val)
document.onmouseup=Function("ls_resize_Enabled = false; ddEnabled=false");
if (window.addEventListener)
{
window.addEventListener("onmousemove", dd4, false)
}
else if (window.attachEvent)
{
window.attachEvent("onmousemove", dd4)
}
if(wButtonType.charAt(7) == "1")
{
if(parseInt(ls_GetCookie("winOpenCookie")) != 1)
{
ls_minimize();
}
}
}
var ffoxLessLeft = 0;
var ffoxLessTop = 0;
function ls_Add_WinButton()
{
var liv_tempph;
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
if(wButtonType.charAt(0) == "1")
{
document.getElementById('td2').innerHTML = '<div style="cursor: pointer; cursor: hand;" onClick="ls_minimize()"><img src="' + imgpath + 'ls_cw_minimize.gif" alt="Minimize" title="Minimize"></div>';
document.getElementById('td2').style.width = "20px"
}
if(wButtonType.charAt(1) == "1")
{
document.getElementById('td3').innerHTML = '<img src="' + imgpath + 'ls_cw_transparent.gif" id="trans_img" onClick="ls_transparent()" alt="Transparent" title="Transparent" style="cursor: pointer; cursor: hand">';
document.getElementById('td3').style.width = "20px"
}
if(wButtonType.charAt(2) == "1")
{
document.getElementById('td4').innerHTML = '<img src="' + imgpath + 'ls_cw_close.gif" onClick="ls_close()" style="cursor: pointer; cursor: hand" alt="Close" title="Close">';
document.getElementById('td4').style.width = "20px"
}
}
else{
if(wButtonType.charAt(0) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td2').innerHTML = '<div style="cursor: pointer; cursor: hand;" onClick="parent.ls_minimize()"><img src="' + imgpath + 'ls_cw_minimize.gif" alt="Minimize" title="Minimize"></div>';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td2').style.width = "20px"
}
if(wButtonType.charAt(1) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td3').innerHTML = '<img src="' + imgpath + 'ls_cw_transparent.gif" id="trans_img" onClick="parent.ls_transparent()" alt="Transparent" title="Transparent" style="cursor: pointer; cursor: hand">';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td3').style.width = "20px"
}
if(wButtonType.charAt(2) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td5').innerHTML = '<img src="' + imgpath + 'ls_cw_close.gif" onClick="parent.ls_close()" style="cursor: pointer; cursor: hand" alt="Close" title="Close">';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td5').style.width = "20px"
}
if(wButtonType.charAt(8) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').innerHTML = '<img src="' + imgpath + 'ls_cw_large.gif" onClick="parent.ls_LargeChat()" style="cursor: pointer; cursor: hand" alt="Large Size" title="Large Size">';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').style.width = "20px"
}
}
if(ls_winXPos==3)
{
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
ls_LivWinWin_left = (getW() - ls_LivWinLayer.offsetWidth - 20) + "px";
ls_LivWinLayer.style.left = (getW() - ls_LivWinLayer.offsetWidth - 20) + "px";
}
else
{
ls_LivWinWin_left = (getW() - ls_LivWinLayer.offsetWidth - 20) + "px";
ls_LivWinLayer.style.left = (getW() - ls_LivWinLayer.offsetWidth - 20) + "px";
}
}
else if(ls_winXPos==2)
{
ls_LivWinWin_left = ((getW()/2) - (ls_LivWinLayer.offsetWidth/2)) + "px";
ls_LivWinLayer.style.left = ((getW()/2) - (ls_LivWinLayer.offsetWidth/2)) + "px";
}
else
{	
ls_LivWinWin_left = 5 + "px";
ls_LivWinLayer.style.left = 5 + "px";
}
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
if(ls_winYPos==3)
{
if(12456 != "1200" && 12456 != "11912"){
scrTop = ls_LivWinWin_height+50;
liv_tempph = (getH() - (ls_LivWinWin_height+50));
}
else
{
scrTop = ls_LivWinWin_height+100;
liv_tempph = (getH() - (ls_LivWinWin_height+100));
}
}
else if(ls_winYPos==2)
{
scrTop = parseInt((getH()/2)+((ls_LivWinWin_height)/2));
liv_tempph = parseInt((getH()/2)-((ls_LivWinWin_height)/2))-10;
}
else if(ls_winYPos==1)
{
scrTop = parseInt(getH());
liv_tempph =0;
}
if(12456 != "9569" && 12456 != "2476" && 12456 != "16869"){
ls_LivWinLayer.style.top = parseInt(getH())+"px";
}
if(wButtonType.charAt(3) == "1")
{
RepositionLyr()
}
else
{	
if(12456 != "9569" && 12456 != "2476" && 12456 != "16869"){	
ls_LivWinLayer.style.top = liv_tempph+"px";
}
}
ls_LivWinWin_top = ls_LivWinLayer.style.top;
}
else
{
ffoxLessLeft = 15;
ffoxLessTop = 10;
if(ls_winYPos==3)
{
if(12456 == "011996"){
scrTopNS = pageYOffset + parseInt(getH()) - (ls_LivWinLayer.offsetHeight+25);
}
else if(12456 != "11912"){
scrTopNS = pageYOffset + parseInt(getH()) - ls_LivWinLayer.offsetHeight;
}
else
{
scrTopNS = pageYOffset + parseInt(getH()) - (ls_LivWinLayer.offsetHeight+100);
}
}
else if(ls_winYPos==2)
{
scrTopNS = (pageYOffset + getH())/2 -( (ls_LivWinLayer.offsetHeight)/2)-10;
}
else if(ls_winYPos==1)
{
scrTopNS = 0;	
}
ls_LivWinWin_top = scrTopNS
if(wButtonType.charAt(3) == "1")
{
ls_LivWinLayer.style.top = parseInt(getH()) + "px";
RepositionLyrNS()
}
else
{
//ls_LivWinLayer.style.top = scrTopNS + 10;
//ls_LivWinLayer.style.top = (scrTopNS - 10) +"px";
if(12456 != "9569" && 12456 != "2476" && 12456 != "16869"){	
ls_LivWinLayer.style.top = (scrTopNS - 10) +"px";
}
}
}
}
var scrflag = false;
var prescrtop = 0;
var ls_blinkFlag = 0;
function RepositionLyrNS()
{
try{
var speed;
ldiff = parseInt(ls_LivWinLayer.style.top) - parseInt(scrTopNS);
scrflag = true;
if (Math.abs(ldiff) > 50)
speed = 3
else
speed = 1;
if (ldiff < 0)
{
ls_LivWinLayer.style.top = (parseInt(ls_LivWinLayer.style.top) + speed) + "px";
}
else if (ldiff > 0)
{
ls_LivWinLayer.style.top = (parseInt(ls_LivWinLayer.style.top) - speed) + "px";
}
else
{
nsscrdiff = pageYOffset;
scrflag = false;
prescrtop = ls_LivWinLayer.style.top;
if(ls_blinkFlag != 1 && (12456 == "1170" ||12456 == "2169" || 12456 == "2109" || 12456 == "1170" || 12456 == "1990" || 12456 == "2058" || 12456 == "1421" || 12456 == "2356" || 12456 == "3563" || 12456 == "1955" || 12456 == "2148" || 12456 == "4296" || 12456 == "5183" || 12456 == "4456" || 12456 == "6075" || 12456 == "5662" || 12456 == "705" || 12456 == "3429" || 12456 == "1451" || 12456 =="982" || 12456 =="5110" || 12456 =="2127" || 12456 =="2036"))
{
ls_blink_header();
}
ls_blinkFlag = 1;
return;
}
ls_LivWinWin_top = parseInt(ls_LivWinLayer.style.top)
nstimerID = setTimeout("RepositionLyrNS()",10);
}
catch(e){
}
}
function RepositionLyr()
{
var speed;
ldiff = scrTop - truebody().scrollTop;
if (Math.abs(ldiff) > 50)
speed = 9;
else
speed = 1;
if (ldiff < 0)
{
ls_LivWinLayer.style.pixelTop +=speed;
scrTop +=speed;
}
else if (ldiff > 0)
{
ls_LivWinLayer.style.pixelTop -=speed;
scrTop -=speed;
}
else
{
if(ls_blinkFlag != 1 && (12456 == "1170" ||12456 == "2169" || 12456 == "2109" || 12456 == "1170" || 12456 == "1990" || 12456 == "2058" || 12456 == "1421" || 12456 == "2356" || 12456 == "3563" || 12456 == "1955" || 12456 == "2148" || 12456 == "4296" || 12456 == "5183" || 12456 == "4456" || 12456 == "6075" || 12456 == "5662" || 12456 == "705" || 12456 == "3429" || 12456 == "1451" || 12456 =="982" || 12456 =="5110" || 12456 =="2127" || 12456 =="2036"))
{
ls_blink_header();
}
return;
}
ls_LivWinWin_top = ls_LivWinLayer.style.top
setTimeout("RepositionLyr()",10);
}
var topDog;
var whichDog;
var hotDog;
isIE=document.all;
isNN= !document.all && document.getElementById;
isN4=document.layers;
isHot=false;
ddEnabled=false;
function ddInit(e){
hotDog=isIE ? e.srcElement : e.target;
while (hotDog.id!="titleBar"&&hotDog.tagName!=topDog){
hotDog=isIE ? hotDog.parentElement : hotDog.parentNode;
}
if (hotDog.id=="titleBar"){
offsetx = e.clientX;
offsety = e.clientY;
ddEnabled=true;
}
}
var wdl1;
var wdt1;
var wdh;
var wdw;
function dd(e){
if (!ddEnabled) return;
wdl1 = parseInt(whichDog.style.left) + e.clientX-offsetx;
wdt1 = parseInt(whichDog.style.top) + e.clientY-offsety;
dd3(wdl1,wdt1)
return false;
}
function dd3(wdl,wdt)
{
wdw = parseInt(whichDog.style.width);
if(wdl > 0 && (wdl + wdw < getW()))
{
whichDog.style.left= wdl + 'px';
ls_LivWinWin_left = wdl;
}
else if(wdl <= 0)
{
whichDog.style.left = 0;
ls_LivWinWin_left = 0;
}
else
{
var nxtleft = getW() - wdw;
whichDog.style.left = nxtleft + 'px';
ls_LivWinWin_left = nxtleft ;
}
wdh = parseInt(whichDog.style.height);
if(wdt > 0 && ((wdt + wdh) < (getH() + truebody().scrollTop)) )
{
whichDog.style.top = wdt + 'px';
ls_LivWinWin_top = wdt;
}
else if ( wdt <= 0 )
{
whichDog.style.top = 0;
ls_LivWinWin_top = 0;
}
else
{
var nexttop = getH() + truebody().scrollTop - wdh;
whichDog.style.top = nexttop + 'px';
ls_LivWinWin_top = nexttop ;
}
return false;
}
function dd4(e)
{
xx = isIE ? event.clientX : e.clientX;
yy = isIE ? event.clientY : e.clientY;
if (ddEnabled)
{
wdl1 = xx-offsetx;
wdt1 = yy-offsety;
dd3(wdl1,wdt1)
}
return false;
}
function ddN4(whatDog){
if (!isN4) return;
N4=eval(whatDog);
N4.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);
N4.onmousedown=function(e){
N4.captureEvents(Event.MOUSEMOVE);
N4x=e.x;
N4y=e.y;
}
N4.onmousemove=function(e){
if (isHot){
N4.moveBy(e.x-N4x,e.y-N4y);
return false;
}
}
N4.onmouseup=function(){
N4.releaseEvents(Event.MOUSEMOVE);
}
}
function getW()
{
var w;
if(window.innerWidth){ w=parseInt(window.innerWidth);
} else if(document.documentElement.clientWidth){ w=document.documentElement.clientWidth;
} else if(document.body){ w=document.body.clientWidth; }
return w;
}
function getH(){
var h;
if(window.innerHeight){ h=parseInt(window.innerHeight) ;
} else if(document.documentElement.clientHeight){ h=document.documentElement.clientHeight;
} else if(document.body){ h=document.body.clientHeight; }
return h;
}
function truebody()
{
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}
//---------------set coockies--------------
function ls_getExpiryDate(nodays)
{
var UTCstring;
Today = new Date();
nomilli=Date.parse(Today);
Today.setTime(nomilli+nodays*24*60*60*1000);
UTCstring = Today.toUTCString();
return UTCstring;
}
function ls_GetCookie(cookiename) {
var cookiestring=""+document.cookie;
var index1=cookiestring.indexOf(cookiename);
if (index1==-1 || cookiename=="") return "";
var index2=cookiestring.indexOf(';',index1);
if (index2==-1) index2=cookiestring.length;
return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
}
var ls_isTrans = false;
var ls_cookie_val = 0;
function checkTransCookie(ls_cookie_val)
{
switch(ls_cookie_val)
{
case 0:
ls_minmize_value = false;
ls_isTrans = true;
ls_transparent();
if(mobileDeviceFlag == 1 && wButtonType.charAt(13) == "2"){
ls_LivWinLayer.style.visibility = "hidden";
}
else{
if(12456 != "11996"){
ls_LivWinLayer.style.visibility = "visible";
}
else{
setTimeout("ls_win_Visibility()",2000);
}
}
break;
case 1:
ls_isTrans = false;
if(12456 != "11996"){
ls_transparent();
}
ls_minmize_value = false;
if(mobileDeviceFlag == 1 && wButtonType.charAt(13) == "2"){
ls_LivWinLayer.style.visibility = "hidden";
}
else{
if(12456 != "11996"){
ls_LivWinLayer.style.visibility = "visible";
}
else{
setTimeout("ls_win_Visibility()",2000);
}
}
break;
case 2:
if(12456 != "11996"){
ls_minimize();
}
ls_isTrans = false;
if(mobileDeviceFlag == 1 && wButtonType.charAt(13) == "2"){
ls_LivWinLayer.style.visibility = "hidden";
}
else{
if(12456 != "11996"){
ls_LivWinLayer.style.visibility = "visible";
}
else{
setTimeout("ls_win_Visibility()",2000);
}
}
break;
case 3:
ls_isTrans = false;
if(12456 != "11996"){
ls_transparent();
ls_minimize();
}
if(mobileDeviceFlag == 1 && wButtonType.charAt(13) == "2"){
ls_LivWinLayer.style.visibility = "hidden";
}
else{
if(12456 != "11996"){
ls_LivWinLayer.style.visibility = "visible";
}
else{
setTimeout("ls_win_Visibility()",2000);
}
}
break;
}
}
function ls_win_Visibility(){
try{
document.getElementById('ls_theLayer').style.visibility = "visible";
}
catch(e){
}
}
function ls_maximizeButton()
{
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
document.getElementById('td2').innerHTML = '<div onClick="ls_maximize()"><img src="' + imgpath + '/ls_cw_maximize.gif" alt="Maximize" title="Maximize"></div>';
}
else{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td2').innerHTML = '<div onClick="parent.ls_maximize()"><img src="' + imgpath + '/ls_cw_maximize.gif" alt="Maximize" title="Maximize"></div>';
}
}
var ls_cookieeVal;
var ls_isBlock_cookie = true;
function ls_transparent()
{	
ls_LivWinLayer = document.getElementById('ls_theLayer');
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
if(ls_isTrans == false)
{
ls_LivWinLayer.style.filter="alpha(opacity=20)";
ls_LivWinLayer.style.MozOpacity=".25";
ls_LivWinLayer.style.KhtmlOpacity= .25;
ls_LivWinLayer.style.opacity= .25;
try{
document.getElementById('trans_img').title = "Opaque";
document.getElementById('trans_img').alt = "Opaque";
}
catch(e){}
ls_isTrans = true;
ls_set_coockies();
}
else
{
ls_LivWinLayer.style.filter="alpha(opacity=100)";
ls_LivWinLayer.style.MozOpacity="100";
ls_LivWinLayer.style.KhtmlOpacity= 100;
ls_LivWinLayer.style.opacity= 100;
if(wButtonType.charAt(1) == "1")
{
try{
document.getElementById('trans_img').title = "Transparent";
document.getElementById('trans_img').alt = "Transparent";
}
catch(e){}
}
ls_isTrans = false;
ls_set_coockies();
}
}
else{
if(ls_isTrans == false)
{
ls_LivWinLayer.style.filter="alpha(opacity=20)";
ls_LivWinLayer.style.MozOpacity=".25";
ls_LivWinLayer.style.KhtmlOpacity= .25;
ls_LivWinLayer.style.opacity= .25;
try{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('trans_img').title = "Opaque";
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('trans_img').alt = "Opaque";
}
catch(e){}
ls_isTrans = true;
ls_set_coockies();
}
else
{
ls_LivWinLayer.style.filter="alpha(opacity=100)";
ls_LivWinLayer.style.MozOpacity="100";
ls_LivWinLayer.style.KhtmlOpacity= 100;
ls_LivWinLayer.style.opacity= 100;
if(wButtonType.charAt(1) == "1")
{
try{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('trans_img').title = "Transparent";
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('trans_img').alt = "Transparent";
}
catch(e){}
}
ls_isTrans = false;
ls_set_coockies();
}
}
}
function ls_TransMouseOver()
{
ls_LivWinLayer = document.getElementById('ls_theLayer');
if((ls_isTrans == true && 12456 == "12253") || (ls_isTrans == true && 12456 == "6120") || (ls_isTrans == true && 12456 == "508"))
{
ls_LivWinLayer.style.filter="alpha(opacity=100)";
ls_LivWinLayer.style.MozOpacity="100";
ls_LivWinLayer.style.KhtmlOpacity= 100;
ls_LivWinLayer.style.opacity= 100;
}
}
function ls_TransMouseout()
{
ls_LivWinLayer = document.getElementById('ls_theLayer');
if((ls_isTrans == true && 12456 == "12253") || (ls_isTrans == true && 12456 == "6120") || (ls_isTrans == true && 12456 == "508"))
{
ls_LivWinLayer.style.filter="alpha(opacity=20)";
ls_LivWinLayer.style.MozOpacity=".25";
ls_LivWinLayer.style.KhtmlOpacity= .25;
ls_LivWinLayer.style.opacity= .25;
}
}
function ls_LargeChat(){
ls_largeWinFlag = 1;
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').innerHTML = '<div onClick="parent.ls_regularChat()"><img src="' + imgpath + '/ls_cw_regular.gif" alt="Regular Size" title="Regular Size"></div>';
document.getElementById("livservMiddleFrame").style.height = (ls_LivWinWin_height+200) + 'px';
document.getElementById("livservMiddleFrame").style.height = (ls_LivWinWin_height+200) + 'px';
document.getElementById("livservMiddleFrameTd").style.height = (ls_LivWinWin_height+200) + 'px';
document.getElementById("livservMiddleFrame").style.height = "100%";
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById("livservLivWinWin").style.height = ((ls_LivWinWin_height+200)-28) + "px";
document.getElementById("ls_LivWinWinTable").style.height = (ls_LivWinWin_height+200) + 'px';
document.getElementById("ls_theLayer").style.height = (ls_LivWinWin_height+200) + 'px';
try{
liv_tempph = (getH() - (ls_LivWinWin_height+200+50));
prescrtop = parseInt(prescrtop)-210;
}
catch(e){
}
repositionChatWin(200);
}
function ls_regularChat(){
ls_largeWinFlag = 0;
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').innerHTML = '<div onClick="parent.ls_LargeChat()"><img src="' + imgpath + '/ls_cw_large.gif" alt="Large Size" title="Large Size"></div>';
document.getElementById("livservMiddleFrame").style.height = ls_LivWinWin_height + 'px';
document.getElementById("livservMiddleFrame").style.height = ls_LivWinWin_height + 'px';
document.getElementById("livservMiddleFrameTd").style.height = ls_LivWinWin_height-10 + 'px';
document.getElementById("livservMiddleFrame").style.height = "100%";
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById("livservLivWinWin").style.height = (ls_LivWinWin_height-28) + "px";
document.getElementById('livservBottomFrame').style.width = ls_LivWinWin_width + "px";
document.getElementById("ls_LivWinWinTable").style.height = ls_LivWinWin_height + 'px';
document.getElementById("ls_theLayer").style.height = ls_LivWinWin_height + 'px';
try{
liv_tempph = (getH() - (ls_LivWinWin_height+50));
prescrtop = parseInt(prescrtop)+200;
}
catch(e){
}
repositionChatWin(0);
}
function repositionChatWin(height){
var obj = document.getElementById("ls_theLayer");
var tchattemp = (getH() + parseInt(truebody().scrollTop) - (ls_LivWinWin_height+height));
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
obj.style.top = tchattemp + "px";
}
else
{
obj.style.top = tchattemp-20 + "px";
}
if(ls_winXPos != 1){
obj.style.left = (getW() - parseInt(obj.style.width) - ffoxLessLeft)-5 + "px";
}
else
{
obj.style.left = "5px";
}
}
//--------------------minimize--------
var ls_minmize_value = false;
function ls_minimize()
{
if(mobileDeviceFlag == 1 && wButtonType.charAt(13) == "2"){
document.getElementById("ls_mobileChatButton").style.visibility = "visible";
document.getElementById("ls_theLayer").style.visibility = "hidden";
}
else{
try
{
var obj = document.getElementById("ls_theLayer")
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
document.getElementById('td2').innerHTML = '<div onClick="ls_maximize()"><img src="' + imgpath + '/ls_cw_maximize.gif" alt="Maximize" title="Maximize"></div>';
document.getElementById("livservLivWinWin").style.height = '0px';
try{
document.getElementById("ls_outerTable").style.height = '19px';
}
catch(e){}
document.getElementById("titleBar").style.height = '19px';
document.getElementById("ls_LivWinWinTable").height= '19px';
document.getElementById("livservLivWinWin").height = '19px';
document.getElementById("livservMiddleFrameTd").style.height= '19px';
}
else{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td2').innerHTML = '<div onClick="parent.ls_maximize()"><img src="' + imgpath + '/ls_cw_maximize.gif" alt="Maximize" title="Maximize"></div>';
document.getElementById('livservMiddleFrame').height = '28px';
document.getElementById("livservMiddleFrame").style.height= '19px';
document.getElementById("ls_LivWinWinTable").style.width = '230px';
document.getElementById("ls_LivWinWinTable").style.cssText = 'width:230px !important';
obj.style.width= '230px';
}
if(wButtonType.charAt(8) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').innerHTML = '';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').style.width = "0px"
try{
if(ls_largeWinFlag == 1){
liv_tempph = (getH() - (ls_LivWinWin_height+50));
prescrtop = parseInt(prescrtop)+210;
}
}
catch(e){	
}
}
ls_minmize_value = true;
obj.style.height= '29px';
document.getElementById('livservBottomFrame').style.width = '228px';
document.getElementById("ls_LivWinWinTable").style.width= '228px';
document.getElementById("ls_LivWinWinTable").style.height= '19px';
document.getElementById("ls_LivWinWinTable").style.height = '19px';
var tchattemp = (getH() + parseInt(truebody().scrollTop) - 29);
if((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1))
{
obj.style.top = tchattemp + "px";
}
else
{
obj.style.top = tchattemp-20 + "px";
}
document.getElementById("livservMiddleFrameTd").style.height= '19px';
if(ls_winXPos != 1){
obj.style.left = (getW() - parseInt(obj.style.width) - ffoxLessLeft)-5 + "px";
}
else
{
obj.style.left = "5px";
}
ls_set_coockies();
obj.refresh();
document.getElementById("ls_LivWinWinTable").refresh();
}
catch(e){}
ls_largeWinFlag = 0;
}
}	
//-------------------maximize-------------
function ls_maximize()
{
var obj = document.getElementById("ls_theLayer")
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
document.getElementById('td2').innerHTML = '<div onClick="parent.ls_minimize()"><img src="' + imgpath + '/ls_cw_minimize.gif" alt="Minimize" title="Minimize"></div>';
document.getElementById("livservLivWinWin").style.height = (ls_LivWinWin_height-28) + "px";
document.getElementById("livservMiddleFrameTd").style.height= (ls_LivWinWin_height-10) + "px";
document.getElementById("ls_LivWinWinTable").height = ls_LivWinWin_height + 'px';
}
else{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td2').innerHTML = '<div onClick="parent.ls_minimize()"><img src="' + imgpath + '/ls_cw_minimize.gif" alt="Minimize" title="Minimize"></div>';
document.getElementById("livservMiddleFrame").style.height = ls_LivWinWin_height + 'px';
document.getElementById("livservMiddleFrame").style.height = ls_LivWinWin_height + 'px';
document.getElementById("livservMiddleFrame").style.height = "100%";
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById("livservLivWinWin").style.height = (ls_LivWinWin_height-28) + "px";
document.getElementById('livservBottomFrame').style.width = ls_LivWinWin_width + "px";
document.getElementById("ls_LivWinWinTable").style.height = ls_LivWinWin_height + 'px';
}
if(wButtonType.charAt(8) == "1")
{
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').innerHTML = '<img src="' + imgpath + 'ls_cw_large.gif" onClick="parent.ls_LargeChat()" style="cursor: pointer; cursor: hand" alt="Large Size" title="Large Size">';
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById('td4').style.width = "20px"
}
ls_minmize_value = false;
obj.style.top = (parseInt(ls_LivWinWin_top) - ffoxLessTop) + 'px';
obj.style.left = parseInt(ls_LivWinWin_left) + 'px';
obj.style.height = ls_LivWinWin_height + 'px';
obj.style.width = ls_LivWinWin_width + 'px';
document.getElementById("ls_LivWinWinTable").style.width = ls_LivWinWin_width + 'px';
document.getElementById("livservMiddleFrameTd").style.height = (ls_LivWinWin_height-10) + 'px';
if(wButtonType.charAt(7) == "1")
{
try
{
if(ls_winXPos == 3){
ls_LivWinLayer.style.top = parseInt(getH()-(ls_LivWinWin_height+25)) + "px";
ls_LivWinLayer.style.left = (getW() - ls_LivWinLayer.offsetWidth - 25) + "px";
}
else
{
obj.style.top = (parseInt(ls_LivWinWin_top) - ffoxLessTop) + 'px';
obj.style.left = parseInt(ls_LivWinWin_left) + 'px';
}
document.getElementById('livservMiddleFrame').contentWindow.document.getElementById("titleMsg").innerHTML = '<b>&nbsp;</b><div class="fill2" id="chatTitle"><center><b>'+headerMsg+'</b></center></div>';
}
catch(e){}
}
ls_set_coockies();
ls_set_winOpen_coockies();
}
//-------------set coockies----------
function ls_set_coockies()
{
if(ls_isTrans == true && ls_minmize_value == true)
{
ls_cookieeVal = 3;
}
else if(ls_isTrans == false && ls_minmize_value == false)
{
ls_cookieeVal = 0;
}
else if(ls_isTrans == true && ls_minmize_value == false)
{
ls_cookieeVal = 1;
}
else if(ls_isTrans == false && ls_minmize_value == true)
{
ls_cookieeVal = 2;
}
cookiestring="transCookie="+ls_cookieeVal+";PATH=/";
document.cookie=cookiestring;
}
function ls_set_winOpen_coockies()
{
cookiestring="winOpenCookie="+ls_winOpenVal+";PATH=/";
document.cookie=cookiestring;
}
function ls_close()
{
document.getElementById("ls_theLayer").style.visibility="hidden";
try{
document.getElementById("livservMiddleFrame").style.visibility="hidden";
}
catch(e){}
cookiestring="transCookie=4;;PATH=/";
document.cookie=cookiestring;
}
var ls_resize_Enabled = false;
var	ls_resize_offsetx=0;
var	ls_resize_offsety= 0;
var ls_resize_cw=0;
var ls_resize_ch=0;
var ls_resize_curObj;
var ls_resize_curX;
var ls_resize_curY;
var ls_resize_timeptr=0;
var ls_resize_curW;
var	ls_resize_curH;
function ls_resize_msOver(e)
{
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
}
else{
ls_resize_curObj = document.getElementById('livservBottomFrame').contentWindow.document.getElementById('dragTd');
if(e.clientX > (parseInt(whichDog.style.width) - 10) )
{
ls_resize_curObj.style.cursor = "nw-resize";
}
else
{
ls_resize_curObj.style.cursor = "default";
}
}
}
function ls_resize_msDown(e)
{
if(e.clientX > (parseInt(whichDog.style.width) - 10))
{
ls_resize_Enabled = true;
ls_resize_cw = parseInt(whichDog.style.width);
ls_resize_ch = parseInt(whichDog.style.height);
ls_resize_offsetx = e.clientX;
ls_resize_offsety = ls_resize_ch - e.clientY;
ls_resize_timeptr = 0;
}
return false;
}
function ls_resize_msMove(e)
{
if(ls_resize_Enabled == true)
{
ls_resize_curX = e.clientX;
ls_resize_curY	= e.clientY;
if ( ls_resize_timeptr == 0)
{
ls_resize_timeptr = setTimeout("ls_resize_setsize()" , 100);
}
}
}
function ls_resize_setsize()
{
ls_resize_curW = ls_resize_cw + ( ls_resize_curX - ls_resize_offsetx) ;
ls_resize_curH = ls_resize_ch + ( parseInt(whichDog.style.height) + ls_resize_curY - ls_resize_offsety);
if( parseInt(whichDog.style.left) + ls_resize_curW > getW())
{
ls_resize_curW = getW() - parseInt(whichDog.style.left);
}
else if( ls_resize_curW < 310)
{
ls_resize_curW = 310
}
if( parseInt(whichDog.style.top) + ls_resize_curH > getH())
{
ls_resize_curH = getH() - parseInt(whichDog.style.top);
}
else if (ls_resize_curH < 150)
{
ls_resize_curH = 150
}
whichDog.style.width = ls_resize_curW ;
whichDog.style.height = ls_resize_curH;
ls_LivWinWin_height = ls_resize_curH;
ls_LivWinWin_width = ls_resize_curW;
document.getElementById("ls_LivWinWinTable").style.width= ls_resize_curW;
if(pageprotocol.indexOf("https") != -1 && ((navigator.appName.indexOf("Microsoft")>-1) || (navigator.appName.indexOf("MSIE")>-1) || !!navigator.userAgent.match(/Trident.*rv[ :]*11\./))){
}
else{
document.getElementById("livservMiddleFrame").style.height= (ls_resize_curH);
}
ls_resize_timeptr = 0;
}	
var timerID;
function wscroll()
{
if(12456 != 2155){
clearTimeout(timerID);
timerID = setTimeout("RepositionLyr()",1000);
}
else
{
clearTimeout(timerID);
timerID = setTimeout("RepositionLyr()",250);
}
}
var nstimerID;
function nswscroll()
{
if(scrflag == false)
{
clearTimeout(nstimerID);
nstimerID = setTimeout("RepositionLyrNS()",1000);
}
scrTopNS = parseInt(prescrtop) + pageYOffset - nsscrdiff ;
}
if(liveWinDomain != "first.livserv.in" && 12456 != 11702 && 12456 != 50812 && wButtonType.charAt(9) != "1" )
{
if((12456 != 1200) || (12456 == 1200 && (browserUrl.indexOf("bcil-expanse-green")!=-1 || browserUrl.indexOf("bcil-redearth-green")!=-1 || browserUrl.indexOf("bcil-collective-green")!=-1 || browserUrl.indexOf("ecobcil.com/index.html")!=-1 || browserUrl.indexOf("content/bcil-zed")!=-1 || browserUrl.indexOf("content/bcil-wildgrass")!=-1 || browserUrl.indexOf("content/bcil-transindus")!=-1 || browserUrl.indexOf("content/bcil-townsend")!=-1 || browserUrl.indexOf("node/13719")!=-1 || browserUrl.indexOf("node/11631")!=-1 || browserUrl.indexOf("node/13713")!=-1 || browserUrl.indexOf("node/13714")!=-1 || browserUrl.indexOf("content/zed-earth")!=-1 || browserUrl.indexOf("content/zed-collective-exclusive-green")!=-1 || browserUrl.indexOf("content/bcil-zed-woods")!=-1 || browserUrl.indexOf("content/bcil-t-zed")!=-1 || browserUrl.indexOf("zedearth.com")!=-1 || browserUrl.indexOf("zed.in")!=-1 || browserUrl.indexOf("zedwoods.com")!=-1 )))
{
if ( wButtonType.charAt(5) == "0")
{
ls_checkCookie();
}
else
{
if (window.addEventListener)
{
if(12456 == 465 || 12456 ==982 || 12456 == 1108 || 12456 == 1152 || 12456 == 637 || 12456 == 1529)
{
setTimeout("ls_checkCookie()",5000);
}
else if(12456 == 12167 || 12456 == 12159 || 12456 == 13716){
if("NA" == "NA"){
setTimeout("ls_checkCookie()",5000);
}
else{
window.addEventListener("onload", ls_checkCookie(), false)
}
}
else if(12456 == 12415 || 12456 == 12948){
setTimeout("ls_checkCookie()",3000);
}
else if(12456 == 1955 || 12456 == 14145 || 12456 == 15383 )
{
setTimeout("ls_checkCookie()",2000);
}
else if(12456 == 8907 )
{
setTimeout("ls_checkCookie()",1000);
}
else if(12456 == 1200)
{
setTimeout("ls_checkCookie()",10000);
}
else if(12456 == 11996){
if("NA" == "NA"){
setTimeout("ls_checkCookie()",20000);
}
else{
window.addEventListener("onload", ls_checkCookie(), false)
}
}
else if(12456 == 1286 || 12456 == 16548 || 12456 == 16780){
if("NA" == "NA"){
setTimeout("ls_checkCookie()",1000);
}
else{
window.addEventListener("onload", ls_checkCookie(), false)
}
}
else
{	
window.addEventListener("onload", ls_checkCookie(), false)
}
}
else if (window.attachEvent)
{
window.attachEvent("onload", ls_checkCookie);
}
}
}
}
//-----------cross domain same chat window
function crossDomainChat()
{
if(12456 != 12660 && 12456 != 6400 && 12456 != 1473 && 12456 != 2134 && 12456 != 2155 && 12456 != 2141 && 12456 != 2438 && 12456 != 2331 && 12456 != 2568 && 12456 != 3303 && 12456 != 1900 && 12456 != 237 && 12456 != 5176 && 12456 != 1747 && 12456 != 5245 && 12456 != 5910 && 12456 != 5931 && 12456 != 6440 && 12456 != 6407 && 12456 != 6473 && 12456 != 6548 && 12456 != 6503 && 12456 != 4127 && 12456 !=6996 && 12456 !=7730 && 12456 !=3499 && 12456 !=6105 && 12456 !=6120 && 12456 !=6127 && 12456 !=7478 && 12456 !=7968 && 12456 !=7612 && 12456 !=7073 && 12456 !=7066 && 12456 !=7059 && 12456 !=7052 && 12456 !=7045 && 12456 !=7011 && 12456 !=6910 && 12456 !=5910 && 12456 !=1969 && 12456 !=1821 && 12456 !=7587 && 12456 !=8527 && 12456 !=8534 && 12456 !=8541 && 12456 !=8064 && 12456 !=9857 && 12456 !=7821 && 12456 !=10091 && 12456 !=9494 && 12456 !=5094 && 12456 !=10554 && 12456 !=8541 && 12456 !=8534 && 12456 !=8527 && 12456 !=6194 && 12456 !=11823 && 12456 != 3441 && 12456 != 12231 && 12456 != 12652 && 12456 != 13548 && 12456 != 13556 && 12456 != 15603 && 12456 != 5101 && 12456 != 12497 && 12456 != 12505 && 12456 != 12513 && 12456 !=12521 && 12456 !=19247)
{
var page_domain = window.location.hostname;	
var url_inPage = document.getElementsByTagName("a");
for(var i=0;i<url_inPage.length;i++)
{
if(url_inPage[i].href.indexOf(page_domain)==-1 && url_inPage[i].href.indexOf("mailto")==-1 && url_inPage[i].href.indexOf("javascript")==-1 && url_inPage[i].href.indexOf("facebook")==-1 && url_inPage[i].href.indexOf("twitter")==-1 && url_inPage[i].href.indexOf("blog")==-1 && url_inPage[i].href.indexOf("linkedin")==-1 && url_inPage[i].href.indexOf("myspace")==-1 && url_inPage[i].href.indexOf("flickr")==-1 && url_inPage[i].href.indexOf("tel:")==-1)
{	
var sdompart = ls_serverip.substring(0,ls_serverip.indexOf("."));
var isCDomainExist = livsrvgeturlparam("livserv_cs_id",url_inPage[i].href);
if(isCDomainExist != "")
{
url_inPage[i].href = url_inPage[i].href.replace(isCDomainExist,sdompart + "_" + ls_tempcs_id);
}
else if(url_inPage[i].href.indexOf("?")==-1)	
{	
url_inPage[i].href = url_inPage[i].href+"?livserv_cs_id=" + sdompart + "_" + ls_tempcs_id;
}
else
{
url_inPage[i].href = url_inPage[i].href+"&livserv_cs_id=" + sdompart + "_" + ls_tempcs_id;
}
}
}
}
}
//-------blinking header------
function ls_blink_header()
{	
if(ls_header_blink_flag % 2 == 0)
{
try
{
document.getElementById("ls_theLayer").style.visibility="visible";
}
catch(e)
{}
}
else
{
try
{
document.getElementById("ls_theLayer").style.visibility="hidden";
}
catch(e)
{}
}
if(ls_header_blink_flag < 6)
{
ls_activate_blink();
}
}
function ls_activate_blink()
{
ls_header_blink_flag++;	
setTimeout("ls_blink_header()",300);
}
function clickToChat(){
try{
if(window.addEventListener){
ls_checkCookie();
}
else if(window.attachEvent){
ls_checkCookie();
}
}
catch(e){
}
}
function setCookieForOneDay(name,value)
{
cookiestring=name+"="+escape(value)+";EXPIRES="+livsrvgetexpirydate(1)+";PATH=/";
document.cookie=cookiestring;
}
if(12456 == "1310"){
try{
parent.maximizeBtn();
}
catch(e){}
}
