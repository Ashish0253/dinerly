const apiKey =
  "AjzyRB-KQX6Lzeag34sMpxMEwNMkkWjYC5VfQaBlmOQvcbB_0E9g1YQq92hmGrC16W9ouG9_zMJIA-LZ3BG07h3Up3jZQ9M62ArA_YjCEzLkJTK6T6gDAOcX_BEOY3Yx";
// const Yelp = {
//     async search(term, location, sortBy) {
//         return await fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
//         headers: {
//             Authorization: `Bearer ${apiKey}`,
//             origin: 'localhost',
//             withCredentials: true
//         }
//     }).then(response => {
//         if(response.ok){
//             const jsonResponse = await response.json();

//             return jsonResponse;
//         }
//         throw new Error('request failed!');
//     }).then(jsonResponse => {
//         if (jsonResponse.businesses) {
//             jsonResponse.businesses.map(business => {
//                 return {
//                     id: business.id,
//                     imageSrc: business.image_url,
//                     name: business.name,
//                     address: business.address1,
//                     city: business.city,
//                     state: business.state,
//                     zipCode: business.zip_code,
//                     category: business.categories[0].title,
//                     rating: business.rating,
//                     reviewCount: business.review_count
//                 }
//             })
//         }
//     });
//     }
// };

const Yelp = {
  async search(term, location, sortBy) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();

        if (jsonResponse.businesses) {
          const yelpResponse = jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });

          console.log(yelpResponse);
          return yelpResponse;
        }
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = Yelp;
