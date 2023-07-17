<script>
    import Chip from "./ui/Chip.svelte";
    import ExternalIcon from "./icons/ExternalIcon.svelte";
    import GithubIcon from "./icons/GithubIcon.svelte";

    export let name, image, desc, git, liveURL, dateStart, dateEnd, tech;
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
    <div class="flex flex-col justify-center p-4">
        <div class="flex items-center">
            <div class="flex-1">
                <p class="text-lg font-bold">{name}</p>
                <p>{dateStart} - {dateEnd}</p>
            </div>
            <div class="flex gap-4">
                <a href={git} target="_blank" rel="noopener noreferrer" class="hover:text-purple-300">
                    <GithubIcon height={"22px"} width={"22px"} />
                </a>
                {#if liveURL}
                    <a href={liveURL} target="_blank" rel="noopener noreferrer" class="hover:text-purple-300">
                        <ExternalIcon height={"22px"} width={"22px"} />
                    </a>
                {/if}
            </div>
        </div>
        <div class="h-[1px] bg-[#443C68] my-5"></div>
        <p class="text-gray-300">{desc}</p>
        <div class="flex flex-wrap gap-2 mt-4">
            {#each tech as t}
                <Chip text={t} />
            {/each}
        </div>
    </div>
    <img src={image} alt="Project home page" class="object-contain p-4 border border-[#443C68] h-[300px] hidden md:block" />
</div>