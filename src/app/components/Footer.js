export default function Footer() {
  return (
    <>
      <div class="w-full bg-transparent mt-12 max-w-6xl mx-auto">
        <div class="mb-6 flex items-center justify-between text-sm">
          <h1 class="hidden sm:flex text-gray-400 transition-all font-[galano] font-medium tracking-tight">
            Copyright © 2023-2024 Thendra
          </h1>
          <h1 class="flex items-center text-gray-400 tracking-tight font-[galano]">
            Developed with
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class="mr-1 ml-1 text-[#0066FF]"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
            </svg>
            by Thendra
          </h1>
        </div>
      </div>
    </>
  );
}
