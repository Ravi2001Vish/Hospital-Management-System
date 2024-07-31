import React from 'react'
import  './Footer.css'
const Footers = () => {
  return (
    <div>
      <footer class="footer">
        <div class="footer-section">
            <h2>CATEGORIES</h2>
            <ul>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Counseling</a></li>
                <li><a href="#">Health</a></li>
                <li><a href="#">Kids</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h2>TAGS</h2>
            <div class="tags">
                <a href="#">Beach</a>
                <a href="#">Health</a>
                <a href="#">Holiday</a>
                <a href="#">Information</a>
                <a href="#">Kids</a>
                <a href="#">Music</a>
                <a href="#">Nature</a>
                <a href="#">Randomstuff</a>
                <a href="#">Rock</a>
            </div>
        </div>
        <div class="footer-section">
            <h2>RECENT COMMENTS</h2>
            <p>Aziz Rahman on <a href="#">My kinda people, my kinda place</a></p>
        </div>
    </footer>
    </div>
  )
}

export default Footers