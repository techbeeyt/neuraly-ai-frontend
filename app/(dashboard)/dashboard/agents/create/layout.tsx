import StepsContainer from "@/components/dashboard/create/steps-container";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="flex justify-start items-start">
        <div className="md:w-[300px] w-[160px] md:pt-10 pt-4 md:pl-10 pl-4">
          <StepsContainer />
        </div>

        {/* Step Contents */}
        <div className="flex-grow md:pt-10 pt-4 overflow-auto md:h-[calc(100vh-72px)] h-[calc(100vh-64px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
