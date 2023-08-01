import { defineStore } from 'pinia'

export const useBaseStore = defineStore('baseStore', {
    state: () => ({
        user: {
            firstName: 'User',
            lastName: 'Full Name',
            username: 'user_id',
            phoneNumber: '0123456789',
            email: 'user@mail.com',
            address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at pharetra risus. Morbi et pretium nisi. In pellentesque fringilla quam at auctor. Sed laoreet sollicitudin nisl, vel lobortis mi tempor vel.'
        }
    }),
    getters: {

    },
    actions: {
        
    }
})