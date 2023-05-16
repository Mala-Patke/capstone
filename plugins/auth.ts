import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin(app => {
    const auth0 = createAuth0({
        domain: '',
        clientId: '',
    });

    app.vueApp.use(auth0);

    addRouteMiddleware('auth', () => {
        auth0.checkSession();
        if(!auth0.isAuthenticated.value) {
            auth0.loginWithRedirect({
                appState: {
                    target: useRoute().path
                }
            })
        }
    })
});