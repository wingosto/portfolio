<script>
    import EmailIcon from './icons/EmailIcon.svelte';
    import LinkedInIcon from './icons/LinkedInIcon.svelte';
    import GithubIcon from './icons/GithubIcon.svelte';

    import { t } from "../stores/i18n";
    import ArrowIcon from "./icons/ArrowIcon.svelte";

    const socials = [
        {
            icon: EmailIcon,
            href: "mailto: pedroribeiro.programming@gmail.com"
        },
        {
            icon: LinkedInIcon,
            href: "https://www.linkedin.com/in/pedroribeiroprog/"
        },
        {
            icon: GithubIcon,
            href: "https://github.com/wingosto"
        }
    ]
</script>

<div id="contacts">
    <div class="flex items-center py-10">
        <div class="flex-1 h-[1px] bg-[#443C68]"></div>
        <h1 class="text-3xl font-bold px-10">{$t("contactsTitle")}</h1>
        <div class="flex-1 h-[1px] bg-[#443C68]"></div>
    </div>
    <div class="flex justify-center px-10">
        <div class="flex flex-col gap-4">
            <div class="flex items-center justify-center py-2 gap-5">
                {#each socials as social}
                    <a href={social.href} target="_blank" rel="noopener noreferrer" class="border border-[#393053] hover:bg-[#393053] hover:text-white p-4">
                        <svelte:component this={social.icon} height={"28px"} width={"28px"} /> 
                    </a>
                {/each}
            </div>
            <a href={$t("resumeLink")} target="_blank" rel="noopener noreferrer" class="flex items-center p-3 text-center border border-[#393053] hover:bg-[#393053] group">
                <div class="flex-1">
                    {$t("resume")}
                </div>
                <div class="transition-transform group-hover:translate-x-1"><ArrowIcon width={"22px"} height={"22px"}/></div>
            </a>
        </div>
    </div>
</div>