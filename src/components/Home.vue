<template>
    <div>
        <x-header title="This is a Vux Mobile App" :left-options="{showBack: false}" :right-options="{showMore: true}"></x-header>
        <div>海博停车</div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style lang="less" scoped>
div {
    margin: auto;
}
</style>
