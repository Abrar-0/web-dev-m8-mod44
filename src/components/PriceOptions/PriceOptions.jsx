import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Locker room access",
        "Basic fitness classes included",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "All features of Basic Membership",
        "Access to group fitness classes",
        "Access to sauna and steam room",
        "Discounts on personal training sessions",
        "Access to indoor track",
        "Access to sports courts",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "All features of Standard Membership",
        "Access to swimming pool",
        "Access to specialized fitness programs",
        "Free personal training sessions",
        "Towel service",
        "Priority booking for classes and facilities",
        "Free WiFi access",
        "Complimentary beverage station"
      ],
    },
  ];

  return (
    <div className="m-8">
      <h2 className="text-5xl">BEST PRICES IN THE TOWN</h2>
      <div className="grid gap-6 md:grid-cols-3 m-12">
        {priceOptions.map((option) => (
          <PriceOption option={option} key={option.id}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
