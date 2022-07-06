<script context="module">
  // The whole thing will work if I remove this script block
  export async function load() {
    // Tried this but it also won't work
    // const url = '/users';
    // const response = await fetch(url);

    return {
      // props: {users: response.json()},
      stuff: {
        myStuff: "needed elsewhere",
      },
    };
  }
</script>

<script>
  //Accept the prop from index.js (works if there is no script block above)
  export let users; // Somehow being blocked. Error in browser console is "<Users> was created without expected prop 'users'"
</script>

<h2>List users page</h2>

<ul>
  <!-- Comment this out to get browser console error, otherwise error is "Cannot read properties of undefined (reading 'length')" -->
  {#each users as user}
    <li>
      {user.name}
    </li>
  {/each}
</ul>
