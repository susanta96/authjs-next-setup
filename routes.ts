/**
 * This routes are public and can be accessed by anyone
 * @type {string[]}
 * @author susanta96
 *
 */
export const publicRoutes = ["/"];
/**
 * This routes are authenticated and can be accessed by only authenticated users
 * @type {string[]}
 * @author susanta96
 *
 */
export const authRoutes = ["/auth/login", "/auth/register"];
/**
 * The prefix for all the api authenticated routes
 * @description Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 * @author susanta96
 *
 */
export const apiAuthPrefix = "/api/auth";
/**
 * The default routes to redirect to after login
 * @type {string}
 * @author susanta96
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
