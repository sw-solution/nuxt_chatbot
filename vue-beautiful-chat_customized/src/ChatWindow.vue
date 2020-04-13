<template>
  <div ref='chatWindow' class="sc-chat-window" :class="{opened: isOpen, closed: !isOpen}">
    <div class="sc-header--close-button" @click="onClose">
      <img :src="icons.close.img" :alt="icons.close.name" />
    </div>
    <Header
      :showCloseButton="showCloseButton"
      :title="title"
      :imageUrl="titleImageUrl"
      :onClose="onClose"
      :colors="colors"
      :disableUserListToggle="disableUserListToggle"
      :enable_chat="setChatStatus()"
      @userList="handleUserListToggle"
    >
      <template>
        <slot name="header">
        </slot>
      </template>
    </Header>
    <UserList
      v-if="showUserList"
      :participants="participants"
    />
    <MessageList
      v-if="!showUserList"
      :messages="messages"
      :participants="participants"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :suggestions="getSuggestions()"
      :enable_chat="setChatStatus()"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @scrollToTop="$emit('scrollToTop')"
      @remove="$emit('remove', $event)"
    >
      <template v-slot:user-avatar="scopedProps">
        <slot name="user-avatar" :user="scopedProps.user" :message="scopedProps.message">
        </slot>
      </template>
      <template v-slot:text-message-body="scopedProps">
        <slot name="text-message-body" :message="scopedProps.message" :messageText="scopedProps.messageText" :messageColors="scopedProps.messageColors" :me="scopedProps.me">
        </slot>
      </template>
      <template v-slot:system-message-body="scopedProps">
        <slot name="system-message-body" :message="scopedProps.message">
        </slot>
      </template>
      <template v-slot:text-message-toolbox="scopedProps">
        <slot name="text-message-toolbox" :message="scopedProps.message" :me="scopedProps.me">
        </slot>
      </template>
    </MessageList>
    <UserInput
      v-if="!showUserList"
      :showEmoji="showEmoji"
      :onSubmit="onUserInputSubmit"
      :terms="getTerms()"
      :suggestions="getSuggestions()"
      :showFile="showFile"
      :enable_chat="setChatStatus()"
      :input_icon="getinput_icon()"
      :placeholder="getPlaceholder()"
      @onType="$emit('onType')"
      @edit="$emit('edit', $event)"
      :colors="colors" />
  </div>
</template>

<script>
import Header from './Header.vue'
import MessageList from './MessageList.vue'
import UserInput from './UserInput.vue'
import UserList from './UserList.vue'
import CloseIcon from './assets/close-icon-big.png'

export default {
  components: {
    Header,
    MessageList,
    UserInput,
    UserList
  },
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
    showEmoji: {
      type: Boolean,
      default: false
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showFile: {
      type: Boolean,
      default: false
    },
    participants: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    titleImageUrl: {
      type: String,
      default: ''
    },
    backgroundImageUrl: {
      type: String,
      default: ''
    },
    onUserInputSubmit: {
      type: Function,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    },
    messageList: {
      type: Array,
      default: () => []
    },
    isOpen: {
      type: Boolean,
      default: () => false
    },
    enable_chat: {
      type: Boolean,
      default: false
    },
    input_icon: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Write a message...'
    },
    showTypingIndicator: {
      type: String,
      required: true
    },
    colors: {
      type: Object,
      required: true
    },
    alwaysScrollToBottom: {
      type: Boolean,
      required: true
    },
    messageStyling: {
      type: Boolean,
      required: true
    },
    disableUserListToggle: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showUserList: false
    }
  },
  computed: {
    messages() {
      let messages = this.messageList

      return messages
    },
  },
  mounted(){
    if(this.backgroundImageUrl){
      this.$refs.chatWindow.style.background = 'url(' + this.backgroundImageUrl + ') no-repeat'
      this.$refs.chatWindow.style.backgroundSize = 'cover'
    }
  },
  methods: {
    handleUserListToggle(showUserList) {
      this.showUserList = showUserList
    },
    setChatStatus(){
      return this.messages.length > 0 && (typeof(this.messages[this.messages.length - 1].enable_chat)!=undefined) ? this.messages[this.messages.length - 1].enable_chat : this.enable_chat
    },
    getinput_icon(){
      return this.messages.length > 0 && (typeof(this.messages[this.messages.length - 1].data.input_icon)!=undefined) ? this.messages[this.messages.length - 1].data.input_icon : this.input_icon
    },
    getPlaceholder(){
      return this.messages.length > 0 && (typeof(this.messages[this.messages.length - 1].data.placeholder)!=undefined) ? this.messages[this.messages.length - 1].data.placeholder : this.placeholder
    },
    getTerms(){
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].data.terms : ''
    },
    getSuggestions(){
      return this.messages.length > 0 ? this.messages[this.messages.length - 1].suggestions : []
    }
  }
}
</script>
<style scoped lang='scss'>
.sc-chat-window {
  width: inherit;
  max-width: 100%;
  height: calc(100% - 120px);
  position: fixed;
  right: 25px;
  bottom: 100px;
  box-sizing: border-box;
  /* box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.1); */
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  animation: fadeIn;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  padding: 200px 8px 8px 8px;
  background: url('https://images.unsplash.com/photo-1572456606764-80a4f00cbe52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80') no-repeat;
  background-size: cover;
}

.sc-chat-window.closed {
  opacity: 0;
  display: none;
  bottom: 90px;
}

@keyframes fadeIn {
  0% {
    display: none;
    opacity: 0;
  }

  100% {
    display: flex;
    opacity: 1;
  }
}

.sc-message--me {
  text-align: right;
}
.sc-message--them {
  text-align: left;
}

.sc-header--close-button {
  width: 40px;
  align-self: center;
  height: 40px;
  margin-right: 10px;
  box-sizing: border-box;
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  right: 0;
  top: 25px;
  box-shadow: none !important;
  background: #193854;
  border: solid 2px #fff;
  border-radius: 50%;
  @media (max-width: 450px){
    top: 18px;
  }
  @media (max-width: 400px){
    top: 15px;
  }
  @media (max-width: 350px){
    top: 10px;
  }
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
  .sc-chat-window {
    width: 100%;
    height: 100%;
    right: 0px;
    bottom: 10%;
    transition: 0.1s ease-in-out;
    &.closed{
      bottom: 0px;
    }
  }
}
</style>
