<template>
    <div class="relative w-50 ml-auto mr-20 items-center flex">
        <div class="absolute left-2 i-carbon-search"></div>
        <input ref="searchBar" class="rounded-md overflow-hidden pr-2 py-2 dark:bg-sky-700 pl-8" v-model="input" />
        <transition name="slide">
            <button v-if="input" @click="search"
                class="absolute -right-20 px-2 py-1 bg-sky-600 border-1 border-sky-600 rounded-md text-white">
                search
            </button>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { MaybeComputedRef, onKeyPressed } from '@vueuse/core';

const searchBar : MaybeComputedRef<EventTarget> = ref(null);
console.log(searchBar)
const { input } = useSearch(searchBar, { autofocus: true })
const { push } = useRouter()

onKeyPressed('Enter', () => {
    console.log("search-bar: ", searchBar)
    search()
}, {
    target: searchBar
})

const search = () => {
    if (input.value)
        push(`/app/search?input=${encodeURIComponent(input.value)}`)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    transform: translateX(-5px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(-5px);
    opacity: 0;
}
</style>