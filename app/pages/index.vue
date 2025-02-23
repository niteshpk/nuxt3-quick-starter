<template>
  <div>
    <ULandingHero title="Learn, build and grow together"
      description="We are a community of developers, designers, creators, and builders. We are here to help you learn, build, and grow together.">
      <template #links>
        <UButton to="/blogs" size="lg" icon="i-heroicons-book-open">
          Learn More
        </UButton>

        <UButton to="/about-me" size="lg" color="gray" icon="i-heroicons-cube-transparent">
          About Me
        </UButton>
      </template>
    </ULandingHero>

    <ULandingSection id="learning-paths" title="The freedom to build anything">
      <template #description>
        We work with different technologies and tools to help you build anything you want. Starting with Front end
        development to Backend development, we have got you covered. We also cover the Full stack development.
      </template>

      <UPageGrid>
        <UPageCard icon="i-heroicons-computer-desktop" title="Front end development"
          description="Front end development focuses on creating the user interface and user experience of an application. It involves using technologies like HTML, CSS, and JavaScript to build responsive and interactive web pages. A strong front end ensures that users have a seamless and engaging experience while interacting with your application." />
        <UPageCard icon="i-simple-icons-amazondocumentdb" title="Backend / API development"
          description="APIs are the bridges that connect different parts of an application, allowing them to communicate and share data. Developing robust APIs is crucial for enabling frontend and backend systems to work together harmoniously. With well-designed APIs, you can create scalable and maintainable applications that can easily integrate with third-party services and platforms." />
        <UPageCard icon="i-simple-icons-nodedotjs" title="Full stack development"
          description="Backend development is the backbone of any application, handling the server-side logic, database interactions, and API integrations. It ensures that the application runs smoothly, efficiently, and securely. With a strong backend, you can manage user authentication, data storage, and business logic, providing a seamless experience for your users." />
      </UPageGrid>
    </ULandingSection>

  </div>
</template>
