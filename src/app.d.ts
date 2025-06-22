// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Session } from "@auth/sveltekit";

// for information about these interfaces
declare global {
	namespace App {
        interface Locals {
            session?: Session
        }

        interface Platform {
            env: Env
            cf: CfProperties
            ctx: ExecutionContext
        }
    }
}

export {};