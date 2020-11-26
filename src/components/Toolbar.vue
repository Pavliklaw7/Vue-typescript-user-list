<template>
  <Toolbar class="p-mb-4 p-mt-4 toolbar">
    <template slot="left">
      <AddUser v-on:add-user="addUser" />
    </template>
    <template slot="right">
      <SearchBar v-on:set-query="setQuery" />
    </template>
  </Toolbar>
</template>

<script lang='ts'>
import Vue from 'vue';
import Component from 'vue-class-component';
import AddUser from './AddUser.vue';
import SearchBar from './SearchBar.vue';

@Component({
  components: {
    AddUser,
    SearchBar,
  },
})

export default class Toolbar extends Vue {
  button: null

  displayModal: false

  addUser(user) {
    this.$emit('add-user', user);
  }

  setQuery(query) {
    this.$emit('set-query', query);
  }
}
</script>

<style scoped>
.toolbar {
  height: 60px;
  padding: 10px;
}
</style>
