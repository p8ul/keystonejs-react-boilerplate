export default {
  process: (instance, req) => new Promise((resolve, reject) => {
    instance.getUpdateHandler(req).process(req.body, (err) => {
      if (err) return reject(err);
      return resolve(instance);
    });
  }),
};
