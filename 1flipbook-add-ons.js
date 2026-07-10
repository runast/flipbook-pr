        // =============================================
        // 📚 LIBRARY DATA
        // =============================================

const libraryData = [
    {
        id: "Furniture", 
        title: "Furniture with all features",
        cover: "https://flipbook-pr.github.io/flipbook/Furniture_1.jpg",
        url: "https://flipbook-pr.github.io/flipbook/Furniture.pdf",

        leadGenConfig: { 
            enabled: true, 
            lockPage: 10 
        }
    },
    {
        id: "Business", 
        title: "Shoppable feature with business",
        cover: "https://flipbook-pr.github.io/flipbook/Business.jpg",
        url: "https://flipbook-pr.github.io/flipbook/Business.pdf",

        leadGenConfig: { 
            enabled: true, 
            lockPage: 6 
        }
    },
    {
        id: "Wedding",
        title: "Media feature with Wedding",
        cover: "https://flipbook-pr.github.io/flipbook/Wedding_2.jpg",
        url: "https://flipbook-pr.github.io/flipbook/Wedding.pdf",
		
        leadGenConfig: { 
            enabled: true, 
            lockPage: 6 
        }
    },
	
	

    {
        id: "Combat",
        title: "Lead Gen feature with Combat",
        cover: "https://flipbook-pr.github.io/flipbook/Combat.jpg",
        url: "https://flipbook-pr.github.io/flipbook/Combat.pdf",
		
        leadGenConfig: { 
            enabled: true, 
            lockPage: 4 
        }
    },	



            {
                id: "Happiness",
				title: "Maps feature with Happiness",
                cover: "https://flipbook-pr.github.io/flipbook/Happiness.jpg",
                url: "https://flipbook-pr.github.io/flipbook/Happiness.pdf",
		
				leadGenConfig: { 
					enabled: true, 
					lockPage: 6 
				}	
            },
            {
				id: "Sharpening",
                title: "Audio clip feature with Sharpening",
                cover: "https://flipbook-pr.github.io/flipbook/Sharpening.jpg",
                url: "https://flipbook-pr.github.io/flipbook/Sharpening.pdf"
            }	
	
];












/**
 * FlipBook Pro - Shoppable Hotspot Manager (Multi-Catalog Supported)
 */

