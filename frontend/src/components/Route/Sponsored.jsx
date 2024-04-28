import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center text-center gap-2 text-xl bg-green-50 px-1 py-3 rounded-lg font-bold" style={{ width: "24%" }}>
          <img className="rounded-lg"  style={{height:"120px",width:"120px"}}  src="https://img.freepik.com/premium-vector/agricultural-cooperative-vector-smart-farming-social-media-post_53876-175684.jpg?w=740" alt="advantage_logo" />
          Direct Farmer-to-Consumer Connection
        </div>
        <div className="flex flex-col items-center text-center gap-2 text-xl bg-green-50 px-1 py-3 rounded-lg font-bold" style={{ width: "24%" }}>
          <img className="rounded-lg"  style={{height:"120px",width:"120px"}}  src="https://img.freepik.com/premium-vector/mobile-robot-flat-illustration-editable-vector-design_203633-1892.jpg?w=996" alt="advantage_logo" />
          Real-time Chat Support
        </div>
        <div className="flex flex-col items-center text-center gap-2 text-xl bg-green-50 px-1 py-3 rounded-lg font-bold" style={{ width: "24%" }}>
          <img className="rounded-lg"  style={{height:"120px",width:"120px"}}  src="https://img.freepik.com/free-vector/best-qaulity-natural-product-label-stocker_1017-26203.jpg?w=740&t=st=1702569419~exp=1702570019~hmac=6740e0ca661ceb7f06fffa7055606d18dffacf5f5cbadd53db5de9a69c5aa29c" alt="advantage_logo" />
          Fresh and quality products
        </div>
        <div className="flex flex-col items-center text-center gap-2 text-xl bg-green-50 px-1 py-3 rounded-lg font-bold" style={{ width: "24%" }}>
          <img className="rounded-lg" style={{height:"120px",width:"120px"}} src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?1&w=900&t=st=1702569465~exp=1702570065~hmac=0bda38aaf22524b3a89196a1643e985124fdbe04b1cb20442882e368d659d506" alt="advantage_logo" />
          Special Offers and Discounts
        </div>

      </div>
    </div>
  );
};

export default Sponsored;
