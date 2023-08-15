<template>
    <v-main>
        <v-col v-for="message in messages" cols="12">
            <div v-bind:class= "{'d-flex flex-row justify-start':!message['user'], 'd-flex flex-row justify-end':message['user']}">
                <v-card max-width="600px">
                    <v-card-text>
                        {{ message['message'] }}
                    </v-card-text>
                </v-card>
            </div>
        </v-col>
    </v-main>
    <v-footer app>
        <v-form action="#" @submit.prevent="pushEnter" style="width: 100%;">
            <v-text-field v-model="inputText" clearable clear-icon color="gray">
            </v-text-field>
        </v-form>
    </v-footer>
</template>

<script lang="ts">


export default {
  data: () => ({
    messages : [{
            "user":false, 
            "message":"色や影、角などのスタイルは variant か props, color で指定することで、 一括して自動で設定されます。class で設定することも可能ですが、 指定内容によっては variant / props の設定が優先されることがあります。(適当なテスト用のテキスト)", 
        }, {
            "user":true, 
            "message":"asdfasdfahu@uibjkh;sakdfj"
        }
    ],
    message : "", 
    inputText : "", 
  }),
  methods: {
    pushEnter(){
        // texitfield更新
        this.message = this.inputText;
        this.inputText = "";
        // messagesに追加して表示
        this.messages.push({"user":true, "message":this.message})
        console.log(this.messages)
        // openai apiたたく
        const rep = useFetch('/api/openai')
        this.messages.push({"user":false, "message":rep})
        console.log(rep)
    }
  }
}

</script>