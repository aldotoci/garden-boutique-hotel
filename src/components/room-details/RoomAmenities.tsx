const AMENITY_ROWS: { icon: string; label: string }[][] = [
  [
    { icon: "/assets/images/icon/wifi.svg", label: "Free Wifi" },
    { icon: "/assets/images/icon/shower.svg", label: "Shower" },
    { icon: "/assets/images/icon/balcony.svg", label: "Balcony" },
  ],
  [
    { icon: "/assets/images/icon/refrigerator.svg", label: "Refrigerator" },
    { icon: "/assets/images/icon/support.svg", label: "24/7 Support" },
    { icon: "/assets/images/icon/desk.svg", label: "Work Desk" },
  ],
];

export default function RoomAmenities() {
  return (
    <>
      <span className="h4 d-block mb-30">Room Amenities</span>
      <div className="room__amenity mb-50">
        {AMENITY_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="group__row">
            {row.map((item) => (
              <div key={item.label} className="single__item">
                <img src={item.icon} height={30} width={36} alt="" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
