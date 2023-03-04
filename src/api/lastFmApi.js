export const getTracks = async (query) => {

    
    try {
        const url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${process.env.REACT_APP_LAST_FM_APIKEY}&format=json`;
                
        const response = await fetch(url);

        if (!response.ok) {return []};

        const jsonResponse = await response.json();

        return jsonResponse.results.trackmatches.track;

    } catch (error) {
        console.log(error);
        return [];
    }

}