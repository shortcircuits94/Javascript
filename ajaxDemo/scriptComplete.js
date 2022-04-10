// WEB303 fetch demo

fetch('program.json')
.then(response => {
  console.log('status:', response.status);
  if(response.status === 200) {
    return response.json();
  }
})
.then(data => {
    // do stuff here
    console.log(data);
    document.querySelector('h1').textContent = data.proginfo.title;
    document.querySelector('div').innerHTML = data.courses.map(course => course.code).join('<br/>');
  })
.catch(err => console.log('Error:', err));

  