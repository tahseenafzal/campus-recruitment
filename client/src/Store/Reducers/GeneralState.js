const pending = () => ({
    isLoading: true,
    isError: false,
    errorMessage: "",
    successMessage: ""
});

const apiResponded = (isError, message) => ({
    isLoading: false,
    isError,
    errorMessage: isError ? message : "",
    successMessage: !isError ? message : ""
});

export {
    pending,
    apiResponded
}