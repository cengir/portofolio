<template>
  <!-- Span top edge -->
  <div class="auto">
    <nav class="bg-blue-500 py-4">
      <div class="top-fix inset-0">
        <ul class="flex justify-center">
          <li class="py-2 px-8"><a href="">Home</a></li>
          <li class="py-2 px-8">Profile</li>
          <li class="py-2 px-8">Development</li>
        </ul>
      </div>
    </nav>
    <figure class="bg-blue-500 overflow-hidden relative p-8">
      <img
        class="w-32 h-32 rounded-full mx-auto"
        src="/src/assets/profile.JPG"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 text-ce space-y-4">
        <blockquote>
          <p class="text-lg font-semibold">
            “Tailwind CSS is the only framework that I've seen scale on large
            teams. It’s easy to customize, adapts to any design, and the build
            size is tiny.”
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-cyan-600">Kunsarifan</div>
          <div class="text-gray-500">Web Developer</div>
        </figcaption>
      </div>
    </figure>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #ffffff;
}
.bg-waves {
  background-image: url("/src/assets/wave.svg");
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
