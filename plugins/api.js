import ServiceContainer from "../services/serviceContainer";

export default ({ app }, inject) => {
  inject('api', new ServiceContainer(app.$axios))
}
