export default () => ({
    doc_title: undefined,
    domaines: [],
    themes: [],
    formations: [],
    domaine_by_id: [],
    theme_by_id: [],
    formation_by_id: [],
    themes_by_domaine: [],
    formations_by_theme: [],
    // id's
    currDomaineId: undefined,
    currThemeId: undefined,
    currFormaId: undefined,
    //is loaded
    is_domaineLoaded: false,
    is_themeLoaded: false,
    is_formationLoaded: false,
    is_themesByDomaineLoaded: false,
    is_formationsByThemeLoaded: false,
    //errors
    domaineError: undefined,
    themeError: undefined,
    formationError: undefined,
    //errors
    has_domaineError: false,
    has_themeError: false,
    has_formationError: false,
})