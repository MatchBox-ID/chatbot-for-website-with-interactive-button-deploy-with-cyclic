const { h, app } = require('hyperapp')
const Chatbot = require('./chatbot')

const state = {
  isChatbotVisible: false,
  messages: []
}

const actions = {
  toggleChatbot: () => state => ({ isChatbotVisible: !state.isChatbotVisible }),
  addMessage: message => state => ({ messages: [...state.messages, message] })
}

const view = (state, actions) => (
  <div>
    <div class="floating-button" onclick={actions.toggleChatbot}>
      <i class="fas fa-comment-alt"></i>
    </div>
    {state.isChatbotVisible && <Chatbot messages={state.messages} addMessage={actions.addMessage} />}
  </div>
)

app(state, actions, view, document.body)
