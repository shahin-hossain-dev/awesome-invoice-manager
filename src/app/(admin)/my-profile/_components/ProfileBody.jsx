import { FaRegUser } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import Icon from "../../components/ui/Icon";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import Card from "../../components/ui/Card";
import { Button, Checkbox, Form } from "antd";
import { useState } from "react";

const ProfileItem = ({ property, value, icon }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="flex gap-2 items-center">
        <Icon icon={icon} />
        <span>{property} : </span>
      </span>
      <span>{value}</span>
    </div>
  );
};

const ProfileBody = () => {
  const [isRemoveBtnActive, setIsRemoveBtnActive] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 !mt-4">
      {/* grid 1 */}
      <Card>
        <div className="lg:text-base space-y-2">
          <h4 className="text-lg font-thin text-neutral-500">About</h4>

          <ProfileItem
            icon={FaRegUser}
            property={"Full Name"}
            value={"Abdullah Al Jawad"}
          />
          <ProfileItem icon={FaCheck} property={"Status"} value={"Active"} />
        </div>
      </Card>
      {/* grid -2 */}
      <Card>
        <div className="lg:text-base space-y-2">
          <h4 className="text-lg font-thin text-neutral-500">Contacts</h4>

          <ProfileItem
            icon={BiPhoneCall}
            property={"Contact No."}
            value={"+8801676446077"}
          />
          <ProfileItem
            icon={MdOutlineMail}
            property={"Email"}
            value={"akbarprice@gmail.com"}
          />
        </div>
      </Card>
      {/* grid-3 */}
      <Card>
        <div className="lg:text-base space-y-2">
          <h4 className="text-lg font-thin text-neutral-500">Overview</h4>

          <ProfileItem
            icon={FaRegUser}
            property={"Full Name"}
            value={"Abdullah Al Jawad"}
          />
          <ProfileItem icon={FaCheck} property={"Status"} value={"Active"} />
        </div>
      </Card>
      <Card>
        <h4 className="text-lg font-thin text-neutral-500">Delete Account</h4>
        <div>
          <div className="flex flex-col  gap-2 lg:gap-4">
            <Checkbox onChange={() => setIsRemoveBtnActive(!isRemoveBtnActive)}>
              <span className="text-sm md:text-base ">
                I confirm my account deactivation
              </span>
            </Checkbox>

            <Button
              type="primary"
              variant="filled"
              danger
              disabled={!isRemoveBtnActive}
            >
              Remove
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfileBody;
