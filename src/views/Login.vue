<template>
    <div class="login">
      <h2>Login Page</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <br>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        // 执行登录逻辑
        // 可以在这里发送登录请求，验证用户名和密码等
        console.log('Logging in...');
      },
    },
  };
  </script>
  
  <style>
  .login {
    margin: auto;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
  }
  </style>