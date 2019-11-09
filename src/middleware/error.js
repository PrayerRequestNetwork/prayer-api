export default (err, req, res, next) => {
  let error = {
    error: (typeof err === 'object' && err.message) || err,
  };
  res.statusCode = (typeof err === 'object' && err.status) || 500;
  res.statusMessage = (typeof err === 'object' && err.statusMessage) || 'Server Error';
  res.write(JSON.stringify(error));
  res.end();
};