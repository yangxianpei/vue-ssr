<template>
    <div>Foo
        <button @click="btn1">点我</button>
    </div>
</template>
<script>
export default {
    methods:{
        btn1(){
            alert(1)
        }
    }
}
</script>