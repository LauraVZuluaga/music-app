<template>
  <div>
    <template v-if="label">
      <label class="input-label my-2 info-center">{{ label }}</label>
    </template>

    <template v-else>
      <input
        :type="type"
        v-model="inputValue"
        class="form"
        :class="extraClass"
        :placeholder="placeholder"
        v-on:keyup="keyup"
        @click="clickEvent"
        :disabled="disabled"
        :name="name"
      />
    </template>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "app-input",
  props: {
    label: { type: String, required: false },
    type: { type: String, required: false, default: "text" },
    placeholder: { type: String, required: false },
    value: { required: false },
    extraClass: { type: String, required: false },
    disabled: { type: Boolean, required: false, default: false },
    name: { type: String, required: false, default: null },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  mounted() {
    this.inputValue = this.value;
  },
  methods: {
    change() {
      this.$emit("input", this.inputValue);
    },
    keyup() {
      this.$emit("keyup");
    },
    clickEvent(e) {
      this.$emit("click", e);
    },
  },
  watch: {
    inputValue() {
      this.change();
    },
    value(a) {
      if (a != this.inputValue) {
        this.inputValue = a;
      }
    },
  },
});
</script>

<style lang="scss">
@import "@/assets/style.scss";

.form {
  border: none;
  background-color: #ffff;
  outline: none;
  width: 100%;
  border-top-left-radius: 0;
  background-color: transparent;
  text-align: center;
}
</style>
