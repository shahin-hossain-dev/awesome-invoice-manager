import Image from "next/image";

import { CgProfile } from "react-icons/cg";
import Icon from "../../components/ui/Icon";
import Button from "../../components/ui/Button";

const bannerImg = "/images/banner/profile-banner.png";
const profileImg = "/images/user.png";

const ProfileBanner = ({ handleDrawerOpen }) => {
  const bannerStyles = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={bannerStyles}
      className="min-h-[17rem] lg:h-[20rem] w-full rounded-lg !shadow-lg flex items-end "
    >
      <div className="relative min-h-[10rem] lg:min-h-[120px] bg-white w-full rounded-b-lg">
        <div className=" flex flex-col justify-center  items-center lg:items-end lg:flex-row gap-2 -translate-x-1/2 absolute -top-12 left-1/2 lg:left-0 lg:-translate-x-0 p-4">
          <div className="w-[110px]">
            <Image
              src={profileImg}
              alt="User"
              height={110}
              width={110}
              className="rounded-xl bg-white p-1"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg lg:text-xl font-semibold">Abdullah </h3>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((item, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <Icon icon={CgProfile} size="1.1rem" />{" "}
                  <span className="font-medium">Profile</span>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute right-3 top-2 lg:top-1/2 lg:-translate-y-1/2">
          <Button onClick={handleDrawerOpen} type="primary">
            Edit Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
