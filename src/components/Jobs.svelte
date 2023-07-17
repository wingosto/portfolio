<script>
    import AnimationInView from "./special/AnimationInView.svelte";
    import Job from "./Job.svelte";
    import { t } from "../stores/i18n";
</script>

<div id="work">
    <div class="flex items-center py-10">
        <h1 class="text-3xl font-bold pr-10">{$t("jobsTitle")}</h1>
        <div class="flex-1 h-[1px] bg-[#443C68]"></div>
    </div>
    <div class="py-5 md:p-10">
        {#each $t("jobs") as work, i}
            <AnimationInView delay={i*100}>
                <Job {...work} />
            </AnimationInView>
        {/each}
    </div>
</div>