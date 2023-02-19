<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Touch, { type Options } from 'w-touch';

const props = defineProps<{
  options: Options;
}>();

let touchInstance: Touch;

const el = ref<Element>();

onMounted(() => {
  touchInstance = new Touch(el.value as Element, props.options);
});

onUnmounted(() => {
  touchInstance.destroy();
});
</script>

<template>
  <div ref="el"><slot /></div>
</template>
