<script setup>
import { Icon } from '@iconify/vue';

  const props = defineProps({
    timeline: {
      type: Array,
      required: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    color: {
      type: String,
      default: 'blue',
    },
  });

  console.log(props.timeline);
  const timelineClass = {
    init: `flex items-center`,
    item: `md:w-full sm:after:content-[''] after:w-full after:h-0.5 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`,
    checked: `text-${props.color}-600 dark:text-${props.color}-500 after:bg-blue-600`,
    unchecked: `after:bg-gray-500 dark:after:bg-gray-400`,
  }
</script>

<template>
<ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li v-for="item, index in timeline" :class="[timelineClass.init, index < timeline.length - 1 ? timelineClass.item : '', index <= step - 1 ? timelineClass.checked : timelineClass.unchecked]">
        <span :class="[index < timeline.length -1 ? `flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:font-light after:text-gray-200 dark:after:text-gray-500` : 'flex items-center']">
            <span v-if="index >= step" class="mr-2">{{ index + 1 }}</span>
            <span v-else>
              <Icon icon="material-symbols:check-circle-rounded"></Icon>
            </span>
            {{ item }}
        </span>
    </li>
</ol></template>
