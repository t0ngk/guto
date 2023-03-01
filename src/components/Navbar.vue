<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
import { Dropdown, ListGroup, ListGroupItem } from 'flowbite-vue'
</script>
<script>
export default {
  name: 'navber',
  data() {
    return {

    }
  },
}
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
          <router-link to="/About" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            เกี่ยวกับเรา
          </router-link>
        </NavbarLink>
        <NavbarLink>
          <router-link to="" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
            <dropdown text="Bottom">
              <template #trigger>
                <span>บริการ</span>
              </template>
              <list-group>
                <list-group-item>
                  <template #prefix>
                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M16.417 9.579A7.917 7.917 0 1 1 8.5 1.662a7.917 7.917 0 0 1 7.917 7.917zm-11.293.252A1.31 1.31 0 0 0 5.648 8.1c-.267-.76-.934-1.22-1.49-1.024a1.31 1.31 0 0 0-.524 1.73c.267.761.934 1.22 1.49 1.025zm6.664.747a4.606 4.606 0 0 0-6.518 0 1.945 1.945 0 0 0 2.75 2.75.72.72 0 0 1 1.017 0 1.945 1.945 0 0 0 2.75-2.75zM5.84 6.986c.087.918.7 1.61 1.372 1.547.67-.064 1.143-.86 1.057-1.777-.087-.917-.701-1.61-1.372-1.546-.67.063-1.144.859-1.057 1.776zm4.003 1.547c.671.063 1.285-.63 1.372-1.547.087-.917-.386-1.713-1.057-1.776-.67-.064-1.285.629-1.372 1.546-.086.918.387 1.713 1.057 1.777zM12.9 7.076c-.556-.195-1.223.263-1.49 1.024a1.31 1.31 0 0 0 .524 1.73c.556.196 1.223-.263 1.49-1.024a1.31 1.31 0 0 0-.524-1.73z" />
                    </svg>
                  </template>
                  PetCare
                </list-group-item>
                <list-group-item>
                  <template #prefix>
                    <svg class="w-4 h-4 fill-current" fill="currentColor" viewBox="0 0 25 25"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" fill="none" stroke="#000000" stroke-width="0" opacity="0.01" />
                      <path d="M17.5,13.5h-4v4h-3v-4h-4v-3h4v-4h3v4h4ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Z"
                        transform="translate(0 0)" />
                    </svg>
                  </template>
                  PetHealth
                </list-group-item>
              </list-group>
            </dropdown>
          </router-link>
        </NavbarLink>
      <NavbarLink>
        <router-link to="/Register" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
          สมัครสมาชิก
        </router-link>
      </NavbarLink>
      <NavbarLink>
        <router-link to="/Login" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
          เข้าสู่ระบบ
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
      </div> --></template>
