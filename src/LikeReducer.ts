import { Reducer } from "redux";
import { ILikeState, likeActinTypes, ILikeAction } from "./LikeTypes";

const initialLikeState: ILikeState = {
  likes: 0,
  lastLike: new Date(),
};

export const LikeReducer: Reducer<ILikeState, ILikeAction> = (
  state = initialLikeState,
  action
) => {
  switch (action.type) {
    case likeActinTypes.LIKE: {
      return {
        ...state,
        likes: state.likes + 1,
        lastLike: action.now,
      };
    }
  }
  return state || initialLikeState;
};
