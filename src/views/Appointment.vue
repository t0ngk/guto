<script setup>
import { ref, computed } from "vue";
import { isYesterday, addDays } from "date-fns/esm";
import { useMessage } from "naive-ui";
//All Data
const message = useMessage();
let model = ref({
    radioService: null,
    namePet: null,
    typePet: null,
    sexPet: null,
    agePet: null,
    abourtPet: null,

    dateAppointmemt: addDays(Date.now(), 1).valueOf(),
    timeAppointmemt: null,
    service: null,
})

// Step 
const currentRef = ref(1);

// Step 1


// Step 1.1
let optionsPet = [{
    label: 'คิ้ดตี้',
    value: 'คิ้ดตี้'
}]

let rules = {
    radioService: [{
        required: true,
        message: 'กรุณาเลือกการใช้งานของคุณ',
        trigger: 'change'
    }]
}

// Step 1.2

const radioSex = ref(null);
let sexpets = [{
    label: 'เพศผู้',
    value: 'เพศผู้'
},
{
    label: 'เพศเมีย',
    value: 'เพศเมีย'
},
]

let optionsType = [{
    label: 'หมา',
    value: 'หมา'
},
{
    label: 'แมว',
    value: 'แมว'
},
{
    label: 'สุนัข',
    value: 'สุนัข'
},
{
    label: 'กระต่าย',
    value: 'กระต่าย'
},
{
    label: 'เต่า',
    value: 'เต่า'
},
{
    label: 'เป็ด',
    value: 'เป็ด'
},
{
    label: 'นก',
    value: 'นก'
},
{
    label: 'สัตว์อื่นๆ',
    value: 'สัตว์อื่นๆ'
}]
// Step 2

let timeDate = {
    morning: [{
        value: '9.00 - 10.00',
    },
    {
        value: '10.00 - 11.00',
    },
    {
        value: '11.00 - 12.00',
    }
    ],
    afternoon: [{
        value: '13.00 - 14.00',
    },
    {
        value: '14.00 - 15.00',
    },
    {
        value: '15.00 - 16.00',
    }
    ],
    evening: [{
        value: '17.00 - 18.00',
    },
    {
        value: '18.00 - 19.00',
    },
    {
        value: '19.00 - 20.00',
    }
    ],
}

let handleUpdateValue = (_, { year, month, date }) => {
    message.success(`${year}-${month}-${date}`);
}
let isDateDisabled = (timestamp) => {
    if (isYesterday(timestamp)) {
        return true;
    }
    return false;
}
// Step 3
let optionsService = {
    PetCare: [
        {
            label: 'ฝากสัตว์เลี้ยง',
            value: 'ฝากสัตว์เลี้ยง'
        },
        {
            label: 'บริการอาบน้ำตัดขนสัตว์เลี้ยง',
            value: 'บริการอาบน้ำตัดขนสัตว์เลี้ยง'
        },
        {
            label: 'บริการสระว่ายน้ำสุนัก',
            value: 'บริการสระว่ายน้ำสุนัก'
        },
    ],
    PetHealth: [
        {
            label: 'ตรวจสุขภาพสัตว์เลี้ยง',
            value: 'ตรวจสุขภาพสัตว์เลี้ยง'
        },
        {
            label: 'ชีดวัคซีนสัตว์เลี้ยง',
            value: 'ชีดวัคซีนสัตว์เลี้ยง'
        },
        {
            label: 'ทำหมันสัตว์เลี้ยง',
            value: 'ทำหมันสัตว์เลี้ยง'
        },
    ]
}

