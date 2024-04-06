module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "pay",
                input: event,
            },
            null,
            2
        ),
    };
};
