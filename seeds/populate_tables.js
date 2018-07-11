exports.seed = (knex, Promise) => {
  return Promise.join(
    knex("users", "blogs", "tags", "blogs_tags", "media", "media_tags").del(),
    knex("users").insert([
      {
        user_id: 1,
        username: "BROICHI",
        password: "gangbusters",
        name: "Broichi Slope-Roll",
        email: "s.koichi@gmail.com",
        bio: "I am a placeholder bio"
      },
      {
        user_id: 2,
        username: "McMandy",
        password: "mandymandy",
        name: "makster",
        email: "McMandy@gmail.com",
        bio: "I am so awsome"
      },
      {
        user_id: 3,
        username: "Charlie",
        password: "Sakafunagel",
        name: "knowsitall",
        email: "huffy@gmail.com",
        bio: "Former data scientist"
      },
      {
        user_id: 4,
        username: "Lina",
        password: "Luna",
        name: "Lina Luna Lei",
        email: "sarusaru@gmail.com",
        bio: "I love anime, dos toros, pokemon"
      }
    ]),
    knex("blogs").insert([
      {
        blog_id: 1,
        title: "WELCOME TO NIHON",
        content: "YOLO SWAG",
        user_id: 1
      }
    ]),
    knex("tags").insert([
      {
        tag_id: 1,
        tag_name: "Tokyo"
      },
      {
        tag_id: 2,
        tag_name: "Japan"
      }
    ]),
    knex("blogs_tags").insert([
      { blog_tags_id: 1, tag_id: 1, blog_id: 1 },
      { blog_tags_id: 2, tag_id: 2, blog_id: 1 }
    ]),
    knex("countries").insert([
      { country_id: 1, country: "Afghanistan" },
      { country_id: 2, country: "Albania" },
      { country_id: 3, country: "Algeria" },
      { country_id: 4, country: "Andorra" },
      { country_id: 5, country: "Angola" },
      { country_id: 6, country: "Anguilla" },
      { country_id: 7, country: "Antigua & Barbuda" },
      { country_id: 8, country: "Argentina" },
      { country_id: 9, country: "Armenia" },
      { country_id: 10, country: "Aruba" },
      { country_id: 11, country: "Australia" },
      { country_id: 12, country: "Austria" },
      { country_id: 13, country: "Azerbaijan" },
      { country_id: 14, country: "Bahamas" },
      { country_id: 15, country: "Bahrain" },
      { country_id: 16, country: "Bangladesh" },
      { country_id: 17, country: "Barbados" },
      { country_id: 18, country: "Belarus" },
      { country_id: 19, country: "Belgium" },
      { country_id: 20, country: "Belize" },
      { country_id: 21, country: "Benin" },
      { country_id: 22, country: "Bermuda" },
      { country_id: 23, country: "Bhutan" },
      { country_id: 24, country: "Bolivia" },
      { country_id: 25, country: "Bosnia & Herzegovina" },
      { country_id: 26, country: "Botswana" },
      { country_id: 27, country: "Brazil" },
      { country_id: 28, country: "British Virgin Islands" },
      { country_id: 29, country: "Brunei" },
      { country_id: 30, country: "Bulgaria" },
      { country_id: 31, country: "Burkina Faso" },
      { country_id: 32, country: "Burundi" },
      { country_id: 33, country: "Cambodia" },
      { country_id: 34, country: "Cameroon" },
      { country_id: 35, country: "Canada" },
      { country_id: 36, country: "Cape Verde" },
      { country_id: 37, country: "Cayman Islands" },
      { country_id: 38, country: "Chad" },
      { country_id: 39, country: "Chile" },
      { country_id: 40, country: "China" },
      { country_id: 41, country: "Colombia" },
      { country_id: 42, country: "Congo" },
      { country_id: 43, country: "Cook Islands" },
      { country_id: 44, country: "Costa Rica" },
      { country_id: 45, country: "Cote D Ivoire" },
      { country_id: 46, country: "Croatia" },
      { country_id: 47, country: "Cruise Ship" },
      { country_id: 48, country: "Cuba" },
      { country_id: 49, country: "Cyprus" },
      { country_id: 50, country: "Czech Republic" },
      { country_id: 51, country: "Denmark" },
      { country_id: 52, country: "Djibouti" },
      { country_id: 53, country: "Dominica" },
      { country_id: 54, country: "Dominican Republic" },
      { country_id: 55, country: "Ecuador" },
      { country_id: 56, country: "Egypt" },
      { country_id: 57, country: "El Salvador" },
      { country_id: 58, country: "Equatorial Guinea" },
      { country_id: 59, country: "Estonia" },
      { country_id: 60, country: "Ethiopia" },
      { country_id: 61, country: "Falkland Islands" },
      { country_id: 62, country: "Faroe Islands" },
      { country_id: 63, country: "Fiji" },
      { country_id: 64, country: "Finland" },
      { country_id: 65, country: "France" },
      { country_id: 66, country: "French Polynesia" },
      { country_id: 67, country: "French West Indies" },
      { country_id: 68, country: "Gabon" },
      { country_id: 69, country: "Gambia" },
      { country_id: 70, country: "Georgia" },
      { country_id: 71, country: "Germany" },
      { country_id: 72, country: "Ghana" },
      { country_id: 73, country: "Gibraltar" },
      { country_id: 74, country: "Greece" },
      { country_id: 75, country: "Greenland" },
      { country_id: 76, country: "Grenada" },
      { country_id: 77, country: "Guam" },
      { country_id: 78, country: "Guatemala" },
      { country_id: 79, country: "Guernsey" },
      { country_id: 80, country: "Guinea" },
      { country_id: 81, country: "Guinea Bissau" },
      { country_id: 82, country: "Guyana" },
      { country_id: 83, country: "Haiti" },
      { country_id: 84, country: "Honduras" },
      { country_id: 85, country: "Hong Kong" },
      { country_id: 86, country: "Hungary" },
      { country_id: 87, country: "Iceland" },
      { country_id: 88, country: "India" },
      { country_id: 89, country: "Indonesia" },
      { country_id: 90, country: "Iran" },
      { country_id: 91, country: "Iraq" },
      { country_id: 92, country: "Ireland" },
      { country_id: 93, country: "Isle of Man" },
      { country_id: 94, country: "Israel" },
      { country_id: 95, country: "Italy" },
      { country_id: 96, country: "Jamaica" },
      { country_id: 97, country: "Japan" },
      { country_id: 98, country: "Jersey" },
      { country_id: 99, country: "Jordan" },
      { country_id: 100, country: "Kazakhstan" },
      { country_id: 101, country: "Kenya" },
      { country_id: 102, country: "Kuwait" },
      { country_id: 103, country: "Kyrgyz Republic" },
      { country_id: 104, country: "Laos" },
      { country_id: 105, country: "Latvia" },
      { country_id: 106, country: "Lebanon" },
      { country_id: 107, country: "Lesotho" },
      { country_id: 108, country: "Liberia" },
      { country_id: 109, country: "Libya" },
      { country_id: 110, country: "Liechtenstein" },
      { country_id: 111, country: "Lithuania" },
      { country_id: 112, country: "Luxembourg" },
      { country_id: 113, country: "Macau" },
      { country_id: 114, country: "Macedonia" },
      { country_id: 115, country: "Madagascar" },
      { country_id: 116, country: "Malawi" },
      { country_id: 117, country: "Malaysia" },
      { country_id: 118, country: "Maldives" },
      { country_id: 119, country: "Mali" },
      { country_id: 120, country: "Malta" },
      { country_id: 121, country: "Mauritania" },
      { country_id: 122, country: "Mauritius" },
      { country_id: 123, country: "Mexico" },
      { country_id: 124, country: "Moldova" },
      { country_id: 125, country: "Monaco" },
      { country_id: 126, country: "Mongolia" },
      { country_id: 127, country: "Montenegro" },
      { country_id: 128, country: "Montserrat" },
      { country_id: 129, country: "Morocco" },
      { country_id: 130, country: "Mozambique" },
      { country_id: 131, country: "Namibia" },
      { country_id: 132, country: "Nepal" },
      { country_id: 133, country: "Netherlands" },
      { country_id: 134, country: "Netherlands Antilles" },
      { country_id: 135, country: "New Caledonia" },
      { country_id: 136, country: "New Zealand" },
      { country_id: 137, country: "Nicaragua" },
      { country_id: 138, country: "Niger" },
      { country_id: 139, country: "Nigeria" },
      { country_id: 140, country: "Norway" },
      { country_id: 141, country: "Oman" },
      { country_id: 142, country: "Pakistan" },
      { country_id: 143, country: "Palestine" },
      { country_id: 144, country: "Panama" },
      { country_id: 145, country: "Papua New Guinea" },
      { country_id: 146, country: "Paraguay" },
      { country_id: 147, country: "Peru" },
      { country_id: 148, country: "Philippines" },
      { country_id: 149, country: "Poland" },
      { country_id: 150, country: "Portugal" },
      { country_id: 151, country: "Puerto Rico" },
      { country_id: 152, country: "Qatar" },
      { country_id: 153, country: "Reunion" },
      { country_id: 154, country: "Romania" },
      { country_id: 155, country: "Russia" },
      { country_id: 156, country: "Rwanda" },
      { country_id: 157, country: "Saint Pierre & Miquelon" },
      { country_id: 158, country: "Samoa" },
      { country_id: 159, country: "San Marino" },
      { country_id: 160, country: "Satellite" },
      { country_id: 161, country: "Saudi Arabia" },
      { country_id: 162, country: "Senegal" },
      { country_id: 163, country: "Serbia" },
      { country_id: 164, country: "Seychelles" },
      { country_id: 165, country: "Sierra Leone" },
      { country_id: 166, country: "Singapore" },
      { country_id: 167, country: "Slovakia" },
      { country_id: 168, country: "Slovenia" },
      { country_id: 169, country: "South Africa" },
      { country_id: 170, country: "South Korea" },
      { country_id: 171, country: "Spain" },
      { country_id: 172, country: "Sri Lanka" },
      { country_id: 173, country: "St Kitts & Nevis" },
      { country_id: 174, country: "St Lucia" },
      { country_id: 175, country: "St Vincent" },
      { country_id: 176, country: "St. Lucia" },
      { country_id: 177, country: "Sudan" },
      { country_id: 178, country: "Suriname" },
      { country_id: 179, country: "Swaziland" },
      { country_id: 180, country: "Sweden" },
      { country_id: 181, country: "Switzerland" },
      { country_id: 182, country: "Syria" },
      { country_id: 183, country: "Taiwan" },
      { country_id: 184, country: "Tajikistan" },
      { country_id: 185, country: "Tanzania" },
      { country_id: 186, country: "Thailand" },
      { country_id: 187, country: "Timor L'Este" },
      { country_id: 188, country: "Togo" },
      { country_id: 189, country: "Tonga" },
      { country_id: 190, country: "Trinidad & Tobago" },
      { country_id: 191, country: "Tunisia" },
      { country_id: 192, country: "Turkey" },
      { country_id: 193, country: "Turkmenistan" },
      { country_id: 194, country: "Turks & Caicos" },
      { country_id: 195, country: "Uganda" },
      { country_id: 196, country: "Ukraine" },
      { country_id: 197, country: "United Arab Emirates" },
      { country_id: 198, country: "United Kingdom" },
      { country_id: 199, country: "United States" },
      { country_id: 200, country: "United States Minor Outlying Islands" },
      { country_id: 201, country: "Uruguay" },
      { country_id: 202, country: "Uzbekistan" },
      { country_id: 203, country: "Venezuela" },
      { country_id: 204, country: "Vietnam" },
      { country_id: 205, country: "Virgin Islands (US)" },
      { country_id: 206, country: "Yemen" },
      { country_id: 207, country: "Zambia" },
      { country_id: 208, country: "Zimbabwe" }
    ]),
    knex("favorite_destinations").insert([
      { favorite_destination_id: 1, destination_id: 1, user_id: 1 },
      { favorite_destination_id: 2, destination_id: 2, user_id: 1 },
      { favorite_destination_id: 3, destination_id: 3, user_id: 2 },
      { favorite_destination_id: 4, destination_id: 4, user_id: 2 }
    ]),
    knex("visited_destinations").insert([
      { visited_destination_id: 1, destination_id: 5, user_id: 1 },
      { visited_destination_id: 2, destination_id: 6, user_id: 1 },
      { visited_destination_id: 3, destination_id: 7, user_id: 2 },
      { visited_destination_id: 4, destination_id: 8, user_id: 2 }
    ]),
    knex("user_friends").insert([
      { user_friend_id: 1, friend_id: 2, user_id: 1 },
      { user_friend_id: 2, friend_id: 3, user_id: 1 },
      { user_friend_id: 3, friend_id: 4, user_id: 1 }
    ]),
    knex("media").insert([
      {
        user_id: 1,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/demand-response-Japan.jpg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/download.jpeg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/japan_rail_pass_03.jpg"
      },
      {
        user_id: 1,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/images.jpeg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Japan-McMandy/Doraemon-.jpg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Japan-McMandy/girls_in_japan.jpg"
      },
      {
        user_id: 2,
        country_id: 97,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Japan-McMandy/ramen.jpg"
      },
      {
        user_id: 2,
        country_id: 155,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Russia/Russia1.jpg"
      },
      {
        user_id: 2,
        country_id: 155,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Russia/Russia2.jpg"
      },

      {
        user_id: 2,
        country_id: 155,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Russia/Russia3.jpg"
      },

      {
        user_id: 2,
        country_id: 155,
        image_url:
          "https://s3.amazonaws.com/griffyndor/Russia/Russia4.jpeg"
      }
    ])
  );
};
