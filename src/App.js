import "./App.css";
const baseUrl = process.env.PUBLIC_URL;

const App = () => <>
  <h1 className="text-3xl font-bold underline">Testing Tailwind css</h1>

  <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src={`${baseUrl}/images/fake-chat.png`} alt="Fake chat PNG" />
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div>

<div class="py-8 px-8 my-8 max-w-sm mx-auto bg-orange-50 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src={`${baseUrl}/images/goofy.webp`} alt="Goofy Face" />
  <div class="text-center space-y-2 sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg text-black font-semibold">
        Goofy
      </p>
      <p class="text-slate-500 font-medium">
        Funny dog
      </p>
    </div>
    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message with hover state</button>
  </div>
</div>

<a href="/" class="bg-gradient-to-r from-pink-200 via-green-200 to-transparent group block max-w-xs mx-auto rounded-lg p-6 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:ring-sky-500 hover:border-4 hover:border-pink-700 hover:border-double hover:rounded-2xl">
  <div class="flex items-center space-x-3">
    <div>Ok let's try a gradient too</div>
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold line-through capitalize border-t-8 border-purple-700">capitalised line through with border top and color test</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm rotate-12 skew-x-6">This box has a hover state - rotated text test</p>
</a>

<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 bg-white dark:bg-slate-800">
  some grid responsive stuff Responsive
</div>
</>;

export default App;
