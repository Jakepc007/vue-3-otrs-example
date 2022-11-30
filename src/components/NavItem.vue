<template>
    <router-link :to="option.path">
        <div :class="isOptionActive ? 'text-blue-400' : ''">{{option.name}}</div>
    </router-link>
</template>

<script lang="ts" setup>import { RouterLink } from 'vue-router';
import { Route } from '~/types';
const route = useRoute();

const {
    option
} = defineProps<{
    option: Route;
}>();

const isOptionActive = computed(() =>
    option.path === route.path
)
</script>