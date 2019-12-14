<template>
    <base-container>
        <base-form-card>
            <h2 class="subtitle is-2 has-text-centered">Iniciar Sesión</h2>
            <the-login-button class="btn-center"></the-login-button>
        </base-form-card>
    </base-container>
</template>

<script>
import TheLoginButton from "@/components/TheLoginButton.vue"
import BaseContainer from "@/layouts/BaseContainer.vue"
import BaseFormCard from "@/layouts/BaseFormCard.vue"

export default {
    name: 'Login',
    components: { TheLoginButton, BaseFormCard, BaseContainer }
}
</script>

<style scoped>
    .btn-center {
        margin-left: auto;
        margin-right: auto;
    }
</style>
