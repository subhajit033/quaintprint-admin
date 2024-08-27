export function formatTableRowData(dataArray, fields) {
  const formattedField = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth',
    'sixth',
    'id',
  ];

  return dataArray.map((item) => {
    let formattedItem = {};

    for (let i = 0; i < formattedField.length; i++) {
      // Split the field path to access nested fields
      const fieldPath = fields[i].split('.');

      // Access the nested field value
      let value = item;
      for (let j = 0; j < fieldPath.length; j++) {
        value = value?.[fieldPath[j]];
        if (value === undefined) break;
      }

      formattedItem[formattedField[i]] = value !== undefined ? value : 'N/A';
    }

    return formattedItem;
  });
}

export const formatAddress = (address) => {
  if (!address) {
    return 'Address Not updated yet by the artist';
  }
  return `${address?.addressLine1} , ${
    address?.addressLine2 ? address.addressLine2 : ''
  } , ${address?.city} , ${address?.state} , ${address?.country}`;
};

export const formatPdtDetails = (fields, data) => {
  let formatData = {};
  for (let i = 0; i < fields.length; i++) {
    formatData[fields[i]] = data[fields[i]];
  }
  return formatData;
};

export const formatUserDeatils = (user) => {
  return {
    firstName: user?.firstName,
    lastName: user?.lastName,
    avatar: user?.avatar,
    contactNo: user?.contactNo,
    altContactNo: user?.altContactNo ? user?.altContactNo : '',
    email: user?.email,
  };
};
