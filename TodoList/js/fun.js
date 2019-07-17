//ele=document.querySelector("label").textContent


function add(){
    Swal.fire({
  position: 'top-end',
  type: 'success',
  title: ' task saved Sir!',
  showConfirmButton: false,
  timer: 1500
})
}

function remove(){
    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
}