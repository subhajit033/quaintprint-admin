export function formatTableRowData(dataArray, fields) {
  const formattedField = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];

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
