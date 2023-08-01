import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profileStore', {
    state: () => ({
        currentTabIndex: 0,
        contacts: [
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_1',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_2',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_3',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_4',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_5',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_6',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_7',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_8',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_9',
            },
        ],
        invitations: [
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_10',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_11',
            },
            {
                firstName: 'User',
                lastName: 'Full Name',
                username: 'user_id_12',
            },
        ]
    }),
    getters: {
        getTitle: (state) => state.title,
        getCurrentTabIndex: (state) => state.currentTabIndex,
        getUserInfo: (state) => state.user
    },
    actions: {
        changeTab(index) {
            this.currentTabIndex = index
        },
        removeContact(username) {
            this.contacts = this.contacts.filter(x => x.username !== username)
        }
    }
})