import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const options = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toastFavoriteLimitError = () => {
  toast.error(
    " ✖️ Limite de favoritos atingido. Exclua para adicionar um novo",
    options
  );
};

export const toastAlreadyAFavorite = () => {
  toast.error(" ✖️ Esta cidade já foi adicionada como favorita", options);
};

export const toastRemoveSuccess = () => {
  toast.info(" ✔️  Cidade removida dos favoritos", options);
};

export const toastFavoriteSuccess = () => {
  toast.info(" ✔️  Cidade incluída nos favoritos", options);
};
