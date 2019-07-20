<template>
    <li class="list-group-item media" @click="onVideoSelect">
        <!-- adding v-bind directive to normal html for accessing 'props data' -->
        <img class="mr-3" :src="thumbnailUrl" />
        <div class="media-body">
            {{ video.snippet.title}}
        </div>
    </li>
</template>

<script>
export default {
    name: "VideoListItem",
    props: ["video"],
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    methods: {
        onVideoSelect() {
            this.$emit("videoSelect", this.video);
        }
    }
};
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }
    li:hover {
        background-color: #eee;
    }
</style>