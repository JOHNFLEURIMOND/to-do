function addListItem() {
  var text = $("#toDo").val();
  $(".to_do").append("<li>" + text + '<input type="button" class="edit" value="edit">' + '<input type="button" class="remove" value="remove">' + "</li>");
  $("#toDo").val("")
  todocount();
}
$('.to_do').on('click', '.delete', function() {
  $(this).parent().remove();
});

function clear() {
  $("li").remove()
}

function clearCompleted() {
  $("li.done").remove()
}

function donelist() {
  $(this)

}

$("ul").on("click", "li", function() {
  $(this).toggleClass("target");

});




function todocount() {
  var c = $(".to_do  li").length;
  console.log(c);
  $("#counter").text("You Have " + c + " things to-do!")

};


$("#submitBtn").on("click", addListItem);
$("#clearList").on("click", clear);
$("#clearCompletedList").on("click", clearCompleted)
$(".to_do").on("click", "li", donelist)