import StepsContainer from "@/components/dashboard/create/steps-container";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="flex justify-start items-start">
        <div className="w-[300px] pt-10 pl-10">
          <StepsContainer />
        </div>

        {/* Step Contents */}
        <div className="flex-grow pt-10 overflow-auto h-[calc(100vh-72px)]">
          {children}
        </div>
      </div>
    </div>
  );
}
