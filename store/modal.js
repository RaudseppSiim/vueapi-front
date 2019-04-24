export const state = () => ({
    modal:false
})

export const mutations = {
    setModalActive (state, value) {
        state.modal = value
      },
}
export const actions = {
    toggleChat (context) {
        console.log(context);
        context.commit('setModalActive', !context.state.modal);
      },
}
export const getters = {

}
