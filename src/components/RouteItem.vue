<template>
    <div>
        <router-link :to="tree.path" class="whitespace-pre transition-all text-neutral-600 dark:text-neutral-300 hover:!text-blue-500" :class="isCurrent ? 'decoration-primary !text-blue-700' : 'decoration-transparent'">
            {{ $t(cleanPath) }}
        </router-link>

        <template v-if="tree.children">
            <RouteItem class="pl-2" v-for="child in tree.children" :key="child.path" :tree="child" />
        </template>
    </div>
</template>

<script setup lang="ts">import { RouterLink } from 'vue-router';
import { TreeItem } from '~/types';

const cleanPath = computed(() => props.tree.path.split('/').filter(i => !!i).join('.') + '.title');

const props = defineProps<{ tree: TreeItem }>()
const route = useRoute()
const isCurrent = computed(() => route.path == props.tree.path)
</script>