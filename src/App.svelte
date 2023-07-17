<script>
  import Navbar from './components/Navbar.svelte';
  import Intro from './components/Intro.svelte';
  import Jobs from './components/Jobs.svelte';
  import Education from './components/Education.svelte';
  import Projects from './components/Projects.svelte';
  import Contacts from './components/Contacts.svelte';
  import Footer from './components/Footer.svelte';
</script>

<main class="relative bg-[#111] text-white overflow-hidden">
  <Navbar />
  <div class="container mx-auto px-6 md:px-8 lg:px-32">
    <Intro />
    <Jobs />
    <Education />
    <Projects />
    <Contacts />
    <Footer />
  </div>
</main>
