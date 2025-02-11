<template>
    <li class="blog">
        <NuxtLink :to="home">
            <ImageResponsive imageURL="https://nuxt-markdown-blog-starter.netlify.app/_nuxt/87eb4c556d8a76c54681674e0b46a16d-954.jpg" :classes="'cardThumbnail'" :width="'952'"
                :height="'509'" alt="Alt tag" />
            <h3 class="blog__title">
                {{ 'Website with blog and portfolio using Vue.js + Nuxt + Markdown' }}
            </h3>
            <p class="blog__description">
                {{ "Website with blog and portfolio using Vue.js + Nuxt + Markdown'" }}
            </p>
        </NuxtLink>
    </li>
</template>

<script lang="js">

</script>

<style lang="scss">
.cardThumbnail {
    transition: all ease .75s;
    opacity: .7;

    &[lazy='loaded'] {
        opacity: 1;
    }
}

.blog {

    @media (min-width: 768px) {
        padding-bottom: 0;

        &:last-child {
            margin-right: 0;
        }
    }

    &:hover {
        .blog__title {
            color: "blue";
        }
    }

    &__title {
        font-family: 'Tiempos Headline', Arial, sans-serif;
        color: "black";
        padding-top: 1rem;
        font-size: 2.5rem;
        transition: color .3s;
    }

    &__description {
        margin: 0;
        color: 'black';
    }
}
</style>