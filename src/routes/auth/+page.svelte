<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"

  let { data } = $props()
  let { session } = $derived(data)
</script>

<h1>SvelteKit Auth Example</h1>
<div>
  {#if session}
    {#if session.user?.image}
      <img src={session.user.image} class="avatar" alt="User Avatar" />
    {/if}
    <span class="signedInText">
      <small>Signed in as</small><br />
      <strong>{session.user?.name ?? "User"}</strong>
    </span>
    <SignOut>
      <div slot="submitButton" class="buttonPrimary">Sign out</div>
    </SignOut>
  {:else}
    <span class="notSignedInText">You are not signed in</span>
    <SignIn>
      <div slot="submitButton" class="buttonPrimary">Sign in</div>
    </SignIn>
    <SignIn provider="github" />
  {/if}
</div>
