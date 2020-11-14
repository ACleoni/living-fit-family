import React from 'react';
import Header from '../header/Header';

interface PropsType {
  children: JSX.Element;
}

export default function Testimonials() {
  return (
    <div className='uk-container-large uk-padding'>
      <div className='ux-text-center'>
        <h1 className='uk-text-light'>Join Our Community</h1>
      </div>
      <div data-uk-slideshow className='uk-text-center'>
        <ul className='uk-slideshow-items uk-text-emphasis'>
          <li>
            <article className='uk-comment uk-comment-primary'>
              <header className='uk-comment-header'>
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
                  <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                      <a className='uk-link-reset' href='#'>
                        Author
                      </a>
                    </h4>
                    <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top'>
                      <li>
                        <a href='#'>Atlanta, GA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className='uk-comment-body'>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className='uk-comment uk-comment-primary'>
              <header className='uk-comment-header'>
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
                  <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                      <a className='uk-link-reset' href='#'>
                        Author
                      </a>
                    </h4>
                    <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top'>
                      <li>
                        <a href='#'>Atlanta, GA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className='uk-comment-body'>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
          </li>

          <li>
            <article className='uk-comment uk-comment-primary'>
              <header className='uk-comment-header'>
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
                  <div className='uk-width-expand'>
                    <h4 className='uk-comment-title uk-margin-remove'>
                      <a className='uk-link-reset' href='#'>
                        Author
                      </a>
                    </h4>
                    <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top'>
                      <li>
                        <a href='#'>Atlanta, GA</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <div className='uk-comment-body'>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
}
