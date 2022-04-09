<template>
  <div class="d-flex justify-content-center">
    <div class="mb-4 txt-header txt-white">
     <img src="@/assets/header-logo.png" alt="logo">
    </div>
  </div>

  <section>
    <app-music-list></app-music-list>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppMusicList from "@/components/music/AppMusicList.vue";

export default defineComponent({
  name: "MusicView",
  components: { AppMusicList },
});
</script>

<style>
.btn-icon {
  width: 22px;
  height: 28px;
  top: 0;
  right: 0;
  background: transparent;
  color: #bababa;
  margin-right: -42%;
}
</style>
