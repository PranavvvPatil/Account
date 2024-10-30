
import Faq from "./FAQ";
import { HelpSupport } from "./HelpSupport";
import SideBar from "./SideBar";
import TermsAndConditions from "./TermsAndConditions";
import { UserProfile } from "./UserProfile";

export const Account = () => {

  return (
    <div className="flex justify-center w-[1512px] h-auto mt-10 ml-15">
      <SideBar />
      <div className="">
        <HelpSupport/>
        <Faq/>
        <TermsAndConditions/>
        <UserProfile/>

      </div>
    </div>
  );
};
