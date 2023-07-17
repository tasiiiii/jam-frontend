<template>
  <div class="form">
    <div style="text-align: center;">
      <h3>Jam</h3>
    </div>
    <div>
      <InputText type="text" placeholder="Email" class="input-offset" v-model="credential.email" style="width: 100%" />
    </div>
    <div>
      <InputText type="password" placeholder="Password" class="input-offset" v-model="credential.password" style="width: 100%" />
    </div>
    <div class="input-offset" style="text-align: center;">
      <Button label="Submit" @click="login" />
    </div>
    <div v-if="loader" style="text-align: center;">
      <ProgressSpinner />
    </div>
    <div v-if="loginErrorMessage" style="text-align: center;">
      <InlineMessage severity="error">{{ loginErrorMessage }}</InlineMessage>
    </div>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import InlineMessage from 'primevue/inlinemessage';
import ProgressSpinner from 'primevue/progressspinner';
import { mapGetters } from "vuex";

export default {
  name: 'LoginForm',
  data() {
    return {
      loader: false,
      credential: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'loginErrorMessage'
    ])
  },
  methods: {
    async login() {
      if (this.loader) {
        return;
      }

      this.loader = true;

      await this.$store.dispatch('login', this.credential)

      this.loader = false;

      if (this.token) {
        location.href = '/'
      }
    }
  },
  components: {
    InputText,
    Button,
    InlineMessage,
    ProgressSpinner
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