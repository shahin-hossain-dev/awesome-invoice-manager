import Image from "next/image";
import Card from "../../ui/Card";
const productIcon = "/images/icons/products.png";
const orderIcon = "/images/icons/order.png";
const usersIcon = "/images/icons/users.webp";
const salesIcon = "/images/icons/sales.png";

const stats = [
  {
    title: "Total Invoice",
    count: "4000",
    bg: "bg-[#E5F9FF] 	",
    text: "text-neutral-800",
    icon: productIcon,
  },
  {
    title: "Total Payments",
    count: "$564",
    bg: "bg-[#FFEDE6] 0	",
    text: "text-neutral-800",
    icon: orderIcon,
  },
  {
    title: "Total Products",
    count: "500",
    bg: "bg-[#EAE6FF] 	",
    text: "text-neutral-800",
    icon: usersIcon,
  },
  {
    title: "Total Customers",
    count: "1000",
    bg: "bg-[#EAE6FF] 	",
    text: "text-neutral-800",
    icon: salesIcon,
  },
];

const TopGroupStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
      {stats?.map((stat, idx) => (
        <Card key={idx} className="!shadow [&>.ant-card-body]:!p-4  ">
          <div className="flex flex-col lg:flex-row items-start gap-3 ">
            <div className={`${stat.bg} rounded-full p-2`}>
              <Image
                src={stat?.icon}
                width={30}
                height={30}
                alt={stat?.title}
                className="w-[3rem]"
              />
            </div>
            <div>
              <p className={`${stat?.text} font-semibold text-base lg:text-lg`}>
                {stat?.title}
              </p>
              <p className="font-semibold text-xl md:text-xl !pb-0 !mb-0">
                {stat?.count}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default TopGroupStats;
