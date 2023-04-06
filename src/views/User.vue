<script setup>
import { Icon } from '@iconify/vue';
import TabelBill from '../components/TabelBill.vue';
import TabelPet from '../components/TabelPet.vue';
import TabelAppointment from '../components/TabelAppointment.vue';
import TabelUser from '../components/TabelUser.vue';

const pagesForadmin = [
    {
        name: 'ข้อมูลผู้ใช้งาน',
        icon: 'mdi:user-group-outline',
        premission: 'admin',
    },
    {
        name: 'ข้อมูลการนัดหมาย',
        icon: 'material-symbols:medical-information-outline-rounded',
        premission: 'admin',
    },
    {
        name: 'ข้อมูลสัตว์เลี้ยง',
        icon: 'mdi:dog',
        premission: 'admin',
    },
    {
        name: 'ข้อมูลการชำระ',
        icon: 'material-symbols:payments-outline-sharp',
        premission: 'admin',
    },
]
const pagesForUser = [
    {
        name: 'ผู้ใช้งาน',
        icon: 'mdi:user',
        premission: 'user',
    },
    {
        name: 'การนัดหมาย',
        icon: 'icon-park-outline:appointment',
        premission: 'user',
    },
    {
        name: 'สัตว์เลี้ยง',
        icon: 'mdi:dog',
        premission: 'user',
    },
    {
        name: 'การชำระ',
        icon: 'material-symbols:payments-outline-sharp',
        premission: 'user',
    },
]

const pageNow = ref('ผู้ใช้งาน')
const modalBill = ref(false)
const modalPet = ref(false)
const modalAppointment = ref(false)
</script>

