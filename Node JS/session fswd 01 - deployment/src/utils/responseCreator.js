exports.responseCreator = (message, data)=>{
    return {
        message: message || "Request executed successfully.",
        data: data || []
    }
}
