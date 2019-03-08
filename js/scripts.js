// <!--
//
//     Created on :  March 2nd, 2019,  8:39:38 PM
//     Author     : Peter Wachira , Yasmin , Sheila Oigara , Mohammed Mwai
//
//  -->

function searchName(name, id) {
  var nameLower = name.toLowerCase();
  var missingPersons = ["jane", "doe", "john", "dow", "jenny", "pow", "johnny", "test", "joe", "mel", "jem", "allie"];
  var foundPersons = ["marybeth", "omar", "felistas", "wanjoe", "kip", "mercy", "erastus", "munene", "jim", "perry", "jennifer", "wanda"];
  var result;
  if (id == 1) {
    for (var i = 0; i < missingPersons.length; i++) {
      if (nameLower === missingPersons[i]) {
        result = missingPersons.indexOf(missingPersons[i]);
        break;
      } else {
        result = NaN;
      }
    }
  } else {
    for (var i = 0; i < foundPersons.length; i++) {
      if (nameLower === foundPersons[i]) {
        result = foundPersons.indexOf(foundPersons[i]);
        break;
      } else {
        result = NaN;
      }
    }
  }
  return result;
}

function checkID(result, id) {
  var personID = ["personID1", "personID1", "personID2", "personID2", "personID3", "personID3", "personID4", "personID4", "personID5", "personID5", "personID6", "personID6"];
  var foundID = ["foundID1", "foundID1", "foundID2", "foundID2", "foundID3", "foundID3", "foundID4", "foundID4", "foundID5", "foundID6", "foundID6"];
  var elementID;
  if (id == 1) {
    for (var i = 0; i < personID.length; i++) {
      if (result == personID.indexOf(personID[i])) {
        elementID = personID[i];
        break;
      } else {
        elementID = "Not Present";
      }
    }
  } else {
    for (var i = 0; i < foundID.length; i++) {
      if (result == foundID.indexOf(foundID[i])) {
        elementID = foundID[i];
        break;
      } else {
        elementID = "Not Present";
      }
    }
  }
  return elementID;
}

function showResults(elementID, id) {
  if (id == 1) {
    if (elementID === "Not Present") {
      $(".missingElements").hide();
      $("#missingClear").show();
      $("#displayResults").text("No match was found!")
    } else {
      $(".missingElements").hide();
      $("#" + elementID).show();
      $("#missingClear").show();
    }
  } else {
    if (elementID === "Not Present") {
      $(".foundElements").hide();
      $("#foundClear").show();
      $("#displayResults2").text("No match was found!")
    } else {
      $(".foundElements").hide();
      $("#" + elementID).show();
      $("#foundClear").show();
    }
  }

}


$(document).ready(function() {

  $("#missingBtn1").click(function() {
    $("#personDetails1").toggle();
  });
  $("#missingBtn2").click(function() {
    $("#personDetails2").toggle();
  });
  $("#missingBtn3").click(function() {
    $("#personDetails3").toggle();
  });
  $("#missingBtn4").click(function() {
    $("#personDetails4").toggle();
  });
  $("#missingBtn5").click(function() {
    $("#personDetails5").toggle();
  });
  $("#missingBtn6").click(function() {
    $("#personDetails6").toggle();
  });
  $("#foundBtn1").click(function() {
    $("#foundDetails1").toggle();
  });
  $("#foundBtn2").click(function() {
    $("#foundDetails2").toggle();
  });
  $("#foundBtn3").click(function() {
    $("#foundDetails3").toggle();
  });
  $("#foundBtn4").click(function() {
    $("#foundDetails4").toggle();
  });
  $("#foundBtn5").click(function() {
    $("#foundDetails5").toggle();
  });
  $("#foundBtn6").click(function() {
    $("#foundDetails6").toggle();
  });
  $("#missingForm").submit(function(event) {
    event.preventDefault();
    var id = 1;
    var firstName = $("input#missingName").val();
    var checkName = searchName(firstName, id);
    var elementName = checkID(checkName, id);
    showResults(elementName, id);
  });
  $("#foundForm").submit(function(event) {
    event.preventDefault();
    var id = 2;
    var firstName = $("input#foundName").val();
    var checkName = searchName(firstName, id);
    var elementName = checkID(checkName, id);
    showResults(elementName, id);
  });
  $("#missingClear").click(function() {
    location.reload();
  });
  $("#foundClear").click(function() {
    location.reload();
  });

});
