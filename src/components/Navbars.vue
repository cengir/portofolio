<template>
    <!-- Span top edge -->
    <div class="auto">
        <nav class="bg-gradient-to-r from-blue-500 to-blue-600 py-4">
            <div class="top-fix inset-0">
                <ul class="flex justify-center">
                    <li class="py-2 px-8">
                        <router-link to="/" exact-active-class="bold"
                            >Home</router-link
                        >
                    </li>
                    <li class="py-2 px-8">
                        <router-link to="/profile" exact>Profile</router-link>
                    </li>
                    <li class="py-2 px-8">Development</li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
    msg: String,
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
    color: #ffffff;
}
.bg-waves {
    background-image: url('/src/assets/wave.svg');
    background-repeat: no-repeat;
}

inset-o {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
}

fixed {
    position: fixed;
}
</style>
