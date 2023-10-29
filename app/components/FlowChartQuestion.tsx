interface Props {
  question: string;
}

export const FlowChartQuestion: React.FC<Props> = ({ question }) => (
  <div className="flex flex-col h-[10rem] w-[25rem] items-center justify-center bg-[#90C7BE] rounded-[3rem]">
    <p className="text-black font-bold text-[2rem]">{question}</p>
  </div>
);
