<template>
    <div class="sc-terms-row" :style="{background: colors.messageList.bg}">
        {{terms}}
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        terms: {
            type: String,
            default: ''
        },
        colors: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang='scss'>
.sc-terms-row {
  text-align: right;
  background: inherit;
  font-size: 13px;
  padding: 5px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media (max-width: 450px){
      font-size: 12px;
  }
}
</style>