<template>
    <div id="app">
        <head>
            <div class="header">
                <div class="header__left">
                    <h2>
                        <a href="" class="link-morado">LAB</a>
                        <a href="" class="link-verde">RoVisA</a>
                    </h2>
                    <p>Laboratorio de robótica y visión artificial</p>
                </div>
                <div class="header__right">
                    <img
                        class="header__img"
                        src="./assets/Cinvestav_header.png"
                        alt="CinvestavLogo"
                    />
                </div>
            </div>
        </head>

        <nav class="nav-container">
            <div class="nav">
                <router-link to="/" class="nav__text">Nosotros</router-link>
                <router-link to="/tutorials" class="nav__text"
                    >Proyectos</router-link
                >
                <router-link to="/add" class="nav__text">Robótica</router-link>
                <router-link to="/" class="nav__text">Cursos</router-link>
                <router-link to="/" class="nav__text">Competencias</router-link>
                <router-link to="/" class="nav__text"
                    >Nuestro Equipo</router-link
                >
            </div>
        </nav>

        <div class="container mt-3">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
};
</script>

<style>
.header {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-start;
}

.header__left {
    margin-left: 2em;
}

.header__left h2 {
    margin-bottom: 0;
    font-weight: bold;
}

.header__left p {
    margin: 0;
}

.header__right {
    background-color: white;
    margin: auto;
    margin-right: 0;
    border-radius: 0.5em;
    padding: 1em;
}

.header__img {
    margin: auto;
    width: 10em;
}

[class|="link"] {
    text-decoration: none;
}
.link-morado {
    color: var(--secundario);
}
.link-verde {
    color: var(--principal);
}

.nav-container {
    background-color: #212527;
}
.nav {
    margin: 0 2em 0 2em;
    padding: 1em 0 1em;
    display: flex;
}
.nav__text {
    font-size: 0.9em;
    text-decoration: none;
    color: var(--background);
    padding-right: 1em;
}
</style>
