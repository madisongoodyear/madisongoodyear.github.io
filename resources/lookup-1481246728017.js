(function(window, undefined) {
  var dictionary = {
    "d636a1d1-9463-46af-b68c-9dd872450f20": "5_Plus_Box_Menu",
    "0cdc0f1f-b5f6-456e-95d1-1a9a12338089": "speak 2",
    "34fe0f3c-1bf0-46e5-b887-58f8f7d5d1b9": "7_Katie_Gone",
    "7e691661-d5ac-42a2-8278-1720946849d3": "speak",
    "9aefb268-f26b-4812-b012-3a3955bc31c3": "6_Unfavorite",
    "fae93e80-750a-459e-a5d4-e6c61f79aade": "8_Favorite_Aaron",
    "d5112630-04e3-4983-9d19-e0f686622ad6": "Group Calling",
    "b1d0fef2-6765-4970-b8a5-1f7f59ab6814": "Home Screen",
    "806c9eea-3278-4194-97db-89200f4695d9": "no keyboard 2",
    "90a32556-41ef-4995-899e-76ebff2ad2f6": "3_C_Screen",
    "79c25df8-77c1-4e55-8363-c417b2711a6e": "no keyboard",
    "d7e1116b-b1b7-4847-a63d-4b389a5091f1": "4_KatieDragDown",
    "1e188b57-4a95-4f92-95c1-f85fe9111e2a": "2_B_Screen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "35588adf-9462-421c-9c61-c32752919b25": "9_Favorite_Aaron2",
    "a8282449-8e61-4c8a-bcca-38af16881e4f": "Audio Calling Contact",
    "d13c9f7c-08c2-4edd-86e1-b19f0ec485f0": "copy",
    "51045fdf-de07-4a6d-afd4-35b40a5efd30": "delete",
    "723b5e72-8565-48d8-97be-32cf1b62d713": "Start Group Call",
    "3ad8a7f5-317d-491b-bd82-301f15a6d0f0": "settings",
    "5e6e88f1-913e-4eb8-96eb-e0cdfe2dd9ba": "1_MainPage",
    "18a29739-833f-4e0b-8dda-82af85a2e95c": "with keyboard",
    "1d4e33e7-aa73-4d14-b7ad-6739a4dad8b8": "10_Favorite_Aaron3",
    "5b7ed832-65ff-450e-936c-953b7fa303cf": "Video Calling Contact",
    "140677c6-8b65-4f9c-96bf-3a884ddf1f6e": "Template 1 imported",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "c8a4d718-48b5-4fe1-8231-7eb52fe1bc41": "Template 1 imported_1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default",
    "3c7a6847-5f86-48fa-b064-7c6e4a481d78": "default imported",
    "0de06d4b-9117-42cd-a5b9-37bf58f5972f": "default imported_1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);