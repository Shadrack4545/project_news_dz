<template>
  <div class="pagination">
    <UIButtonsMyButton
      :isDisabled="curIndex <= 1"
      @click="handleDecrement"
      class="pagination__button"
    >
      &#60;
    </UIButtonsMyButton>

    <UIButtonsMyButton
      v-if="curIndex - 1 > 0"
      @click="emitPage(curIndex - 1)"
      class="pagination__button"
      :isHollow="true"
    >
      {{ curIndex - 1 }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      @click="emitPage(curIndex)"
      class="pagination__button pagination__button--active"
    >
      {{ curIndex }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      v-if="curIndex + 1 <= maxValue"
      @click="emitPage(curIndex + 1)"
      class="pagination__button"
      :isHollow="true"
    >
      {{ curIndex + 1 }}
    </UIButtonsMyButton>

    <UIButtonsMyButton
      :isDisabled="curIndex >= maxValue"
      @click="handleIncrement"
      class="pagination__button"
    >
      &#62;
    </UIButtonsMyButton>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, withDefaults, defineProps } from 'vue';

const emit = defineEmits<{
  (e: 'clickPagination', value: number): void;
}>();

const props = withDefaults(defineProps<{ maxValue?: number }>(), {
  maxValue: 10,
});

const curIndex = ref(1);

function handleIncrement() {
  if (curIndex.value < props.maxValue) {
    curIndex.value++;
    emit('clickPagination', curIndex.value);
  }
}

function handleDecrement() {
  if (curIndex.value > 1) {
    curIndex.value--;
    emit('clickPagination', curIndex.value);
  }
}

function emitPage(index: number) {
  curIndex.value = index;
  emit('clickPagination', index);
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.pagination__button {
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:not([disabled]):hover {
    background-color: #f0f0f0;
  }

  &--active {
    font-weight: bold;
    background-color: #007bff;
    color: white;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
