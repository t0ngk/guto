<script setup>
    import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>
<script>
export default {
  name: 'navber',
  data() {
    return {
      showMenu: false,
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
        <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink>
            <router-link to="/" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
                หน้าแรก
            </router-link>
          </NavbarLink>
          <NavbarLink>
            <router-link to="/about" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
                เกี่ยวกับเรา
            </router-link>
          </NavbarLink>
          <NavbarLink>
            <router-link to="/service" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
                บริการ
            </router-link>
          </NavbarLink>
          <NavbarLink>
            <router-link to="/register" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
                สมัครสมาชิก
            </router-link>
          </NavbarLink>
          <NavbarLink>
            <router-link to="/Login" :class="[!isShowMenu ? 'navbar-item' : '', 'transition-all']">
                เข้าสู้ระบบ
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
