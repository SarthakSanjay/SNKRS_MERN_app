import Cookies from 'js-cookie';

export const getCookie = (cookieName) => {
  return Cookies.get(cookieName);
};

export const removeAllCookies = () => {
  const cookies = Cookies.get(); // Get all cookies
  Object.keys(cookies).forEach(cookieName => {
    Cookies.remove(cookieName); // Remove each cookie by its name
  });
};

