import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";

// The login page is the first screen of the app.
export default function Home() {
  redirect(ROUTES.login);
}
