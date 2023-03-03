<script setup>
import { Avatar } from 'flowbite-vue'
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const users = ref(JSON.parse(localStorage.getItem('users')) || []);
const userId = ref(localStorage.getItem('user') || null);
const user = ref(users.value.find(user => user.id == userId.value));
console.log(user.value);

</script>
<template>
  <Navbar class="navbar">
    <template #logo>
      <NavbarLogo link="/" alt="guto" image-url="src/assets/Dog.svg">
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink>
          <router-link to="/" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            หน้าแรก
          </router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            <dropdown text="Bottom">
              <template #trigger>
                <div class="flex items-center">บริการ
                  <span>
                    <Icon icon="material-symbols:arrow-drop-down-rounded" class="text-3xl"></Icon>
                  </span>
                </div>
              </template>
              <list-group>
                <list-group-item>
                  <template #prefix>
                    <Icon icon="material-symbols:pets" class="text-xl"></Icon>
                  </template>
                  <router-link to="/petcare">
                    PetCare
                  </router-link>
                </list-group-item>
                <list-group-item>
                  <template #prefix>
                    <Icon icon="material-symbols:add-circle-rounded" class="text-xl"></Icon>
                  </template>
                  <router-link to="/pethealth">
                    PetHealth
                  </router-link>
                </list-group-item>
              </list-group>
            </dropdown>
          </router-link>
        </NavbarLink>
        <NavbarLink v-if="!userId">
          <router-link to="/register" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            สมัครสมาชิก
          </router-link>
        </NavbarLink>
        <NavbarLink v-if="!userId">
          <router-link to="/login" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            เข้าสู่ระบบ
          </router-link>
      </NavbarLink>
        <NavbarLink v-if="user?.permission == 0">
          <router-link to="/appointment" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            นัดหมาย
          </router-link>
      </NavbarLink>
      <NavbarLink v-if="userId">
        <router-link to="/user" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            <Avatar rounded />
          </router-link>
      </NavbarLink>
    </NavbarCollapse>
  </template>
</Navbar>
<!-- <div id="nav">
      <nav class="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link to="/" class="hover:text-blue-400">
            <div class="flex items-center">
                  <a href="" class="w-14">
                    <img src="src/assets/Dog.svg" alt="logo" />
                        </a>
                  </div>
                </router-link> -->

<!-- Mobile menu button -->
<!-- <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button type="button" class=" text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400">
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path fill-rule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                    </path>
                  </svg>
                </button>
              </div> -->
<!-- </div> -->


<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
<!-- <ul :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 ">
          <li class="text-sm font-bold text-white hover:text-gray-800">
            <a href="/">
              หน้าแรก
            </a>
          </li>
          <li class="text-sm font-bold text-white hover:text-gray-800">
            <a href="">
              เกี่ยวกับเรา
            </a>
          </li>
          <li class="text-sm font-bold text-white hover:text-gray-800">
            <a href="">
              บริการ
            </a>
            </li>
            <li class="text-sm font-bold text-white hover:text-gray-800">
              <a href="">
                สมัครสมาชิก
              </a>
            </li>
            <li class="text-sm font-bold text-white hover:text-gray-800">
              <a href="/Login">
                เข้าสู้ระบบ
                  </a>
                </li>
              </ul>
            </nav>
          </div> -->
</template>
