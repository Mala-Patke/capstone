<template>
    <div id="main">
        <h1>Welcome to Alexandria</h1>
        <div>
            <button @click="login">Login!</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useAuth0 } from "@auth0/auth0-vue";

const auth0 = useAuth0();
const login = () => {
    auth0.loginWithPopup();
}
</script>


<style>
    #root{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height:100%;
    }

    #main {
        background-color: #121212;
        color: white;

        width: 50%;
        height: 50%;
        
        display: flex;
        align-items: center;
        flex-direction: column;
        
        border: 2px solid white;
        border-radius: 25px;
    }
</style>