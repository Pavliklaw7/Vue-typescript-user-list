<template>
  <Toolbar>
    <template slot="left">
      <span class="user-logo">client-logo</span>
      <Dropdown
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="USER MANAGEMENT"
        id="toolbar-Dropdown"
      />
    </template>
    <template slot="right">
      <i
       id="user-icon"
       class="pi pi-user"
       label="Toggle"
       aria-hidden="true"
       @click="toggle"
      />
      <OverlayPanel id="user-dropdown" ref="navbar-dropdown">
        <p class="dropdown-text">
          <i class="pi pi-user" aria-hidden="true" />
          <span>Profile</span>
        </p>
      </OverlayPanel>
    </template>
  </Toolbar>
</template>

<script>
import Toolbar from 'primevue/toolbar';
import OverlayPanel from 'primevue/overlaypanel';
import Dropdown from 'primevue/dropdown';

export default {
  components: {
    Toolbar,
    OverlayPanel,
    Dropdown,
  },

  data() {
    return {
      selectedCity: null,
      cities: [
        { action: 'Open' },
        { action: 'Delete' },
        { action: 'Create' },
      ],
    };
  },

  methods: {
    toggle(event) {
      this.$refs['navbar-dropdown'].toggle(event);
    },
  },
};
</script>

<style lang="scss" scoped>

.p-dropdown.p-component.p-inputwrapper {
  margin-left: 30px;
  background: transparent;
  border: none;
}

.p-dropdown-label {
  color: white !important;

}

.p-toolbar {
  background-color: black;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: unset;
}

.user-logo {
  text-transform: uppercase;
}

#user-icon {
  padding: 5px;
  background: white;
  color: black;
  border-radius: 100px;
  cursor: pointer;
}

.p-overlaypanel {
  min-width: 150px;
  margin-top: 6px;
  box-shadow: 0 0 3px 0 hsla(0, 0%, 0%, 0.2);
  border-radius: 6px;
  &::before,
  &::after {
    display: none;
  }
  .p-overlaypanel-content {
    padding: 12px;
  }
}

.dropdown-text {
  margin: 0;
  color: hsl(300, 0, 68);
  font-size: 16px;
  user-select: none;
    > .pi-user {
      margin-right: 10px;
    }
  }
</style>
