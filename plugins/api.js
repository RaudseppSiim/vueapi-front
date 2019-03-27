import Service from "../services/service";

export default ({ app }, inject) => {
  inject('api', new Service(app.$axios))
}
