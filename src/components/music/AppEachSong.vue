<template>
  <div class="row bg-song">
    <div class="col-4 text-center">
      <img src="@/assets/song-image.jpg" alt="logo-song" class="logo-song" />
    </div>
    <div
      class="col-4 d-flex justify-content-center align-items-center secondary-color-light"
    >
      <!----V-IF CONDITION----->
      <div>
        <div class="explicit">EXPLICIT</div>
        <div>Diamond Boys</div>
      </div>
    </div>
    <div
      class="col-4 d-flex justify-content-center align-items-center secondary-color-light"
    >
      Artistnameleon
    </div>
  </div>
  <span><hr /></span>
  <!-- ONLY FOR TIME, THE CORRECT WAY IS OUT WHIT V-FOR --->
  <div class="row bg-song">
    <div class="col-4 text-center">
      <img src="@/assets/song-image.jpg" alt="logo-song" class="logo-song" />
    </div>
    <div
      class="col-4 d-flex justify-content-center align-items-center secondary-color-light"
    >
      <!----V-IF CONDITION----->
      <div>
        <div class="explicit">EXPLICIT</div>
        <div>Diamond Boys</div>
      </div>
    </div>
    <div
      class="col-4 d-flex justify-content-center align-items-center secondary-color-light"
    >
      Artistnameleon
    </div>
  </div>
  <span><hr /></span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app-each-song",
});
</script>

<style>
hr {
  color: #bababa;
}

.bg-song {
  background: hsla(0, 0%, 80%, 0.25);
  padding: 20px;
  border: 1px solid transparent;
  border-radius: 20px;
}

.explicit {
  background-color: #191922;
  border-radius: 2px;
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.2px;
  padding: 2px 6px;
  text-align: center;
  color: white;
}

.logo-song {
  width: 20%;
}
</style>
