import FileUpload from "../components/FileUpload";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] flex flex-col items-center">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-violet-600 text-white py-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sales Insight
              <span className="block text-blue-100">
                Automator
              </span>
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              Upload your quarterly sales data and instantly receive an
              AI-generated executive summary delivered directly to your inbox.
            </p>

            <div className="flex gap-4 text-sm text-blue-100">
              <span>⚡ AI Powered</span>
              <span>📊 Data Insights</span>
              <span>📧 Instant Delivery</span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg text-center">

            <h3 className="text-xl font-semibold mb-2">
              Quick AI Sales Summary
            </h3>

            <p className="text-blue-100 text-sm">
              Upload CSV or Excel data and get instant insights.
            </p>

          </div>

        </div>

      </section>

      {/* FORM SECTION */}
      <section className="w-full flex justify-center px-6 -mt-16 mb-20">

        <FileUpload />

      </section>

    </div>
  );
};

export default Home;