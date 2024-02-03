<article class="flex h-auto w-full flex-col gap-3 xs:w-full">
  <img
    class="h-auto w-full rounded-3xl object-cover object-center xs:h-60"
    src="https://images.pexels.com/photos/17147171/pexels-photo-17147171/free-photo-of-moda-modelo-retrato-mercado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="Hoddie Tejida"
  >

  <div class="flex w-full items-center justify-between">
    <div class="grid grid-flow-row gap-0.5">
      <strong class="text-sm">${{ $price }} MXN</strong>
      <h3 class="font-normal">{{ $name }}</h3>
    </div>

    <span class="grid h-10 w-10 place-content-center rounded-full bg-magic-500">
      <x-icons.cart class="h-7 w-7 fill-magic-100" />
    </span>
  </div>
</article>
