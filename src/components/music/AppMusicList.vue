<template>
  <div class="d-flex justify-content-center space-right-search">
    <div class="search">
      <input
        type="text"
        id="input-search"
        class="form-control"
        placeholder="Search by artist name"
        v-model="title"
      />
      <div class="btn-icon">
        <span class="v-line"> | </span>
        <fa icon="search" class="btn-icon"></fa>
      </div>
    </div>
  </div>
  <div class="row space-top-subtitles">
    <div class="row mb-3">
      <div class="col-4 text-center text-uppercase secondary-color">Album's image</div>
      <!-- <div class="col-4 text-center text-uppercase secondary-color">{{ $t('albumsName') }}</div> -->
      <div class="col-4 text-center text-uppercase secondary-color">Title short version</div>
      <!-- <div class="col-4 text-center text-uppercase secondary-color">{{ $t('titleShortVersion') }}</div> -->
      <div class="col-4 text-center text-uppercase secondary-color">Artist name</div>
      <!-- <div class="col-4 text-center text-uppercase secondary-color">{{ $t('artistName') }}</div> -->
    </div>
    <app-each-song></app-each-song>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MusicDataService from "@/services/MusicDataService";
import AppEachSong from "@/components/music/AppEachSong.vue";
import { TranslateResult } from 'vue-i18n';
import Song from "@/interface/Song";

export default defineComponent({
  name: "app-music-list",
  data() {
    return {
      songs: [] as Song[],
      // albumsName: this.$t("albumsName") as TranslateResult,
      // titleShortVersion: this.$t("titleShortVersion") as TranslateResult,
      // artistName: this.$t("artistName") as TranslateResult
    };
  },
  components: {
    AppEachSong,
  },
  methods: {
    async songsList(artistName: string) {
      this.songs = await MusicDataService.getSongs(artistName);
    },
  },
  mounted() {
    this.songsList("ARTISTNAME");
  },
});
</script>

<style scoped>
.search {
  position: absolute;
  padding: 5px;
}

.search input {
  width: 160%;
  height: 40px;
  padding: 0 20px;
  font-size: 16px;
  outline: none;
  border: 3px solid #bababa;
  border-radius: 30px;
  background: #ffffff1a;
  color: #ea1845;
}

.btn-icon {
  width: 22px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  margin-top: 4%;
  color: #ea1845;
  margin-right: -42%;
}

.space-top-subtitles{
  margin-top: 7%;
}

.space-right-search{
  margin-right: 10%;
}

.form-control::placeholder {
  color: black;
}
</style>
