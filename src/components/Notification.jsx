function Notification({ notification, onClear }) {
  return (
    <article className="notification">
      <div className="notification-content">
        <h2>{notification.name}</h2>
        <p>{notification.message}</p>
      </div>

      <button onClick={() => onClear(notification.id)}>
        Clear
      </button>
    </article>
  )
}

export default Notification