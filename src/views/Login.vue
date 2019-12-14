<template>
    <div class="container">
        <Center>
            <h2 class="subtitle is-2">Iniciar Sesión</h2>
            <the-login-button></the-login-button>
        </Center>
    </div>
</template>

<script>
import TheLoginButton from "@/components/TheLoginButton.vue"
import Center from "@/layouts/Center.vue"

export default {
    name: 'Login',
    components: { TheLoginButton, Center }
}
</script>
