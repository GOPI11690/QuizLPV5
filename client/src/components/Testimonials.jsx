import googleLogo from "./assets/images/googleLogo.jpg";
import fordLogo from "./assets/images/fordLogo.jpg";
import upsLogo from "./assets/images/upsLogo.jpg";

export default function Testimonials() {
  return (
    <div id="mainTesti" className="mainTesti">
      <div className="titleCont">
        <h1>Loved By Our Customers</h1>
        <br /> <br />
        <p>Hundreds of customers gave us 5-star reviews</p>
        <br /> <br />
      </div>
      <div className="starCont">
        <div>
                        {/* Customers comments about company */}
          <img src={googleLogo}></img>
          <h6>★ ★ ★ ★ ★</h6>
          <p>
            With Gobs Quiz&apos;s engaging & user-friendly quizzes,we can
            extract brand insights while remaining faithful to Outbrain&apos;s
            quality content standards. We&apos;re able to track brand lift that
            shows our customers the value of our campaigns in a cost-effective
            and seamless manner.
          </p>
        </div>
        <div>
          <img src={fordLogo}></img>
          <h6>★ ★ ★ ★ ★</h6>
          <p>
            With Gobs Quiz we can create unique, beautiful, and on-brand content
            in an easy, collaborative fashion, drive insights that help us
            create better experiences, track how customers are engaging with our
            initiatives, and live our values of driving progress by trying,
            learning, and improving our product.
          </p>
        </div>
        <div>
          <img src={upsLogo}></img>
          <h6>★ ★ ★ ★ ★</h6>
          <p>
            By using Gobs Quiz, we have a user-friendly built-in system that
            allows us to get better responses. The product is so simple to use,
            that we&apos;ve seen nearly a 50% increase in feedback submitted,
            which has been a tremendous help for my team!
          </p>
        </div>
      </div>
    </div>
  );
}
