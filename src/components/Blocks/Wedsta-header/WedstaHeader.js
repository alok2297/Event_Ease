import { Container } from "../../Elements/Container";
import { useState } from "react";
import "./WedstaHeader.css";
import { Iconify } from "../../Elements/Icon";
const WedstaHeader = () => {
  let [amount, setAmount] = useState(0);
  let [countSilver, setSilverCount] = useState(0);
  let [countGold, setGoldCount] = useState(0);
  let [countDiamond, setDiamondCount] = useState(0);

  const increment = (value, type) => {
    setAmount(amount + value)
    type === "silver" ? setSilverCount(countSilver += 1) :
      type === "gold" ? setGoldCount(countGold += 1) :
        setDiamondCount(countDiamond += 1)
  }
  const decrement = (value, type) => {
    amount === 0 ? amount = 0 : setAmount(amount - value)
    type === "silver" ? setSilverCount(countSilver -= 1) :
      type === "gold" ? setGoldCount(countGold -= 1) :
        setDiamondCount(countDiamond -= 1)

  }
  return (
    <Container
      children={
        <div className="Container">
          <div className="main-card-container">
            <div className="wedsta-main">
              <div className="header-div-round">
                Recommended for friends of the Bride
              </div>
              <div className="packages">
                <div className="packages inner-package padding-10">
                  <div className="packages-services">
                    <div>
                      <h3>Wedsta Silver Package</h3>
                    </div>
                    <div className="services">
                      <p>Services:</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Makeup</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Hair, (Straightening/Curl/Blow)</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="charm:cross"
                      />
                      <span>Draping</span>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="charm:cross"
                      />
                      <span>Lashes</span>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="charm:cross"
                      />
                      <span>Nail Polish</span>
                    </div>
                    <div className="services artist-padding">
                      <p>Artist Experience:</p>
                    </div>
                    <div>
                      <p>2 Year+</p>
                    </div>
                    <div className="services artist-padding">
                      <p>Products:</p>
                    </div>
                    <div>
                      <p>Mac, Kryolan and similar brands</p>
                    </div>
                  </div>
                  <div className="package-cost">
                    <div className="icon-package-cost">
                      <Iconify
                        width={30}
                        height={30}
                        color={"#e72e77"}
                        icon="mdi:rupee"
                      />
                      <div>
                        <h3>3000</h3>
                      </div>
                    </div>
                    <div className="per-person">
                      <p>/person</p>
                    </div>
                    <div class="cart-button">
                      {countSilver > 0 && <div>
                        <button class="remove" onClick={() => { decrement(3000, "silver") }}>-</button>
                        <span class="quantity">{countSilver}</span>
                      </div>}
                      {countSilver === 0 &&
                        <div>
                          <span class="quantity">Add</span>
                        </div>
                      }
                      <button class="add" onClick={() => { increment(3000, "silver") }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wedsta-main">
              <div className="header-div-round package2">
                Recommended for friends of the Bride
              </div>
              <div className="packages">
                <div className="packages inner-package padding-10">
                  <div className="packages-services">
                    <div>
                      <h3>Wedsta Silver Package</h3>
                    </div>
                    <div className="services">
                      <p>Services:</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Makeup</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Hair, (Straightening/Curl/Blow)</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Draping</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Lashes</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="charm:cross"
                      />
                      <span>Nail Polish</span>
                    </div>
                    <div className="services artist-padding">
                      <p>Artist Experience:</p>
                    </div>
                    <div>
                      <p>4 Year+</p>
                    </div>
                    <div className="services artist-padding">
                      <p>Products:</p>
                    </div>
                    <div>
                      <p>Mac, Kryolan and similar brands</p>
                    </div>
                  </div>
                  <div className="package-cost">
                    <div className="icon-package-cost">
                      <Iconify
                        width={30}
                        height={30}
                        color={"#e72e77"}
                        icon="mdi:rupee"
                      />
                      <div>
                        <h3>6000</h3>
                      </div>
                    </div>
                    <div className="per-person">
                      <p>/person</p>
                    </div>
                    <div class="cart-button">
                      {countGold > 0 && <div>
                        <button class="remove" onClick={() => { decrement(6000, "gold") }}>-</button>
                        <span class="quantity">{countGold}</span>
                      </div>}
                      {countGold === 0 &&
                        <div>
                          <span class="quantity">Add</span>
                        </div>
                      }
                      <button class="add" onClick={() => { increment(6000, "gold") }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wedsta-main">
              <div className="header-div-round package3">
                Recommended for friends of the Bride
              </div>
              <div className="packages">
                <div className="packages inner-package padding-10">
                  <div className="packages-services">
                    <div>
                      <h3>Wedsta Silver Package</h3>
                    </div>
                    <div className="services">
                      <p>Services:</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Makeup</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Hair, (Straightening/Curl/Blow)</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Draping</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Lashes</p>
                    </div>
                    <div className="category-icon">
                      <Iconify
                        width={15}
                        height={20}
                        color={"#4a4a4a"}
                        icon="material-symbols:check"
                      />
                      <p>Nail Polish</p>
                    </div>
                    <div className="services artist-padding">
                      <p>Artist Experience:</p>
                    </div>
                    <div>
                      <p>6 Year+</p>
                    </div>
                    <div className="services artist-padding">
                      <p>Products:</p>
                    </div>
                    <div>
                      <p>Mac, Kryolan and similar brands</p>
                    </div>
                  </div>
                  <div className="package-cost">
                    <div className="icon-package-cost">
                      <Iconify
                        width={30}
                        height={30}
                        color={"#e72e77"}
                        icon="mdi:rupee"
                      />
                      <div>
                        <h3>8000</h3>
                      </div>
                    </div>
                    <div className="per-person">
                      <p>/person</p>
                    </div>
                    <div class="cart-button">
                      {countDiamond > 0 && <div>
                        <button class="remove" onClick={() => { decrement(8000, "diamond") }}>-</button>
                        <span class="quantity">{countDiamond}</span>
                      </div>}
                      {countDiamond === 0 &&
                        <div>
                          <span class="quantity">Add</span>
                        </div>
                      }
                      <button class="add" onClick={() => { increment(8000, "diamond") }}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { amount > 0 &&
            <div className="bottom-sheet">
              <div>
                <button>
                  <span>Rs. {amount}</span>
                  <span>Continue</span>
                </button>
              </div>
            </div>
          }
        </div>
      }
    />
  );
};

export default WedstaHeader;
