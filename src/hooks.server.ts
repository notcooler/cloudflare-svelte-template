import { sequence } from "@sveltejs/kit/hooks";
import {handle as auth, sessionHandle} from "$lib/server/auth"

export const handle = sequence(auth, sessionHandle)