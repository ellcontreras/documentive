<template>
    <section class="section">
         <b-field label="Email">
            <b-input v-model="email" type="email"></b-input>
        </b-field>
        <b-field label="password">
            <b-input v-model="password" type="password" password-reveal></b-input>
        </b-field>

        <b-button 
            @click="handler(email, password)"
            type="is-dt-primary">
                {{ label }}
            </b-button>
    </section>
</template>

<script>
export default {
    name: 'TheLoginForm',
    props: {
        label:{
            required: true
        },
        handler: {
            required: true
        }
    },
    data: () => ({
        email: '',
        password: ''
    })
}
</script>
