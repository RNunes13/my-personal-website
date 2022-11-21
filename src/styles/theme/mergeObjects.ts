export const mergeObjects = (...objects:any):any => {
  const merged:any = {};
  Object.values(objects).forEach((o:any) => {
    Object.keys(o).forEach((k) => {
      if (Array.isArray(o[k])) {
        if (!merged[k]) {
          merged[k] = [];
        }
        merged[k] = [...merged[k], ...o[k]];
      } else if (typeof o[k] === 'object') {
        if (!merged[k]) {
          merged[k] = {};
        }
        merged[k] = mergeObjects(merged[k], o[k]);
      } else {
        merged[k] = o[k];
      }
    });
  });
  return merged;
};

export default mergeObjects;
