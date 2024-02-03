<form class="p-4">
  <label
    class="sr-only mb-2 text-sm font-medium"
    for="search-product"
  >Search</label>
  <div class="relative">
    <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
      <x-icons.search class="h-4 w-4 fill-magic-600" />
    </div>
    <input
      class="text- h-10 w-full rounded-lg border-none bg-magic-100 ps-10 text-sm placeholder-magic-700 focus:ring-transparent"
      id="search-product"
      type="search"
      placeholder="Buscar un producto..."
      required
    >
  </div>
</form>
