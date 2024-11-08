const app = Vue.createApp({
    data() {
        return {
            newContact: {
                name: '',
                phone: '',
                category: 'Familiar',
                messages: 0,
                calls: 0
            },
            contacts: []
        };
    },
    computed: {
        totalMessages() {
            return this.contacts.reduce((sum, contact) => sum + contact.messages, 0);
        },
        totalCalls() {
            return this.contacts.reduce((sum, contact) => sum + contact.calls, 0);
        }
    },
    methods: {
        addContact() {
            if (this.newContact.name && this.newContact.phone) {
                this.contacts.push({ ...this.newContact });
                this.newContact.name = '';
                this.newContact.phone = '';
                this.newContact.category = 'Familiar';
                this.newContact.messages = 0;
                this.newContact.calls = 0;
            }
        },
        removeContact(index) {
            this.contacts.splice(index, 1);
        },
        incrementMessages(index) {
            if (this.contacts[index].messages < 25) {
                this.contacts[index].messages++;
            }
        },
        decrementMessages(index) {
            if (this.contacts[index].messages > 0) {
                this.contacts[index].messages--;
            }
        },
        incrementCalls(index) {
            if (this.contacts[index].calls < 15) {
                this.contacts[index].calls++;
            }
        },
        decrementCalls(index) {
            if (this.contacts[index].calls > 0) {
                this.contacts[index].calls--;
            }
        }
    }
});

app.mount('#app');
