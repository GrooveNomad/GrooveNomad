import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/fr");
  return null;
}