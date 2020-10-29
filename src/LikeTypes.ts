export enum likeActinTypes {
  LIKE = "LIKE",
}
export interface ILikeState {
  readonly likes: number;
  readonly lastLike: Date | undefined;
}

export interface ILikeAction {
  type: likeActinTypes.LIKE;
  now: Date;
}
export type LikeActions = ILikeAction;
