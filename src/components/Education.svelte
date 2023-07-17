<script>
    import AnimationInView from "./special/AnimationInView.svelte";
    import Course from "./Course.svelte";
    import { t } from "../stores/i18n";
</script>

<div id="education">
    <div class="flex items-center py-10">
        <h1 class="text-3xl font-bold pr-10">{$t("educationTitle")}</h1>
        <div class="flex-1 h-[1px] bg-[#443C68]"></div>
    </div>
    <div class="py-5 md:p-10">
        {#each $t("courses") as course, i}
            <AnimationInView delay={i*100}>
                <Course {...course} />
            </AnimationInView>
        {/each}
    </div>
</div>