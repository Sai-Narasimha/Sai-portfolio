let about = document.getElementById("about");
about.innerHTML = `
<section class="about" id="about">
        <div class="max-width">
            <h2 class="title"> ABOUT </h2>
            <div class="about-content">
                <div class="column left">
                    <img src="images/sai.png" alt=""
                        style="border-radius: 300px; background-color: rgba(146, 139, 139, 0.068);">
                </div>
                <div class="column right">
                    <div class="text"> I'm Sai Narasimha</div>
                    <p>call me Sai, </p>
                    <p>Skilled frontend developer proficient in React with over 1.5+ years
                    of hands-on experience. Renowned for crafting applications with
                    clean, readable code and dynamic UI designs using state-of-the-
                    art CSS frameworks such as Bootstrap, Tailwind CSS, and
                    Material-UI. Recognized for consistently meeting project
                    deadlines with precision, while also demonstrating expertise in
                    JavaScript ES6+, Redux, and responsive web design principles.
                    Experienced in integrating APIs and collaborating with backend
                    developers to ensure seamless functionality. Strong advocate
                    for code quality, accessibility, and user experience optimization
                    </p>
                    <br/>
                    <div class="mediaLinksAbout">
                         <a href="https://www.linkedin.com/in/sai-narasimha-sn/" target="_blank">
                        /    <i class="fab fa-linkedin"></i>
                        / </a>
                        <a href="https://github.com/Sai-Narasimha" target="_blank">
                        /     <i class="fab fa-github"></i>
                        / </a>
                        <a href="https://sainb.blogspot.com/" target="_blank">
                        /     <i class="fab fa-blogger"></i>
                        / </a>
                    </div>
                    
                    <a href='mailto:bukkapatnam.sainarasimha@gmail.com'>
                        <p class="iconsAboutSection"><i class="fas fa-envelope"></i> bukkapatnam.sainarasimha@gmail.com</p>
                    </a>
                    <a  href="tel:+91 8074352708">
                        <p class="iconsAboutSection"> <i class="fas fa-phone"></i> +91-8074352708</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1J5RQgQsVMjRiOW5BLsrzI5f0aHf4dhtu/view?usp=sharing"
                       onclick="openAndDownload(this.href); return false;"
                        target="_blank" class="resumeToDrive">Resume</a>
                </div>
            </div>
        </div>
    </section>
`;

function openAndDownload(url) {
  // Open the file in a new tab
  window.open(url, '_blank');

  // Trigger the download
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1J5RQgQsVMjRiOW5BLsrzI5f0aHf4dhtu';
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'Resume.pdf';  // You can specify the file name here
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
