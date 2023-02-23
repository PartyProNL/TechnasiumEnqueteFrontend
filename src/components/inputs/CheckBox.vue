<script setup lang="ts">
import { ref } from "vue";

defineProps({
  label: {
    type: String,
    default: "",
    required: true,
  },
  value: {
    type: String,
    default: "",
    required: false,
  },
  required: {
    type: Boolean,
    default: false,
    required: false,
  },
});

//generate random id
const id = Math.random().toString(36).substring(2, 9);
const isChecked = ref(false)
const emits = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  isChecked.value = !isChecked.value;
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", {
    value: target.value, checked: isChecked.value})
};
</script>

<template>
  <div class="flex items-center group">
    <input
      :id="id"
      type="checkbox"
      class="w-0 h-0 pointer-events-none peer"
      @change="onChange"
      :value="value"
    />
    <div
      class="w-5 h-5 bg-gray-200 flex items-center justify-center rounded peer-checked:bg-blue-500 mr-2 transition-all group-hover:border group-hover:border-blue-500 peer-focus:border peer-focus:border-blue-500 peer-focus:ring peer-focus:ring-blue-500/20"
    >
      <svg
        v-if="isChecked"
        class="h-4 w-4 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
    <label :for="id" class="selection:bg-transparent w-fit"> {{ label }}</label>
  </div>
</template>