<template>
  <div class="sc-header" ref="scHeader" :class="{hide: enable_chat }">
    <!-- <slot> -->
      <!-- <img class="sc-header--img" :src="imageUrl" alt="" v-if="imageUrl" /> -->
      <!-- <div v-if="!disableUserListToggle" class="sc-header--title enabled" @click="toggleUserList"> {{title}} </div>
      <div v-else class="sc-header--title"> {{title}} </div>
    </slot>
      <div v-if="showCloseButton" class="sc-header--close-button" @click="onClose">
        <img :src="icons.close.img" :alt="icons.close.name" />
      </div> -->
  </div>
</template>
<script>

import CloseIcon from './assets/close-icon-big.png'

export default {
  props: {
    icons:{
      type: Object,
      default: function () {
        return {
          close:{
            img: CloseIcon,
            name: 'default',
          },
        }
      }
    },
    imageUrl: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    onClose: {
      type: Function,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: false
    },
    enable_chat: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleUserList() {
      this.inUserList = !this.inUserList
      this.$emit("userList", this.inUserList)
    }
  },
  mounted(){
    if(this.imageUrl){
      this.$refs.scHeader.style.background = 'url(' + this.imageUrl + ') no-repeat'
      this.$refs.scHeader.style.backgroundSize = 'cover'
    }
  },
  data() {
    return {
      inUserList: false
    }
  }
}
</script>
<style scoped lang='scss'>
.sc-header {
  height: 85px;
  min-height: 85px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  /* padding: 10px; */
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  position: relative;
  box-sizing: border-box;
  display: flex;
  @media (max-width: 450px){
    height: 73px;
    min-height: 73px;
    &.hide{
      display: none;
    }
  }
  @media (max-width: 400px){
    height: 65px;
    min-height: 65px;
  }
  @media (max-width: 350px){
    height: 55px;
    min-height: 55px;
  }
}

.sc-header--img {
  width: 100%;
  /* border-radius: 50%; */
  /* padding: 10px; */
}

.sc-header--title {
  align-self: center;
  padding: 10px;
  flex: 1;
  user-select: none;
  font-size: 20px;
  box-shadow: none !important;
}

.sc-header--title.enabled {
  cursor: pointer;
  border-radius: 5px;
}

.sc-header--title.enabled:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, .1);
}

.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  box-shadow: none !important;
}

.sc-header--close-button:hover {
  box-shadow: 0px 2px 5px rgba(0.2, 0.2, 0.5, .1);
}

.sc-header--close-button img {
  width: 100%;
  height: 100%;
  padding: 13px;
  box-sizing: border-box;
}

@media (max-width: 450px) {
  .sc-header {
    /* border-radius: 0px; */
  }
}
</style>
