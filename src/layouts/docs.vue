<script setup lang="ts">
import { TreeItem } from "~/types";
import generatedRoutes from "~pages";

console.log("routes", generatedRoutes);

let docRoutes = generatedRoutes
    .map((r) => r.path.split("/").filter(Boolean))
    .filter((r) => r[0] == "documentation");
console.log(docRoutes);

const headingWrap = ref(false);
const tree = docRoutes.map((r) => {
    let path = "/" + r.join("/");
    let name = r[r.length - 1];
    return {
        name,
        path,
        children: [],
    };
});

let nestedTree = tree.reduce((acc, item) => {
    let path = item.path.split("/").filter(Boolean);
    let parent = acc;
    for (let i = 0; i < path.length; i++) {
        let p = path[i];
        let child = parent.find((c) => c.name == p);
        if (!child) {
            child = {
                name: p,
                path: "/" + path.slice(0, i + 1).join("/"),
                children: [],
            };
            parent.push(child);
        }
        parent = child.children;
    }
    return acc;
}, [] as TreeItem[]);
</script>

<template>
    <div class="flex h-screen">
        <div class="pa-4 border-r-2 w-50 z-0 flex flex-col dark:bg-gradient-to-r from-black to-neutral-900">
            <div>
                <router-link to="/" class="flex items-center gap-2 mb-3 hover:text-blue-500">
                    <div class="i-carbon-home transition" />
                    <div>{{ $t("documentation.home") }}</div>
                </router-link>
            </div>
            <div class="mb-auto overflow-scroll flex-1">
                <div v-for="route in nestedTree" :key="route.path" >
                    <RouteItem :tree="route" />
                </div>
            </div>

            <div>
                <div class="mt-4 flex gap-2 items-center">
                    <LanguageSwitcher />
                </div>
            </div>
        </div>
        <main class="px-4 text-center text-gray-700 dark:text-gray-200 z-10">
            <router-view v-slot="{ Component, route }">
                <transition mode="out-in" name="slide">
                    <component class="px-4" :is="Component" :key="route" />
                </transition>
            </router-view>
        </main>
    </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease;
}

.slide-enter-from {
    transform: translateX(-10px);
    opacity: 0;
}

.slide-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
