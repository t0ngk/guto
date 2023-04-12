<template>
    <n-form ref="formRef" :label-width="80" :model="formValue" :rules="rules" :size="'medium'">
        <n-form-item label="Email" path="formValue.email">
            <n-input round v-model:value="formValue.email" placeholder="Input Name" />
        </n-form-item>
        <n-form-item label="Password" path="formValue.password">
            <n-input round v-model:value="formValue.password" placeholder="Input Age" />
        </n-form-item>
        <div class="flex gap-5 items-center">
            <n-button type="primary" class="bg-primary-500" round @click="handleValidateClick">
                Login
            </n-button>
            <n-a href="/Register">สมัครสมาชิก</n-a>
        </div>
    </n-form>
</template>

<script setup>
import { useMessage } from "naive-ui";
const message = useMessage();
const formValue = ref({
    email: '',
    password: ''
})
const formRef = ref(null)

const rules = {
    formValue: {
        email: {
            required: true,
            message: 'กรุณากรอกอีเมลของคุณ',
            trigger: ['blur', 'input']
        },
        password: {
            required: true,
            message: 'กรุณากรอกรหัสผ่านของคุณ',
            trigger: 'blur'
        }
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