import React from "react";
import { CustomButton } from "../Reusable/CustomButton/CustomButton";

export const News = () => {
  const NewsItems = [
    {
      id: 1,
      image:
        "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.0/c_scale,w_800/ncom/en_US/articles/2024/coming-soon-nintendo-switch-games-arriving-in-march-2024/2250x1266_comingSoon_Mar2024",
      desc: "There are a lot of great games arriving this month for the Nintendo Switch™ family of systems. Check out this selection of upcoming games and be sure to click any that catch your eye to pre-order, purchase, or add to your Wish List. Snufkin: Melody …",
      title: "Coming soon! Nintendo Switch games arriving in March 2024",
      date: "02/26/24",
    },
    {
      id: 2,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_600/ncom/en_US/articles/2024/side-order-the-new-splatoon-3-single-player-campaign-dlc-is-available-now/SP3SideOrder_EN",
      desc: "Ladies and gentlesquids, we are proud to announce that the Side Order DLC* for the Splatoon™ 3 game is now on the menu (that is to say, “It’s out!”). Side Order is the second wave of the Splatoon™ 3: Expansion Pass DLC. It adds a brand-new single-pl…",
      title:
        "Side Order, the new Splatoon 3 single-player campaign DLC, is available now",
      date: "02/22/24",
    },
    {
      id: 3,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/articles/2024/feb-update-see-what-games-were-added-to-the-nintendo-64-super-nes-and-nes-collections/2250x1266_NSO_EN",
      readmore: "Read more",
      title:
        "Feb. update! See what games were added to the Nintendo 64, Super NES, and NES collections",
      date: "02/21/24",
    },
    {
      id: 4,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/articles/2024/nintendo-direct-partner-showcase-2-21-24/feb_2250x1266_Whats_New_Ncom",
      readmore: "Read more",
      title:
        "Feb. update! See what games were added to the Nintendo 64, Super NES, and NES collections",
      date: "02/21/24",
    },
    {
      id: 5,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/articles/2024/try-the-latest-game-trial-ea-sports-fc-24/Ncom-NSO-1920x1080-EN_v01",
      readmore: "Read more",
      title:
        "Feb. update! See what games were added to the Nintendo 64, Super NES, and NES collections",
      date: "02/21/24",
    },
    {
      id: 6,
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_300/ncom/en_US/articles/2024/the-latest-splatfest-winner-is-team-friday/Win_A",
      readmore: "Read more",
      title:
        "Feb. update! See what games were added to the Nintendo 64, Super NES, and NES collections",
      date: "02/21/24",
    },
  ];
  return (
    <div className="flex flex-col items-center border border-none">
      <div
        className="flex flex-col items-center justify-center h-[70rem] border border-none 
      phone:h-[85rem] "
      >
        <p
          className="py-10 font-bold text-3xl text-darkGray self-start
        phone:text-lg phone:self-center "
        >
          News
        </p>
        <div
          className="flex flex-row w-[60vw] 
        phone:flex-col phone:w-[80vw]"
        >
          {NewsItems.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col border border-customGray border-2 rounded-t-2 gap-3  "
            >
              <div>
                <img
                  className="object-contain border-2 rounded-t-xl w-[100%]"
                  src={item.image}
                  alt="Item IMG"
                />
              </div>
              <div>
                <p className="ml-2 text-darkgray">{item.date}</p>
              </div>

              <div className="h-20 phone:h-10">
                <p
                  className="text-darkGray font-bold text-lg line-clamp-2 ml-2
                phone:text-sm"
                >
                  {item.title}
                </p>
              </div>
              <div className="h-20">
                <p
                  className="text-darkGray  text-md line-clamp-2 ml-2
                phone:text-xs"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex flex-row w-[60vw] gap-3
        phone:grid phone:grid-cols-2 phone:w-[80vw]"
        >
          {NewsItems.slice(2).map((item) => (
            <div
              key={item.id}
              className="flex flex-col border border-customGray border-2 rounded-t-2 gap-3"
            >
              {/* Render image */}
              <div>
                <img
                  className="object-cover border-2 rounded-t-xl w-[100%]"
                  src={item.image}
                  alt="Item IMG"
                />
              </div>
              <div>
                <p className="ml-2">{item.date}</p>
              </div>
              {/* Render title */}
              <div className="h-20">
                <p className="text-darkGray font-bold text-lg line-clamp-2 ml-2">
                  {item.title}
                </p>
              </div>
              <div>
                <p className="text-customRed underline font-bold ml-2">
                  {item.readmore}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="self-start mx-[26rem] my-10">
        <CustomButton btnText="See All Artictles" />
      </div>
    </div>
  );
};
