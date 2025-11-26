import { cookies } from "next/headers";

const authChecker = async () => {
  const tokenStore = await cookies();

  const token = await tokenStore.get("token")?.value;

  console.log(token);
};

export default authChecker;
