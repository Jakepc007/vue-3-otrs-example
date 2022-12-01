export default () => {
    const count = ref(0)

    const increment = () => count.value++
    const decrement = () => count.value--

    const doubleCount = computed(() => count.value * 2)

    return { count, increment, decrement, doubleCount }
}