<template>
  <transition name="modal-fade">
    <div class="modal-overlay" v-if="modelValue" @click.self="close">
      <div class="modal-dialog">
        <button class="modal-close" @click="close">✕</button>
        <h2>Submit a Request</h2>
        <form @submit.prevent="onSubmit">
          <input type="text" placeholder="Name" v-model="name" required />
          <input type="tel" placeholder="Phone" v-model="phone" required />
          <textarea placeholder="Message" v-model="message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
        <p>
          By clicking "Submit", you accept the
          <span>User Agreement and Privacy Policy</span>
        </p>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (
    e: 'submit',
    payload: { name: string; phone: string; message: string }
  ): void;
}>();

const name = ref('');
const phone = ref('');
const message = ref('');

function close() {
  emit('update:modelValue', false);
}

function onSubmit() {
  emit('submit', {
    name: name.value,
    phone: phone.value,
    message: message.value,
  });
  close();
}

watch(
  () => props.modelValue,
  visible => {
    if (!visible) {
      name.value = '';
      phone.value = '';
      message.value = '';
    }
  }
);
</script>

<style scoped lang="scss">
h2 {
  color: #333;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
}

form {
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin: 16px 0;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 16px;
    transition: border-color 0.3s ease;
    max-width: 100%;
  }

  input:focus,
  textarea:focus {
    border-color: #029f59;
  }

  button {
    padding: 12px;
    background-color: #029f59;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #027b47;
  }
}

p {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #757e8d;
}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-dialog {
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
  transform: translateY(-20px);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #029f59;
  padding: 10px;
  font-weight: 600;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-to,
.modal-fade-leave-from {
  opacity: 1;
}

.modal-fade-enter-active .modal-dialog {
  transform: translateY(0);
}
</style>
