import "../styles/bookingsSortStyle.css";

const BookingSortButton = ({ setSortBy, sortBy }) => {
  return (
    <div className="select-container">
      <select
        className="dropdown"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="eventName">Event Name</option>
        <option value="createDateNew">Date (newest)</option>
        <option value="createDateOld">Date (oldest)</option>
        <option value="userName">User Surname</option>
      </select>
    </div>
  );
};

export default BookingSortButton;
