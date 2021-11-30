import React, { useState } from "react";
import styled from "styled-components";

const Hero = styled.div`
  ul {
    margin: 1rem;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 3rem;
    color: #544179;
    margin-left: 2rem;
    position: sticky;
    top: 0;
    z-index: 10px;
    background-color: white;
    padding: 1rem;
  }

  span {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    color: gray;
    margin: 3rem;
    display: flex;
    cursor: pointer;
  }

  img {
    width: 400px;
    border-radius: 10px;
    margin: 5px;
  }

  button {
    padding: 15px;
    margin-left: 2rem;
    cursor: pointer;
    background-color: #998ceb;
    border: 1px solid white;
    border-radius: 10px;
    color: white;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  button:hover {
    background-color: #b8dfd8;
    color: black;
  }

  input {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-left: 2rem;
    border-radius: 10px;
    background-color: #b8dfd8;
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .select {
    display: flex;
    justify-content: center;
    padding: 10px;
    margin-left: 2rem;
    border-radius: 10px;
    background-color: #b8dfd8;
    border: 1px solid white;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .label {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 1rem;
    color: gray;
    margin-left: 2rem;
  }

  .yellow {
    background-color: #30cd00;
  }

  .yellow:hover {
    background-color: #129200;
  }

  .btn4 {
    width: 20px;
    margin-bottom: -4px;
    margin-left: 5px;
  }

  .btn {
    background-color: #ff5c58;
  }

  .btn:hover {
    background-color: red;
    color: white;
  }

  .btn5 {
      width: 20px;
      color: gray;
  }

  .btn5:hover {
    color: red;
  }
`;

const VILLA_LIST = [
  {
    id: parseInt(Math.random() * 10 + Math.random() * 10),
    name: "hotel",
    price: 10000,
    TotalNight: 0,
    metode_pembayaran: "",
    checkin: "",
    checkout: "",
    images: [
      "https://pix10.agoda.net/hotelImages/12535342/0/6697db51f18aab8e1624eee3cb52ed73.jpg?ca=20&ce=0&s=1024x768",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/241586402.jpg?k=514a9cf30cb20220f04f96d4ab83db2f3f5f1494e35298e28418fe4133091b8f&o=&hp=1",
      "https://thevillas100.com/wp-content/uploads/2021/08/thevillas100-tiella-villa-35.jpg",
    ],
  },
  {
    id: 2,
    name: "vila",
    price: 20000,
    TotalNight: 0,
    metode_pembayaran: "",
    checkin: "",
    checkout: "",
    images: [
      "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/67803087-2e6ff5332e8a83da75fc4b711ab880d4.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitJ94WRN_MwvPKma_l9r9d234ue3ZMvEfpn_CevXi20P0Ho0bQ6CZREu5D1LH_fVhVXM&usqp=CAU",
      "https://apollo-singapore.akamaized.net/v1/files/6co2h6svuljh-ID/image;s=850x0",
    ],
  },
  {
    id: 3,
    name: "resort",
    price: 30000,
    TotalNight: 0,
    metode_pembayaran: "",
    checkin: "",
    checkout: "",
    images: [
      "https://asset.kompas.com/crops/3EyX7rD5AvQWg0C7U0LOSj9bA9w=/378x0:1053x450/750x500/data/photo/2021/09/19/61474174d9df8.jpg",
      "https://jejakpiknik.com/wp-content/uploads/2019/01/Novus-Giri-Puncak-ResortSpa-630x380-1.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/840x460/71921846.jpg?k=93c32246be15520cd989fdc8db7ec49620d1859d1fe84a3c703fc94f07922a14&o=",
    ],
  },
];

