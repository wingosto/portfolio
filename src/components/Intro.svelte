<script>
    import { t } from "../stores/i18n";
</script>

<div class="flex justify-center">
    <div class="flex flex-col text-center md:text-left md:flex-row items-center md:justify-center p-10">
        <img src="photo.png" alt="My face" draggable="false" class="h-48 w-48 rounded-full p-2 border border-[#443C68]" />
        <div class="flex-1 p-4">
            <p class="text-3xl"> Pedro Ribeiro </p>
            <p class="text-xl">{$t("jobTitle")}</p>
        </div>
    </div>
</div>