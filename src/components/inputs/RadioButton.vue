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
  group: {
    type: String,
    default: "",
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
    required: false,
  },
});

//generate random id
const id = Math.random().toString(36).substring(2, 9);
const isChecked = ref(false);
const emits = defineEmits(["update:modelValue"]);

const onChange = (event: Event) => {
  isChecked.value = !isChecked.value;
  const target = event.target as HTMLInputElement;
  console.log({
    value: target.value,
    checked: isChecked.value,
  });

  emits("update:modelValue", {
    value: target.value,
    checked: isChecked.value,
  });
};
</script>

<template>
  <div class="flex items-center group">
    <label :for="id" class="selection:bg-transparent flex items-center">
      <input
        :id="id"
        type="radio"
        class="w-5 h-5 mr-2 pointer-events-none peer"
        @change="onChange"
        :name="group"
      />
      {{ label }}
    </label>
  </div>
</template>