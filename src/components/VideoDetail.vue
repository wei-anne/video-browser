<template>
    <!-- the 'v-if' directive can be seen as a conditional rendering statement; if it finds the value of the prop that we passed in is falsy (i.e. not available yet), and null is falsy, it will not render the code wrapped inside the tag -->
    <div class="col-md-8" v-if="video">
        <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" :src="videoUrl"/>
        </div>
        <div class="details">
            <h4>{{ video.snippet.title }}</h4>
            <p>{{ video.snippet.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "VideoDetail",
    props: ["video"],
    computed: {
        videoUrl() {
            const videoId = this.video.id.videoId;
            return "https://www.youtube.com/embed/" + videoId;
        }
    },
}
</script>

<style scoped>
.details {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>
