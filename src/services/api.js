export const GetEvents= async ()=>{
    return await fetch('./data.json', true)
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(events) {
        console.log(events);
        return events;
      })
  }
  