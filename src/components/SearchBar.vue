<template>
  <span class="p-input-icon-left">
    <i class="pi pi-search" />
    <InputText
      type="text"
      v-model="searchQuery"
      placeholder="Search"
      @change="setQuery"
    />
  </span>
</template>

<script lang="ts">
import Vue from 'vue';

export default class SearchBar extends Vue {
  searchQuery: ''

  setQuery() {
    this.$emit('set-query', this.searchQuery);
  }
}
</script>
