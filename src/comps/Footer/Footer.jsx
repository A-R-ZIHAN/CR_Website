import React from 'react'

function Footer() {
  return (
    <div>
          <footer class="page-footer" style={{backgroundColor:"black"}}>
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Email: games.cliffhanger@gmail.com</h5>
                {/* <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p> */}
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Social Media</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/gaming/CountryRecalls/">Facebook</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://discord.gg/EvJgcPJ">Discord</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://twitter.com/CliffhangerGam3">Twitter</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCxckyIliRNx9wvyal2cyS6w?view_as=subscriber">Youtube</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Huddloper Games
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
