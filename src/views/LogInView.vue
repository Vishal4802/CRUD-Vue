<template>
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Login</h2>
          </div>
          <div class="card-body">
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="email" class="form-label">Email: <span class="text-primary">(test email: test@test.com)</span></label>
                <input type="email" class="form-control" v-model="email" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password: <span class="text-primary">(test password: test@123)</span></label>
                <input type="password" class="form-control" v-model="password" required>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userList } from '../../fakeApi';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      const user = userList.find(user => user.email === this.email && user.password === this.password);

      if (user) {
        this.$router.push('/user');
      } else {
        alert('Invalid email or password');
      }
    }
  }
};
</script>

<style scoped>
</style>
