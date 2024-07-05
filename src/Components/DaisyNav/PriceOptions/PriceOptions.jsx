import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

  const priceOptions = [
        {
          "id": 1,
          "name": "Basic",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "Guest passes",
            "Towel service",
            "Nutrition consultation",
            "Open 24/7",
            "Wi-Fi"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "1 personal training session per month",
            "Towel service",
            "Nutrition consultation",
            "Wi-Fi",
            "Open 24/7"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": 69.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "Guest passes",
            "Towel service",
            "Nutrition consultation",
            "Wi-Fi",
            "Open 24/7",
            "Complimentary fitness assessment"
          ]
        },
        {
          "id": 4,
          "name": "VIP",
          "price": 99.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Free parking",
            "Access to group fitness classes",
            "Towel service",
            "Nutrition consultation",
            "Wi-Fi",
            "Open 24/7",
            "Complimentary fitness assessment",
            "Dedicated locker",
            "Massage therapy sessions"
          ]
        }
      ]

      
    return (
        <div className='m-12 space-y-8'>
            <h2 className ="text-5xl font-extrabold text-green-800">Best prices in the town</h2>
       
        <div className='space-x-4 space-y-4 grid grid-cols-2 ma:grid-cols-3 lg:grid-cols-4  '>
        {
          priceOptions.map(option => <PriceOption key ={option.id} option={option}></PriceOption>)
        }
        
        </div>
        </div>
    );
};

export default PriceOptions;