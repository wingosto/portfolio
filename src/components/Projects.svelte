<script>
    import Project from "./Project.svelte";
    import { t } from "../stores/i18n";

    import AnimationInView from "./special/AnimationInView.svelte";
</script>

<div id="projects">
    <div class="flex items-center py-10">
        <h1 class="text-3xl font-bold pr-10"> {$t("projectsTitle")} </h1>
        <div class="flex-1 h-[1px] bg-[#443C68]"></div>
    </div>
    <div class="py-5 md:p-10">
        {#each $t("projects") as project, i}
            <AnimationInView delay={i*100}>
                <Project {...project} />
            </AnimationInView>
        {/each}
    </div>
</div>