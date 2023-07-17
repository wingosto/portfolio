<script>
    import Chip from "./ui/Chip.svelte";

    export let jobTitle, companyName, type, desc, tech, dateStart, dateEnd;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 mb-8 md:mb-2">
    <div class="flex md:py-4 md:text-end">
        <p class="uppercase flex-1 px-4 text-gray-400text-sm">{dateStart} - {dateEnd}</p>
        <div class="h-full w-[1px] bg-[#443C68] invisible md:visible"></div>
    </div>
    <div class="p-4 rounded-md">
        <p class="font-bold">{jobTitle} @ {companyName}</p>
        <p class="text-sm">{type}</p>
        <div class="py-4 text-gray-300">
            {#each desc as p}
                <p>{p}</p>
            {/each}
        </div>
        <div class="flex flex-wrap gap-2 w-full">
            {#each tech as t}
                <Chip text={t} />
            {/each}
        </div>
    </div>
</div>