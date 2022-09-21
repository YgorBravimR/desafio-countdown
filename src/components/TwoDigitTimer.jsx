export function TwoDigitTimer({ title, time }) {
  return (
    <div className="flex flex-col text-center">
      <p className="leading-5 text-lightGrey">{title}</p>
      <p className="text-7xl leading-[6,75rem] text-black700 mt-2">{time}</p>
    </div>
  );
}
