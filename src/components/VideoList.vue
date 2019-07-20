<template>
    <ul class="list-group col-md-4">
        <!-- the 'video' after 'v-for' can be seen as a temporary variable which only exists in the current template during the process of iterating every object(or video) in the array videos, and it is shifted to the second 'video' after v-bind directive as reference-->
        <!-- .etag is a property provided by youtube; we use the v-bind:key directive to update the items interated through and make sure it is unique and consistent to the 'video' variable that we're rendering  -->
        <!-- for Boostrap classes, do not directy add them to the VideoListItem instance, but inside the component itself -->
        <VideoListItem  
        v-for="video in videos"
        :video="video"
        :key="video.etag"
        @videoSelect="onVideoSelect"
        >
        </VideoListItem>    
    </ul>
</template> 

<script>
import VideoListItem from "./VideoListItem";

export default {
    name: "VideoList",
    components: {
        VideoListItem
    },
    // the 'props' property represents the property names that are expected to be passed down from parent component
    props: ["videos"],
    methods: {
        onVideoSelect(video) {
            this.$emit("videoSelect", video);
        }
    }
}
</script>

<style>
</style>

