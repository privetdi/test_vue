<script setup lang="ts">
import { ref, watch } from 'vue';


export interface Iitem {
    id: number
    price: number
    count: number
}


const emits = defineEmits(['updateCount'])

const { item, title, img, type } = defineProps<{
    title: string,
    img: string,
    item?: {
        id: number,
        price: number,
        count: number
    },
    type: 'catalog' | 'busket'
}>();

if (item) {

}

function add() {
    console.log(count.value)
    if (count.value) count.value.count++
    emits('updateCount', count.value);
}
function remove() {
    console.log(count.value)
    if (count.value) count.value.count--
    emits('updateCount', count.value);
}



const count = ref<Iitem | undefined>(item ? item : undefined)
watch(count, (newValue) => {
    emits('updateCount', newValue)
})
</script>

<template>
    <div class="cardProduct">
        <img style="width: 100px;" :src="img">
        <div class="cardProduct__wrapper">
            <div class="cardProduct__title">{{ title }}</div>
            <div>{{ count?.id }}</div>

            <div v-if="item && type === 'catalog'">
                <button @click="add">Добавить в корзину</button>
                <button v-if="item.count" @click="remove">Удалить из корзины</button>
                <div>в корзине {{ item.count }}</div>
            </div>

        </div>

    </div>
</template>

<style scoped>
.cardProduct {
    display: flex;
    flex-direction: column;
}

.cardProduct__wrapper {
    display: flex;
    width: 300px;
}

.cardProduct__title {
    width: 250px;
    white-space: pre-wrap;
}
</style>
