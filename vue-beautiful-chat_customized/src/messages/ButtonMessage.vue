<template>
  <div class='sc-message--button'>
    <div class="sc-message--button-text" v-if="data.text" :style="messageColors" v-html="messageText"><p v-if="data.meta" class='sc-message--meta' :style="messageColors">{{data.meta}}</p></div>
    <div class='sc-message--button-options'>
      <button v-for="(item, index) in data.options" :key="index" :class="{ active: selectedItem === index }" @click="clickHandler(item, index)" >{{item.title}}</button>
    </div>
  </div>
</template>

<script>
import EventBus from '../plugins/event-bus'
import Autolinker from 'autolinker'

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
  },
  data() {
    return {
      selectedItem: null
    }
  },
  computed: {
    messageText() {
      let escaped = this.data.text
      return Autolinker.link(this.messageStyling ? fmt(escaped) : escaped, {
        className: 'chatLink',
        truncate: { length: 50, location: 'smart' }
      })
    },
  },
  methods:{
    clickHandler(item, index){
      this.selectedItem = index
      EventBus.$emit('btnClicked', item)
    }
  }
}
</script>

<style scoped lang="scss">
  .sc-message--button-text {
    padding: 8px 20px;
    margin-bottom: 15px;
    border-radius: 6px;
    font-weight: 300;
    font-size: 14px;
    line-height: 1.4;
    white-space: pre-wrap;
    -webkit-font-smoothing: subpixel-antialiased;
    display: inline-block;
  }

  .sc-message--button-options{
    padding: 0;
    text-align: center;
  }

  .sc-message--button-options button{
    padding: 5px 15px;
    margin: 5px;
    color: rgb(34, 34, 34);
    border: solid 1px rgb(78, 140, 255);
    background-color: transparent;
    border-radius: 6px;
    outline: none !important;
    &:active, &.active {
      border: solid 1px transparent;
      background-color: rgb(78, 140, 255);
      color: #fff;
    }
  }
</style>
