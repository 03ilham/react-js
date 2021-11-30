import React, { useState } from "react";
import Style from "./FoodStyle";
import { FoodItems } from "./FoodItems";

const FOOD_LIST = [
  {
    id: parseInt(Math.random() * 10),
    name: "Roti",
    price: 25000,
    total_product: 0,
    ongkir: 5000,
    metode_pembayaran: "",
    images: [
        "https://img-global.cpcdn.com/recipes/5032f48fe0c21686/1200x630cq70/photo.jpg",
        "https://www.resepkekinian.com/wp-content/uploads/2020/12/Roti-tawar-Tanpa-Mixer.jpg",
        "https://www.masakapahariini.com/wp-content/uploads/2019/11/jenis-roti-4.jpg",
    ],
  },
  {
    id: parseInt(Math.random() * 10),
    name: "Ayam Bakar",
    price: 65000,
    total_product: 0,
    ongkir: 5000,
    metode_pembayaran: "",
    images: [
        "https://img.kurio.network/kBIPYs1sUEA2hBgPfRgaDbfOnI8=/400x400/filters:quality(80)/https://kurio-img.kurioapps.com/21/02/16/c2a5f95d-badc-4fd3-8d81-cfed0801a6e8.jpe",
        'https://asset.kompas.com/crops/yoovaRyPxaPFOY4gfCciore2eUY=/3x0:700x465/750x500/data/photo/2020/12/30/5fec5602f116e.jpg',
        'https://awsimages.detik.net.id/community/media/visual/2021/09/19/resep-sayap-ayam-panggang-bumbu-kecap-pedas-1_43.jpeg?w=1200'
    ],
  },
  {
    id: parseInt(Math.random() * 10),
    name: "Ikan Bakar",
    price: 50000,
    total_product: 0,
    ongkir: 5000,
    metode_pembayaran: "",
    images: [
        "https://cdn-cas.orami.co.id/parenting/original_images/Resep_Bumbu_Ikan_Bakar_Teflon.jpg",
        'https://tastynesia.com/wp-content/uploads/2021/06/Resep-Ikan-Bakar-1200x900.jpg',
        'https://blog.tokowahab.com/wp-content/uploads/2021/04/Resep-Ikan-Bakar-Gurame-di-Blog.tokowahab-1.png'
    ],
  },
];

export default function FoodList() {
  let [food, setFood] = useState(FOOD_LIST);
  let [display, setDisplay] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  let [values, setValues] = useState({
    id: 0,
    name: "",
    price: "",
    total_product: 0,
    images: "",
  });

  const muncul = () => {
    setDisplay(true);
  };

  const hilang = () => {
    setDisplay(false);
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFood([
      ...food,
      {
        id: parseInt(Math.random() * 10),
        name: values.name,
        price: values.price,
        images: values.images,
      },
    ]);
    setDisplay(true);
  };

  const onDelete = (id) => {
    const delet = food.filter((el) => el.id !== id);
    setFood([...delet]);
  };

  const addProduct = () => {
    setIsOpen(true);
  };

  const cencel = () => {
    setIsOpen(false);
  };

  return (
    <Style>
      <h1>
        Food Resto
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="veripy"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </h1>
      <button onClick={muncul}>
        Open Food
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button onClick={addProduct}>
        Add Food
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pencil"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>
      <button onClick={hilang}>
        Close Food
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {isOpen ? (
        <form>
          {display ? (
            <div>
              <input
                type="text"
                placeholder="Food Namae"
                onChange={handleChange("name")}
              />
              <input
                type="text"
                placeholder="Food Price"
                onChange={handleChange("price")}
              />
              <input
                type="text"
                placeholder="Food Images"
                onChange={handleChange("images")}
              />
              <button onClick={onSubmit}>
                Save
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="btn3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                  />
                </svg>
              </button>
              <button class="btn" onClick={cencel}>
                Cencel
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="btn3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </form>
      ) : null}
      {display ? (
        <FoodItems
          food={food}
          onDelete={onDelete}
        />
      ) : null}
    </Style>
  );
}
