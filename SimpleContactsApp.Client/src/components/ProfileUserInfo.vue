<script setup>
import { useBaseStore } from '~/stores'

const user = useBaseStore().user
</script>

<template>
    <div id="tab-user-info">
        <table>
            <tbody>
                <tr>
                    <td style="min-width: 7rem;">Phone Number</td>
                    <td>:</td>
                    <td>{{ user.phoneNumber }}</td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>:</td>
                    <td>{{ user.email }}</td>
                </tr>
                <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>{{ user.address }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>