<template>
    <div class="container mx-auto my-14">
        <n-card>
            <n-layout has-sider>
                <n-layout-sider class="text-center" content-style="padding: 24px;">
                    <n-avatar round :size="128" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                    <div class="mt-5">
                        <n-text>07akioni</n-text>
                    </div>
                    <n-divider />
                    <div v-for="page in pagesForadmin" class="flex flex-col justify-center">
                        <div class="flex gap-2 self-center py-3">
                            <Icon :icon="page.icon" class="text-2xl" />
                            <n-button text @click="pageNow = page.name">{{ page.name }}</n-button>
                        </div>
                    </div>
                    <n-divider />
                    <div v-for="page in pagesForUser" class="flex flex-col justify-center">
                        <div class="flex gap-2 py-3 self-center">
                            <Icon :icon="page.icon" class="text-2xl" />
                            <n-button text @click="pageNow = page.name">{{ page.name }}</n-button>
                        </div>
                    </div>
                </n-layout-sider>
                <n-layout>
                    <n-layout-header class="text-center text-xl">{{ pageNow }}</n-layout-header>
                    <n-layout-content content-style="padding: 24px;">
                        <n-card>
                            <div v-if="pageNow == 'ผู้ใช้งาน'">
                                <n-form disabled>
                                    <n-h3>
                                        ข้อมูลส่วนตัว
                                    </n-h3>
                                    <n-grid :span="24" :x-gap="20">
                                        <n-form-item-gi :span="12" label="ชื่อ :">
                                            <n-input />
                                        </n-form-item-gi>
                                        <n-form-item-gi :span="12" label="นามสกุล :">
                                            <n-input />
                                        </n-form-item-gi>
                                        <n-form-item-gi :span="12" label="อีเมล :">
                                            <n-input />
                                        </n-form-item-gi>
                                        <n-form-item-gi :span="12" label="เบอร์ติดต่อ :">
                                            <n-input />
                                        </n-form-item-gi>
                                        <n-form-item-gi :span="24" label="ที่อยู่ :">
                                            <n-input type="textarea" />
                                        </n-form-item-gi>
                                    </n-grid>
                                    <n-button type="primary" class="mt-5 bg-primary-500">แก้ไขข้อมูล</n-button>
                                </n-form>
                            </div>
                            <div v-if="pageNow == 'การนัดหมาย'">
                                <div class="flex justify-between">
                                    <n-h3>
                                        การนัดหมายทั้งหมด
                                    </n-h3>
                                    <router-link to="/appointment">
                                        <n-button type="success" class="ml-auto bg-success-500">เพิ่มการนัดหมาย</n-button>
                                    </router-link>
                                </div>
                                <n-grid x-gap="40" y-gap="40" cols="1 s:2 m:2 l:3 xl:3" responsive="screen" justify="">
                                    <n-grid-item>
                                        <n-card title="ชื่อการนัดหมาย">
                                            <div class="flex flex-col">
                                                <n-text>วันที่นัดหมาย : วันที่ 1 มกราคม 2564</n-text>
                                                <n-text>เวลา : 10.00 น.</n-text>
                                                <n-text>สถานที่ : สถานที่นัดหมาย</n-text>
                                                <n-text>สถานะ : รอการยืนยัน</n-text>
                                            </div>
                                            <n-button @click="modalAppointment = true" type="primary"
                                                class="mt-5 bg-primary-500">ตรวจสอบรายละเอียด</n-button>
                                        </n-card>
                                    </n-grid-item>
                                </n-grid>
                                <n-modal v-model:show="modalAppointment">
                                    <n-card class="w-1/2">
                                        <n-h3>
                                            รายละเอียดการนัดหมาย
                                        </n-h3>
                                        <div class="flex flex-col">
                                            <n-text>วันที่นัดหมาย : วันที่ 1 มกราคม 2564</n-text>
                                            <n-text>เวลา : 10.00 น.</n-text>
                                            <n-text>สถานที่ : สถานที่นัดหมาย</n-text>
                                            <n-text>สถานะ : รอการยืนยัน</n-text>
                                        </div>
                                    </n-card>
                                </n-modal>
                            </div>
                            <div v-if="pageNow == 'สัตว์เลี้ยง'">
                                <n-h3>
                                    ข้อมูลสัตว์เลี้ยง
                                </n-h3>
                                <n-grid x-gap="40" y-gap="40" cols="1 s:2 m:2 l:3 xl:3" responsive="screen" justify="">
                                    <n-grid-item>
                                        <n-card title="ชื่อสัตว์เลี้ยง">
                                            <div class="flex flex-col">
                                                <n-text>ชื่อสัตว์เลี้ยง : ชื่อสัตว์เลี้ยง</n-text>
                                                <n-text>ชนิด : ชนิดสัตว์เลี้ยง</n-text>
                                                <n-text>เพศ : เพศสัตว์เลี้ยง</n-text>
                                                <n-text>สถานะ : สถานะสัตว์เลี้ยง</n-text>
                                            </div>
                                            <n-button @click="modalPet = true" type="primary"
                                                class="mt-5 bg-primary-500">ตรวจสอบรายละเอียด</n-button>
                                        </n-card>
                                    </n-grid-item>
                                </n-grid>
                                <n-modal v-model:show="modalPet">
                                    <n-card class="w-1/2">
                                        <n-h3>
                                            ข้อมูลสัตว์เลี้ยง
                                        </n-h3>
                                        <n-form disabled>
                                            <n-grid :span="24" :x-gap="20">
                                                <n-form-item-gi :span="12" label="ชื่อสัตว์เลี้ยง :">
                                                    <n-input />
                                                </n-form-item-gi>
                                                <n-form-item-gi :span="12" label="ชนิด :">
                                                    <n-input />
                                                </n-form-item-gi>
                                                <n-form-item-gi :span="12" label="เพศ :">
                                                    <n-input />
                                                </n-form-item-gi>
                                                <n-form-item-gi :span="12" label="สถานะ :">
                                                    <n-input />
                                                </n-form-item-gi>
                                                <n-form-item-gi :span="24" label="รายละเอียด :">
                                                    <n-input type="textarea" />
                                                </n-form-item-gi>
                                            </n-grid>
                                        </n-form>
                                    </n-card>
                                </n-modal>
                            </div>
                            <div v-if="pageNow == 'การชำระ'">
                                <n-h3>
                                    การชำระเงิน
                                </n-h3>
                                <n-grid x-gap="40" y-gap="40" cols="1 s:2 m:2 l:3 xl:3" responsive="screen" justify="">
                                    <n-grid-item>
                                        <n-card title="ชื่อการชำระเงิน">
                                            <div class="flex flex-col">
                                                <n-text>วันที่ชำระ : วันที่ 1 มกราคม 2564</n-text>
                                                <n-text>เวลา : 10.00 น.</n-text>
                                                <n-text>จำนวนเงิน : 100 บาท</n-text>
                                                <n-text>สถานะ : รอการยืนยัน</n-text>
                                            </div>
                                            <n-button @click="modalBill = true" type="primary"
                                                class="mt-5 bg-primary-500">ตรวจสอบรายละเอียด</n-button>
                                        </n-card>
                                    </n-grid-item>
                                </n-grid>
                                <n-modal v-model:show="modalBill">
                                    <n-card class="w-1/2" title="ชื่อการชำระเงิน">
                                        <div class="flex flex-col">
                                            <n-text>วันที่ชำระ : วันที่ 1 มกราคม 2564</n-text>
                                            <n-text>เวลา : 10.00 น.</n-text>
                                            <n-text>จำนวนเงิน : 100 บาท</n-text>
                                            <n-text>สถานะ : รอการยืนยัน</n-text>
                                        </div>
                                    </n-card>
                                </n-modal>
                            </div>
                            <div v-if="pageNow == 'ข้อมูลการชำระ'">
                                <TabelBill/>
                            </div>
                            <div v-if="pageNow == 'ข้อมูลสัตว์เลี้ยง'">
                                <TabelPet/>
                            </div>
                            <div v-if="pageNow == 'ข้อมูลการนัดหมาย'">
                                <TabelAppointment/>
                            </div>
                            <div v-if="pageNow == 'ข้อมูลผู้ใช้งาน'">
                                <TabelUser/>
                            </div>
                        </n-card>
                    </n-layout-content>
                </n-layout>
            </n-layout>
        </n-card>
    </div>
</template>
