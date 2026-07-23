import { useState } from 'react'
import notificationData from './notifications'
import Notification from './components/Notification'
import NotificationList from './components/NotificationList'
import './App.css'

function App() {
  const [notifications, setNotifications] = useState(notificationData)

  function clearNotification(id) {
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    )

    setNotifications(updatedNotifications)
  }

  function clearAllNotifications() {
    setNotifications([])
  }

  return (
    <main className="app">
      <header className="notification-header">
        <div>
          <h1>Notifications</h1>
          <p>
            {notifications.length}{' '}
            {notifications.length === 1 ? 'notification' : 'notifications'}
          </p>
        </div>

        <button
          onClick={clearAllNotifications}
          disabled={notifications.length === 0}
        >
          Clear All
        </button>
      </header>

      {notifications.length > 0 ? (
        <NotificationList>
          {notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              onClear={clearNotification}
            />
          ))}
        </NotificationList>
      ) : (
        <p className="empty-message">You have no notifications.</p>
      )}
    </main>
  )
}

export default App