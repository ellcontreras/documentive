<template>
    <div class="container">
        <section class="section">
            <h2 class="subtitle is-2">Iniciar Sesión</h2>
            <the-login-button></the-login-button>
        </section>
    </div>
</template>

<script>
import TheLoginButton from "@/components/TheLoginButton.vue"

export default {
    name: 'Login',
    components: { TheLoginButton }
}
</script>
