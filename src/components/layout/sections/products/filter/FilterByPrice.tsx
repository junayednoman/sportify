import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

function FilterByPrice() {
  const [price, setPrice] = useState<number>(93); // Initialize with default value

  const handleSliderChange = (newValue: number[]) => {
    setPrice(newValue[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 100) {
      setPrice(newValue);
    }
  };

  return (
    <div className="space-y-4 mt-8">
      <h5 className="font-semibold">Category</h5>
      <div className="flex items-center gap-3">
        <label htmlFor="price">Max</label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={handleInputChange}
          min={0}
          className="w-[70px] h-[30px]"
        />
        <p className="text-sm">Price: $0-${price}</p>
      </div>
      <Slider
        className="price_range"
        value={[price]}
        max={700}
        step={7}
        onValueChange={handleSliderChange}
      />
    </div>
  );
}

export default FilterByPrice;
