import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-4">
      <p className="text-lg font-semibold">
        {time.toLocaleTimeString()} {/* Display the time */}
      </p>
      <p className="text-sm text-gray-400">
        {time.toLocaleDateString()} {/* Display the date */}
      </p>
    </div>
  );
}
