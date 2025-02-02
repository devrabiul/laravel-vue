import {createRouter, createWebHistory} from "vue-router";
import AddPage from "./../pages/AddPage.vue";

const routes = [{
    path: '/add-new', name: 'AddPage', component : AddPage,
}];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
