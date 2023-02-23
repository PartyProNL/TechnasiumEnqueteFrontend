<script setup lang="ts">
    import { PropType } from 'vue';
    import { ref } from "vue";
import CheckBoxOther from './CheckBoxOther.vue';
import RadioButton from './RadioButton.vue';

    type Values = {value: string, label: string}

    defineProps({
        values: {
            type: Object as PropType<Values[]>,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        groupName: {
            type: String,
            required: true,
        }
    })

    const emit = defineEmits(["update:modelValue"])

    const onChange = (event: any) => {
        emit("update:modelValue", event.value)
    }
</script>

<template>
    <div class="my-2 p-4 bg-blue-50 rounded-lg">
        <h2 class="font-semibold mb-1 translate-x-1">{{ label }}</h2>
        <RadioButton v-for="checkbox in values" :key="checkbox.value" :label="checkbox.label" :value="checkbox.value" :group="groupName" @change="onChange(checkbox)"></RadioButton>
    </div>
</template>
