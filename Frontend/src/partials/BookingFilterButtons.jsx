import "../styles/bookingsFilterStyle.css";
import { BookingFilterButton } from "../styles/components/StyledButton";

const BookingFilterButtons = ({
  statuses,
  activeStatusId,
  setActiveStatusId,
}) => {
  return (
    <div className="filter-container">
      {statuses.length > 0 &&
        statuses.map((status) => (
          <BookingFilterButton
            isActive={activeStatusId === status.id ? true : false}
            key={status.id}
            onClick={() => {
              setActiveStatusId(status.id);
            }}
          >
            {status.statusName}
          </BookingFilterButton>
        ))}
    </div>
  );
};

export default BookingFilterButtons;
