<template>
  <div>
    <beautiful-chat
        v-if="isLoaded"
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :backgroundImageUrl="backgroundImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="false"
      :showFile="false"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling"
      @btnClicked="btnClicked"
      @onType="handleOnType"
      @edit="editMessage" />

    <div class="closed-form" :style="{background: formData.bgcolor}" v-if="!isChatOpen && windowWidth > 450 && isLoaded">
      <v-form ref="frm_appointment" v-model="formData.valid">
        <v-container>

            <v-row>
                <v-col
                cols="12"
                class="d-flex justify-center"
                :class="windowHeight < 850 ? 'pt-0': ''"
                >
                    <v-avatar
                    v-if="formData.avatar"
                    :size="windowHeight > 850 ? 136 : 96">
                        <img
                            :src="formData.avatar"
                            alt="Avatar"
                        >

                    </v-avatar>
                </v-col>

                <v-col
                cols="12"
                class="text-center pt-0"
                >
                    <h2 v-if="formData.admin_name" :style="{color: formData.font_color}">{{ formData.admin_name }}</h2>
                    <p class="mb-1" v-if="formData.admin_type" :style="{color: formData.font_color}">{{ formData.admin_type }}</p>
                    <p class="mb-0" v-if="formData.admin_phone"><a :style="{color: formData.font_color}" :href="'tel:' + formData.admin_phone">{{formData.admin_phone}}</a></p>
                </v-col>

                <v-col
                cols="12"
                :class="windowHeight < 850 ? 'pt-0': ''"
                >
                    <v-text-field
                        v-model="formData.fullname"
                        label="Full name"
                        outlined
                        dense
                        hide-details="auto"
                        background-color="#fff"
                        :rules="formData.nameRules"
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col
                cols="12"
                class="pt-0"
                >
                    <v-text-field
                        v-model="formData.phone"
                        label="Phone number"
                        outlined
                        dense
                        hide-details="auto"
                        background-color="#fff"
                        :rules="[v => !!v || 'This field is required']"
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col
                cols="12"
                class="pt-0"
                >
                    <v-text-field
                        v-model="formData.email"
                        label="Email address"
                        outlined
                        dense
                        hide-details="auto"
                        background-color="#fff"
                        :rules="formData.emailRules"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                class="pt-0"
                >
                    <v-text-field
                        v-model="formData.website"
                        label="Website"
                        outlined
                        dense
                        hide-details="auto"
                        background-color="#fff"
                    ></v-text-field>
                </v-col>

                <v-col cols="12" class="pt-0">
                        <v-textarea
                        v-model="formData.message"
                        label="Message"
                        auto-grow
                        outlined
                        :rows="windowHeight > 850 ? 3 : 1"
                        row-height="25"
                        hide-details="auto"
                        background-color="#fff"
                        :rules="[v => !!v || 'This field is required']"
                        required
                        ></v-textarea>
                </v-col>

                <v-col
                cols="12"
                class="py-0"
                >
                    <v-btn class="my-2" block :large="windowHeight > 850 ? true : false" :small="windowHeight > 850 ? false : true" depressed color="warning" @click="sendAppointment">Arrange an appointment</v-btn>
                    <v-btn class="my-2" block :large="windowHeight > 850 ? true : false" :small="windowHeight > 850 ? false : true" depressed color="warning" @click="openChat">Open chatbot</v-btn>
                </v-col>
            </v-row>
        </v-container>
        </v-form>
    </div>
  </div>
</template>

