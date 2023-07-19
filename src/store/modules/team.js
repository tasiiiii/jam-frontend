export default {
    state: {
        teams: [],
        team: null,
    },
    getters: {
        teams(state) {
            return state.teams;
        },
        team(state) {
            return state.team;
        }
    },
    mutations: {
        setTeams(state, teams) {
            state.teams = teams;
        },
        setTeam(state, team) {
            state.team = team;
        }
    },
    actions: {
        async createTeam(ctx, team) {
          await fetch(
              'http://jam.local/api/v1/teams',
              {
                  method: 'POST',
                  headers: {
                      'Authorization': localStorage.getItem('token')
                  },
                  body: JSON.stringify(team)
              }
          );
        },
        async fetchTeams(ctx) {
            const res = await fetch(
                'http://jam.local/api/v1/teams',
                {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                    }
                }
            );
            const teams = await res.json();

            if (res.ok) {
                ctx.commit('setTeams', teams.data);
            }
        },
        async getTeam(ctx, id) {
            const res = await fetch(
                `http://jam.local/api/v1/teams/${id}`,
                {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                    }
                }
            );
            const team = await res.json();

            if (res.ok) {
                ctx.commit('setTeam', team.data);
            }
        }
    }
}