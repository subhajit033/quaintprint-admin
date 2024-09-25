const DashBoardUpperNavItem = [
  {
    title: 'Home',
    url: '/dashboard/',
    image: 'home-minimal.png',
  },
  {
    title: 'Order Status',
    url: '/dashboard/order-status',
    image: 'order status.png',
  },
  {
    title: 'Payment Status',
    url: '/dashboard/payment-status',
    image: 'payments.png',
  },
  {
    title: 'Artist Support',
    url: '/dashboard/artist-suport',
    image: 'artis support.png',
  },
  {
    title: 'Approved Product',
    url: '/dashboard/approve-product',
    image: 'artis support.png',
  },
  {
    title: 'Content',
    url: '/dashboard/setting',
    image: 'setting.png',
  },
];

const DashBoardLowerNavItem = [
  {
    title: 'Design inquires',
    url: '/dashboard/design-inquires',
    image: 'design.png',
  },
  {
    title: 'Career Submissions',
    url: '/dashboard/career-submissions',
    image: 'career.png',
  },
  {
    title: 'Queries',
    url: '/dashboard/contact-submissions',
    image: 'contact.png',
  },
];

const TableHeaderName = {
  artistSupport: {
    first: 'Artist Name',
    second: 'Painting Title',
    third: 'Paintaing type',
    fourth: 'Activity Status',
    fifth: 'Approvals',
    buttonLevel: 'Approval',
    isOrderStatus: false,
  },
  designInquires: {
    first: 'Client Profile',
    second: 'Job Type',
    third: 'Notes',
    fourth: 'Activity Status',
    fifth: 'Details',
    buttonLevel: 'Check Details',
    isOrderStatus: false,
  },
  careerSubmission: {
    first: 'Candidate Name',
    second: 'Job Type',
    third: 'Notes',
    fourth: 'Activity Status',
    fifth: 'Details',
    buttonLevel: 'Check Details',
    isOrderStatus: false,
  },
  contactInquires: {
    first: 'Client Profile',
    second: 'Job Type',
    third: 'Notes',
    fourth: 'Activity Status',
    fifth: 'Details',
    buttonLevel: 'Check Details',
    isOrderStatus: false,
  },
  orderStatus: [
    'Client',
    'Painting Type',
    'Order Id',
    'Order Date',
    'Payment Status',
    'Activity Status',
    'Action',
  ],

  queryDetails: ['Name', 'Email', 'Phone No', 'Message'],
};

export { DashBoardUpperNavItem, DashBoardLowerNavItem, TableHeaderName };
