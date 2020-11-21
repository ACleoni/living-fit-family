import React from 'react';
import Header from '../header/Header';

interface PropsType {
  children: JSX.Element;
}

var array = [-1, 0, 1, 2, 3, 4];

export default function Testimonials() {
  return (
    <div className='uk-container-large'>
      <div className='uk-text-center'>
        <h1 className='uk-text-light'>Join The Family</h1>
      </div>
      <div data-uk-slideshow data-uk-position-relative tabIndex={-1}>
        <ul className='uk-comment-list uk-slideshow-items uk-height-large'>
          {array.map((el, i) => {
            return (
              <li className='uk-margin-remove'>
                <article className='uk-comment uk-comment-primary uk-visible-toggle'>
                  <header className='uk-comment-header uk-position-relative'>
                    <div className='uk-grid-medium uk-flex-middle' data-uk-grid>
                      <div className='uk-width-auto'>
                        <img
                          className='uk-comment-avatar'
                          src='https://images.squarespace-cdn.com/content/v1/53026ab4e4b0649958df1a45/1561570934019-G266ICY40D51GT0PGO3R/ke17ZwdGBToddI8pDm48kPTEJ5HJ8MLZ_egWQa-03lJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ubk7ZpXwahDRcQjR8zkUa_O7EyE4Ea2w1OsUXvv6BohoxCnV_a8VnXRi4YdzBWoJsg/Best+CEO+Executive+portraits+actors+headshots+personal+portraiture+fine+art+portraits+head+shot+nyc+tess+steinkolk+new+york+city+master+photographer+photographs+photography+corporate+ny-.jpg?format=2500w'
                          width='80'
                          height='80'
                          alt=''
                        />
                      </div>
                      <div className='uk-width-1-2'>
                        <h4 className='uk-comment-title uk-margin-remove'>
                          <a className='uk-link-reset' href='#'>
                            Alexander Cleoni
                          </a>
                        </h4>
                      </div>
                    </div>
                  </header>
                  <div className='uk-comment-body'>
                    <p style={{ color: '#000' }}>
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                      labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                      dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                      amet.
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

//
