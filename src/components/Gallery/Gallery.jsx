import DesingBiv from "../DesingBiv/DesingBiv";
import './Gallery.css'

export default function Gallery() {

    return (
        <DesingBiv title='gallery'>
    <div className="gallery-wrapper" >
            <div id="main">

        <div class="container">
            <div class="gallery_card">
                <img src="images/live_music/lm1.jpg" alt="Lord Sauron" />
                <div class="gallery_card_head">Zapta Ashdod</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm2.jpg" alt="Arwen" />
                <div class="gallery_card_head">Zapta Be'er Sheva</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm3.jpg" alt="Gimli" />
                <div class="gallery_card_head">Zapta Afula</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm4.jpg" alt="The Ring" />
                <div class="gallery_card_head">Zapta Haifa</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm5.jpg" alt="Lord Sauron" />
                <div class="gallery_card_head">Zapta Tel Aviv</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm6.jpg" alt="Arwen" />
                <div class="gallery_card_head">Zapta Eilat</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm7.jpg" alt="Gimli" />
                <div class="gallery_card_head">Zapta Natanya</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm8.jpg" alt="The Ring" />
                <div class="gallery_card_head">Zapta Jerusalem</div>
            </div>
            <div class="gallery_card">
                <img src="images/live_music/lm9.jpg" alt="The Ring" />
                <div class="gallery_card_head">Zapta Beit She'an</div>
            </div>
      
            
        </div>
    </div>
    </div>
        </DesingBiv>
        
    )
}