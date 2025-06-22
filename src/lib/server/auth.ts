import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { SvelteKitAuth } from "@auth/sveltekit"
import type { Handle } from "@sveltejs/kit"
import { db } from "./db"
import { accounts, users } from "./db/schema"
import GitHub from "@auth/sveltekit/providers/github"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [GitHub],
session: {strategy: "jwt"},
adapter: DrizzleAdapter(db, {
  usersTable: users,
  accountsTable: accounts
})
})

export const sessionHandle: Handle = async ({ event, resolve }) => {
  event.locals.session = await event.locals.auth() || undefined
  return resolve(event)
}