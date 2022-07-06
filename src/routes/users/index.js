export async function get() {
    //Go get the users and store in response object
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json(); //Convert to json and store users

    //If we have users, return users as a prop so it can be used in the component
    if (users) {
        return {
            status: 200,
            body: { users }
        }
    }

    //If users are not returned, return a 404 not found
    return {
        status: 404
    }
}