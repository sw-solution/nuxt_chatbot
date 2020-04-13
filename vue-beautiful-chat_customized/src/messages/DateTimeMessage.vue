<template>
  <div class='sc-message--datetime'>
    <div class="sc-message--datetime-date" v-if="showText" :style="messageColors" @click="changeDate">{{selectedDate}}</div>
    <datetime type="datetime" format="yyyy-MM-dd HH:mm:ss" v-model="date" @close="selectDateHandler"></datetime>
  </div>
</template>

<script>
import EventBus from '../plugins/event-bus'
import { Datetime } from 'vue-datetime';

import 'vue-datetime/dist/vue-datetime.css'

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
  components: {
    Datetime
  },
  data() {
    return {
      selectedItem: null,
      date: null,
      showText: false,
    }
  },
  mounted(){
    document.querySelector(".vdatetime-input").click()
  },
  computed: {
    selectedDate(){
      let dateObj = this.date ? new Date(this.date) : new Date();

      let year = dateObj.getFullYear();
      let month = String(dateObj.getMonth()+1).padStart(2, '0');
      let day = String(dateObj.getDate()).padStart(2, '0');

      let hour = String(dateObj.getHours()).padStart(2, '0');
      let min = String(dateObj.getMinutes()).padStart(2, '0');
      let sec = String(dateObj.getSeconds()).padStart(2, '0');

      return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
    }
  },
  methods:{
    selectDateHandler(item){
      this.showText = true
    },
    changeDate(){
      document.querySelector(".vdatetime-input").click()
    },
  }
}
</script>

<style lang="scss">
  .sc-message--datetime-date {
    padding: 8px 20px;
    border-radius: 6px;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.4;
    white-space: pre-wrap;
    -webkit-font-smoothing: subpixel-antialiased;
    display: inline-block;
  }
  
  .vdatetime-overlay, .vdatetime-calendar__navigation, .vdatetime-input{
    display: none !important;
  }

  .vdatetime-popup{
    position: relative !important;
    width: 270px !important;
    max-width: 350px !important;
    top: 0 !important;
    left: 0 !important;
    transform: none !important;
  }
</style>
