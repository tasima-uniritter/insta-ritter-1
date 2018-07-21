

module.exports.handler = ( event, context, callback) => {
    const response = {
        statusCode: 200,
        body: {          
            ok : "ok"
        },
      };

  callback(null, response);
};
