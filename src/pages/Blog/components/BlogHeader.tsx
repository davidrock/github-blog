import { EffectSquaresLeft, EffectSquaresRight, Logo } from '@components/icons';

export function BlogHeader() {
  return (
    <div className="bg-base-profile py-6">
      <div className="flex justify-between items-center">
        <EffectSquaresLeft />
        <Logo className="-mt-8" />
        <EffectSquaresRight />
        <div className="absolute top-0 left-0 -mt-16 bg-[radial-gradient(ellipse_at_center,_#0078f0_0%,#071422_70%)] rounded-full opacity-5 h-[255px] w-[255px]"></div>
        <div className="absolute top-0 right-0 -mt-16 bg-[radial-gradient(ellipse_at_center,_#0078f0_0%,#071422_70%)] rounded-full opacity-5 h-[255px] w-[255px]"></div>
        <div className="absolute backdrop-brightness-100 mx-auto -mb-32 bg-[radial-gradient(ellipse_at_center,_#455689_10%,#0B1B2B_60%)] opacity-15 h-40 w-screen"></div>
      </div>
    </div>
  );
}
