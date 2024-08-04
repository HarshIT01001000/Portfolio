import Img2 from "/ImageForHome/Education2.jpg";

function Educard({item1,item2,item3}){
    return(
        <>
        <div class="card mb-3" className="max-width: 540px; bg-[#C0C0C0] w-[60rem] h-[13rem] flex rounded-2xl transition duration-300 ease-in-out transform hover:scale-110">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={Img2} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body" className="pl-4">
        <h5 class="card-title" className=" font-cinzel text-2xl font-bold mt-7">{item1}</h5>
        <p class="card-text" className=" font-quu font-2xl">{item2}</p>
        <p class="card-text"><small class="text-body-secondary">{item3}</small></p>
      </div>
    </div>
  </div>
</div>
        
        </>
    )
}
export default Educard