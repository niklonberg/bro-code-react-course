import { useState } from "react";

function OnChangeExample() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = parseFloat(event.target.value);
    setQuantity(newQuantity);
  }

  function handleCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setComment(event.target.value);
  }

  const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPayment(event.target.value);
  };

  function handleShippingChange(event: React.ChangeEvent<HTMLInputElement>) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      />
      <p>Comment: {comment}</p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>
      <label htmlFor="pick-up">Pick Up</label>
      <input
        type="radio"
        value="Pick Up"
        name="pick-up"
        id="pick-up"
        onChange={handleShippingChange}
        checked={shipping === "Pick Up"}
      />
      <br />
      <label htmlFor="delivery">Delivery</label>
      <input
        type="radio"
        value="Delivery"
        name="delivery"
        id="delivery"
        onChange={handleShippingChange}
        checked={shipping === "Delivery"}
      />
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default OnChangeExample;
