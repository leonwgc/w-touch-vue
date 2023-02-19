# Vue3 手势操作组件

### 特点

1. 支持鼠标和手指操作 (内部统一Mouse & Touch事件处理)
2. 使用 TypeScript 编写，内置类型定义文件，良好的智能提示
3. 支持多种手势

### 支持的手势

1. 单击 onSingleTap
2. 双击 onDoubleTap
3. 长按 onLongTap
4. 旋转 onRotate
5. 缩放 onPinch
6. 单指滑动 onPressMove
7. 滑动方向判断 onSwipe
8. 双指滑动 onTwoFingerPressMove

## 使用

```js
<script setup lang="ts">
import { ref } from 'vue';
import TouchElement from '../src/TouchElement.vue';
import type { Options } from 'w-touch';
import type { CSSProperties } from 'vue';

const style = ref<CSSProperties>({
  background: '#005cff',
  width: '140px',
  height: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '26px',
  cursor: 'move',
  userSelect: 'none',
  padding: '20px',
  color: '#fff',
});

const positionRef = ref({ x: 0, y: 0, angle: 0, scale: 1 });

const msg = ref('');

const options: Options = {
  onDoubleTap: () => {
    console.log('double taped');
  },
  onSwipe({ direction }) {
    msg.value = `滑动方向：${direction}`;
  },
  onPressMove({ deltaX, deltaY }) {
    positionRef.value.x = positionRef.value.x + deltaX;
    positionRef.value.y = positionRef.value.y + deltaY;
    style.value.transform = `translate(${positionRef.value.x}px,${positionRef.value.y}px)`;
  },
};
</script>

<template>
  <div class="msg">{{ msg }}</div>
  <TouchElement :options="options" :style="style">Touch me !</TouchElement>
</template>

<style scoped>
.msg {
  color: #005cff;
  font-size: 18px;
}
</style>

```

## Options 手势事件类型定义

```js
type Options = Partial<{
  onTouchStart: (evt: WTouchEvent) => void,
  onTouchMove: (evt: WTouchEvent) => void,
  onTouchEnd: (evt: WTouchEvent) => void,
  onTouchCancel: (evt: WTouchEvent) => void,
  onMultipointStart: (evt: WTouchEvent) => void,
  onMultipointEnd: (evt: WTouchEvent) => void,
  /** 点两次 */
  onDoubleTap: () => void,
  /** 长按 */
  onLongTap: () => void,
  /** 按一次 */
  onSingleTap: () => void,
  /** 旋转, 单位:deg */
  onRotate: (evt: WTouchEvent & { angle: number }) => void,
  /** 缩放  */
  onPinch: (evt: WTouchEvent & { scale: number }) => void,
  /** 单指滑动 */
  onPressMove: (evt: WTouchEvent & { deltaX: number, deltaY: number }) => void,
  /** 左右滑动 */
  onSwipe: (evt: WTouchEvent & { direction: 'left' | 'right' | 'up' | 'down' }) => void,
  /** 双指滑动 */
  onTwoFingerPressMove: (evt: WTouchEvent & { deltaX: number, deltaY: number }) => void,
}>;
```
