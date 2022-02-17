import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddVote = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post("https://api.thecatapi.com/v1/votes", {
      headers: {
        "x-api-key": "DEMO-API-KEY",
        "content-type": "application/json",
      },
      data: {
        image_id: data.image_id,
        sub_id: data.sub_id,
        value: data.value,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="image_id">Image ID</label>
          <input
            placeholder="Enter image id"
            type="text"
            required
            {...register("image_id")}
            name="image_id"
          />
        </div>
        <div>
          <label htmlFor="sub_id">Sub ID</label>
          <input
            placeholder="Enter sub id"
            type="text"
            required
            {...register("sub_id")}
            name="sub_id"
          />
        </div>
        <div>
          <label htmlFor="value">Value</label>
          <input
            placeholder="Enter value"
            type="number"
            required
            {...register("value")}
            name="value"
          />
        </div>

        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AddVote;
