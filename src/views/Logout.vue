<template>
    <section class="hero is-info is-large">
        <div class="hero-body">
            <div class="container">
                <h1 class="title is-1">
                    Hasta Pronto!
                </h1>
                <h2 class="subtitle">
                    Esperamos verte pronto aqui ;)
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'Logout',
    computed: {
        ...mapGetters(['user']),
        nextRoute() {
            return this.$route.query.redirect || '/'
        }
    },
    watch: {
        user(auth) {
            if (!!auth) {
                this.$router.replace(this.nextRoute)
            }
        }
    },
    mounted() {
        this.$auth.logout()
    }
}
</script>
