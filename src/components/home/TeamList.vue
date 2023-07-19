<template>
  <div style="background: #f2f2f2; box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2); border-radius: 30px;">
    <DataTable :value="teams" paginator :rows="5" selectionMode="single" v-model:selection="selectedTeam" @rowClick="showTeam">
      <template #header v-if="withCreateAction">
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <Button type="button" label="Create Team" @click="toggleCreateDialog" />
        </div>
      </template>
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="creator" header="Creator"></Column>
    </DataTable>
    <Dialog v-model:visible="createDialogVisible" modal header="Create Team" :style="{ width: '20vw' }">
      <div style="margin-top: 10px;">
        <span class="p-input">
          <InputText v-model="formTeam.name" placeholder="Name" />
        </span>
      </div>
      <div style="margin-top: 10px;">
        <Button label="Create" severity="success" @click="createTeam" />
      </div>
    </Dialog>
    <Dialog v-model:visible="teamDialogVisible" modal header="Team" :style="{ width: '50vw' }">
      <div v-if="team">
        <div>
          <h5>Name: {{ team.name }}</h5>
        </div>
        <div>
          <span>Projects list</span>
        </div>
        <VirtualScroller :items="team.projects" :itemSize="50" class="border-1 surface-border border-round" style="width: 200px; height: 200px">
          <template v-slot:item="{ item, options }">
            <router-link to="/project" :class="['flex align-items-center p-2', { 'surface-hover': options.odd }]" style="height: 50px">{{ item.title }}</router-link>
          </template>
        </VirtualScroller>
      </div>
    </Dialog>
  </div>
</template>

<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import VirtualScroller from 'primevue/virtualscroller';
import { mapGetters } from "vuex";

export default {
  name: 'TeamList',
  data() {
    return {
      formTeam: {
        name: ''
      },
      createDialogVisible: false,
      teamDialogVisible: false,
      selectedTeam: null,
    }
  },
  computed: {
    ...mapGetters(['teams', 'team'])
  },
  props: {
    withCreateAction: Boolean
  },
  methods: {
    toggleCreateDialog() {
      this.createDialogVisible = !this.createDialogVisible;
    },
    async createTeam() {
      await this.$store.dispatch('createTeam', this.formTeam);
    },
    async showTeam() {
      this.teamDialogVisible = true;
      if (!this.selectedTeam) {
        this.teamDialogVisible = false;
        return;
      }

      await this.$store.dispatch('getTeam', this.selectedTeam.id);
    }
  },
  components: {
    DataTable,
    Column,
    Button,
    Dialog,
    InputText,
    VirtualScroller
  },
}
</script>

<style>

</style>