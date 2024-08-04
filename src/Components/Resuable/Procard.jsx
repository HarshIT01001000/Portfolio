function Procard({item1,item2,item3,item4,item5}) {
  return (
    <>
      <div class="card">
        <img src={item4} class="card-img-top" alt="..."  className="w-[34rem] h-[23rem] p-2"/>
        <div class="card-body">
          <h5 class="card-title" className=" font-cinzel text-2xl font-bold">{item1}</h5>
          <p class="card-text" className=" font-quu text-xl">
           {item2}
          </p>
          <p className="font-cinzel text-xl">{item5}</p>
        </div>
        <div class="card-footer">
          <small class="text-body-secondary" className=" font-quu text-[1rem]">{item3}</small>
        </div>
      </div>
    </>
  );
}
export default Procard;
