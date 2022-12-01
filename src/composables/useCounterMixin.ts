import { ComponentOptions } from "vue";

export default {
    data() {
        return {
            count: 0,
        };
    },

    methods: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
        }
    },
    computed: {
        doubleCount() {
            return this.count * 2;
        },
    }
} as ComponentOptions


