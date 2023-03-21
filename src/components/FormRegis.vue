<script setup>
import { ref, watch } from 'vue'
import { useMessage } from "naive-ui";

const formRef = ref(null)
const message = useMessage();
const Newuser = ref({

    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    phone: '',
    conpassword: ''
})

const rules = {
    Newuser: {
        fname: {
            required: true,
            massage: 'กรุณากรอกชื่อต้นของคุณ',
            trigger: 'blur'
        },
        lname: {
            required: true,
            message: 'กรุณากรอกนามสกุลของคุณ',
            trigger: 'blur'
        },
        email: {
            required: true,
            massage: 'กรุณากรอกอีเมลของคุณ',
            trigger: 'blur'
        },
        password: {
            required: true,
            massage: 'กรุณากรอกรหัสผ่านของคุณ',
            trigger: ['blur', 'input']
        },
        conpassword: {
            required: true,
            massage: 'กรุณากรอกยื่นยันรหัสผ่านของคุณ',
            trigger: ['blur', 'input']
        },
        address: {
            required: true,
            massage: 'กรุณากรอกที่อยู่ของคุณ',
            trigger: 'blur'
        },
    }
}
const handleValidateClick = (e) => {
        e.preventDefault();
        formRef.value?.validate((errors) => {
          if (!errors) {
            message.success("Valid");
          } else {
            console.log(errors);
            message.error("Invalid");
          }
        });
      }
</script>

<template>
    <div class="my-6 mx-2">
        <n-form ref="formRef" :model="Newuser" :rules="rules" :size="'medium'" label-placement="top">
            <n-grid :span="24" :x-gap="24">
                <n-form-item-gi :span="8" label="ชื่อต้น" path="Newuser.fname">
                    <n-input v-model:value="Newuser.fname" placeholder="กรอกชื่อต้นของคุณ" />
                </n-form-item-gi>
                <n-form-item-gi :span="8" label="นามสกุล" path="Newuser.lname">
                    <n-input v-model:value="Newuser.lname" placeholder="กรอกนามสกุลของคุณ" />
                </n-form-item-gi>
                <n-form-item-gi :span="8" label="เบอร์โทรศัพท์" path="Newuser.phone">
                    <n-input v-model:value="Newuser.phone" placeholder="กรอกเบอร์โทรศัพท์ของคุณ" />
                </n-form-item-gi>
                <n-form-item-gi :span="24" label="ที่อยู่" path="Newuser.address">
                    <n-input v-model:value="Newuser.address" placeholder="กรอกที่อยู่ของคุณ" type="textarea" :autosize="{
                        minRows: 3,
                        maxRows: 5
                    }" />
                </n-form-item-gi>
                <n-form-item-gi :span="8" label="อีเมล" path="Newuser.email">
                    <n-input v-model:value="Newuser.email" type="email" placeholder="กรอกอีเมลของคุณ" />
                </n-form-item-gi>
                <n-form-item-gi :span="8" label="รหัสผ่าน" path="Newuser.password">
                    <n-input v-model:value="Newuser.password" type="password" placeholder="กรอกรหัสผ่านของคุณ" />
                </n-form-item-gi>
                <n-form-item-gi :span="8" label="ยื่นยันรหัสผ่าน" path="Newuser.conpassword">
                    <n-input :disabled="Newuser.password === ''" v-model:value="Newuser.conpassword" type="password"
                        placeholder="กรอกยื่นยันรหัสผ่านของคุณ" />
                </n-form-item-gi>
            </n-grid>
            <n-space justify="end">
                <n-button class="mb-5" @click="handleValidateClick" size="large" round attr-type="submit">
                    สมัครสมาชิก
                </n-button>
            </n-space>
        </n-form>
    </div>
    <pre>{{ JSON.stringify(Newuser, null, 2) }}
</pre>
</template>