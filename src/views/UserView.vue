<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Users
                    <RouterLink to="/user/create" class="btn btn-primary float-end">
                        Add Users
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.users.length > 0">
                        <tr v-for="(user, index) in this.users" :key="index">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.age }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.password }}</td>
                            <td class="d-flex gap-2">
                                <RouterLink :to="{path: '/user/' + user.id + '/edit'}" class="btn btn-success">
                                    Edit
                                </RouterLink>
                                <button type="button" @click="deleteData(user.id)" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="6">Loading...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { userList } from '../../fakeApi';

    export default {
        name: 'users',
        data(){
            return {
                users: []
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers(){
                this.users = userList
            },
            deleteData(id){
                if(confirm('Are you sure, you want to delete the data?')){
                    const index = this.users.findIndex(user => user.id === id);

                    if (index !== -1) {
                        this.users.splice(index, 1);
                    }
                }
            }
        }        
    }

</script>