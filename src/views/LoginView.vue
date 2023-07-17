<template>
  <div class="center">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/login/LoginForm.vue";

export default {
  name: 'LoginVew',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.center {
  margin: auto;
  width: 20%;
  padding: 10px;
}
</style>