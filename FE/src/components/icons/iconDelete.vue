<template>
  <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M23.3333 10.2083V5.83333C23.3333 5.44656 23.1796 5.07563 22.9062 4.80214C22.6327 4.52865 22.2617 4.375 21.875 4.375H13.125C12.7382 4.375 12.3673 4.52865 12.0938 4.80214C11.8203 5.07563 11.6666 5.44656 11.6666 5.83333V10.2083M14.5833 16.0417V24.7917M20.4166 16.0417V24.7917"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5.83337 10.208H29.1667M26.25 29.1663V10.208H8.75004V29.1663C8.75004 29.5531 8.90369 29.924 9.17718 30.1975C9.45067 30.471 9.8216 30.6247 10.2084 30.6247H24.7917C25.1785 30.6247 25.5494 30.471 25.8229 30.1975C26.0964 29.924 26.25 29.5531 26.25 29.1663Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

  </div>
  <slot name="content">
    <div>Custom Content Here</div>
  </slot>
</template>
