import { StoreType } from "@/interface";
import Image from "next/image";

const StoreListPage = ({ stores }: { stores: StoreType[] }) => {
  console.log("stores", stores);
  return (
    <div
      className="px-4 md:max-w-4xl 
    mx-auto py-8"
    >
      <ul role="list" className="divide-y divide-gray-100">
        {stores.map((item, index) => (
          <li className="flex justify-between gap-x-6 py-5" key={index}>
            <div className="flex gap-x-4">
              <Image
                src={
                  item.category
                    ? `/images/markers/${item.category}.png`
                    : `/images/markers/default.png`
                }
                width={40}
                height={40}
                alt="업소 카테고리 이미지"
              />
              <div>
                <div className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </div>
                <div className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                  {item.name}
                </div>
              </div>
            </div>
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <div className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                {item.address}
              </div>
              <div className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                {item.phone || "번호 없음"}| {item.foodCertifyName} |{" "}
                {item.category}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const stores = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores`
  ).then((res) => res.json());

  return {
    props: { stores },
  };
}

export default StoreListPage;
