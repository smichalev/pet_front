export const state = () => ({
  profile: null,
  lang: 'en',
});

export const mutations = {
  login(state, profile) {
    state.profile = profile;
  },
  logout(state, router) {
    state.profile = null;
  },
  changeParam(state, param, value) {
    if (state.profile && state.profile !== {}) {
      state.profile[param] = value;
    }
  },
  notification(state, count) {
    state.notification = count;
  },
};
