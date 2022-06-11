export const getByPath = (obj, path) => {
  // console.log("getByPath", obj, path)
  const parts = path.split('.');
  let current = obj;
  if (Array.isArray(parts) && parts.length > 1) {
    // оба варианта делают одно и тоже, но решил,
    // что скорость тут важнее читаемости
    for (let i = 0; i < parts.length; i++) {
      current = current[parts[i]];
      if (!current) break;
    }
    /*parts.forEach(part => {
      current = current[part];
    });*/
    return current;
  }

  // console.log((current[path])['color'])
  return current[path];
};
