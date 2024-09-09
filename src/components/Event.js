import { useState } from 'react'

const Event = ({ event }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }
  return (
    <li></li>
  );
}

export default Event;