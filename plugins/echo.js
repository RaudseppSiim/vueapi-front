import Echo from "laravel-echo"
window.Pusher = require('pusher-js');
export default ({ app }, inject) => {
  inject('echo', new Echo({
    broadcaster: 'pusher',
    key: 'a46368bb79cc0e5c003b',
    cluster: 'eu',
    encrypted: true
  }));
}