<script>
    import CloseIcon from 'vue-beautiful-chat/src/assets/close-icon.png'
    import OpenIcon from 'vue-beautiful-chat/src/assets/logo-no-bg.svg'
    import FileIcon from 'vue-beautiful-chat/src/assets/file.svg'
    import CloseIconSvg from 'vue-beautiful-chat/src/assets/close.svg'

    export default {
        data() {
            return {
                formData: {
                    valid: false,
                    fullname: '',
                    phone: '',
                    email: '',
                    website: '',
                    message: '',
                    avatar: '',
                    admin_name: '',
                    admin_type: '',
                    admin_phone: '',
                    bgcolor: '',
                    font_color: '',
                    nameRules: [
                        v => !!v || 'This field is required',
                        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                    ],
                    emailRules: [
                        v => !!v || 'This field is required',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                    ],
                },
                icons:{
                    call: {
                        img: 'https://img.icons8.com/office/40/000000/phone.png',
                        name: 'default',
                    },
                    chat: {
                        img: 'https://img.icons8.com/office/40/000000/messaging-.png',
                        name: 'default',
                    },
                    open:{
                        img: OpenIcon,
                        name: 'default',
                    },
                    close:{
                        img: CloseIcon,
                        name: 'default',
                    },
                    file:{
                        img: FileIcon,
                        name: 'default',
                    },
                    closeSvg:{
                        img: CloseIconSvg,
                        name: 'default',
                    },
                },
                participants: [
                    {
                        id: 'bot',
                        name: 'Chatbot',
                        imageUrl: require('~/assets/images/bot.png')
                    }
                ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
                botMessages: [],
                messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
                newMessagesCount: 0,
                isChatOpen: true, // to determine whether the chat window should be open or closed
                showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
                colors: {
                    header: {
                        bg: '#4e8cff',
                        text: '#ffffff'
                    },
                    launcher: {
                        bg: '#4e8cff'
                    },
                    messageList: {
                        bg: '#ffffff'
                    },
                    sentMessage: {
                        bg: '#4e8cff',
                        text: '#ffffff'
                    },
                    receivedMessage: {
                        bg: '#eaeaea',
                        text: '#222222'
                    },
                    userInput: {
                        bg: '#f4f7f9',
                        text: '#565867'
                    }
                }, // specifies the color scheme for the component
                alwaysScrollToBottom: true, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
                messageStyling: false, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
                backgroundImageUrl: '',
                titleImageUrl: '',
                questionId: null, // current question Id
                endButtonText: 'End chat? Yes', // end chat
                backButtonText: 'Back', // back to prev bot question
                backMainButtonText: 'Back to Main-Menu', // back to first bot question
                isLoaded: false,
                windowWidth: '',
                windowHeight: '',
                serverAddress: 'http://localhost:8000/api/chatbot/'
            }
        },
        mounted(){
            this.windowWidth = window.innerWidth
            this.windowHeight = window.innerHeight
            this.$axios.get(this.serverAddress + 'get-info').then((response) => {
                let data = response['data']

                this.backgroundImageUrl = data['setting']['background_image']
                this.titleImageUrl = data['setting']['header_image']
                this.formData.avatar = data['setting']['avatar']
                this.formData.admin_name = data['setting']['name']
                this.formData.admin_type = data['setting']['admin_type']
                this.formData.admin_phone = data['setting']['phone']
                this.formData.bgcolor = data['setting']['form_bgcolor']
                this.formData.font_color = data['setting']['form_color']
                if(this.windowWidth > 450)
                    this.isChatOpen = data['setting']['desktop_status'] ? true : false
                else
                    this.isChatOpen = data['setting']['mobile_status'] ? true : false

                this.botMessages = data['messages']
                this.questionId = this.botMessages[0]['id']
                this.sendMessage(this.botMessages.find(message => message['id']==this.questionId))

                this.isLoaded = true
            })
        },
        methods: {
            sendAppointment() {
                this.$refs.frm_appointment.validate()
                if(this.formData.valid) {
                    let message = 'Name: ' + this.formData.fullname + '\n'
                    message += 'Phone: ' + this.formData.phone + '\n'
                    message += 'Email: ' + this.formData.email + '\n'
                    message += 'Website: ' + this.formData.website + '\n'
                    message += 'Message: ' + this.formData.message + '\n'
                    this.$axios.post(this.serverAddress + 'send-message', {message: message}).then((response) => {
                        this.$refs.frm_appointment.reset()
                    })
                    this.$refs.frm_appointment.reset()

                }
            },
            getMessageIndex(){
                return this.botMessages.find(message => message['id']==this.questionId)
            },
            btnClicked(item){
                let self = this

                // Send result message by type
                if(item.type=='message'){
                    let msg = { type: 'text', author: `me`, data: { text: item.title }}
                    self.messageList = [ ...self.messageList, msg ]
                   
                    this.sendMessage(this.botMessages.find(message => message['id']==item.value))
                } else if(item.type == 'datetime'){
                    let msg = { type: 'text', author: `me`, data: { text: item.title }, suggestions: ['End chat? Yes', 'No'] }
                    self.messageList = [ ...self.messageList, msg ]

                    setTimeout(() => {
                        let message = { type: 'datetime', author: `me`, data: {date: null }, suggestions: ['End chat? Yes', 'No'] }
                        self.messageList = [ ...self.messageList, message ]
                    }, 800);
                } else if(item.type == 'link'){
                    window.open(item.value, "_blank");
                }
            },
            sendMessage (message, delay=1000) {
                let self = this

                let msg = message
                self.showTypingIndicator='bot'
                setTimeout(() => {
                    self.showTypingIndicator=''
                    self.messageList = [ ...self.messageList, msg]
                    if(typeof(msg['linked_id']) !== undefined && msg['linked_id']){
                        self.showTypingIndicator='bot'
                    }

                    if(message.get_email){
                        let replies = []
                        self.messageList.filter(msg => msg['enable_chat']).map(filtered_msg => {
                            let reply = self.messageList.find((msg, index) => (index == (self.messageList.findIndex(msg => msg['id']==filtered_msg['id']) + 1)) && msg['author'] == 'me')
                            replies = [...replies, reply.data.text]
                        })
                        this.$axios.post(this.serverAddress + 'send-reply', {replies: replies}).then((response) => {
                            
                        })
                    }
                }, delay);
                this.questionId = msg['id']

                let i = 1
                while(typeof(message['linked_id']) !== undefined && message['linked_id']){
                    i*=3;
                    message = this.botMessages.find(msg => msg['id']==message['linked_id'])

                    self.showTypingIndicator='bot'
                    setTimeout(() => {
                        self.showTypingIndicator=''
                        self.messageList = [ ...self.messageList, message]
                        if(typeof(message['linked_id']) !== undefined && message['linked_id']){
                            self.showTypingIndicator='bot'
                        }
                    }, delay * i);
                    this.questionId = message['id']
                }
            },
            onMessageWasSent(message) {
                // called when the user sends a message
                this.messageList = [ ...this.messageList, message ]

                let self = this
                if(message.data.text.toLowerCase() == this.backButtonText.toLowerCase()) // back
                {
                    this.messageList.splice(this.messageList.length-3, 3)
                } else if(message.data.text.toLowerCase() == this.backMainButtonText.toLowerCase())  {// back to main menu
                    this.messageList = []
                    this.sendMessage(this.botMessages[0])
                } else {
                    let next_id = this.botMessages.find(message => message['id'] == self.questionId)['next_id']
                    if(next_id){
                        this.sendMessage(this.botMessages.find(message => message['id'] == next_id))
                    }
                }
            },
            openChat () {
                // called when the user clicks on the fab button to open the chat
                this.isChatOpen = true
                this.newMessagesCount = 0
            },
            closeChat () {
                // called when the user clicks on the botton to close the chat
                this.isChatOpen = false
            },
            handleScrollToTop () {
            // called when the user scrolls message list to top
            // leverage pagination for loading another page of messages
            },
            handleOnType () {
                // console.log('Emit typing event')
            },
            editMessage(message){
                const m = this.messageList.find(m=>m.id === message.id);
                m.isEdited = true;
                m.data.text = message.data.text;
            }
        }
    }
</script>

<style lang="scss">
    .sc-chat-window, .sc-launcher{
        display: none;
    }

    .sc-chat-window{
        bottom: 30px !important;
        height: 715px !important;
        width: 500px !important;
        padding: 200px 5px 5px 5px !important;
        @media (max-height: 850px){
            height: 630px !important;
        }
        @media (max-height: 700px){
            height: 550px !important;
        }
        @media (max-width: 450px){
            height: 590px !important;
            padding: 170px 5px 5px 5px !important;
        }
        @media (max-width: 400px){
            height: 535px !important;
            padding: 150px 5px 5px 5px !important;
        }
        @media (max-width: 350px){
            height: 455px !important;
            padding: 130px 5px 5px 5px !important;
        }
    }
    
    .sc-message--text-content{
        margin: 0 !important;
        padding: 0 !important;
    }

    .closed-form {
        background: #4FC3F7 ;
        position: fixed;
        bottom: 30px;
        right: 25px;
        width: 300px !important;
        border: solid 2px #fff;
        border-radius: 10px;
    }
</style>