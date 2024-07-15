import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { ChangeEvent, Dispatch } from "react";
type TFilterByPriceProps = {
  setPrice: Dispatch<React.SetStateAction<number>>;
  price: number;
};

function FilterByPrice({ setPrice, price }: TFilterByPriceProps) {
  const handleSliderChange = (newValue: number[]) => {
    setPrice(newValue[0]);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    if (newValue >= 0 && newValue <= 700) {
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
