export const mockInvoices = [
  {
    id: "1",
    invoiceNumber: "INV10011",
    issuedDate: "2029-02-15T10:30:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "Alicia Smithson",
    billToAddress: "789 Main Street, Beverly Hills, CA, 90210",
    billToEmail:   "alicia.smithson@email.com",
    billToPhone:   "+1-310-555-6789",
    items: [
      { ticketCategory: "Platinum", price: 120, quantity: 1, amount: 120 },
      { ticketCategory: "Silver",   price: 50,  quantity: 2, amount: 100 }
    ],
    total: 220,
    statusName: "Unpaid",
    userId:    "user123",
    bookingId: "booking123",
    eventId:   "event123"
  },
  {
    id: "2",
    invoiceNumber: "INV10012",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 3, amount: 300 }
    ],
    total: 300,
    statusName: "Paid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  },
  {
    id: "3",
    invoiceNumber: "INV10013",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 4, amount: 400 },
      { ticketCategory: "Silver",   price: 50,  quantity: 1, amount: 50 }
    ],
    total: 450,
    statusName: "Paid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  },
  {
    id: "4",
    invoiceNumber: "INV10014",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 1, amount: 100 }
    ],
    total: 100,
    statusName: "Unpaid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  },
  {
    id: "5",
    invoiceNumber: "INV10015",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 2, amount: 200 },
      { ticketCategory: "Silver",   price: 50,  quantity: 3, amount: 150 }
    ],
    total: 350,
    statusName: "Paid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  },
  {
    id: "6",
    invoiceNumber: "INV10016",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 6, amount: 600 }
    ],
    total: 600,
    statusName: "Paid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  },
  {
    id: "7",
    invoiceNumber: "INV10017",
    issuedDate: "2029-02-16T03:45:00Z",
    dueDate:    "2029-02-20T23:59:00Z",
    billFromName:    "Event Management Co.",
    billFromAddress: "123 Sunset Avenue, Los Angeles, CA, 90001",
    billFromEmail:   "billing@eventmgmt.com",
    billFromPhone:   "+1-800-555-1234",
    billToName:    "John Doe",
    billToAddress: "456 Elm Street, Seattle, WA, 98101",
    billToEmail:   "john.doe@example.com",
    billToPhone:   "+1-206-555-4321",
    items: [
      { ticketCategory: "Gold", price: 100, quantity: 3, amount: 300 }
    ],
    total: 300,
    statusName: "Unpaid",
    userId:    "user456",
    bookingId: "booking456",
    eventId:   "event456"
  }
];