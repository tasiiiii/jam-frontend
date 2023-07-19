<template>
  <div class="row" style="margin-top: 10px;">
    <div class="col-md-12">
      <TeamList :with-create-action="true" />
    </div>
  </div>
</template>

<script>
import TeamList from "@/components/home/TeamList.vue";

export default {
  name: 'HomeView',
  components: {
    TeamList
  },
  async mounted() {
    await this.$store.dispatch('fetchTeams');
  }
}
</script>