// Button Next
let handleValidateButtonClick = (e) => {
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
    <n-card class="my-10 w-4/5 mx-auto shadow-2xl">
        <n-layout>
            <n-layout-header>
                <n-h1 class="text-center">
                    Appointment
                </n-h1>
                <div class="w-4/5 mx-auto">
                    <n-steps v-model:current="currentRef">
                        <n-step title="ข้อมูลสัตว์เลี้ยง" />
                        <n-step title="ข้อมูลการนัดหมาย" />
                        <n-step title="เลือกบริการ" />
                        <n-step title="ยื่นยันการนัด" />
                        <n-step title="รอการติดต่อกลับ" />
                    </n-steps>
                </div>
                <n-divider />
            </n-layout-header>
            <n-layout-content class="text-base">
                <n-form :model="model" :rules="rules">
                    <!-----------------------------------------------------STEP 1-------------------------------------------------------------->
                    <div v-if="currentRef == 1" class="mx-24">
                        <n-space justify="center">
                            <n-form-item path="model.radioService">
                                <n-radio-group v-model:value="model.radioService">
                                    <n-radio value="เคยใช้บริการมาก่อน">
                                        เคยใช้บริการมาก่อน
                                    </n-radio>
                                    <n-radio value="ไม่เคยใช้บริการมาก่อน">
                                        ไม่เคยใช้บริการมาก่อน
                                    </n-radio>
                                </n-radio-group>
                            </n-form-item>
                        </n-space>
                        <n-space class="my-10 w-1/2 mx-auto" vertical v-if="model.radioService == 'เคยใช้บริการมาก่อน'">
                            <n-form-item label="เลือกสัตว์เลี้ยงของคุณ :" path="optionsPet.value">
                                <n-select :options="optionsPet" v-model="optionsPet.value"
                                    placeholder="กรุณาเลือกสัตว์เลี้ยง" />
                            </n-form-item>
                        </n-space>
                        <n-space class="my-10" vertical v-if="model.radioService == 'ไม่เคยใช้บริการมาก่อน'">
                            <n-form>
                                <n-grid :span="24" :x-gap="24" :y-gap="14">
                                    <n-form-item-gi :span="12" label="ชื่อสัตว์เลี้ยง :">
                                        <n-input placeholder="กรุณากรอกชื่อสัตว์เลี้ยง" v-model:value="model.namePet" />
                                    </n-form-item-gi>
                                    <n-form-item-gi :span="12" label="ประเภท :">
                                        <n-select :options="optionsType" v-model:value="model.typePet"
                                            placeholder="กรุณาเลือกประเภทของสัตว์เลี้ยง" />
                                    </n-form-item-gi>
                                    <n-form-item-gi :span="12" label="เพศ :">
                                        <n-radio-group v-model:value="model.sexPet">
                                            <n-radio v-for="sex in sexpets" :key="sex.value" :value="sex.value"
                                                :label="sex.label" />
                                        </n-radio-group>
                                    </n-form-item-gi>
                                    <n-form-item-gi :span="8" label="อายุ :">
                                        <n-input placeholder="กรุณากรอกอายุของสัตว์เลี้ยง" v-model:value="model.agePet" />
                                    </n-form-item-gi>
                                    <n-form-item-gi :span="24" label="หมายเหตุ :">
                                        <n-input type="textarea" placeholder="หมายเหตุ" v-model:value="model.abourtPet" />
                                    </n-form-item-gi>
                                </n-grid>
                            </n-form>
                        </n-space>
                    </div>

                    <!-----------------------------------------------------STEP 2-------------------------------------------------------------->

                    <div v-if="currentRef == 2" class="mx-24">
                        <n-space vertical justify="center">
                            <n-h3>
                                กรุณาเลือกวันที่และเวลาที่ต้องการนัดหมาย :
                            </n-h3>
                            <n-calendar :is-date-disabled="isDateDisabled" @update:value="handleUpdateValue"
                                v-model:value="model.dateAppointmemt" #="{ year, month, date }" class="w-4/5 mx-auto">
                                {{ year }}-{{ month }}-{{ date }}
                            </n-calendar>
                            <n-divider />
                            <n-card title="เวลานัดหมาย :" class="my-6">
                                <n-space vertical justify="center">
                                    <label>ช่วงเช้า :</label>
                                    <n-radio-group v-model:value="model.timeAppointmemt" name="radiobuttongroup1">
                                        <n-radio-button v-for="time in timeDate.morning" :key="time.value"
                                            :value="time.value" :label="time.value" />
                                    </n-radio-group>
                                    <label>ช่วงเที่ยง :</label>
                                    <n-radio-group v-model:value="model.timeAppointmemt" name="radiobuttongroup2">
                                        <n-radio-button v-for="time in timeDate.afternoon" :key="time.value"
                                            :value="time.value" :label="time.value" />
                                    </n-radio-group>
                                    <label>ช่วงบ่าย :</label>
                                    <n-radio-group v-model:value="model.timeAppointmemt" name="radiobuttongroup2">
                                        <n-radio-button v-for="time in timeDate.evening" :key="time.value"
                                            :value="time.value" :label="time.value" />
                                    </n-radio-group>
                                </n-space>
                            </n-card>
                        </n-space>
                    </div>
                    <!-----------------------------------------------------STEP 3-------------------------------------------------------------->
                    <div v-if="currentRef == 3" class="mx-24">
                        <n-space vertical justify="center">
                            <n-h3>
                                กรุณาเลือกบริการที่ต้องการ :
                            </n-h3>
                            <n-space justify="center">
                                <n-radio-group v-model:value="model.service" size="large">
                                    <n-radio value="PetCare">
                                        PetCare
                                    </n-radio>
                                    <n-radio value="PetHealth">
                                        PetHealth
                                    </n-radio>
                                </n-radio-group>
                            </n-space>
                            <div v-if="model.service == 'PetCare'">
                                <n-card title="เลือกบริการที่ต้องการ :" class="my-6">
                                    <n-radio-group v-model:value="value" name="radiobuttongroup3" size="large">
                                        <n-radio-button v-for="option in optionsService.PetCare" :key="option.value"
                                            :value="option.value">
                                            {{ option.label }}
                                        </n-radio-button>
                                    </n-radio-group>
                                </n-card>
                            </div>
                            <div v-if="model.service == 'PetHealth'">
                                <n-card title="เลือกบริการที่ต้องการ :" class="my-6">
                                    <n-radio-group v-model:value="value" name="radiobuttongroup3" size="large">
                                        <n-radio-button v-for="option in optionsService.PetHealth" :key="option.value"
                                            :value="option.value">
                                            {{ option.label }}
                                        </n-radio-button>
                                    </n-radio-group>
                                </n-card>
                            </div>
                        </n-space>
                    </div>
                    <!-----------------------------------------------------STEP 4-------------------------------------------------------------->
                    <div v-if="currentRef == 4" class="mx-24">
                        <n-card>
                            <n-h3>
                                สรุปการนัดหมาย :
                            </n-h3>
                            <n-space vertical justify="center">
                                
                            </n-space>
                        </n-card>
                    </div>
                    <n-space justify="space-between">
                        <n-button v-show="currentRef != 1" type="primary" @click="currentRef--">Back</n-button>
                        <n-button v-show="currentRef != 5" type="primary" @click="currentRef++">Next</n-button>
                    </n-space>
                </n-form>
            </n-layout-content>
        </n-layout>
    </n-card>
    <pre>{{ JSON.stringify(model, null, 2) }} </pre></template>