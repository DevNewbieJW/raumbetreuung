import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="w-full h-full flex items-center justify-center text-red-400">
      foo bar
    </div>
  );
}
