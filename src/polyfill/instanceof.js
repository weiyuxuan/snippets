function instanceOf (obj, classFunction) {
  if (obj === undefined || obj === null) return false;
  if (classFunction === undefined || classFunction === null) return false;

  let proto = obj.__proto__;
  const classProto = classFunction.prototype;

  while (proto) {
    if (proto === classProto) {
      return true;
    }
    proto = proto.__proto__;
  }

  return false;
}
