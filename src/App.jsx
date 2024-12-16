import ContactForm from "./ContactForm";

const ComingSoonPage = () => {

  return (
    <div className="min-h-screen bg-zinc-900 text-pink-50 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-zinc-800 px-4 py-3 flex justify-center items-center">
        <div className="text-2xl font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(219,39,119,0.5)] ">Sasha Decor</div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-pink-400 drop-shadow-[0_0_10px_rgba(219,39,119,0.5)]">
          We&apos;re Coming Soon
        </h1>

        <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
          We&apos;re crafting something extraordinary.
          Get ready for a revolutionary shopping experience.
        </p>

        <div className="bg-zinc-800 shadow-2xl rounded-xl p-8 w-full max-w-md border border-zinc-700">
          <h2 className="text-2xl font-bold mb-6 text-pink-400">Stay Connected</h2>

          {/* {submitted && <div className="text-center text-green-400 font-semibold">
            Thank you for your feedback! We&apos;ll get back to you soon.
          </div>} */}

          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-800 text-zinc-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Sasha Decor. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoonPage;