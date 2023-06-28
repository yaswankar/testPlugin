import componentA from './components/ComponentA';
const MyPlugin = {
    install(Vue, rootStore) {
        // Vue is a Vue Constructor, not an Vue instance. This plugin requires passing the main app Vue instance as options parameter.
// Vue.component need to be called BEFORE new Vue() in main.js...
        Vue.component(componentA.name, componentA);
    }
}
export default MyPlugin;
export {componentA}
