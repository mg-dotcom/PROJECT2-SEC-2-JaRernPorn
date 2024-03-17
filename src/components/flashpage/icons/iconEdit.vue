<template>
  <svg
    width="25"
    height="25"
    viewBox="0 0 32 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 33H2M28.2578 10.666L14.4444 24.7524L8.22222 26.6189L10.0422 20.2377L23.8556 6.07162C24.4398 5.42304 25.2511 5.03865 26.1114 5.00276C26.9717 4.96687 27.8107 5.28242 28.4444 5.88018C28.745 6.20361 28.9791 6.58569 29.1329 7.00373C29.2866 7.42176 29.3569 7.86722 29.3394 8.31365C29.322 8.76008 29.2173 9.19836 29.0315 9.60246C28.8457 10.0066 28.5826 10.3683 28.2578 10.666Z"
      stroke="black"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>

  <slot name="content">
    <div>Custom Content Here</div>
  </slot>
</template>
