import type { GetSession } from "@sveltejs/kit";

export const getSession: GetSession = ({ locals }) => {
    // return event.locals.user
    //   ? {
    //       user: {
    //         // only include properties needed client-side —
    //         // exclude anything else attached to the user
    //         // like access tokens etc
    //         name: event.locals.user.name,
    //         email: event.locals.user.email,
    //         avatar: event.locals.user.avatar
    //       }
    //     }
    //   : {};
    return { 
        user: { 
            name: 'John Doe',
            email: 'johndoe@mail.com',
            avatar: 'https://svelte.dev/images/avatar.jpg' 
        } 
    };
  }