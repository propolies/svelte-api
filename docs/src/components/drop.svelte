<script>
  import Dropdown from "$lib/components/dropdown.svelte";
  import { goto } from "$app/navigation";
</script>

<div class="flex flex-col gap-4 items-center w-56 {$$props.class}">
  <Dropdown onClick={() => goto("/docs/setup")}
    name="Get started" items={[
      "Setup"
    ]} />
  <Dropdown onClick={() => goto("/docs/call")} 
    name="Router" items={[
      "Call",
      "Args",
      "Context",
      "Nesting"
    ]} />
  <Dropdown onClick={() => goto("/docs/simple-example")} 
    name="Examples" items={[
      "Simple-example"
    ]} />
</div>