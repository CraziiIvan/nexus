import { auth } from "./lib/auth/auth"
import { defaultLoginRedirect, authRoutes, apiRoutePrefix, publicRoutes } from "./lib/auth/routes"

export default auth((req) => {
    const { pathname } = req.nextUrl
    const isLoggedIn = !!req.auth

    const isApiRoute = pathname.startsWith(apiRoutePrefix)
    const isPublicRoute = publicRoutes.includes(pathname)
    const isAuthRoute = authRoutes.includes(pathname)

    if (isApiRoute) {
        return
    }

    if (isAuthRoute) {
        if(isLoggedIn) {
            return Response.redirect(new URL(defaultLoginRedirect, req.nextUrl))
        }
        return
    }

    if ( !isPublicRoute && !isLoggedIn ) {
        return Response.redirect(new URL("/login", req.nextUrl))
    }

    return
})

export const config = {
    matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}