import Image from "next/image";

export function AuthIllustration() {
  return (
    <section className="hidden bg-[#fef6f7] md:block md:w-1/2">
      <div className="relative h-full w-full">
        <Image
          src="/Website Assets/Illustrasi Login.png"
          alt="Registration illustration"
          fill
          className="object-contain p-8"
          priority
        />
      </div>
    </section>
  );
}
