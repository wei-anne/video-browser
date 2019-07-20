<template>
    <div class="container">
        <!-- '@' is shorthand form for 'v-on:' -->
        <SearchBar @termChange="onTermChange"></SearchBar>
        
        <div class="row">
            <!-- 'v-bind' means anytime the value of video property changes in parent component, it should rerender that in child component -->
            <!-- 'v-bind' can be omitted as shorthand form -->
            <VideoDetail :video="selectedVideo"></VideoDetail>
            <VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import SearchBar from "./components/SearchBar";
    import VideoList from "./components/VideoList";
    import VideoDetail from "./components/VideoDetail";

    const API_KEY = "AIzaSyDDiYFHQ16XzjDnAsvDt-0L4bg--GAQ5SI";

    export default {
        name: "App",
        // 'components' property represents the names of child components, they tell app component to recognize them and so they can be used as tags in template
        components: {
            // 'SearchBar' is the ES6 shorten syntax for 'SearchBar: SearchBar' 
            SearchBar,
            VideoList,
            VideoDetail,
        },
        // data of a Vue instance can be an object or function, while data of a componenct should be a function that returns an object
        // 'data()' is ES6 shorten syntax for 'data: function()'
        data() {
            return { videos: [], selectedVideo: null };
        },
        methods: {
            onVideoSelect(video) {
                this.selectedVideo = video;
            },
            //the parameter 'searchTerm' stands for the second parameter in the 'onInput' function emitted from SearchBar component 
            onTermChange(searchTerm) {
                axios
                .get("https://www.googleapis.com/youtube/v3/search", {
                    params: {
                        key: API_KEY,
                        type: "video",
                        part: "snippet",
                        q: searchTerm
                    }
                })
                .then(response => {
                    this.videos = response.data.items;
                });
            }
        }
    };
</script>