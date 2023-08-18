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
// 送信受信したらスムーススクロールしたいね
export default {
  data: () => ({
    messages : [{
            "user":false, 
            "message":"Hello! How can I assist you today?", 
        }, 
    ],
    message : "", 
    inputText : "", 
  }),
  methods: {
    async pushEnter(){
        // inputTextが空白or''の場合
        if (!this.inputText || !this.inputText.match(/\S/g)) {
            this.inputText = ''
            return
        };
        // texitfield更新
        this.message = this.inputText;
        this.inputText = "";
        // messagesに追加して表示
        this.messages.push({"user":true, "message":this.message});
        // サーバーサイド経由でopenai apiたたく
        const res = await useFetch('/api/openai', {
            method: "POST", 
            body: {"messages": this.messages}, 
        });
        if (res.data.value) {
            this.messages.push({"user":false, "message":res.data.value});
        }
    }
  }
}
</script>