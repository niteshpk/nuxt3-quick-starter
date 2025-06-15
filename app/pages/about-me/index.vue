<template>
  <div class="my-16 sm:py-8 px-4 p-8 space-y-8 max-w-7xl gap-8 sm:px-6 lg:px-8 sm:gap-y-8 flex flex-col mx-auto">
    <!-- Profile Section -->
    <UCard>
      <div class="flex flex-col md:flex-row items-center gap-6">
        <UAvatar :src="profile.photo" size="3xl" />
        <div>
          <h1 class="text-2xl font-bold">{{ profile.name }}</h1>
          <p class="text-gray-400">{{ profile.designation }}</p>
          <p class="text-sm text-gray-500 flex items-center justify-start gap-2">
            <UIcon name="i-lucide-mail" class="text-primary-400" /> {{ profile.email }}
          </p>
          <p class="text-sm text-gray-500 flex items-center justify-start gap-2">
            <UIcon name="i-lucide-phone" class="text-primary-400" />
            {{ profile.phone }}
          </p>
          <p class="text-sm text-gray-500 flex items-center justify-start gap-2">
            <UIcon name="i-lucide-briefcase" class="text-primary-400" />
            {{ profile.experience }}</p>
        </div>
        <div class="flex flex-wrap gap-2 justify-center md:justify-start">
          <UBadge v-for="(skill, index) in profile.skills" :key="index" color="blue" variant="soft" size="md">
            {{ skill }}
          </UBadge>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 justify-center pt-8">
        <UButton color="primary" icon="i-heroicons-document-arrow-down" @click="downloadShortResume">
          View Short Resume
        </UButton>
        <UButton color="gray" icon="i-heroicons-document-arrow-down" @click="downloadLongResume">
          View Long Resume
        </UButton>
        <UButton color="gray" icon="i-simple-icons-github" :to="githubLink" target="_blank">
          GitHub
        </UButton>
        <UButton color="gray" icon="i-simple-icons-linkedin" :to="linkedInLink" target="_blank">
          LinkedIn
        </UButton>
      </div>
    </UCard>

    <!-- Resume Section -->
    <UCard>
      <h2 class="text-xl font-semibold mb-4">My Resume</h2>
      <UAccordion :items="resumeSections" multiple>
        <template #item="{ item }">
          <div v-html="item.content" class="text-sm" />
        </template>
      </UAccordion>
    </UCard>

    <!-- Contact Form -->
      <UCard>
      <h2 class="text-xl font-semibold mb-4">Get in Touch</h2>
      <ContactForm />
    </UCard>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import { useFetch } from '#app'

const form = ref({
  name: '',
  email: '',
  phone: '',
  whatsapp: '',
  message: ''
})

const githubLink = "https://github.com/niteshtpk";
const linkedInLink = "https://www.linkedin.com/in/nitesh-kesarkar-4b923694";

const profile = {
  name: "Nitesh Kesarkar",
  designation: "Senior Software Enginer",
  email: "niteshkesarkar136@gmail.com",
  phone: "+91-8446363349",
  experience: "9+ years",
  photo: "/me.png",
  skills: [
    'MEAN', 'MERN', 'Vue.js', 'HTML', 'CSS', 'Bootstrap', 'Angular Material', 'Tailwind CSS', 'Semantic UI',
    'TypeScript', 'JavaScript', 'PHP', 'Laravel', 'Joomla', 'OpenCart',
    'SQL', 'Firebase', 'MySQL', 'MongoDB',
    'Git', 'Bitbucket', 'Jira',
    'Azure DevOps', 'Docker', 'GitHub CI-CD', 'SonarCloud',
  ]
}


