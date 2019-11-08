export const sendJSON = (res, data = {}, statusCode = 200) => {
  res.statusCode = statusCode;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
  res.end();
};