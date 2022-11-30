
// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
exports.handler = async (event) => {
    const itemId = event.pathParameters.itemId;
    const item = {
        "itemId": itemId,
        "item": "Item " + itemId
    }
    console.log("itemId: " + itemId);
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(item),
    };
    console.log(response);
    return response;
};
