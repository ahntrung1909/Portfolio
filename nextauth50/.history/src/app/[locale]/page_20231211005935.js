import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
import HomeInfomation from "./_components/HomeInformation";
export default function Home() {
  return (
    <div className="max-w-[1250px] mx-auto mt-[20px] px-[25px] py-[16px] shadow-xl rounded-[10px]">
      <HomeHeader />
      <div className="flex gap-x-[10px]">
        <div>
          <HomeInformation />
        </div>
        <div>Col-2</div>
      </div>
    </div>
  );
}