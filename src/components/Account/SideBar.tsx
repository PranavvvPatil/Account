
import listAltIcon from '../../assets/account/list_alt.png';
import listAltIcon1 from '../../assets/account/Vector (1) copy.png';
import listAltIcon2 from '../../assets/account/Vector (1).png';
import listAltIcon3 from '../../assets/account/alternate_email.png';
import listAltIcon4 from '../../assets/account/support_agent.png';
import listAltIcon5 from '../../assets/account/quiz.png';
import listAltIcon6 from '../../assets/account/gavel.png';

const SideBar = () => {
  return (
    <div className="w-[436px] h-[741px] bg-[#F5F5F5] p-5 rounded-2xl">
    <div className="mb-10">
      <div className="flex  w-full items-center justify-between mb-2">
      <h2 className="text-black font-poppins text-xl font-medium leading-normal mt-5">Cameron Williamson</h2>
      <a href="#edit" className=" flex text-black font-poppins text-xs font-medium leading-8.094px tracking-wide underline items-center justify-between">
      <img src="https://s3-alpha-sig.figma.com/img/2ffe/caa2/56f2b08f461fe15ab3ce84c9247914de?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YXffmgVFri27DvDJNJqtBQL8SlW6dOB5MnnjYBX6Br3Yfa54P0wvDFdoSz~XHqAQ4B28KelsL4d4rSIORoSwai9Tsi-rL4jHXtdJ17UrQG22m6hKRrn3rJNKdLqtDT7p778Ao3Gm~y-MRWcKHKuqOT14Wsx51mfx7VqnFo3C54d7Cy5r~e1QjXo~XGxC7PjlfJ0NNrojMNfQCTexeJIDpbxb76U~BioRPk56NO622sD-nlFqSFzu89-QFYj9DaJd8pX0Cs71Ik7f-FHX3dnfsro18jdDE~kg9WXexD2ARCmBakeERWhb8v8lXsgD1LOaIntsRIykmBAW39gTt42Uxg__" alt="" className="w-3 h-3 mr-1 " />
        Edit Profile</a>
      </div>
      <p className="  text-[#3A3A3A] font-poppins text-base font-normal leading-normal ">(239) 555-0108</p>  
    </div>
    <div className="border-b border-black w-full mb-5"></div>
    <div className="">
    <ul className="mt-10">
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5 hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
        <img src={listAltIcon} alt="Orders Icon" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left text-black">Orders</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200"> 
    <img src={listAltIcon1} alt="Orders Icon 1" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">Your Cart</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
    <img src={listAltIcon2} alt="Orders Icon 2" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">Wishlist</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
    <img src={listAltIcon3} alt="Orders Icon 3" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">Address Book</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
    <img src={listAltIcon4} alt="Orders Icon 4" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">Help and Support</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
    <img src={listAltIcon5} alt="Orders Icon 5" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">FAQ</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    <li className="flex p-2.5 justify-between items-center self-stretch mb-5  hover:bg-[#DDF2D0] hover:rounded-xl transition-all duration-200">
    <img src={listAltIcon6} alt="Orders Icon 6" className="w-4 h-4 mr-2" />
        <a href="#orders" className="flex-1 text-left">Terms & Conditions</a>
        <img src="https://s3-alpha-sig.figma.com/img/1b39/2a0d/32648a4597aa366ff86149cb5fe4ee22?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~VP6Se90ziPvJ0mNVzRJui3iPtymgLq6sxKxDrjnuXQHxVntFb0cOSo7C-GqyDeSzQynB9X7LdJ-mEfkw49bBVTdMEsjmYebMJWufQS1XudJwEyxMWcuJuiEIYuQeRKGl4GKQ0EbJTC90yGOByW9iw6Z4U-ORHojBXZFzWC6sQyQ8yRNqnJCOQV~WWFRdEeuB4LUHKa4n8o6sK25ZnuJ-7-IUGf0Fu2TcDdH0ogssJ5xZ4jt-baPvo6uN0d9WusJDBUS7dLmbr5fztgFpD1ul8xjRrwdjoQyp9zO1rqiuSiqCrwTO-Q7T9OBebodW7VrPyrRMghSFkhTaF3DEkPTg__" alt="" className="w-4 h-4 ml-2 rotate-180" />
    </li>
    </ul>
    </div>
    
    <div className="flex justify-center">
    <button className="mt-5 flex w-[369px] h-[48px] py-[7.471px] px-[42.96px] justify-center items-center gap-[9.339px] flex-shrink-0 rounded-[28.017px] border border-[#D9D9D9] bg-white "> <span className="text-[#3A3A3A] font-poppins text-[18.678px] font-normal leading-normal">Log Out</span></button>
    </div>
  </div>
  )
}

export default SideBar