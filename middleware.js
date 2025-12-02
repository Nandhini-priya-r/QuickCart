import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  ignoredRoutes: ["/api/inngest"],  // <-- Inngest must bypass Clerk
});

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)",
  ],
};
