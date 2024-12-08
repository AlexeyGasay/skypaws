import { modalNames } from "@/constants/modalNames";

export default (context, inject) => {
  inject("MODAL_NAMES", modalNames);
};
