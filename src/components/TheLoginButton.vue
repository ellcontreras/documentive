<template>
    <div class="google-btn" @click="handleLogin">
        <div class="google-icon-wrapper">
            <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
        </div>
        <p class="btn-text"><b>Iniciar Sesión con Google</b></p>
    </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: 'TheLoginButton',
  methods: {
    handleLogin() {
      var authProvider = new firebase.auth.GoogleAuthProvider()

      firebase.auth().signInWithPopup(authProvider).catch(error => {
        this.$buefy.notification.open({
            duration: 5000,
            message: error.message,
            position: 'is-bottom-right',
            type: 'is-danger',
            hasIcon: true
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
$google-blue: #4285f4;
$button-active-blue: #1669F2;

.google-btn {
  cursor: pointer;
  width: 15rem;
  height: 42px;
  background-color: $google-blue;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: $white;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    float: right;
    margin: 11px 11px 0 0;
    color: $white;
    font-size: 14px;
    letter-spacing: 0.2px;
    font-family: "Roboto";
  }
  &:hover {
    box-shadow: 0 0 6px $google-blue;
  }
  &:active {
    background: $button-active-blue;
  }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>
