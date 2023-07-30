import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { takeFavoritesList } from "../notices/notices-operations";
// const dispatch = useDispatch();

const handleMiddlewateForNoticePage = (store) => (next) => (action) => {
  console.log("actionType", action.type);

  if (action.type === "notices/addFavorite/fulfilled") {
    toast.success("Successfuly add to favorite", {
      duration: 4000,
      position: "top-right",
    });
  }
  if (action.type === "notices/deleteFavorite/fulfilled") {
    toast.success("Successfuly delete from favorite", {
      duration: 4000,
      position: "top-right",
    });
  }
  if (action.type === "notices/deleteCardById/fulfilled") {
    toast.success("Successfuly delete from own", {
      duration: 4000,
      position: "top-right",
    });
  }
  if (
    action.type === "auth/login/fulfilled" ||
    action.type === "auth/refresh/fulfilled"
  ) {
    const { favorites } = action.payload.user;
    store.dispatch(takeFavoritesList(favorites));
  }

  return next(action);
};

export default handleMiddlewateForNoticePage;
