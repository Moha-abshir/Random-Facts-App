import axios from "axios";

const testApi = async () => {
    try {
        const response = await axios.get("https://api.api-ninjas.com/v1/facts", {
            headers: {
                "X-Api-Key": process.env.VITE_API_KEY
            }
        });
        console.log(response.data);
    } catch (error) {
        console.log(error.response ? error.response.data : error.message);
    }
};
testApi();