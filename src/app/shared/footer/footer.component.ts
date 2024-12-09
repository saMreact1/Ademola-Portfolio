import { Component } from '@angular/core';

@Component({
    standalone: false,
    selector: 'app-footer',
    template: `
        <footer>
            <div class="nav">
                <ul>
                    <li>a.</li>
                    <div>
                        <li>
                            <a href="#">
                                <img src="../../../assets/icons/footer_linkedin-line.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../../../assets/icons/footer_mail-line.svg" alt="">
                            </a>                  
                        </li>
                    </div> 
                </ul>
            </div>
            <div class="copyright">
                <img src="../../../assets/icons/copyright.svg" alt="">
                <span>2023 Ademola Enoch. All rights reserved.</span>
            </div>
        </footer>
    `,
    styleUrls: ['../../styles/footer.css']
})
export class FooterComponent {

}
