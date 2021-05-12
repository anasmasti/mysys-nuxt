export default {
    //FETCH DATA
    async fetchDomaineData({ commit }) {
        await this.$axios.$get('/api/mysys/domaines')
            .then((res) => {
                commit('SET_DOMAINES', res.data);
                //console.log( "SET_DOMAINES :", res.data)
            })
            .catch((err) => {
                //console.error("err domaines", err);
                commit('SET_DOMAINE_ERROR', err);
            });
    },
    async fetchThemeData({ commit }) {
        await this.$axios.$get('/api/mysys/themes')
            .then((res) => {
                commit('SET_THEMES', res.data);
                //console.log("SET_THEMES :", res.data)
            })
            .catch((err) => {
                //console.error("err themes", err);
                commit('SET_THEME_ERROR', err);
            });
    },
    async fetchFormationData({ commit }) {
        await this.$axios.$get('/api/mysys/formations')
            .then((res) => {
                commit('SET_FORMATIONS', res.data);
                //console.log("SET_FORMATIONS :", res.data)
            })
            .catch((err) => {
                //console.error("err formations", err);
                commit('SET_FORMATION_ERROR', err);
            });
    },
    // SET CHILDREN BY PARENT
    async setThemesByDomaine({ commit }, domaineId) {
        await commit('SET_THEMES_BY_DOMAINE', domaineId);
    },
    async setFormationsByTheme({ commit }, themeId) {
        await commit('SET_FORMATIONS_BY_THEME', themeId);
    },
    // Set BY ID
    async setDomaineById({ commit }, domaineId) {
        commit('SET_DOMAINE_BY_ID', domaineId);
    },
    async setThemeById({ commit }, themeId) {
        commit('SET_THEME_BY_ID', themeId);
    },
    async setFormationById({ commit }, formaId) {
        commit('SET_FORMATION_BY_ID', formaId)
    },
    // Set DATA IDs
    async setCurrDomaineId({ commit }, domaineId) {
        commit('SET_CURR_DOMAINE_ID', domaineId);
    },
    async setCurrThemeId({ commit }, themeId) {
        commit('SET_CURR_THEME_ID', themeId);
    },
    async setCurrFormationId({ commit }, formaId) {
        commit('SET_CURR_FORMATION_ID', formaId)
    },
}