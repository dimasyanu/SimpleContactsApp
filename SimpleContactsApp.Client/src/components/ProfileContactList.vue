<script setup>
import { useProfileStore } from '~/stores'
import avatar from '~/assets/images/avatar.png'

const profileStore = useProfileStore()
</script>

<template>
    <div id="tab-contact-list">
        <div class="ui relaxed divided list">
            <div class="item" v-for="(contact, i) in profileStore.contacts">
                <!-- <i class="large github middle aligned icon"></i> -->
                <img :src="avatar" alt="avatar" class="middle aligned" />
                <div class="content">
                    <div class="header">{{ contact.firstName + ' ' + contact.lastName }}</div>
                    <div class="description">{{ contact.username }}</div>
                </div>
                <span class="remove-btn" @click="profileStore.removeContact(contact.username)">Remove</span>
            </div>
        </div>
    </div>
</template>