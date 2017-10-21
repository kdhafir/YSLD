//Check If webstorage is supported
if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
    alert("عذراً.. جهازك يا يدعم قواعدالبيانات المستخدمة في البرنامج");
}

// Foucs in the search input
document.getElementById("searchInput").focus();


//word.forEach(creatTable)
function creatTable(word) {
    
  
    //code
}
//word.foreach()
//Search function
function searchtable(){
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("searchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("searchTable");
  tr = table.getElementsByTagName("tr");

//choose column number
    //var colname = document.querySelector('input[name="colname"]:checked').value;
    var colname = 0;
    
// Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[colname];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function showWordsModal(wordfile,wordexplain){
    document.getElementById('WordExplain').innerHTML = wordexplain;
    document.getElementById('wordpic').innerHTML = "<img width=\"100%\" src=\"wordsimgsdb/family/" +wordfile+"\">";
	$('#WordsModal').modal({
		backdrop: 'static',
		keyboard: false,
		show: true
	});
}
