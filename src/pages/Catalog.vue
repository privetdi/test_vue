<script setup lang="ts">
import { onMounted, ref } from 'vue';
import CardProduct, { Iitem } from '../components/CardProduct.vue'
import api from '../api/fetch.ts';
import { IProduct } from '../api/interface.ts'
import store from '../store/store'

let data = ref<IProduct[] | undefined | null>(null);
let busket: IProduct[] = []
let sum = ref(0);

const fetchSetUserHouse = async () => {
    try {
        const response = await api<IProduct[]>('https://fakestoreapi.com/products', { method: 'GET' });
        return response;
    } catch (error) {
        console.error(error);
    }
};

function updateSum() {
    const total = busket.reduce((acc, item) => {
        if (item.count) {
            acc += item.price * item.count;
        }
        return acc;
    }, 0);
    sum.value = parseFloat(total.toFixed(2));
}

function handleUpdateCount(newCount: Iitem) {
    if (!Array.isArray(data.value)) return
    let arr = data.value
    arr = arr.map((item) => {
        if (item.id === newCount.id) {
            item.count = newCount.count
            return item
        } else {
            return item
        }
    })
    busket = arr;
    store.commit('setBusket', arr.filter((item) => item.count))
    console.log('stor', store.state.busket)
    updateSum();
}

onMounted(async () => {
    let res: IProduct[] | undefined = await fetchSetUserHouse().then((res) => {
        return res;
    })
    console.log(res);
    data.value = res
})

</script>

<template>
    <div>Catalog</div>
    <router-link :to="{ path: 'busket' }"> busket sun {{ sum }}</router-link>
    <div v-if="!data">
        Loading...
    </div>
    <div v-else class="catalog">
        <div v-for="item in data" :key="item.id" class="catalog__item">
            <CardProduct :title="item.title" :img="item.image" type="catalog"
                :item="{ id: item.id, price: item.price, count: item.count ? item.count : 0 }"
                @updateCount="handleUpdateCount" />
        </div>
    </div>
</template>

<style scoped>
.catalog {
    display: flex;
    flex-wrap: wrap;
}

.catalog__item {
    flex-grow: 1;
    margin: 20px;
}
</style>
