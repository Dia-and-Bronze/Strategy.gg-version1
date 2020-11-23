import React from 'react';
import OtherGnb from './../components/OtherGnb.js'
import './MainPage.css';
import './ModelPage.css';
import {Link} from 'react-router-dom';

const ModelPage = () => {
    return(
        <div className="container" >
            <OtherGnb/>
            <div>
            <section className='main'>
              <article className='explane'>
                <h1 className='title'>Model(x)</h1>
                <p className='contents'>
                  Mode(x)는 ~~~~~이러한 모델입니다.
                </p>
              </article>
              <article className="explane">
                <h1 className='title'>ST(X)</h1>
                <p className='contents'>
                  ST(x)는 ~~~~~한 모델입니다. 
                </p>
              </article>
              <article className='explane'>
                <h1 className='title'>PS(x)</h1>
                <p className='contents'>
                  PS (X)는 ~~~~한 모델입니다.
                </p>
              </article>
              <article className='explane'>
                <h1 className='title'>DATA</h1>
                <p className='contents'>
                  저희 데이터는 ~~~한 방법으로 수집하였습니다. 
                </p>
              </article>
            </section>
          </div>
          <div className='button'>
            <Link to='/MainPage'>
              <button className='back'>메인 페이지</button>
            </Link>
          </div>*/
        </div>
    );
}

export default ModelPage;