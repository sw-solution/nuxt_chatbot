<template>
  <div class='sc-message--video' :style="messageColors">
    <div v-for="(video, video_index) in data.options" :key="video_index">
      <div class='sc-message--video-content'>
        <iframe :src="video.url" frameborder="0" allowfullscreen width="100%" height="250px"></iframe>
      </div>
      <div class='sc-message--video-name' :style="messageColors">
        <a :href="video.url ? video.url : '#'" target='_blank'>{{video.name || ''}}</a>
      </div>
    </div>
    <div class="sc-message--video-text" :style="messageColors">{{data.text}}<p v-if="data.meta" class='sc-message--meta' :style="messageColors">{{data.meta}}</p></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    messageColors: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.sc-message--video {
  width: 100%;
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  /* white-space: pre-wrap; */
  -webkit-font-smoothing: subpixel-antialiased
}

.sc-message--content.sent .sc-message--video {
  word-wrap: break-word;
}

.sc-message--video-content {
  text-align: center;
  margin: 0;
  iframe {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
}

.sc-message--video-text {
  padding: 17px 20px;
  border-radius: 6px;
  font-weight: 300;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
  -webkit-font-smoothing: subpixel-antialiased
}

.sc-message--video-name {
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  font-size: 12px;
  text-align: center;
}

.sc-message--video-name a {
  text-decoration: none;
  color: #ece7e7;
}

.sc-message--video-name a:hover {
  color: white;
}

.sc-message--content.sent .sc-message--video-text {
  color: white;
  background-color: #4e8cff;
  word-wrap: break-word;
}

.sc-message--content.received .sc-message--video {
  color: #263238;
  background-color: #f4f7f9;
}

.sc-message--content.received .sc-message--video-name {
  color: #000;
}

.sc-message--content.received .sc-message--video a {
  color: rgba(43, 40, 40, 0.7);
}

.sc-message--content.received .sc-message--video a:hover {
  color: #0c0c0c;
}
</style>
