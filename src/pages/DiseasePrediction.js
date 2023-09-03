import React from 'react'
import ai from '../images/predict_banner.jpg'

export default function DiseasePrediction() {
  return (
    <div>
       <div class="doc-img ">
						<img class="img-fluid mx-auto d-block" alt="UserImage" style={{width:'100%',height:'300px'}} src={ai}/>
				</div>
    <div className='container'>
       
       <div className='text-center p-3'>
							<h1>Disease Prediction</h1>
							<p>Ensure your disease by our AI assitant by sharing your disease symptom.</p>
				</div>
        <div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Enter your disease symptom or description here.</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-secondary btn-lg btn-block">Predict Disease</button>
          </form>
          <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
								<h2>It seems like you got <strong>Cancer!</strong></h2>
          </div>
        </div>
        <div className='mt-4'>
            <p>Some example question be like : </p>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Persistent cough, shortness of breath, chest pain."
						</div>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Fever, fatigue, body aches, loss of taste."
						</div>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Sore throat, runny nose, sneezing, fatigue."
						</div>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Joint pain, rash, fever, swollen lymph nodes."
						</div>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Severe headache, nausea, sensitivity to light."
						</div>
            <div class="alert alert-secondary alert-dismissible fade show" role="alert">
                 <strong>Promt: </strong>"Abdominal pain, diarrhea, bloating, weight loss."
						</div>
        </div>
    </div>
    </div>
  )
}
