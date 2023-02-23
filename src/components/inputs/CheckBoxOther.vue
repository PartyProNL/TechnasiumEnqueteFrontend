<script setup lang="ts">
import { ref } from "vue";

defineProps({
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
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
  otherValue: {
    required: false,
  }
});

//generate random id
const id = Math.random().toString(36).substring(2, 9);
const isChecked = ref(false)
const emits = defineEmits(["update:modelValue", "update:otherValue"]);

const onChange = (event: Event) => {
  isChecked.value = !isChecked.value;
  const target = event.target as HTMLInputElement;
  emits("update:modelValue", {
    value: target.value, checked: isChecked.value})
};

const onChangeOther = (event: Event) => {
    const target = event.target as HTMLInputElement
    emits("update:otherValue", target.value)
}
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
    <label :for="id" class="selection:bg-transparent mr-2 w-fit"> Anders, namelijk: </label>
    <input 
        class="bg-gray-100 border border-transparent py-1.5 px-2 rounded-lg placeholder:text-slate-400 text-slate-800 hover:border-blue-500 hover:border focus:border focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/20 transition-colors"
        :id="id" :placeholder="placeholder" type="text" :value="otherValue" @input="onChangeOther">
  </div>
</template>