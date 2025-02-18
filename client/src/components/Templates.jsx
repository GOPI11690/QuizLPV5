import { NavLink } from "react-router-dom";

function Templates() {
  return (
    <div id="tempCont" className="tempCont">
      <div>
        <h1>Templates & Examples</h1><br /><br />
      </div>
      <div>
        <p>Hundreds of templates for every use-case,</p><br /><br /><br /><br />
      </div>
      <div className="mainTemp">
        <div>
          <NavLink to={{pathname:'/QuizPage', hash:'html'}}>
            <button>
              <img src="https://wallpapercave.com/wp/wp7421222.jpg"></img>
              <h3>HTML Quiz</h3>
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to={{pathname:'/QuizPage',hash:"css" }}>
            <button>
              <img src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"></img>
              <h3>CSS Quiz</h3>
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to={{pathname:'/QuizPage', hash:'javascript'}}>
            <button>
              <img src="http://radicalhub.com/wp-content/uploads/2018/07/javascript.jpg"></img>
              <h3>JavaScript Quiz</h3>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Templates;
