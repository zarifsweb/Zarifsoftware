const Logout = () => {
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location = "/";
};

export default Logout;
