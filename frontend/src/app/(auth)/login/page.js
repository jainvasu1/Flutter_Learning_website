import LoginForm from "@/features/auth/components/LoginForm";
import ParticleMark from "@/features/auth/components/ParticleMark";

export const metadata = {
  title: "Log in",
};

export const viewport = {
  themeColor: "#000000",
};

export default function LoginPage() {
  return (
    <main className="flex flex-1 flex-col items-center bg-black px-5 pb-8 pt-10 text-white [color-scheme:dark]">
      <div className="flex w-full max-w-sm flex-1 flex-col">
        {/* Animated visual */}
        <div className="flex min-h-56 flex-1 items-center justify-center py-8">
          <ParticleMark />
        </div>

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-semibold tracking-tight">Welcome</h1>
          <p className="mt-3 text-base text-white/55">Your Flutter journey starts from here</p>
        </div>

        <LoginForm />

        <p className="mt-8 text-center text-xs leading-relaxed text-white/40">
          By pressing “Continue” you agree to our
          <br />
          Terms of Service and Privacy Policy
        </p>
      </div>
    </main>
  );
}
