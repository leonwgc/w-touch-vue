<script lang="ts" setup>
import { onMounted, onUnmounted, ref, defineProps } from 'vue';
import Touch, { type Options } from 'w-touch';

const props = defineProps<{
  options: Options;
}>();

let touchInstance: Touch;

const elRef = ref<Element>();

onMounted(() => {
  touchInstance = new Touch(elRef.value as Element, props.options);
});

onUnmounted(() => {
  touchInstance.destroy();
});
</script>

<template>
  <div ref="elRef"><slot /></div>
</template>
