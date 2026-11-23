import LoginForm from "@/features/auth/components/LoginForm";
import ParticleMark from "@/features/auth/components/ParticleMark";

export const metadata = {
  title: "Log in",
};

export const viewport = {
  themeColor: "#000000",
};

/**
 * Split layout from 768px up: animation on the left, login form on the right.
 * On phones the two halves stack, animation on top.
 */
export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-black py-10 text-white [color-scheme:dark] md:flex-row md:py-0">
      {/* Left: animated visual */}
      <section className="flex items-center justify-center px-5 md:flex-1 md:border-r md:border-white/10 md:bg-white/[0.02] md:p-10 lg:p-12">
        <div className="w-60 sm:w-72 md:w-full md:max-w-[440px]">
          <ParticleMark />
        </div>
      </section>

      {/* Right: heading + email/password form */}
      <section className="flex items-center justify-center px-5 pt-6 md:flex-1 md:px-8 md:py-10 lg:px-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center md:text-left">
            <h1 className="text-5xl font-semibold tracking-tight">Welcome</h1>
            <p className="mt-3 text-base text-white/55">Your Flutter learning journey starts here</p>
          </div>

          <LoginForm />

          <p className="mt-8 text-center text-xs leading-relaxed text-white/40 md:text-left">
            By pressing “Continue” you agree to our
            <br />
            Terms of Service and Privacy Policy
          </p>
        </div>
      </section>
    </main>
  );
}
