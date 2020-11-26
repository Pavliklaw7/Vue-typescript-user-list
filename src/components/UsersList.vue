<template>
  <div class="table">
    <DataTable
      :value="users"
      :paginator="true"
      :rows="10"
      dataKey="id"
      :rowsPerPageOptions="[10, 20, 50, 100]"
      :resizableColumns="true"
      columnResizeMode="expand"
    >
      <Column headerStyle="width: 3em">
        <template #header>
          <input
            type="checkbox"
            :value="'allUsers'"
            v-model="selectedUsers"
            @click="selectAllUsers"
          />
        </template>
        <template #body="slotProps">
          <input
            type="checkbox"
            :value="slotProps.data.id"
            v-model="selectedUsers"
          />
        </template>
      </Column>
      <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      >
        <template #body="slotProps">
          <p
            @contextmenu.prevent="contextMenu"
            @contextmenu="selectUser(slotProps.data.id)"
          >
            {{ slotProps.data[col.field] }}
          </p>
        </template>
      </Column>
      <Column
        headerStyle="width: 8rem; text-align: center"
        bodyStyle="text-align: center; overflow: visible"
      >
        <template #body>
          <Button type="button" icon="pi pi-pencil" class="p-button-secondary">
          </Button>
        </template>
      </Column>
    </DataTable>
    <ContextMenu ref="menu" :model="items" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { User } from '../User';

@Component({})
export default class UsersList extends Vue {
  @Prop() ['users']

    selectedUsers: User[] = [];

    columns: [
      { field: 'name', header: 'Name' },
      { field: 'userName', header: 'UserName' },
      { field: 'email', header: 'Email' },
      { field: 'role', header: 'Role(s)' },
    ]

    items: [
      {
        label: 'Reset password',
        icon: 'pi pi-fw pi-refresh',
      },
      {
        label: 'Disable selected users',
        icon: 'pi pi-fw pi-eye-slash',
      },
      {
        label: 'Delete selected users',
        icon: 'pi pi-fw pi-trash',
        command: this.deleteUsers, // how to fix?
      },
    ]

    selectAllUsers() {
      if (!this.selectedUsers.includes('allUsers')) { // how to fix?
        this.selectedUsers = this.users.map((user) => user.id);
      } else {
        this.selectedUsers = [];
      }
    }

    contextMenu(event) {
      (this.$refs.cm as Vue & {show: () => boolean }).show();
    }

    selectUser(id) {
      this.selectedUsers.push(id);
    }

    deleteUsers() {
      this.$emit('delete-users', this.selectedUsers);
    }
};
</script>
