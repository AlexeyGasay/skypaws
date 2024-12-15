export const state = () => ({
  windowWidth: null,
  scrollbarWidth: 0,
});

export const mutations = {
  SET_WINDOW_WIDTH(state, width) {
    state.windowWidth = width;
  },

  SET_SCROLLBAR_WIDTH(state, width) {
    state.scrollbarWidth = width;
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
      return state.windowWidth < 1024 && state.windowWidth >= 768;
    }
    return false;
  },

  isMobile(state) {
    if (state.windowWidth) {
      return state.windowWidth < 768;
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
