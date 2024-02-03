<!DOCTYPE html>
<html lang="en">
{{-- blade-formatter-disable --}}
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <!-- Scripts -->
  @vite(['resources/css/app.css', 'resources/js/app.js'])

  <!-- Styles -->
  <style>
    :root {
      color-scheme: light dark;
    }

    html {
      font-family: system-ui, sans-serif;
    }

    body{
      background-color: white
    }
  </style>
</head>
{{-- blade-formatter-enable --}}

<body>
  @include('layouts.header')
  @include('components.search')
  @include('components.nav-category')
</body>

</html>
