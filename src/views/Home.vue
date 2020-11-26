<template>
    <div class="app">
        <AppHeader />
        <div class="container">
          <Toolbar v-on:add-user="addUser" v-on:set-query="setQuery" />
          <UsersList :users="filtredUsers()" v-on:delete-users="deleteUsers" />
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import AppHeader from '../components/AppHeader.vue';
import Toolbar from '../components/Toolbar.vue';
import UsersList from '../components/UsersList.vue';

export default Vue.extend({
  name: 'HeroPage',

  components: {
    AppHeader,
    Toolbar,
    UsersList,
  },

  methods: {
    addUser(user) {
      const newUser = {
        ...user,
        role: user.role.name,
        id: this.users.length + 1,
      };
      this.users.unshift(newUser);
    },
    setQuery(query) {
      this.query = query;
    },
    filtredUsers() {
      return this.users.filter(
        ({ name, userName, email }) => name.toLowerCase().includes(this.query.toLowerCase())
          || userName.toLowerCase().includes(this.query.toLowerCase())
          || email.toLowerCase().includes(this.query.toLowerCase()),
      );
    },
    deleteUsers(usersId) {
      this.users = this.users.filter((user) => !usersId.includes(user.id));
    },
  },

  data() {
    return {
      users: [],
      query: '',
    };
  },

  created() {
    fetch('/api/users')
      .then((res) => res.json())
      .then((json) => {
        this.users = json.users;
      });
    this.$emit('show-users');
  },
});
</script>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
