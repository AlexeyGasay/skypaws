export const state = () => ({
  openModals: [],
  modalData: null,
});

export const mutations = {
  SET_DATA(state, modalData) {
    state.modalData = modalData;
  },

  SHOW_MODAL(state, modalName) {
    console.log(state, modalName);
    if (state.openModals.includes(modalName)) return;
    state.openModals.push(modalName);
  },

  TOGGLE_MODAL(state, modalName) {
    const modalIndex = state.openModals.findIndex((el) => el === modalName);

    if (modalIndex >= 0) {
      state.openModals.splice(modalIndex, 1);
    } else state.openModals.push(modalName);
  },

  async HIDE_MODAL(state, modalName) {
    const modalIndex = state.openModals.findIndex((el) => el === modalName);

    if (modalIndex >= 0) {
      state.openModals.splice(modalIndex, 1);
    }
  },

  HIDE_ALL_MODALS(state) {
    state.openModals = [];
  },
};

export const actions = {};

export const getters = {
  isModalOpen: (state) => (modalName) => state.openModals.includes(modalName),

  getData(state) {
    return state.modalData;
  },
};
