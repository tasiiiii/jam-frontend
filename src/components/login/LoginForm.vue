<template>
  <div class="form">
    <span class="p-float-label input-offset">
      <InputText id="email" type="email" />
      <label for="email">Email</label>
    </span>
    <span class="p-float-label input-offset">
      <InputText id="password" type="password" />
      <label for="password">Password</label>
    </span>
    <div>
      <Button label="Submit" />
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

export default {
  name: 'LoginForm',
  components: {
    InputText,
    Button
  }
}
</script>

<style scoped>
  .input-offset {
    margin-bottom: 10px;
  }
  .form {
    background: #f2f2f2;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
  }
</style>