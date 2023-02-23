<script setup lang="ts">
    import { PropType } from 'vue';
    import CheckBox from "./CheckBox.vue";
    import { ref } from "vue";
import CheckBoxOther from './CheckBoxOther.vue';

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
        otherplaceholder: {
            type: String,
            required: true,
            default: "",
        },
    })

    const emit = defineEmits(["update:modelValue"])

    const strings = ref<string[]>([])

    const onChange = (event: Event) => {
        const target = event.target as HTMLInputElement;

        if(strings.value.includes(target.value)) {
            strings.value = strings.value.filter((v) => v !== target.value)
        } else {
            strings.value.push(target.value)
        }

        emit("update:modelValue", strings.value)
    }

    // Anders updaten
    let lastText = null as string | null

    const updateOther = (text: string) => {
        const newText = "ANDERS: " + text

        if(lastText !== null) {
            strings.value = strings.value.filter((v) => v !== lastText)
        }

        if(newText !== "") {
            strings.value.push(newText)
        }

        lastText = newText
        emit("update:modelValue", strings.value)
    }
</script>

<template>
    <div class="my-2 p-4 bg-blue-50 rounded-lg">
        <h2 class="font-semibold mb-1 translate-x-1">{{ label }}</h2>
        <CheckBox v-for="checkbox in values" :key="checkbox.value" :label="checkbox.label" :value="checkbox.value" @change="onChange"></CheckBox>
        <CheckBoxOther value="anders" :placeholder="otherplaceholder" @update:other-value="updateOther"></CheckBoxOther>
    </div>
</template>
