# Order

An order is a collection of items that a [Customer](Customer) has purchased. As an order accrues transactions and fulfillments, it changes status until it is eventually complete and the [Customer](Customer) has all of their desired goods.

## OrderItem

OrderItems are individual items composing an Order, with a reference to a [Variant](Variant). Orders rely on Suppliers to fulfill the OrderItems by creating a corresponding [PurchaseOrderItems](../../suppliers/entities/PurchaseOrderItem) (which are then fulfilled).

## OrderTransaction

An OrderTransaction is a financial interaction for an Order. All fields are immutable. Most commonly the flow is Authorization (on creation of order) -> Capture (on shipment of order). In refund scenarios, the flow may also include Refund or Void.
