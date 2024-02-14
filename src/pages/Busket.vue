<script setup lang="ts">
import { IProduct } from '../api/interface';
import store from '../store/store';
import CardProduct from '../components/CardProduct.vue'


const busket: IProduct[] | [] = store.state.busket

</script>

<template>
    <div>
        Busket
        <router-link :to="{ path: '/catalog' }">Catalog</router-link>
        <div v-if="busket.length <= 0">
            Busket null
        </div>
        <div v-else class="catalog">
            <div v-for="item in busket" :key="item.id" class="catalog__item">
                <CardProduct :title="item.title" :img="item.image" type="busket" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
