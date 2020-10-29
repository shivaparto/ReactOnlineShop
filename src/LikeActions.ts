import { likeActinTypes, ILikeAction, ILikeState } from "./LikeTypes";
import { ActionCreator } from "redux";
export const Likes: ActionCreator<ILikeAction> = (): ILikeAction => ({
  type: likeActinTypes.LIKE,
  now: new Date(),
});
