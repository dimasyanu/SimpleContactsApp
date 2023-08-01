<script setup>
import { useProfileStore } from '~/stores'
import avatar from '~/assets/images/avatar.png'

const profileStore = useProfileStore()
</script>

<template>
    <div id="tab-invitations">
        <div class="ui relaxed divided list">
            <div class="item" v-for="(invitation, i) in profileStore.invitations">
                <!-- <i class="large github middle aligned icon"></i> -->
                <img :src="avatar" alt="avatar" class="middle aligned" />
                <div class="content">
                    <div class="header">{{ invitation.firstName + ' ' + invitation.lastName }}</div>
                    <div class="description">{{ invitation.username }}</div>
                </div>
                <div class="btn-group">
                    <span class="btn accept-btn" @click="profileStore.removeContact(invitation.username)">Accept</span>
                    <span class="separator"></span>
                    <span class="btn reject-btn" @click="profileStore.removeContact(invitation.username)">Reject</span>
                </div>
            </div>
        </div>
    </div>
</template>