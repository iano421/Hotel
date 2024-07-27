import React, { useState, useEffect } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";

const OrdersTable = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders data from the server
    axios
      .get("https://kfc-9d511ad56f48.herokuapp.com//orders")
      .then((response) => {
        // Transform the data
        const transformedOrders = response.data.map(order => {
          // Format date and time
          const createdAt = parseISO(order.created_at);
          const formattedDate = format(createdAt, "dd/MM/yyyy");
          const formattedTime = format(createdAt, "HH:mm");
          const formattedDateTime = `${formattedDate} ${formattedTime}`;

          return {
            ...order,
            created_at: formattedDateTime
          };
        });
        setOrders(transformedOrders);
      })
      .catch((error) => {
        console.error("Error fetching the orders:", error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4">Order ID</th>
            <th className="py-2 px-4">Total Price</th>
            <th className="py-2 px-4">Payment Method</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">Created At</th>
            <th className="py-2 px-4">Order Items</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 font-bold">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="py-3 px-4">{order.id}</td>
              <td className="py-3 px-4">{order.total_price}</td>
              <td className="py-3 px-4">{order.payment_method}</td>
              <td className="py-3 px-4">{order.phone_number}</td>
              <td className="py-3 px-4">{order.created_at}</td>
              <td className="py-3 px-4">
                <ul>
                  {order.order_items.map(item => (
                    <li key={item.id}>
                      {item.name} - K$h {item.price} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
