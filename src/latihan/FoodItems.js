import React, { useState } from "react";
import { fa } from "react-icons-kit/fa";
import Style from "./FoodStyle";

export const FoodItems = (props) => {
  let [detail, setDetail] = useState(false);
  let [openBayar, setOpenBayar] = useState(false);
  let [pin, setPin] = useState(false);
  let [btn, setBtn] = useState(true);
  let [pinBtn, setPinBtn] = useState(true);
  let [values, setValues] = useState({
    id: 0,
    name: "",
    price: "",
    total_product: 0,
    metode_pembayaran: "",
    images: "",
    pin: "",
    nominal: "",
    alamat: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onBayar = (el) => {
    const totalProduct = values.total_product;

    if (totalProduct <= 0) {
      alert("Minimal pembelian 1 item");
    } else if (values.metode_pembayaran.length === 0) {
      alert("Silahkan tentukan terbih dahulu metode pembayaran ");
    } else if (values.alamat.length === 0) {
      alert("Harap memasukan alamat");
    } else if (values.metode_pembayaran === "Bayar Ditempat") {
      alert([
        `_________________________________________________`,
        `\nOrder Name: ORD-${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${parseInt(Math.random() * 100000000)}`,
        `\n------------------------------------------------`,
        `\nProduct: ${el.name}`,
        `\nJumlah Product: ${totalProduct}`,
        `\n------------------------------------------------`,
        `\nHarga: Rp.${el.price * totalProduct},00`,
        `\nBiaya Pengiriman: ${el.ongkir}`,
        `\nPajak: Rp.${(el.price / 100) * totalProduct * 5},00`,
        `\nDiscount: Rp.${(el.price / 100) * totalProduct * 2.5},00`,
        `\n------------------------------------------------`,
        `\nAlamat: ${values.alamat}`,
        `\n------------------------------------------------`,
        `\nMetode Pembayaran: ${values.metode_pembayaran}`,
        `\nTotal: Rp.${
          el.price * totalProduct +
          ((el.price * totalProduct) / 100) * 5 -
          ((el.price * totalProduct) / 100) * 2.5 +
          el.ongkir
        },00`,
        `\nPaket anda akan sampai sebelum: ${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()} Pukul: ${new Date().getHours() + 2}:00 WIB`,
        `\nTerimakasih sudah order di toko kami`,
        `\n_______________________________________________`,
        setOpenBayar(false),
        setPin(false),
        setBtn(true),
      ]);
      alert(`Suksess!!!`);
    } else if (values.pin.length === 0 && values.nominal.length === 0) {
      alert("Harap masukan PIN dan nominal terlebih dahulu");
      setPin(true);
    } else if (values.pin < 6) {
      alert("Harap masukan PIN anda dengan benar");
      setPin(true);
    } else if (
      values.nominal <
        el.price * totalProduct +
          ((el.price * totalProduct) / 100) * 5 -
          ((el.price * totalProduct) / 100) * 2.5 +
          el.ongkir ||
      undefined
    ) {
      alert("Harap memasukan nominal yang sesuai dengan harga");
      setPin(true);
    } else {
      alert([
        `_________________________________________________`,
        `\nOrder Name: ORD-${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}-${parseInt(Math.random() * 100000000)}`,
        `\n------------------------------------------------`,
        `\nProduct: ${el.name}`,
        `\nJumlah Product: ${totalProduct}`,
        `\n------------------------------------------------`,
        `\nHarga: Rp.${el.price * totalProduct},00`,
        `\nBiaya Pengiriman: ${el.ongkir}`,
        `\nPajak: Rp.${(el.price / 100) * totalProduct * 5},00`,
        `\nDiscount: Rp.${(el.price / 100) * totalProduct * 2.5},00`,
        `\n------------------------------------------------`,
        `\nMetode Pembayaran: ${values.metode_pembayaran}`,
        `\nTotal: Rp.${
          el.price * totalProduct +
          ((el.price * totalProduct) / 100) * 5 -
          ((el.price * totalProduct) / 100) * 2.5 +
          el.ongkir
        },00`,
        `\nNominal yang anda masukan: Rp.${values.nominal},00`,
        `\nUang kembali: Rp.${
          values.nominal -
          (el.price * totalProduct +
            ((el.price * totalProduct) / 100) * 5 -
            ((el.price * totalProduct) / 100) * 2.5 +
            el.ongkir)
        },00`,
        `\nPIN : ${values.pin}`,
        `\n------------------------------------------------`,
        `\nAlamat: ${values.alamat}`,
        `\n_______________________________________________`,
        setOpenBayar(false),
        setPin(false),
        setBtn(true),
      ]);
      alert("Suksesss!!!");
    }
  };

  const menuBayar = () => {
    if (values.total_product.length === undefined) {
      alert("silahkan Tentukan jumlah product yang akan di beli");
    } else if (values.total_product <= 0) {
      alert("Minimal pembelian 1 item");
    } else {
      setOpenBayar(true);
      setBtn(false);
    }
  };

  const closeBayar = () => {
    setOpenBayar(false);
    setBtn(true);
  };

  const onPin = () => {
    if (values.metode_pembayaran.length === 0) {
      alert(
        "Pilih metode pembayaran terlebih dahulu sebelum anda memasukan PIN"
      );
    } else if(values.metode_pembayaran === 'Bayar Ditempat') {
      alert('Anda tidak perlu memasukan PIN jika anda memilih bayar di tempat')
    } else {
      setPin(true);
      setPinBtn(false);
    }
  };

  const closePin = () => {
    if (values.pin.length === 0) {
      alert("Silahkan msukan PIN terlebih dahulu");
      setPin(true);
    } else if (values.pin.length < 6) {
      alert("Masukan PIN anda dengan benar");
      setPin(true);
    } else {
      setPin(false);
      setPinBtn(false);
    }
  };

  const openDetail = () => {
    setDetail(true);
    setBtn(false);
  };

  const close = () => {
    setDetail(false);
    setBtn(true);
  };

  return props.food.map((el) => (
    <Style>
      <li key={el.id}>
        <img src={el.images[0]} alt="Food" />
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
        {btn ? <button onClick={openDetail}>Detail Product</button> : null}
        <span>Name: {el.name}</span>
        <span>Harga: Rp.{el.price},00</span>
        <span>Pajak: 5% dari harga * jumlah item</span>
        <span>Discount: 2.5% dari harga * jumlah item</span>
        <input
          type="number"
          placeholder="Jumlah Product"
          name="total_product"
          onChange={handleChange("total_product")}
        />
        <hr />
        {btn ? (
          <button class="yellow" onClick={() => menuBayar(el)}>
            Lanjut ke menu pembayaran
          </button>
        ) : null}
        {openBayar ? (
          <>
            <span>Name: {el.name}</span>
            <span>{values.total_product} item</span>
            <span>
              Harga x jumlah item: Rp.{el.price * values.total_product},00
            </span>
            <span>
              Pajak: Rp.{(el.price / 100) * 5 * values.total_product},00
            </span>
            <span>
              Discount: Rp.{(el.price / 100) * 2.5 * values.total_product},00
            </span>
            <span>Biaya Pengiriman: Rp.{el.ongkir},00</span>
            <span>
              Total: Rp.
              {el.price * values.total_product +
                (el.price / 100) * 5 -
                (el.price / 100) * 2.5 +
                el.ongkir}
              ,00
            </span>
            <span>Nominal: Rp.{values.nominal},00</span>
            <span>Metode Pembayaran: {values.metode_pembayaran}</span>
            <label class="label" htmlFor="text">
              Pilih Metode Pembayaran
            </label>
            <select
              name="metode_pembayaran"
              onChange={handleChange("metode_pembayaran")}
              class="select"
            >
              <option className=" font-serif">OVO</option>
              <option className=" font-serif">Dana</option>
              <option className=" font-serif">Shopee Pay</option>
              <option className=" font-serif">Bayar Ditempat</option>
            </select>
            {pinBtn ? (
              <button class="pin" onClick={onPin}>
                Masukan PIN & Nominal Pembayaran
              </button>
            ) : null}
            <input type='text' placeholder="Alamat" onChange={handleChange('alamat')}/>
            {pin ? (
              <>
                <label class="label">
                  Masukan PIN {values.metode_pembayaran} dan nominal pembayaran
                </label>
                <input
                  type="password"
                  placeholder="PIN"
                  onChange={handleChange("pin")}
                />
                <select
                  name="metode_pembayaran"
                  onChange={handleChange("nominal")}
                  class="select"
                >
                  <option className=" font-serif">50000</option>
                  <option className=" font-serif">100000</option>
                  <option className=" font-serif">150000</option>
                  <option className=" font-serif">200000</option>
                  <option className=" font-serif">250000</option>
                  <option className=" font-serif">300000</option>
                  <option className=" font-serif">350000</option>
                  <option className=" font-serif">400000</option>
                  <option className=" font-serif">450000</option>
                  <option className=" font-serif">500000</option>
                  <option className=" font-serif">600000</option>
                  <option className=" font-serif">700000</option>
                  <option className=" font-serif">800000</option>
                  <option className=" font-serif">900000</option>
                  <option className=" font-serif">1000000</option>
                </select>
                <button class="pin" onClick={closePin}>
                  klik jika benar
                </button>
              </>
            ) : null}
            <button class="yellow" onClick={() => onBayar(el)}>
              Bayar Sekarang
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
            </button>
            <button onClick={closeBayar}>Batal</button>
          </>
        ) : null}

        <button class="btn" onClick={() => props.onDelete(el.id)}>
          Tidak Tertarik
        </button>
        <hr />
      </li>
    </Style>
  ));
};
