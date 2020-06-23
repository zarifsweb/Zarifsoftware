import getCookie from "./getCookie";

function checkCookie(cname) {
  var user = getCookie(cname);
  if (user !== "") {
    return true;
  } else {
    return false;
  }
}

export default checkCookie;
