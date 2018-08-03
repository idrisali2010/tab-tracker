<template>
<div>
<h1>Register</h1>
<label>Email</label>
<input type="email" name="email" v-model="email" placeholder="email"></input>  <br>
<label>password</label>
<input type="password" name="password" v-model="password" placeholder="password"></input> <br>
<button>Register</button>

</div>



</template>

<script>
export default {
  data () {
    return {
      email:'abc',
      password:'123'
    }
  }
}
  watch: {
    email (value) {
    console.log('email has changed', value)
  }
},
mounted () {
  setTimeout(() => {
    this.email = 'hello world'
  }, 2000)
}
</script>

<style>

</style>
