export const state = () => ({
  windowWidth: null,
});

export const mutations = {
  SET_WINDOW_WIDTH(state, width) {
    state.windowWidth = width;
  },
};

export const getters = {
  isDesktop(state) {
    if (state.windowWidth) {
      return state.windowWidth >= 1024;
    }
    return false;
  },

  isDesktopXl(state) {
    if (state.windowWidth) {
      return state.windowWidth >= 1890;
    }
    return false;
  },

  isTablet(state) {
    if (state.windowWidth) {
      return state.windowWidth < 1024 && state.windowWidth >= 744;
    }
    return false;
  },

  isMobile(state) {
    if (state.windowWidth) {
      return state.windowWidth < 744;
    }
    return false;
  },

  currentWindowWidth(state) {
    if (state.windowWidth) {
      return state.windowWidth;
    }
    return false;
  },
};
