import React from 'react'

const Courosal = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{alignItems:'center',justifyContent:'center',display:'flex',marginBottom:10}}>
            <h4 style={{color:'red'}}>Projects</h4>
        </div>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://i0.wp.com/bigtechquestion.com/wp-content/uploads/2020/05/Who-Instagram-stalks-me.png?fit=2350%2C1296&ssl=1" class="d-block w-100" style={{height:'70vh'}} alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color:'white', fontFamily:'monospace'}}>Instagram Web</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://i.pcmag.com/imagery/reviews/06ZvTNln3Toz309WtTLDiwP-25.fit_lim.size_1050x591.v1652212718.jpg" class="d-block w-100" style={{height:'70vh'}} alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Whatsapp Web</h5>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo.jpg" class="d-block w-100" style={{height:'70vh'}} alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color:'black',fontFamily:'monospace'}}>HDFC Bank</h5>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Courosal