<script setup lang="ts">
import Pagelayout from '../components/structural/pagelayout.vue';

defineProps({
    statusCode: {
        type: Number,
        required: true,
        default: "200"
    }
})

</script>

<template>
    <Pagelayout>
        <div class="flex flex-col items-center justify-center pt-16">
            <h1 class="font-bold mb-3 text-3xl">Bedankt!</h1>
            <p class="text-center text-slate-700 mb-4" >We waarderen het enorm dat u onze enquête heeft ingevuld. Wij wensen u nog een fijn bezoek aan MAK Blokweer.</p>
            <p class="text-sm font-semibold text-slate-400">Code: {{ statusCode }}</p>
        </div>
    </Pagelayout>
</template>