
function Plans() {
  return (
    <section className="membershipPage" id="membershipPage">
    <div className="memberTitle">
        <h1 style={{fontWeight: '600',}}>Plans And Pricing</h1>
        <p>Unlock a year of exclusive access to premium content, expert Quizzez, and in-depth analysis trusted by worlds forward thinking leaders for just Rs.5599. Become a Gobs Quiz member for less than Rs.100/week.</p><br/><br/>
    </div>
    <div className="priceCard">
        <div className="card text-center">
            <div className="card-header">
              Monthly
            </div>
            <div className="card-body">
                <h6>Casual</h6>
              <h5 className="card-title">Rs.499</h5>
              <p className="card-text">Monthly Billed</p>
              <a href="#" className="btn btn-primary">Subscribe</a>
            </div>
            <div className="card-footer text-body-secondary">
              No automatic renewal
            </div>
          </div>
          <div className="card text-center">
            <div className="card-header">
              Annually
            </div>
            <div className="card-body">
                <h6 style={{color:'red'}}>Less than Rs.100 per week</h6>
              <h5 className="card-title">Rs.5499</h5>
              <p className="card-text">For your First year</p>
              <a href="#" className="btn btn-danger">Subscribe</a>
            </div>
            <div className="card-footer text-body-secondary">
              Renews at Rs.6599 Annually
            </div>
          </div>
          <div className="card text-center">
            <div className="card-header">
              Two Year
            </div>
            <div className="card-body">
                <h6>For Savings</h6>
              <h5 className="card-title">Rs.6499</h5>
              <p className="card-text">For your Two years</p>
              <a className="btn btn-primary">Subscribe</a>
            </div>
            <div className="card-footer text-body-secondary">
              Renews at Rs.7599 
            </div>
          </div>
          
    </div>
    <br/><br/>
    <h5>Memberships renew automatically. You can cancel your membership at any time.</h5>
        </section>
  )
}

export default Plans