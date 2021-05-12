// import { mutations } from './mutations'
import { actions } from './actions'
import { state } from './state'

export const formationStore = {
    namespaced: true,
    state,
    mutations,
    actions,
    //METHODS
    methods: {
        //UPDATE WINDOW'S TITLE
        UpdateDocTitle(title) {
            document.title = title;
        }
    }
};

export default formationStore