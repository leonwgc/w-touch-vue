export type WTouchEvent = TouchEvent | MouseEvent;
type WTouchHandler = (evt: WTouchEvent) => void;

export type Options = Partial<{
  onTouchStart: WTouchHandler;
  onTouchMove: WTouchHandler;
  onTouchEnd: WTouchHandler;
  onTouchCancel: WTouchHandler;
  onMultipointStart: WTouchHandler;
  onMultipointEnd: WTouchHandler;
  /** 点两次 */
  onDoubleTap: () => void;
  /** 长按 */
  onLongTap: () => void;
  /** 按一次 */
  onSingleTap: () => void;
  /** 旋转, 单位:deg */
  onRotate: (
    evt: WTouchEvent & {
      angle: number;
    }
  ) => void;
  /** 缩放  */
  onPinch: (
    evt: WTouchEvent & {
      scale: number;
    }
  ) => void;
  /** 单指滑动 */
  onPressMove: (
    evt: WTouchEvent & {
      deltaX: number;
      deltaY: number;
    }
  ) => void;
  /** 滑动方向判断 */
  onSwipe: (
    evt: WTouchEvent & {
      direction: 'left' | 'right' | 'up' | 'down';
    }
  ) => void;
  /** 双指滑动 */
  onTwoFingerPressMove: (
    evt: WTouchEvent & {
      deltaX: number;
      deltaY: number;
    }
  ) => void;
}>;

export declare const TouchElement: import('vue').DefineComponent<{
  options: Options;
}>;

export default TouchElement;
