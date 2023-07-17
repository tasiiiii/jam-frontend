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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
</style>