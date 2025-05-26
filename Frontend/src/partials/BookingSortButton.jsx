import "../styles/bookingsSortStyle.css";

const BookingSortButton = ({ setSortBy, sortBy }) => {
  return (
    <div className="select-container">
      <select
        className="dropdown"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="createDateNew">Date (newest)</option>
        <option value="createDateOld">Date (oldest)</option>
        <option value="userId">User ID</option>
        <option value="eventName">Event Name</option>
      </select>
    </div>
  );
};

export default BookingSortButton;