const HotspotManager = {
    currentBookId: null, 

    // =========================================================
    // 🛍️ MASTER CONFIGURATION 
    // =========================================================
    masterConfig: {
        
        // 📘 Catalog 1: Summer Collection
        "Business": {
            1: [ // Page 2 (Index starts at 0, so actually 3rd page if cover exists)
                { x: 30, y: 40, title: "Vintage Watch", price: "$120.00", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300", link: "#" },
                { x: 70, y: 60, title: "Leather Bag", price: "$85.50", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", link: "#" }
            ],
			
			
            2: [ // Page 2 (Index starts at 0, so actually 3rd page if cover exists)
                { x: 30, y: 40, title: "Vintage Watch", price: "$120.00", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300", link: "#" },
                { x: 70, y: 60, title: "Leather Bag", price: "$85.50", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", link: "#" }
            ],			
			
			
			
            3: [ // Page 2 (Index starts at 0, so actually 3rd page if cover exists)
                { x: 30, y: 40, title: "Vintage Watch", price: "$120.00", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300", link: "#" },
                { x: 70, y: 60, title: "Leather Bag", price: "$85.50", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", link: "#" }
            ],


            4: [ // Page 2 (Index starts at 0, so actually 3rd page if cover exists)
                { x: 30, y: 40, title: "Vintage Watch", price: "$120.00", img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=300", link: "#" },
                { x: 70, y: 60, title: "Leather Bag", price: "$85.50", img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", link: "#" }
            ]			
			
			
			
        },

        // 📘 Catalog 2: Winter Collection
        "Furniture": {
            3: [
                { x: 70, y: 25, title: "Furniture", price: "$200.00", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300", link: "#" }
            ],
            8: [
                 { x: 35, y: 50, title: "Furniture", price: "$150.00", img: "https://images.unsplash.com/photo-1634234498573-29224acf2907?w=300", link: "#" }
            ]
        },

        // 📘 Catalog 3: Electronics
        "Sharpening": {
            1: [
                { x: 60, y: 50, title: "Smart Headphone", price: "$299.00", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300", link: "#" }
            ],
			
            2: [
                { x: 50, y: 70, title: "Smart Headphone", price: "$299.00", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300", link: "#" }
            ]			
        },

        // 📘 Catalog 4: Furniture
        "cat_home": {
            4: [
                { x: 60, y: 70, title: "Modern Chair", price: "$89.00", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300", link: "#" }
            ]
        },

        // 📘 Catalog 5: Kids
        "cat_kids": {
            2: [
                { x: 50, y: 50, title: "Toy Car", price: "$25.00", img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=300", link: "#" }
            ]
        }
    },

    /**
     * Set the active book ID to load specific hotspots
     */
    setActiveBook: function(bookId) {
        this.currentBookId = bookId;
        console.log("Active Hotspot Config Set For:", bookId);
    },

    /**
     * Renders hotspots based on the active book ID
     */
render: function(pageIndex, container) {
    if (!this.currentBookId || !this.masterConfig[this.currentBookId]) return;
    const bookConfig = this.masterConfig[this.currentBookId];
    if (!bookConfig[pageIndex]) return;
    if(container.querySelector('.fbpH-hotspot-layer')) return;


    container.style.transformStyle = "preserve-3d"; 
    container.style.webkitTransformStyle = "preserve-3d";

    const layer = document.createElement('div');
    layer.className = 'fbpH-hotspot-layer';
    

    layer.style.transform = "translateZ(1px)";
    layer.style.webkitTransform = "translateZ(1px)";
    layer.style.zIndex = "20";

    bookConfig[pageIndex].forEach(data => {
        const dot = document.createElement('div');
        dot.className = 'fbpH-hotspot-dot';
        dot.style.left = data.x + '%';
        dot.style.top = data.y + '%';
        

        dot.style.transform = "translate3d(0,0,2px)"; 
        
        dot.innerHTML = '<i class="fas fa-tag"></i>';
        
        dot.addEventListener('click', (e) => {
            e.stopPropagation(); 
            this.openProductModal(data, container);
        });
        
        dot.addEventListener('touchstart', (e) => { 
            e.stopPropagation(); 
        }, {passive: false});

        layer.appendChild(dot);
    });
    
    container.appendChild(layer);
},

    openProductModal: function(data, container) {
        this.closeAllModals(); 
        const modal = document.createElement('div');
        modal.className = 'fbpH-product-modal';
        modal.innerHTML = `
            <div class="fbpH-modal-close"><i class="fas fa-times"></i></div>
            <img src="${data.img}" class="fbpH-product-img" alt="${data.title}">
            <div class="fbpH-product-info">
                <div class="fbpH-product-title">${data.title}</div>
                <span class="fbpH-product-price">${data.price}</span>
                <a href="${data.link}" target="_blank" class="fbpH-product-btn">BUY NOW</a>
            </div>
        `;
        modal.style.left = data.x + '%';
        modal.style.top = data.y + '%';
        modal.style.display = 'block';

        modal.querySelector('.fbpH-modal-close').onclick = (e) => { e.stopPropagation(); modal.remove(); };
        modal.onclick = (e) => e.stopPropagation();
        modal.addEventListener('touchstart', (e) => e.stopPropagation(), {passive: true});

        const layer = container.querySelector('.fbpH-hotspot-layer');
        if(layer) layer.appendChild(modal);
    },

    closeAllModals: function() {
        const modals = document.querySelectorAll('.fbpH-product-modal');
        modals.forEach(m => m.remove());
    }
};






/**
 * FlipBook Pro - Interactive Media Manager (Fixed for YouTube)
 * Supports: YouTube (Auto Convert), Vimeo, Google Maps, HTML5 Audio/Video
 */

const MediaManager = {
    currentBookId: null,

    // ⚙️ MEDIA CONFIGURATION (Example Data)
    masterConfig: {
        // Example for Catalog 1
        "Furniture": {
            1: [

                {
                    type: 'audio',
                    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    x: 20, y: 83, width: 45, height: 7
                }
            ],
			
			
            2: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', 
                    x: 28, y: 65, width: 72, height: 35 
                }
            ],			
			
			
            4: [
                {
                    type: 'google_map',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301337!2d90.39108031536267!3d23.75085809467747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xbcb087062e3e1e10!2sDhaka!5e0!3m2!1sen!2sbd!4v1633512345678',
                    x: 25, y: 58, width: 74, height: 35
                }
            ]
        },
		
		
        "Wedding": {
            1: [

                {
                    type: 'audio',
                    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    x: 15, y: 56, width: 45, height: 7
                }
            ],
			
			
            4: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', 
                    x: 30, y: 30, width: 65, height: 30 
                }
            ],			
			
			
            6: [
                {
                    type: 'google_map',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301337!2d90.39108031536267!3d23.75085809467747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xbcb087062e3e1e10!2sDhaka!5e0!3m2!1sen!2sbd!4v1633512345678',
                    x: 25, y: 65, width: 74, height: 35
                }
            ]
        },		
		
        "Happiness": {			
            3: [
                {
                    type: 'youtube',
                    url: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ', 
                    x: 15, y: 40, width: 70, height: 35 
                }
            ],			
			
			
            8: [
                {
                    type: 'google_map',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301337!2d90.39108031536267!3d23.75085809467747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xbcb087062e3e1e10!2sDhaka!5e0!3m2!1sen!2sbd!4v1633512345678',
                    x: 15, y: 40, width: 74, height: 35
                }
            ]
        },	


        "Sharpening": {			
            2: [
                {
                    type: 'audio',
                    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    x: 15, y: 20, width: 45, height: 7
                }
            ],			
			
			
            6: [
                {
                    type: 'google_map',
                    url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301337!2d90.39108031536267!3d23.75085809467747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b888ad3b91bf%3A0xbcb087062e3e1e10!2sDhaka!5e0!3m2!1sen!2sbd!4v1633512345678',
                    x: 15, y: 50, width: 74, height: 35
                }
            ]
        }


		
		
    },

    setActiveBook: function(bookId) {
        this.currentBookId = bookId;
    },

    // Helper: YouTube ID 
    getYouTubeSrc: function(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = (match && match[2].length === 11) ? match[2] : null;
        
        if(!videoId) return url; 

        return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&controls=1&showinfo=0&html5=1`;
    },

    getVimeoSrc: function(url) {
        const regExp = /vimeo.*\/(\d+)/i;
        const match = url.match(regExp);
        const videoId = match ? match[1] : null;
        if(!videoId) return url;
        return `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`;
    },

render: function(pageIndex, container) {
    if (!this.currentBookId || !this.masterConfig[this.currentBookId]) return;
    const bookConfig = this.masterConfig[this.currentBookId];
    if (!bookConfig[pageIndex]) return;
    if(container.querySelector('.fbpH-media-layer')) return;

    const layer = document.createElement('div');
    layer.className = 'fbpH-media-layer';
    
    layer.style.transform = "translateZ(1px)";
    layer.style.webkitTransform = "translateZ(1px)";
    layer.style.zIndex = "15";

    bookConfig[pageIndex].forEach(media => {
        const item = document.createElement('div');
        item.className = 'fbpH-media-item';
        item.style.left = media.x + '%';
        item.style.top = media.y + '%';
        item.style.width = media.width + '%';
        item.style.height = media.height + '%';
        
        item.style.transform = "translate3d(0,0,0)";
        item.style.backfaceVisibility = "hidden";

        if (media.type === 'youtube') {
            const embedSrc = this.getYouTubeSrc(media.url);
            item.innerHTML = `<iframe src="${embedSrc}&wmode=transparent" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%; height:100%; pointer-events:auto;"></iframe>`;
        } 

        else if (media.type === 'vimeo') {
             const embedSrc = this.getVimeoSrc(media.url);
             item.innerHTML = `<iframe src="${embedSrc}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="width:100%; height:100%;"></iframe>`;
        }

        else if (media.type === 'audio') {
            item.classList.add('fbpH-media-audio');
            item.innerHTML = `<audio controls ><source src="${media.url}" type="audio/mpeg"></audio>`;
        }

        else if (media.type === 'video') { 
            item.innerHTML = `<video controls playsinline style="width:100%; height:100%;"><source src="${media.url}" type="video/mp4"></video>`;
        }
else if (media.type === 'google_map') {

            const mapWrapper = document.createElement('div');
            mapWrapper.style.width = "100%";
            mapWrapper.style.height = "100%";
            mapWrapper.style.backgroundColor = "#ffffff"; 
            mapWrapper.style.overflow = "hidden";
            
            mapWrapper.style.transform = "translate3d(0, 0, 0)"; 
            mapWrapper.style.webkitTransform = "translate3d(0, 0, 0)";

            mapWrapper.innerHTML = `<iframe 
                src="${media.url}" 
                width="100%" 
                height="100%" 
                style="border:0; width:100%; height:100%; display:block;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>`;

            item.appendChild(mapWrapper);

            item.addEventListener('touchstart', (e) => {
                e.stopPropagation(); 
            }, { passive: false });
            
            item.addEventListener('touchmove', (e) => {
                e.stopPropagation();
            }, { passive: false });
        }


        item.addEventListener('mousedown', (e) => e.stopPropagation());
        item.addEventListener('touchstart', (e) => e.stopPropagation(), {passive: false});
        item.addEventListener('click', (e) => e.stopPropagation());

        layer.appendChild(item);
    });

    container.appendChild(layer);
},

    stopAllMedia: function() {
        const iframes = document.querySelectorAll('.fbpH-media-item iframe');
        iframes.forEach(iframe => {
            const src = iframe.src;
            iframe.src = src; // Reload stops video
        });

        const audios = document.querySelectorAll('audio, video');
        audios.forEach(media => {
            media.pause();
        });
    }
};








/**
 * FlipBook Pro - Modular Lead Generation
 */

const LeadGen = {

    isSubmitting: false,

    config: {
        enabled: false, 
        lockPage: 6,
        googleScriptURL: "YOUR_GOOGLE_SCRIPT_URL_HERE", 
        storageKey: "fbpH_lead_unlocked",
        currentBookId: null
    },

    setConfig: function(settings, bookId) {
        const oldOverlay = document.getElementById('fbpH-lead-overlay');
        if (oldOverlay) oldOverlay.remove();

        this.config.currentBookId = bookId;
        this.config.storageKey = `fbpH_lead_unlocked_${bookId}`;

        if (settings && settings.enabled === true) {
            this.config.enabled = true;
            this.config.lockPage = settings.lockPage || 4;
            this.init();
        } else {
            this.config.enabled = false;
        }
    },

    init: function() {
        if (!this.config.enabled) return;
        if (localStorage.getItem(this.config.storageKey) === 'true') return;

        this.renderModal();
        this.attachEvents();
    },

    renderModal: function() {
        if(document.getElementById('fbpH-lead-overlay')) return;

        const div = document.createElement('div');
        div.id = 'fbpH-lead-overlay';
        div.className = 'fbpH-lead-overlay';
        div.innerHTML = `
            <div class="fbpH-lead-box">
                <i class="fas fa-lock fbpH-lead-icon"></i>
                <div class="fbpH-lead-title">Unlock Full Access</div>
                <div class="fbpH-lead-desc">
                    To continue reading this book, please enter your details.
                </div>
                <form id="fbpH-lead-form">
                    <input type="text" id="lead-name" class="fbpH-lead-input" placeholder="Your Name" required>
                    <input type="email" id="lead-email" class="fbpH-lead-input" placeholder="Your Email Address" required>
                    <button type="submit" id="lead-submit-btn" class="fbpH-lead-btn">UNLOCK NOW</button>
                </form>
                <div id="lead-msg" style="margin-top:10px; font-size:13px; color:#f1c40f;"></div>
            </div>
        `;
        document.body.appendChild(div);
		
    },

    checkLock: function(currentPageIndex) {
        if (!this.config.enabled) return;
        if (localStorage.getItem(this.config.storageKey) === 'true') return;

        const current = currentPageIndex + 1;
        if (current >= this.config.lockPage) {
            const overlay = document.getElementById('fbpH-lead-overlay');
            if(overlay) overlay.classList.add('active');
            
            if(typeof stopAutoPlay === 'function') stopAutoPlay();
            if(typeof AudiobookManager !== 'undefined') AudiobookManager.stopReading();
        }
    },


    attachEvents: function() {
        const form = document.getElementById('fbpH-lead-form');
        const btn = document.getElementById('lead-submit-btn');

        if(form) {

            form.onsubmit = (e) => {
                e.preventDefault();

                if (this.isSubmitting) return;

                const name = document.getElementById('lead-name').value;
                const email = document.getElementById('lead-email').value;

                this.isSubmitting = true;
                btn.innerText = "Processing...";
                btn.disabled = true;

                const formData = new FormData();
                formData.append('name', name);
                formData.append('email', email);
                formData.append('book_id', this.config.currentBookId);

                if (this.config.googleScriptURL === "YOUR_GOOGLE_SCRIPT_URL_HERE") {
                    setTimeout(() => {
                        this.unlockBook();
                        alert("Book Unlocked! (Demo Mode)");
                        this.isSubmitting = false; 
                    }, 1000);
                    return;
                }

                fetch(this.config.googleScriptURL, { method: 'POST', body: formData })
                    .then(response => response.json()) 
                    .then(data => {
                        console.log("Success:", data);
                        this.unlockBook();
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                      
                        this.unlockBook();
                    })
                    .finally(() => {
                        this.isSubmitting = false;
                        btn.disabled = false;
                        btn.innerText = "UNLOCK NOW";
                    });
            };
        }
    },

    unlockBook: function() {
        localStorage.setItem(this.config.storageKey, 'true');
        const overlay = document.getElementById('fbpH-lead-overlay');
        if(overlay) overlay.classList.remove('active');
        
        const toast = document.getElementById('fbpH-toast');
        if(toast) {
            toast.innerText = "Book Unlocked!";
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2000);
        }
    }
};



/**
 * FlipBook Pro - Google AdSense Integration Manager (Dynamic Layout Fix)
 */
const AdSenseManager = {
    config: {
        enabled: true,             // বিজ্ঞাপন চালু করতে true false করুন
        publisherId: "", // বায়ারের অ্যাডসেন্স আইডি
        
        placements: {
            aboveBook: {
                enabled: false,
                slotId: "8508694333", // বইয়ের উপরের ব্যানারের স্লট আইডি
                showOnPages: [],      
                excludePages: [1, 2]  
            },
            belowBook: {
                enabled: true,
                slotId: "8508694333", // বইয়ের নিচের ব্যানারের স্লট আইডি
                showOnPages: [],      
                excludePages: [1]     // কভার পেজে দেখাবে না
            },
            sidebar: {
                enabled: false,
                slotId: "8508694333"  
            },
            leadGen: {
                enabled: false,
                slotId: "8508694333"  
            }
        }
    },

    init: function() {
        if (!this.config.enabled || !this.config.publisherId || this.config.publisherId.includes("XXXX")) {
            return;
        }

        if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${this.config.publisherId}`;
            script.crossOrigin = "anonymous";
            document.head.appendChild(script);
        }

        this.injectPlacements();
    },

    injectPlacements: function() {
        const placements = this.config.placements;
        const popup = document.getElementById('fbpH-popup');
        if (!popup) return;

        // বুক স্টেজের ওপরে ব্যানার বিজ্ঞাপন
        if (placements.aboveBook.enabled) {
            const stage = document.getElementById('fbpH-stage');
            if (stage && !document.getElementById('adsense-above-book')) {
                const adDiv = this.createAdElement('adsense-above-book', placements.aboveBook.slotId, "100%", "90px");
                stage.parentNode.insertBefore(adDiv, stage);
                popup.classList.add('has-ad-above');
                this.pushAd();
            }
        }

        // বুক স্টেজের নিচে ব্যানার বিজ্ঞাপন
        if (placements.belowBook.enabled) {
            const stage = document.getElementById('fbpH-stage');
            if (stage && !document.getElementById('adsense-below-book')) {
                const adDiv = this.createAdElement('adsense-below-book', placements.belowBook.slotId, "100%", "90px");
                stage.parentNode.insertBefore(adDiv, stage.nextSibling);
                popup.classList.add('has-ad-below');
                this.pushAd();
            }
        }

        // সাইডবারের বিজ্ঞাপন
        if (placements.sidebar.enabled) {
            const thumbContainer = document.getElementById('fbpH-thumb-container');
            if (thumbContainer && !document.getElementById('adsense-sidebar')) {
                const adDiv = this.createAdElement('adsense-sidebar', placements.sidebar.slotId, "100%", "250px");
                adDiv.style.marginTop = "20px";
                thumbContainer.appendChild(adDiv);
                this.pushAd();
            }
        }
    },

    onPageChange: function(pageIndex) {
        if (!this.config.enabled) return;
        const pageNum = pageIndex + 1;

        this.togglePlacement('aboveBook', 'adsense-above-book', pageNum);
        this.togglePlacement('belowBook', 'adsense-below-book', pageNum);
    },

    togglePlacement: function(placementKey, elementId, pageNum) {
        const placement = this.config.placements[placementKey];
        if (!placement || !placement.enabled) return;

        const adEl = document.getElementById(elementId);
        const popup = document.getElementById('fbpH-popup');
        if (!adEl) return;

        let shouldShow = true;

        if (placement.showOnPages && placement.showOnPages.length > 0) {
            shouldShow = placement.showOnPages.includes(pageNum);
        }

        if (shouldShow && placement.excludePages && placement.excludePages.length > 0) {
            shouldShow = !placement.excludePages.includes(pageNum);
        }

        if (shouldShow) {
            adEl.style.display = "flex";
            if (popup) popup.classList.add(`has-ad-${placementKey === 'aboveBook' ? 'above' : 'below'}`);
        } else {
            adEl.style.display = "none";
            if (popup) popup.classList.remove(`has-ad-${placementKey === 'aboveBook' ? 'above' : 'below'}`);
        }

        // স্ক্রিন রিসাইজ করা যাতে ফ্লিপবুকটি পুনরায় সেট হয়
        if (typeof autoResizeBook === 'function') {
            autoResizeBook();
        }
    },

    injectLeadGenAd: function() {
        if (!this.config.enabled || !this.config.placements.leadGen.enabled) return;
        const form = document.getElementById('fbpH-lead-form');
        if (form && !document.getElementById('adsense-leadgen')) {
            const adDiv = this.createAdElement('adsense-leadgen', this.config.placements.leadGen.slotId, "100%", "100px");
            form.appendChild(adDiv);
            this.pushAd();
        }
    },

    createAdElement: function(id, slotId, width, height) {
        const wrapper = document.createElement('div');
        wrapper.id = id;
        wrapper.className = "fbpH-adsense-wrapper";

        const ins = document.createElement('ins');
        ins.className = "adsbygoogle";
        ins.style.cssText = `display:block; width: ${width}; height: ${height};`;
        ins.setAttribute('data-ad-client', this.config.publisherId);
        ins.setAttribute('data-ad-slot', slotId);
        ins.setAttribute('data-ad-format', 'auto');
        ins.setAttribute('data-full-width-responsive', 'true');

        wrapper.appendChild(ins);
        return wrapper;
    },

    pushAd: function() {
        try {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.warn("AdSense push postponed: ", e.message);
        }
    }
};








/**
 * FlipBook Pro - Advanced Text-to-Speech
 * Features: Dual Page Reading, Smart Voice Selection, Fixed UI (French Support Added)
 */

const AudiobookManager = {
    isActive: false,
    synth: window.speechSynthesis,
    voices: [],
    checkInterval: null,
    
    config: {
        lang: 'en-US', // 'en-US' is set for English language.
        voiceName: null, 
        rate: 1.0,     
        pitch: 1.0,    
        volume: 1.0
    },

    init: function() {
        const loadVoices = () => {
            this.voices = this.synth.getVoices();
            console.log("🔊 Voices Loaded:", this.voices.length);
            this.populateVoiceList();
        };
        
        loadVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }

        setTimeout(() => this.injectSettingsUI(), 500);
    },

    // 🛠️ UI 
    injectSettingsUI: function() {
        const controls = document.getElementById('fbpH-controls');
        if (!controls) return;

        if (!document.getElementById('fbpH-btn-audio-settings')) {
            const settingsBtn = document.createElement('button');
            settingsBtn.className = 'fbpH-btn';
            settingsBtn.id = 'fbpH-btn-audio-settings';
            settingsBtn.title = "Audio Settings";
            settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
            settingsBtn.onclick = (e) => {
                e.stopPropagation();
                this.toggleSettingsPanel();
            };
            
            const audioBtn = document.getElementById('fbpH-btn-audio');
            if(audioBtn) {
                audioBtn.parentNode.insertBefore(settingsBtn, audioBtn.nextSibling);
            } else {
                controls.appendChild(settingsBtn);
            }
        }

        // (FIXED Position)
        if (!document.getElementById('fbpH-audio-panel')) {
            const panel = document.createElement('div');
            panel.id = 'fbpH-audio-panel';
            
            panel.style.cssText = `
                position: fixed; 
                bottom: 80px; 
                left: 50%; 
                transform: translateX(-50%);
                width: 320px; 
                background: rgba(20, 20, 20, 0.95); 
                border: 1px solid #444;
                padding: 20px; 
                border-radius: 12px; 
                color: #fff; 
                z-index: 10006;
                display: none; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.7); 
                font-family: 'Poppins', sans-serif;
            `;
            
            panel.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; border-bottom:1px solid #444; padding-bottom:10px;">
                    <span style="font-weight:600; color:#ff9f43; font-size:16px;">Audio Settings</span>
                    <i class="fas fa-times" style="cursor:pointer; font-size:18px; color:#aaa;" id="fbpH-audio-close"></i>
                </div>
                
                <label style="font-size:13px; color:#ddd; display:block; margin-bottom:8px;">Select Voice:</label>
                <select id="fbpH-voice-select" style="width:100%; background:#333; color:#fff; border:1px solid #555; padding:8px; margin-bottom:20px; border-radius:6px; outline:none; font-size:13px;"></select>
                
                <label style="font-size:13px; color:#ddd; display:block; margin-bottom:5px;">Speed: <span id="val-rate" style="color:#ff9f43;">1.0</span>x</label>
                <input type="range" id="fbpH-rate-range" min="0.5" max="1.5" step="0.1" value="1" style="width:100%; margin-bottom:15px; cursor:pointer;">

                <label style="font-size:13px; color:#ddd; display:block; margin-bottom:5px;">Pitch: <span id="val-pitch" style="color:#ff9f43;">1.0</span></label>
                <input type="range" id="fbpH-pitch-range" min="0.5" max="1.5" step="0.1" value="1" style="width:100%; cursor:pointer;">
            `;
            
            document.body.appendChild(panel);

            document.getElementById('fbpH-audio-close').addEventListener('click', () => this.toggleSettingsPanel());

            document.getElementById('fbpH-voice-select').addEventListener('change', (e) => {
                this.config.voiceName = e.target.value;
                this.restartSpeech();
            });

            document.getElementById('fbpH-rate-range').addEventListener('input', (e) => {
                this.config.rate = parseFloat(e.target.value);
                document.getElementById('val-rate').innerText = this.config.rate;
                this.restartSpeech();
            });

            document.getElementById('fbpH-pitch-range').addEventListener('input', (e) => {
                this.config.pitch = parseFloat(e.target.value);
                document.getElementById('val-pitch').innerText = this.config.pitch;
                this.restartSpeech();
            });

            document.addEventListener('click', (e) => {
                const panel = document.getElementById('fbpH-audio-panel');
                const btn = document.getElementById('fbpH-btn-audio-settings');
                if (panel && panel.style.display === 'block') {
                    if (!panel.contains(e.target) && !btn.contains(e.target)) {
                        panel.style.display = 'none';
                    }
                }
            });
        }
    },

    toggleSettingsPanel: function() {
        const panel = document.getElementById('fbpH-audio-panel');
        if (!panel) return;
        if (panel.style.display === 'none' || panel.style.display === '') {
            panel.style.display = 'block';
            this.populateVoiceList();
        } else {
            panel.style.display = 'none';
        }
    },

    populateVoiceList: function() {
        const voiceSelect = document.getElementById('fbpH-voice-select');
        if(!voiceSelect) return;
        
        voiceSelect.innerHTML = '';
        
        if (this.voices.length === 0) {
            voiceSelect.innerHTML = '<option>Loading voices...</option>';
            return;
        }

        // To filter the selected language code
        const targetLang = this.config.lang.split('-')[0].toLowerCase();

        const preferredVoices = this.voices.filter(voice => {
            const name = voice.name;
            const lang = voice.lang.toLowerCase();
            
            const isPremium = name.includes("Google") || name.includes("Microsoft") || name.includes("Natural");
            
            // Some common voice filters from French and Apple
            const isAppleFrench = name.includes("Thomas") || name.includes("Audrey") || name.includes("Aurélie");
            const isTargetLang = lang.startsWith(targetLang);

            return isTargetLang && (isPremium || isAppleFrench || voice.default);
        });

        // If no preferred voice is found, common voices in that language will be used.
        let finalVoiceList = preferredVoices.length > 0 ? preferredVoices : this.voices.filter(v => v.lang.toLowerCase().startsWith(targetLang));

        // If no voices for that language are available in the system, all voices will be available as backups.
        if (finalVoiceList.length === 0) {
            finalVoiceList = this.voices;
        }

        finalVoiceList.forEach((voice) => {
            const option = document.createElement('option');
            option.value = voice.name; 

            let cleanName = voice.name
                .replace("Microsoft", "")
                .replace("Google", "")
                .replace("French", "")
                .replace("France", "FR")
                .trim();
            option.textContent = cleanName.length > 0 ? `${cleanName} (${voice.lang})` : voice.name;

            if (voice.name === this.config.voiceName) {
                option.selected = true;
            }
            voiceSelect.appendChild(option);
        });

        // To set the default voice for the first time
        if (!this.config.voiceName && finalVoiceList.length > 0) {
            const defaultVoice = finalVoiceList.find(v => v.name.includes("Google") || v.name.includes("Microsoft")) || finalVoiceList[0];
            if (defaultVoice) {
                this.config.voiceName = defaultVoice.name;
                voiceSelect.value = defaultVoice.name;
            }
        }
    },

    restartSpeech: function() {
        if(this.isActive) {
            this.stopReading(false); 
            if (this.restartTimeout) clearTimeout(this.restartTimeout);
            this.restartTimeout = setTimeout(() => this.readCurrentPage(), 500); 
        }
    },

    toggle: function(btnElement) {
        if (typeof pageFlip === 'undefined') return;
        this.isActive = !this.isActive;

        if (this.isActive) {
            if(btnElement) {
                btnElement.classList.add('active-btn');
                btnElement.innerHTML = '<i class="fas fa-volume-up"></i>';
            }
            this.readCurrentPage();
        } else {
            if(btnElement) {
                btnElement.classList.remove('active-btn');
                btnElement.innerHTML = '<i class="fas fa-headphones"></i>';
            }
            this.stopReading();
        }
    },

    readCurrentPage: function() {
        if (!this.isActive) return;
        this.stopReading(false);

        const currentIndex = pageFlip.getCurrentPageIndex();
        const orientation = pageFlip.getOrientation(); 
        
        let pagesToRead = [currentIndex];
        if (orientation === 'landscape' && (currentIndex + 1) < pageFlip.getPageCount()) {
            pagesToRead.push(currentIndex + 1);
        }

        let attempts = 0;
        const maxAttempts = 20; 

        this.checkInterval = setInterval(() => {
            attempts++;
            let combinedText = "";
            
            const arePagesRendered = pagesToRead.every(idx => {
                const pData = typeof pageDataMap !== 'undefined' ? pageDataMap.find(p => p.index === idx) : null;
                return pData && pData.isRendered;
            });

            pagesToRead.forEach((idx) => {
                const txt = this.getPageText(idx);
                if (txt) combinedText += txt + " . ";
            });

            if ((combinedText.trim().length > 0 && arePagesRendered) || attempts > 8) {
                clearInterval(this.checkInterval);
                if(combinedText.trim().length > 0) {
                    this.speak(combinedText);
                } else {
                    console.log("No text found.");
                }
            } else if (attempts >= maxAttempts) {
                clearInterval(this.checkInterval);
            }
        }, 500);
    },

    getPageText: function(pageIndex) {
        if (typeof pageDataMap === 'undefined') return "";
        const pageData = pageDataMap.find(p => p.index === pageIndex);
        if (!pageData || !pageData.element) return "";
        const textLayer = pageData.element.querySelector('.textLayer');
        return textLayer ? textLayer.innerText.replace(/\s+/g, ' ').trim() : "";
    },

    speak: function(text) {
        if (!this.isActive) return;
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = this.config.lang;
        
        utterance.rate = this.config.rate;
        utterance.pitch = this.config.pitch;
        utterance.volume = this.config.volume;
        
        if (this.config.voiceName) {
            const selectedVoice = this.voices.find(v => v.name === this.config.voiceName);
            if (selectedVoice) utterance.voice = selectedVoice;
        } 
        else {
            const targetLang = this.config.lang.split('-')[0].toLowerCase();
            const defaultVoice = this.voices.find(v => v.lang.toLowerCase().startsWith(targetLang));
            if(defaultVoice) utterance.voice = defaultVoice;
        }

        utterance.onerror = (e) => console.error("Speech Error:", e);
        window.currentUtterance = utterance; // Garbage collection fix
        
        this.synth.speak(utterance);
    },

    stopReading: function(resetBtn = true) {
        this.synth.cancel();
        if (this.checkInterval) clearInterval(this.checkInterval);
        if (resetBtn) this.isActive = false;
    },

    handlePageFlip: function() {
        if (this.isActive) {
            this.stopReading(false);
            setTimeout(() => this.readCurrentPage(), 1000);
        }
    }
};

// Initialize
AudiobookManager.init();