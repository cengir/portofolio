<template>
  <!-- component -->
  <div class="w-screen h-screen bg-white flex flex-row flex-wrap p-3">
    <div class="mx-auto w-2/3">
      <!-- Profile Card -->
      <div
        class="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased"
        style="
          background-image: url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
          background-repeat: no-repat;
          background-size: cover;
          background-blend-mode: multiply;
        "
      >
        <div class="md:w-1/3 w-full">
          <img
            class="rounded-lg shadow-lg antialiased"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          />
        </div>
        <div class="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
          <div
            class="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0"
          >
            <div class="text-2xl text-white leading-tight">Admin User</div>
            <div
              class="text-normal text-gray-300 hover:text-gray-400 cursor-pointer"
            >
              <span class="border-b border-dashed border-gray-500 pb-1"
                >Administrator</span
              >
            </div>
            <div
              class="text-sm text-gray-300 hover:text-gray-400 cursor-pointer md:absolute pt-3 md:pt-0 bottom-0 right-0"
            >
              Last Seen: <b>2 days ago</b>
            </div>
          </div>
        </div>
      </div>
      <!-- End Profile Card -->
    </div>
  </div>
</template>