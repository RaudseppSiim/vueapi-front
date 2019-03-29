export const state = () => ({
  user: {},
  token: '',
  forms: {
    login: {
      email: '',
      password: ''
    },
    register: {
      email: '',
      password: '',
      password_confirmation: '',
      name: ''
    }
  }
});

export const mutations = {
  SET_FORM_DATA(state, payload){
    state.forms[payload.form][payload.key] = payload.value;
  },
  SET_TOKEN(state, token){
    state.token = token;
  }
};
export const actions = {
  setFormData(context, payload){
    context.commit('SET_FORM_DATA', payload);
  },
  login(context){
    this.$api.service.post('login', context.state.forms.login).then((resp) => {
      context.commit('SET_TOKEN', resp.token);
    });
  }
};
export const getters = {

};
