<script>
    import { slide } from 'svelte/transition';
    import { t, locale, locales } from "../stores/i18n";

    import Select from "./ui/Select.svelte";
    
    const navItems = [
        {
            name: "navWork",
            href: "#work"
        },
        {
            name: "navEducation",
            href: "#education"
        },
        {
            name: "navProjects",
            href: "#projects"
        },
        {
            name: "navContacts",
            href: "#contacts"
        }
    ];

    let isOpened = false;
    function toggleNav() {
        isOpened = !isOpened;
        document.body.style.overflow = isOpened ? "hidden" : "visible";
    }
</script>

<nav>
    <div class="hidden md:flex p-5 items-center justify-end gap-2">
        {#each navItems as navItem}
            <a href={navItem.href} class="p-2 transition-colors hover:text-purple-300">{$t(navItem.name)}</a>
        {/each}
        <Select bind:selectedItem={$locale} items={locales} />
    </div>
    <div class="md:hidden">
        {#if isOpened}
            <div class="fixed flex flex-col right-0 h-full w-3/4 p-7 bg-[#111] border-l border-[#443C68] z-10" in:slide={{axis: 'x'}} out:slide={{axis: 'x'}}>
                <div class="h-7" />
                <div class="flex-1 flex flex-col justify-center gap-4 text-lg">
                    {#each navItems as navItem}
                        <a href={navItem.href} class="p-2 transition-colors hover:text-purple-300 text-center" on:click={toggleNav}>{$t(navItem.name)}</a>
                    {/each}
                    <br/>
                    <Select bind:selectedItem={$locale} items={locales} />
                </div>
            </div>
        {/if}
        <div class={"flex p-5 justify-end"}>
            <button class="relative h-7 w-7 z-10" on:click={toggleNav}>
                <div class="absolute top-1 right-0 h-0.5 w-full bg-white transition-all" class:xStylesL={isOpened} />
                <div class="absolute top-3 right-0 h-0.5 w-3/4 bg-white transition-all" class:xStylesR={isOpened} />
                <div class="absolute top-5 right-0 h-0.5 w-2/4 bg-white transition-all" class:xStylesR={isOpened} />
            </button>
        </div>
    </div>
</nav>

<style>
    .xStylesL {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        width: 100%;
    }
    .xStylesR {
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
        width: 100%;
    }
</style>