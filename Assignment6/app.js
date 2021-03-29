const text=document.getElementById('text');

const addbtn=document.getElementById('addbtn');
const ul=document.getElementById('list');
const editdiv=document.getElementById('editDiv');
const addDiv=document.getElementById('addDiv');
const okbtn=document.getElementById('okbtn');
const editt=document.getElementById('editt');


addbtn.addEventListener('click',(e)=>{
    
  const li=document.createElement('li');
  const i=document.createElement('i');
  const edit=document.createElement('i');
  //const ok=document.createElement('i');
  //const div3=document.createElement('div');
 // div3.classList.add('');
 // const input=document.appendChild('input');
  const div1=document.createElement('div');
  const div2=document.createElement('div');
  const div=document.createElement('div');
  const h4=document.createElement('h4');
  i.className="fas fa-trash-alt";
  edit.className="fas fa-edit";
  //ok.className="far fa-check-circle";
  
  div2.appendChild(edit);
  div2.appendChild(i);
  i.style.marginLeft='1rem';
  div2.style.marginLeft='1rem';
  div2.classList.add('size');

  if(text.value!="")
  {
  h4.innerText=text.value;
  div1.appendChild(h4);
  console.log(text.value);
  div.appendChild(div1);
  console.log(li);
  div.appendChild(div2);
  div.style.display='flex';
  //h4.style.overflow='hidden';
  //h4.style.textOverflow='ellipsis'
  div1.style.wordBreak='break-word';
  div.style.justifyContent='space-between';
  li.appendChild(div);
  text.value="";
  ul.appendChild(li);
  i.addEventListener('click',(e)=>{
      li.remove();
      console.log("hello");

      
  });


  edit.addEventListener('click',(e)=>{

    editdiv.classList.toggle('d-none');
    addDiv.classList.toggle('d-none');
    div2.classList.toggle('d-none');
    editt.value=h4.innerText;
    okbtn.addEventListener('click',(e)=>{
        h4.innerText=editt.value;

        editdiv.classList.toggle('d-none');
        addDiv.classList.toggle('d-none');
        div2.classList.toggle('d-none');

    });

  });
}
});