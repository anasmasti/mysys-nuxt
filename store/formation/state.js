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
  // Is loaded
  is_domaineLoaded: false,
  is_themeLoaded: false,
  is_formationLoaded: false,
  is_themesByDomaineLoaded: false,
  is_formationsByThemeLoaded: false,
  // Errors
  domaineError: undefined,
  themeError: undefined,
  formationError: undefined,
  // Has errors variables
  has_domaineError: false,
  has_themeError: false,
  has_formationError: false
});
