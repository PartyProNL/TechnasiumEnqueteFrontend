<script setup lang="ts">

    defineProps({
        type: {
            type: String,
            default: "text",
            required: false,
        },
        required: {
            type: Boolean,
            default: false,
            required: false,
        },
        id: {
            type: String,
            default: "",
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
            required: true,
        },
        label: {
            type: String,
            default: "",
            required: true,
        },
        modelValue: {
            required: false,
        }
    })

const emit = defineEmits(["update:modelValue"])

const onChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    emit("update:modelValue", target.value)
}

</script>

<template>
    <div class="flex flex-col my-2 p-4 bg-blue-50 rounded-lg">
        <label 
        class="font-semibold mb-1 translate-x-1"
        :for="id">{{ label }}<span class="text-red-500" v-if="required">*</span>
    </label>
        <input 
        class="bg-gray-100 border border-transparent py-1.5 px-2 rounded-lg placeholder:text-slate-400 text-slate-800 hover:border-blue-500 hover:border focus:border focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500/20 transition-colors"
        :id="id" :placeholder="placeholder" :type="type" :value="modelValue" @input="onChange">
    </div>
</template>