<script setup lang="ts">
import { nextTick, ref } from 'vue';
import TouchElement from '../src/TouchElement.vue';
import type { Options } from 'w-touch';
import type { CSSProperties } from 'vue';
import { WTouchEvent } from 'w-touch/types/Touch';

const style = ref<CSSProperties>({
  background: '#005cff',
  width: '140px',
  height: '140px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px',
  cursor: 'move',
  userSelect: 'none',
  padding: '12px',
  color: '#fff',
  touchAction: 'none',
});

const position = ref({ x: 0, y: 0, angle: 0, scale: 1 });

const msg = ref('');

const updateTransform = () => {
  const transform = `translate(${position.value.x}px,${position.value.y}px) rotate(${position.value.angle}deg) scale(${position.value.scale})`;
  style.value.transform = transform;
  msg.value = transform;
};

const options: Options = {
  onTouchEnd: (e: WTouchEvent) => {
    e.preventDefault();
  },
  onDoubleTap: () => {
    msg.value = '你双击了';
  },
  onLongTap: () => {
    msg.value = '长按了';
  },
  onPressMove({ deltaX, deltaY }) {
    position.value.x = position.value.x + deltaX;
    position.value.y = position.value.y + deltaY;
    updateTransform();
  },
  onPinch({ scale }) {
    position.value.scale = scale;
    updateTransform();
  },
  onRotate({ angle }) {
    position.value.angle += angle;
    updateTransform();
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
