<script setup>
import { ref, watch } from 'vue'
const Newuser = ref({

    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    conpassword: ''
})

let show = () =>{
    console.log(Newuser.value)
}
</script>

<template>
    <div class="my-6 mx-2">
        <n-grid :span="24" :x-gap="24" :rules="rules">
            <n-form-item-gi :span="8" label="ชื่อต้น" path="fname">
                <n-input v-model:value="Newuser.fname" placeholder="กรอกชื่อต้นของคุณ" />
            </n-form-item-gi>
            <n-form-item-gi :span="8" label="นามสกุล" path="lname">
                <n-input v-model:value="Newuser.lname" placeholder="กรอกนามสกุลของคุณ" />
            </n-form-item-gi>
            <n-form-item-gi :span="8" label="เบอร์โทรศัพท์" path="phone">
                <n-input v-model:value="Newuser.phone" placeholder="กรอกเบอร์โทรศัพท์ของคุณ" />
            </n-form-item-gi>
            <n-form-item-gi :span="24" label="ที่อยู่" path="address">
                <n-input v-model:value="Newuser.address" placeholder="กรอกที่อยู่ของคุณ" type="textarea" :autosize="{
                    minRows: 3,
                    maxRows: 5
                }" />
            </n-form-item-gi>
            <n-form-item-gi :span="8" label="อีเมล" path="email">
                <n-input v-model:value="Newuser.email" type="email" placeholder="กรอกอีเมลของคุณ" />
            </n-form-item-gi>
            <n-form-item-gi :span="8" label="รหัสผ่าน" path="password">
                <n-input v-model:value="Newuser.password" type="password" placeholder="กรอกรหัสผ่านของคุณ" />
            </n-form-item-gi>
            <n-form-item-gi :span="8" label="ยื่นยันรหัสผ่าน" path="conpassword">
                <n-input :disabled="Newuser.password === ''" v-model:value="Newuser.conpassword" type="password"
                    placeholder="กรอกยื่นยันรหัสผ่านของคุณ" />
            </n-form-item-gi>
        </n-grid>
        <n-space justify="end">
            <n-button class="mb-5" @click="show" size="large" round attr-type="submit">
                สมัครสมาชิก
            </n-button>
        </n-space>
    </div>
</template>