export default function createBlockHistoryObject(obj) {
  const blockHistoryCount = {};
  if (obj.length !== 0) {
    obj.forEach(element => {
      if (element.name in blockHistoryCount) {
        blockHistoryCount[element.name]++;
      } else {
        blockHistoryCount[element.name] = 1;
      }
    });
    return blockHistoryCount;
  } else return {};
}
