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
