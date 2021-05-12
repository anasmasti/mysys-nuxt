import Vue from 'vue';
import Vuex from 'vuex';
import formationStore from './modules/formation/index'

Vue.use(Vuex)

new Vuex.Store({
    modules: {
        formationStore
    }
})