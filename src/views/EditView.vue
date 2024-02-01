<template>
    <div class="container" mt-5>
      <div class="card">
        <div class="card-header">
          <h4>Edit User</h4>
        </div>
        <div class="card-body">
          <div class="mb-3">
            <label for="name">Name</label>
            <input type="text" v-model="model.user.name" class="form-control" />
            <small v-if="errors.name" class="text-danger">Name is required</small>
          </div>
          <div class="mb-3">
            <label for="age">Age</label>
            <input type="number" v-model="model.user.age" class="form-control" />
            <small v-if="errors.age" class="text-danger">Age must be greater than 17</small>
          </div>
          <div class="mb-3">
            <label for="email">Email</label>
            <input type="email" v-model="model.user.email" class="form-control" />
            <small v-if="errors.email" class="text-danger">Invalid email format</small>
          </div>
          <div class="mb-3">
            <label for="password">Password</label>
            <input type="password" v-model="model.user.password" class="form-control" />
            <small v-if="errors.password" class="text-danger">Password is required</small>
          </div>
          <div class="mb-3">
            <button type="button" @click="updateUser" class="btn btn-primary">Update</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { userList } from '../../fakeApi';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'edit',
    data() {
      return {
        model: {
          user: {
            name: '',
            age: 0,
            email: '',
            password: ''
          }
        },
        errors: {
          name: false,
          age: false,
          email: false,
          password: false
        },
        userId: null
      };
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    mounted() {
      this.userId = this.$route.params.id;

      const userToEdit = userList.find(user => user.id === Number(this.userId));
      if (userToEdit) {
        this.model.user = { ...userToEdit };
      } else {
        window.alert('No such user id')
        this.router.push('/user');
      }
    },
    methods: {
      updateUser() {
        if (this.validateForm()) {
          const userIndex = userList.findIndex(user => user.id === Number(this.userId));

          userList[userIndex] = {
            id: userList[userIndex].id,
            name: this.model.user.name,
            age: this.model.user.age,
            email: this.model.user.email,
            password: this.model.user.password
          };
  
          this.resetErrors();
  
          window.alert('User updated successfully!');
  
          this.router.push('/user');
        }
      },
      validateEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        validateForm() {
            this.resetErrors();

            this.errors.name = !this.model.user.name.trim();
            this.errors.age = this.model.user.age < 18;
            this.errors.email = !this.validateEmail(this.model.user.email);
            this.errors.password = !this.model.user.password.trim();

            return Object.values(this.errors).every(error => !error);
        },
        resetErrors() {
            for (const key in this.errors) {
                this.errors[key] = false;
            }
        }
    }
  };
  </script>
  