export default function VillaList() {
  let [villa, setVilla] = useState(VILLA_LIST);
  let [open, setOpen] = useState(false);
  let [detail, setDetail] = useState(false)
  let [values, setValues] = useState({
    name: "",
    price: 0,
    TotalNight: 0,
    images: "",
    metode_pembayaran: "",
    checkin: "",
    checkout: "",
  });

  const render = () => {
    return villa.map((el) => (
      <ul>
        <li key={el.id}>
          <img src={el.images[0]} alt="villa" />
          {detail ? (
          <>
            <img src={el.images[1]} alt="Food" />
            <img src={el.images[2]} alt="Food" />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="btn5"
                viewBox="0 0 20 20"
                fill="currentColor"
                onClick={close}
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </>
        ) : null}
        <button onClick={openDetail}>Detail Product</button>
          <span>Name: {el.name}</span>
          <span>Price: Rp.{el.price},00 /night</span>
          <span>Tax: 5%</span>
          <span>Discount: 2.5%</span>
          <hr />
          <label class="label">Checkin</label>
          <input type="date" onChange={handleChange("checkin")} />
          <label class="label">Checkout</label>
          <input type="date" onChange={handleChange("checkout")} />
          <label class="label" htmlFor="text">
            Choose Payment Method
          </label>
          <select
            name="metode_pembayaran"
            onChange={handleChange("metode_pembayaran")}
            class="select"
          >
            <option className=" font-serif">OVO</option>
            <option className=" font-serif">Dana</option>
            <option className=" font-serif">Shopee Pay</option>
          </select>
          <button class="yellow" onClick={() => bayar(el)}>
            Pay
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="btn4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>{" "}
          <button class="btn" onClick={() => onDelete(el.id)}>
            Not interested
          </button>
        </li>
        <hr />
      </ul>
    ));
  };

  const bayar = (el) => {
    const night1 = new Date(values.checkout);
    const night2 = new Date(values.checkin);
    const milliSecondPerDay = 1000 * 60 * 60 * 24;
    const totalNight = night1 - night2;
    const totalDay = totalNight / milliSecondPerDay;

    if (isNaN(night1) && isNaN(night2)) {
      return alert("Please checkin & checkout first");
    } else if (isNaN(night1)) {
      return alert("Please checkin & checkout first");
    } else if (isNaN(night2)) {
      return alert("Please checkin & checkout first");
    } else if (values.metode_pembayaran.length === 0) {
      return alert("Please select the preferred payment method first");
    } else if (night1 < night2) {
      return alert("Please enter the correct date");
    } else {
      return alert([
        `Order Name: ORD-${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${parseInt(Math.random() * 100000000)}`,
        "\n---------------------------------------------------",
        `\nVilla Name: ${el.name}`,
        `\nCheckin: ${values.checkin}`,
        `\nCheckout: ${values.checkout}`,
        `\nTotal Night: ${totalDay} night`,
        "\n--------------------------",
        `\nOne night price: Rp.${el.price},00`,
        `\nPrice: Rp.${el.price * totalDay},00`,
        `\nTax: Rp.${((el.price * totalDay) / 100) * 5},00`,
        `\nDiscount: Rp.${((el.price * totalDay) / 100) * 2.5},00`,
        "\n--------------------------",
        `\nSubtotal: Rp.${
          el.price * totalDay +
          ((el.price * totalDay) / 100) * 5 -
          ((el.price * totalDay) / 100) * 2.5
        },00`,
        `\n---------------------------`,
        `\nPayment Method: ${values.metode_pembayaran}`,
        `\n---------------------------`,
        `\nThank you for shopping at our store....`,
      ]);
    }
  };

  const openDetail = () => {
    setDetail(true)
  }

  const close = () => {
    setDetail(false)
  }

  const muncul = () => {
    setOpen(true);
  };

  const hilang = () => {
    setOpen(false);
  };

  const onDelete = (id) => {
    const delet = villa.filter((el) => el.id !== id);
    setVilla([...delet]);
  };

  const addVilla = () => {
    villa.push(
      {
        id: 4,
        name: "Rumah Hantu",
        price: 20000,
        images:
          "https://cdnaz.cekaja.com/media/2020/06/1427_Artikel-CA20_-villa-terindah-di-dunia.jpg",
      },
      {
        id: 5,
        name: "Rumah",
        price: 30000,
        images:
          "https://id1-cdn.pgimgs.com/listing/19069116/UPHO.109469710.V800/Villa-Pererenan-Off-Plan-3-Bedrooms-Hak-Milik-Badung-Indonesia.jpg",
      }
    );
    setOpen(true);
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setVilla([
      ...villa,
      {
        id: parseInt(Math.random() * 10),
        name: values.name,
        price: values.price,
        images: values.images,
      },
    ]);
    setOpen(true);
    //alert(values.prod_name)
  };

  return (
    <Hero>
      <h1>Resort</h1>
      <button onClick={muncul}>Villa</button>
      <button onClick={hilang}>Close</button>
      <button onClick={addVilla}>Add Villa</button>
      <form action="#">
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleChange("name")}
          />
          <input
            type="text"
            name="price"
            placeholder="price"
            onChange={handleChange("price")}
          />
          <input
            type="text"
            name="images"
            placeholder="images"
            onChange={handleChange("images")}
          />
        </div>
        <button onClick={onSubmit}>Save</button>
      </form>
      {open ? render() : null}
    </Hero>
  );
}
