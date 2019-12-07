<template>
  <div>
    <div class="hero is-dt-primary">
      <div class="hero-body">
        <h2 class="title is-2 has-text-centered">
          Centraliza la documentacion de todo tu equipo <br>en un solo lugar y gestionalo en todas partes
        </h2>
        <img src="@/assets/welcome.svg" alt="welcome to documentive" />
      </div>
    </div>
    <div class="container">
      <section class="section">
        <h1 class="title is-1 has-text-centered padding-bottom has-text-grey">Lo que necesitas para documentar a tu equipo</h1>
        <div class="columns">
          <div class="column is-one-fifth">
            <div class="block has-text-centered">
              <b-icon
                icon="sticky-note"
                size="is-large"
                ></b-icon>
            </div>              
            <h4 class="subtitle is-4 has-text-centered">Crea recordatorios importantes para tu equipo</h4>  
          </div>
          <div class="column is-one-fifth">
            <div class="block has-text-centered">
              <b-icon
                pack="fab"
                icon="slack"
                size="is-large"
                ></b-icon>
            </div>
            <h4 class="subtitle is-4 has-text-centered">Integración completa con slack para manejar todo desde tu workspace</h4>
          </div>
          <div class="column is-one-fifth">
           <div class="block has-text-centered">
              <b-icon
                icon="cloud"
                size="is-large"
                ></b-icon>
           </div> 
            <h4 class="subtitle is-4 has-text-centered">Sincroniza los archivos de tu empresa desde la nube</h4>
          </div>
          <div class="column is-one-fifth">
            <div class="block has-text-centered">
              <b-icon
                icon="comments"
                size="is-large"
                ></b-icon>
            </div>
            <h4 class="subtitle is-4 has-text-centered">Crea una base de conocimientos para tu equipo</h4>
          </div>
          <div class="column is-one-fifth">
            <div class="block has-text-centered">
               <b-icon
                icon="shoe-prints"
                size="is-large"
                ></b-icon>
            </div> 
            <h4 class="subtitle is-4 has-text-centered">Registra los pasos a seguir para realizar un proceso de tu empresa</h4>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
  img {
    width: 90%;
    height: 60vh;
  }
  
  .padding-bottom {
    padding-bottom: 1rem;
  }

</style>
