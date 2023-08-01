<script setup>
import { useBaseStore, useProfileStore } from '~/stores'
import avatar from '~/assets/images/avatar.png'
import ProfileUserInfo from '~/components/ProfileUserInfo.vue'
import ProfileContactList from '~/components/ProfileContactList.vue'
import ProfileInvitations from '~/components/ProfileInvitations.vue'

const profileStore = useProfileStore()
const user = useBaseStore().user
const isCurrTabIndex = (index) => profileStore.getCurrentTabIndex === index
</script>

<template>
    <main id="container-profile">
        <div class="profile-top">
            <div class="avatar">
                <img class="ui medium circular image" :src="avatar">
            </div>
            <h2>{{ user.firstName + ' ' + user.lastName }}</h2>
            <span>{{ user.username }}</span>
        </div>

        <div class="ui top attached tabular menu">
            <a class="item"
                @click="profileStore.changeTab(0)"
                :class="{ active: isCurrTabIndex(0) }"
            >
                User Info
            </a>
            <a class="item"
                @click="profileStore.changeTab(1)"
                :class="{ active: isCurrTabIndex(1) }"
            >
                Contact List
            </a>
            <a class="item"
                @click="profileStore.changeTab(2)"
                :class="{ active: isCurrTabIndex(2) }"
            >
                Invitations
            </a>
        </div>
        <div class="ui bottom attached tab segment active">
            <ProfileContactList v-if="isCurrTabIndex(1)" />
            <ProfileInvitations v-else-if="isCurrTabIndex(2)" />
            <ProfileUserInfo v-else />
        </div>
    </main>
</template>
