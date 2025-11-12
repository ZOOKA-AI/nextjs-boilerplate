export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full text-center sm:text-right">
          <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
            منصة زوكا
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Zooka Platform
          </p>
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-right w-full">
          <h2 className="max-w-xl text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            مرحباً بكم في منصة زوكا العالمية
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            منصة عالمية مصممة خصيصاً للعالم العربي والإسلامي، ملتزمة بالقيم الإسلامية والتميز التقني.
          </p>
          <p className="max-w-md text-base leading-7 text-zinc-500 dark:text-zinc-500">
            Welcome to Zooka - A global platform designed for the Arab and Islamic world, 
            committed to Islamic values and technical excellence.
          </p>
          
          <div className="bg-emerald-50 dark:bg-emerald-950 p-6 rounded-lg w-full border border-emerald-200 dark:border-emerald-800">
            <h3 className="text-xl font-semibold text-emerald-800 dark:text-emerald-300 mb-3">
              🚀 الأسبوع 9: الإطلاق العالمي
            </h3>
            <ul className="text-sm text-zinc-700 dark:text-zinc-300 space-y-2">
              <li>✅ إعداد خطة الإطلاق الإعلامية والعملياتية</li>
              <li>✅ توسعة تغطية الاتصالات الفضائية والدعم الفني</li>
              <li>✅ التحقق من توفر المحتوى النهائي والتوافق الشرعي</li>
              <li>✅ جاهزون للإطلاق الرسمي للعالم العربي والإسلامي</li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row-reverse w-full justify-center sm:justify-start">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 px-5 text-white transition-colors md:w-[200px]"
            href="/docs/launch/LAUNCH_PLAN.md"
            rel="noopener noreferrer"
          >
            📋 خطة الإطلاق
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-emerald-600 dark:border-emerald-400 px-5 transition-colors hover:bg-emerald-50 dark:hover:bg-emerald-950 text-emerald-700 dark:text-emerald-300 md:w-[200px]"
            href="/docs/launch/SHARIA_COMPLIANCE.md"
            rel="noopener noreferrer"
          >
            ☪️ التوافق الشرعي
          </a>
        </div>
        
        <div className="w-full text-center sm:text-right text-sm text-zinc-500 dark:text-zinc-500 mt-8">
          <p className="font-arabic">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
          <p className="mt-1">In the name of Allah, the Most Gracious, the Most Merciful</p>
        </div>
      </main>
    </div>
  );
}
