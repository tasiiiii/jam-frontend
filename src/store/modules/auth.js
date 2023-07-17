export default {
    state: {
        token: localStorage.getItem('token'),
        loginErrorMessage: ''
    },
    getters: {
        token(state) {
            return state.token;
        },
        loginErrorMessage(state) {
            return state.loginErrorMessage;
        }
    },
    mutations: {
        setToken(state, token) {
            localStorage.setItem('token', token);
        },
        setLoginErrorMessage(state, error) {
            state.loginErrorMessage = error;
        }
    },
    actions: {
        async login(ctx, credential) {
            const res = await fetch(
                'http://jam.local/api/v1/auth/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(credential)
                }
            );

            const data = await res.json();

            if (res.ok) {
                ctx.commit('setToken', data.data.token);
            } else {
                ctx.commit('setLoginErrorMessage', data.message)
            }
        }
    },
}