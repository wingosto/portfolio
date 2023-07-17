<script>
    import LanguageIcon from "../icons/LanguageIcon.svelte";

    export let items = [];
    export let selectedItem = "";

    let container;
    let isOpen = false;
    function toggle() {
        isOpen = !isOpen;
    }

    function chooseOption(id) {
        selectedItem = id;
    }

    function checkClickOutside(e) {
        if (container.contains(e.target) == false) 
            isOpen = false;
    }

    $: selectedItemValue = items.find(i => i.id === selectedItem).value;
</script>

<svelte:window on:click={checkClickOutside} />

<div bind:this={container} class="relative min-w-[140px]" on:click={toggle}>
    <div class="flex items-center cursor-pointer p-2 rounded-sm border border-[#443C68] hover:bg-[#191919]" class:bg-[#191919]={isOpen}>
        <LanguageIcon height={"22px"} width={"22px"}/>
        <div class="mx-2 border border-[#443C68]"></div>
        <p>{selectedItemValue}</p>
    </div>
    {#if isOpen}
        <div class="absolute right-0 mt-2 min-w-full py-2 border border-[#443C68]">
            {#each items as {id, value}}
                <p class={"cursor-pointer px-4 bg-black text-white hover:bg-white hover:text-black"} class:bg-gray-700={id === selectedItem} on:click={() => chooseOption(id)}>{value}</p>
            {/each}
        </div>
    {/if}
</div>