const resumeSections = [
  {
    key: 'education',
    label: '🎓 Education',
    content: `
    <div class="mx-50p">
      <ul class="list-disc list-inside space-y-1 flex flex-col gap-4">
      <li>
        <strong>Bachelor of Engineering</strong>
        <p class="text-sm text-gray-500">Specialization: Computer Science & Engineering</p>
        <p class="text-sm text-gray-500">Sharad Institute of Technology College of Engineering, Yadrav</p>
        <p class="text-sm text-gray-500">Shivaji University</p>
        <p class="text-sm text-gray-500">2012 – 2016</p>
        <p class="text-sm text-gray-500">Marks: 67.69% (Distinction)</p>
      </li>
      <li>
        <strong>Higher Secondary Certificate (HSC / 12th STD)</strong>
        <p class="text-sm text-gray-500">Specialization: Computer Science</p>
        <p class="text-sm text-gray-500">Dattajirao Kadam Arts, Science and Commerce College, Ichalkaranji</p>
        <p class="text-sm text-gray-500">Kolhapur Board</p>
        <p class="text-sm text-gray-500">2011 – 2012</p>
        <p class="text-sm text-gray-500">Marks: 60.51 (First Class)</p>
      </li>
      <li>
        <strong>Secondary School Certificate (SSC / 10th STD)</strong>
        <p class="text-sm text-gray-500">Ashoka High School, Ichalkaranji</p>
        <p class="text-sm text-gray-500">Kolhapur Board</p>
        <p class="text-sm text-gray-500">2009 – 2010</p>
        <p class="text-sm text-gray-500">Marks: 83.40 (Distinction)</p>
      </li>
    </ul>
    </div>`
  },
  {
    key: 'experience',
    label: '💼 Work Experience',
    content: `
      <div class="mx-50p">
        <ul class="list-disc list-inside space-y-1">
          <li>Team Lead at CodeBlaze Solutions Pvt. Ltd., Pune (Jul 2024 - Present) [1 year]</li>
          <li>Senior Frontend Developer at CodeBlaze Solutions Pvt. Ltd., Pune (Aug 2023 - Jul 2024) [1 year]</li>
          <li>Web UI Developer at Globant India Pvt. Ltd., Pune (Jul 2021 - Aug 2023) [2 years 2 months]</li>
          <li>Sr Software Engineer at Infrrd Pvt. Ltd., Bengaluru (Sep 2020 - Jul 2021) [11 months]</li>
          <li>Software Engineer at Tekdi Technologies Pvt. Ltd., Pune (Nov 2019 - Sep 2020) [11 months]</li>
          <li>Software Developer at Shivneri Systems Pvt. Ltd., Ichalkaranji (Dec 2017 - Nov 2019) [2 years]</li>
          <li>Trainee PHP Developer at Tekdi Technologies Pvt. Ltd., Pune (Dec 2016 - Dec 2017) [1 year 1 month]</li>
          <li>Junior Software Developer at Tekdi Technologies Pvt. Ltd., Pune (Jun 2016 - Dec 2016) [7 months]</li>
        </ul>
      </div>
    `
  },
  {
    key: 'projects',
    label: '👷 Projects',
    content: `
      <div class="mx-50p">
        <ul class="list-disc list-inside space-y-1 flex flex-col gap-4">
        <li class="space-y-4">
          <strong>ENGINE</strong><br />
          <em>(Angular 14, SCSS, Angular Material, Bootstrap)</em><br />
          ENGINE is a powerful marine fuel platform designed to simplify bunker procurement with data-driven insights. It helps users compare fuel prices, check availability, and assess quality to avoid off-spec fuel. It provides real-time updates and tools to reduce costs. <br />
          <a href="https://engine.online/" target="_blank" class="project-link">https://engine.online/</a>
        </li>
        
        <li class="space-y-4">
          <strong>Ship-Watch</strong><br />
          <em>(Angular 18, SCSS, Tailwind, NgRx, RxJs, Leaflet)</em><br />
          Ship-Watch combines marine expertise with analytics to enhance voyage execution and track emissions. Provides dashboards, forecasting, and compliance monitoring. <br />
          <a href="https://www.ship-watch.com/" target="_blank" class="project-link">https://www.ship-watch.com/</a>
        </li>

        <li class="space-y-4">
          <strong>Intelligent Document Processing (IDP)</strong><br />
          <em>(Angular 6, SCSS, HTML5)</em><br />
          Automates extraction from unstructured documents to reduce costs and improve processing. <br />
          <a href="https://www.infrrd.ai/" target="_blank" class="project-link">https://www.infrrd.ai/</a>
        </li>

        <li class="space-y-4">
          <strong>HomeGenius</strong><br />
          <em>(Angular 6, SCSS, HTML5)</em><br />
          Combines real estate data and tools to support homebuyers and sellers with analytics-driven solutions. <br />
          <a href="https://homegenius.com/" target="_blank" class="project-link">https://homegenius.com/</a>
        </li>

        <li class="space-y-4">
          <strong>VidyaDaan 2.0</strong><br />
          <em>(Angular 7, SCSS, HTML5, Semantic UI)</em><br />
          National e-learning contribution program to support learners across India. <br />
          <a href="https://vdn.diksha.gov.in" target="_blank" class="project-link">https://vdn.diksha.gov.in</a>
        </li>

        <li class="space-y-4">
          <strong>Project Sunbird</strong><br />
          <em>(AngularJS, CSS, HTML5, Bootstrap)</em><br />
          Open-source platform for lifelong learning used by Indian education boards. Contributed to the announcement module. <br />
          <a href="https://github.com/project-sunbird" target="_blank" class="project-link">https://github.com/project-sunbird</a>
        </li>

        <li class="space-y-4">
          <strong>Ekstep Learning Platform</strong><br />
          <em>(Joomla, jQuery, CSS, HTML5, Bootstrap, JavaScript)</em><br />
          Platform with literacy resources. Worked on analytics, dictionaries, filters. <br />
          <a href="https://www.ekstep.in" target="_blank" class="project-link">https://www.ekstep.in</a>
        </li>

        <li class="space-y-4">
          <strong>School Portal</strong><br />
          <em>(Laravel, Vue.js, API, FCM, SMS Gateway, CSS, HTML5, Bootstrap)</em><br />
          Manages school academics, attendance, and parent notifications. Worked on backend and API development. <br />
          <a href="https://www.youtube.com/watch?v=r30-so-GJZQ" target="_blank" class="project-link">https://www.youtube.com/watch?v=r30-so-GJZQ</a>
        </li>

        <li class="space-y-4">
          <strong>The Ichalkaranji Hardware</strong><br />
          <em>(Opencart, API, FCM, SMS Gateway, CSS, HTML5, Bootstrap)</em><br />
          Bulk ordering platform with SMS/FCM/email notifications. Developed backend and API. <br />
          <a href="https://www.youtube.com/watch?v=qG4gDo-CJUY" target="_blank" class="project-link">https://www.youtube.com/watch?v=qG4gDo-CJUY</a>
        </li>
        </ul>
      </div>
    `
  },
  {
    key: 'certifications',
    label: '🏅 Achievements & Certifications',
    content: `
    <div class="mx-50p">
      <ul class="list-disc list-inside space-y-1 flex flex-col gap-4">
        <li>
          <a href="https://www.linkedin.com/learning/certificates/c7db1cc131781e1fc3012526a7724f328f2681200e3f2c7f910024b6e8a8164f" target="_blank" class="project-link font-semibold underline">Software Architecture: From Developer to Architect</a><br />
          <span class="text-sm text-gray-500">LinkedIn Learning &middot; Issued: 26 May 2023 </span>
        </li>
        <li>
          <a href="https://www.linkedin.com/learning/certificates/3275322d151f8477d25dc8895096daf3411dbc703efb5fc104f80631bcff4660" target="_blank" class="project-link font-semibold underline">Agile Foundations</a><br />
          <span class="text-sm text-gray-500">LinkedIn Learning &middot; Issued: 30 May 2023 </span>
        </li>
        <li>
          <a href="https://www.sololearn.com/Certificate/1024-643741/jpg/" target="_blank" class="project-link font-semibold underline">JavaScript Course</a><br />
          <span class="text-sm text-gray-500">Sololearn &middot; Issued: 18 February 2016 </span>
        </li>
        <li>
          <a href="https://www.sololearn.com/Certificate/1014-643741/jpg/" target="_blank" class="project-link font-semibold underline">HTML Course</a><br />
          <span class="text-sm text-gray-500">Sololearn &middot; Issued: 23 February 2016 </span>
        </li>
        <li>
          <a href="https://www.sololearn.com/Certificate/1060-643741/jpg/" target="_blank" class="project-link font-semibold underline">SQL Course</a><br />
          <span class="text-sm text-gray-500">Sololearn &middot; Issued: 23 February 2016 </span>
        </li>
        <li>
          <a href="https://www.sololearn.com/Certificate/1051-643741/jpg/" target="_blank" class="project-link font-semibold underline">C++ Course</a><br />
          <span class="text-sm text-gray-500">Sololearn &middot; Issued: 22 February 2016 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/42/90/1647927973/Nitesh%20Prakash%20Kesarkar/fda69893155754197ad2fb5101bd6776" target="_blank" class="project-link font-semibold underline">Angular Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/46/85/1647930105/Nitesh%20Prakash%20Kesarkar/bdfb2897e735c5038c3757cdbe85fba9" target="_blank" class="project-link font-semibold underline">Vue.js Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/33/80/1647926599/Nitesh%20Prakash%20Kesarkar/117e3856855f9f30e613cc0fae392855" target="_blank" class="project-link font-semibold underline">TypeScript Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/32/94.444444444444/1647927424/Nitesh%20Prakash%20Kesarkar/2bc6492b1654bcd2cb2db1859e3965f4" target="_blank" class="project-link font-semibold underline">ES6 Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/4/90/1647925432/Nitesh%20Prakash%20Kesarkar/205e9fec2ab6ee017e165d6c07fb84a6?version=1" target="_blank" class="project-link font-semibold underline">Javascript Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/45/90/1647929213/Nitesh%20Prakash%20Kesarkar/5ea150e3f1725902304d3b76a2483cca" target="_blank" class="project-link font-semibold underline">Git Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 22 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/44/90/1648037155/Nitesh%20Prakash%20Kesarkar/d1e68d233fea94a04bd2f74c9c704012" target="_blank" class="project-link font-semibold underline">Sass Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 23 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/5/100/1647928292/Nitesh%20Prakash%20Kesarkar/f5e235bd5edee32420bf50db95827650" target="_blank" class="project-link font-semibold underline">CSS Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 23 March 2022 </span>
        </li>
        <li>
          <a href="https://www.w3docs.com/quiz/certificate/47/90/1647929614/Nitesh%20Prakash%20Kesarkar/bc494e462ec91e63aa39aaeca36a2d96" target="_blank" class="project-link font-semibold underline">SQL Basic - Quiz</a><br />
          <span class="text-sm text-gray-500">w3docs &middot; Issued: 23 March 2022 </span>
        </li>
        <li>
          <a href="https://www.testdome.com/cert/5e83e8cde4fa49be8e3719d1a723275b" target="_blank" class="project-link font-semibold underline">Angular and TypeScript - Quiz</a><br />
          <span class="text-sm text-gray-500">TESTDOME &middot; Issued: 8 July 2020 </span>
        </li>
      </ul>
    </div>
  `
  }
]

const downloadResume = (link, target = '_blank') => {
  window.open(link, target)
}

const downloadShortResume = () => {
  downloadResume('/Nitesh-Kesarkar-Short-Resume-Feb-2025.pdf')
}

const downloadLongResume = () => {
  downloadResume('/Nitesh-Kesarkar-Long-Resume-Feb-2025.pdf')
}

</script>

<style scoped>
:deep(.project-link) {
  color: rgb(var(--color-primary-400)) !important;
  text-decoration: underline;
  font-weight: 500;
}

:deep(.project-link:hover) {
  color: rgb(var(--color-primary-500));
  text-decoration: none;
}

:deep(.mx-50p) {
  margin-left: 50px;
  margin-right: 50px;
}
</style>
