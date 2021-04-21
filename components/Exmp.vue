<template>
  <div class="mt-16 md:p-0">
    <div id="tabs" class="flex flex-row">
      <div class="tabs flex flex-col">
        <a :class="[ activetab === '1' ? 'active' : '' ]" class="hover:bg-backgroundColor hover:text-primaryColor " @click="activetab='1'">Tanifund</a>
        <a :class="[ activetab === '2' ? 'active' : '' ]" class="hover:bg-backgroundColor hover:text-primaryColor " @click="activetab='2'">Ternak Uang</a>
        <a :class="[ activetab === '3' ? 'active' : '' ]" class="hover:bg-backgroundColor hover:text-primaryColor " @click="activetab='3'">Julizar</a>
        <a :class="[ activetab === '4' ? 'active' : '' ]" class="hover:bg-backgroundColor hover:text-primaryColor " @click="activetab='4'">Enterdigital</a>
        <a :class="[ activetab === '5' ? 'active' : '' ]" class="hover:bg-backgroundColor hover:text-primaryColor " @click="activetab='5'">Slab! Studio</a>
      </div>

      <div class="">
        <div v-if="activetab ==='1'" class="tabcontent bg-primaryColor">
          <div class="mb-4">
            <h1 class="font-bold text-xl">
              Software Engineer - Intern <a href="https://www.tanifund.com/" class="text-primaryColor">@Tanifund</a>
            </h1>
            <div class=" text-base font-medium text-gray-500 mt-2">
              Incoming on May 2021 / Meanwhile I will show the hiring process
            </div>
            <ul class="list-disc mt-4 ml-8 text-base">
              <li class="my-1">
                I applied through Linkedin, and after few days, got a codebyte challenge
              </li>
              <li class="my-1">
                Then, I got a HR Interview, I talk mainly about my availability & motivation
              </li>
              <li class="my-1">
                Then, User Interview (Interviewed by the VP of Engineering), talked alot about the tech stack used in Tanihub & Tanifund
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activetab ==='2'" class="tabcontent bg-primaryColor">
          <div class="mb-4">
            <h1 class="font-bold text-xl">
              Software Engineer - Intern <a href="https://www.ternakuang.id/" class="text-primaryColor">@TernakUang</a>
            </h1>
            <div class="text-base font-medium text-gray-500 mt-2">
              March 2021 - Present
            </div>

            <ul class="list-disc mt-4 ml-8 text-base">
              <li class="my-1">
                Working on mostly React Native for Ternak Uang Mobile App
              </li>
              <li class="my-1">
                Develop IHSG(Indonesia Stock Market) chart in React Native
              </li>
              <li class="my-1">
                Communicate with multi-disciplinary teams of engineers, designers, product on a daily basis
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activetab ==='3'" class="tabcontent bg-primaryColor">
          <div class="mb-4">
            <h1 class="font-bold text-xl">
              Software Engineer <a href="https://julizar.id/" class="text-primaryColor">@Julizar</a>
            </h1>
            <div class="text-base font-medium text-gray-500 mt-2">
              Jan 2021 - Present
            </div>

            <ul class="list-disc mt-4 ml-8 text-base">
              <li class="my-1">
                Working on equity crowdfunding platform with Nuxt,Pug, Tailwind
              </li>
              <li class="my-1">
                Julizar's representative from tech side to communicate with OJK, Aludi, and IDX
              </li>
              <li class="my-1">
                Benchmarked User Interface for Julizar current site.
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activetab ==='4'" class="tabcontent bg-primaryColor">
          <div class="mb-4">
            <h1 class="font-bold text-xl">
              Software Engineer <a href="https://www.instagram.com/enterdigitalasia/" class="text-primaryColor">@Enterdigital</a>
            </h1>
            <div class=" text-base font-medium text-gray-500 mt-2">
              May 2020 - Mar 2021
            </div>
            <ul class="list-disc mt-4 ml-8 text-base">
              <li class="my-1">
                Working on equity crowdfunding platform with Nuxt,Pug, Tailwind
              </li>
              <li class="my-1">
                Julizar's representative from tech side to communicate with OJK, Aludi, and IDX
              </li>
              <li class="my-1">
                Benchmarked User Interface for Julizar current site.
              </li>
            </ul>
          </div>
        </div>
        <div v-if="activetab ==='5'" class="tabcontent bg-primaryColor">
          <div class="mb-4">
            <h1 class="font-bold  text-xl">
              UI/UX - Intern <a href="http://www.slabdsgn.com/" class="text-primaryColor">@Slab! Design Studio</a>
            </h1>
            <div class="text-base font-medium text-gray-500 mt-2">
              Jul 2020 - Sep 2020
            </div>
            <ul class="list-disc mt-4 ml-8 text-base">
              <li class="my-1">
                Working on equity crowdfunding platform with Nuxt,Pug, Tailwind
              </li>
              <li class="my-1">
                Julizar's representative from tech side to communicate with OJK, Aludi, and IDX
              </li>
              <li class="my-1">
                Benchmarked User Interface for Julizar current site.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return { activetab: '1' }
  }
}
</script>

<style>
.tabs {
    overflow: hidden;
}

.tabs a{
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border-left: 1px solid #ccc;
    font-weight: bold;
}

.tabs a.active {
    color: #4952FC;
    background-color: #F2F2F2;
    border-left: 2px solid #4952FC;
    cursor: default;
}
</style>
