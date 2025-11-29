import { propheticRoutine, shamailChapters, commonSurahs, hadithLibrary } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.querySelector('.timeline-container');
    const shamailGrid = document.querySelector('.shamail-grid');
    const surahGrid = document.querySelector('.surah-grid');
    const detailView = document.querySelector('.detail-view');
    const detailContent = document.querySelector('.detail-content');
    const closeBtn = document.querySelector('.close-detail');
    const hadithModal = document.querySelector('#hadith-modal');
    const hadithBody = document.querySelector('.hadith-body');
    const closeHadithBtn = document.querySelector('.close-hadith');
    const body = document.body;

    // Helper to determine color class based on title/time
    function getItemClass(item) {
        const text = (item.title + " " + item.time).toLowerCase();
        if (text.includes('fajr')) return 'item-fajr';
        if (text.includes('sunrise') || text.includes('morning') && !text.includes('duha')) return 'item-sunrise';
        if (text.includes('duha')) return 'item-duha';
        if (text.includes('zuhr') || text.includes('noon')) return 'item-zuhr';
        if (text.includes('asr') || text.includes('afternoon')) return 'item-asr';
        if (text.includes('maghrib') || text.includes('sunset')) return 'item-maghrib';
        if (text.includes('isha') || text.includes('evening')) return 'item-isha';
        if (text.includes('night') || text.includes('sleep') || text.includes('tahajjud')) return 'item-night';
        return 'item-zuhr'; // Default fallback
    }

    // Render Timeline
    propheticRoutine.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.classList.add('timeline-item');
        timelineItem.classList.add(getItemClass(item)); // Add dynamic color class

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content" data-id="${item.id}">
                <span class="time-badge">${item.time}</span>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-preview">${item.preview}</p>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });

    // Render Shamail Grid
    if (shamailGrid) {
        shamailChapters.forEach(chapter => {
            const card = document.createElement('div');
            card.className = 'shamail-card';
            card.innerHTML = `
                <h3>${chapter.title}</h3>
                <p>${chapter.summary}</p>
                <div class="shamail-hadith">
                    <i class="fas fa-quote-left"></i>
                    <p>${chapter.hadith}</p>
                </div>
            `;
            shamailGrid.appendChild(card);
        });
    }

    // Render Surah Grid
    if (surahGrid) {
        commonSurahs.forEach(surah => {
            const card = document.createElement('div');
            card.className = 'surah-card';
            card.innerHTML = `
                <div class="surah-header">
                    <h3>${surah.name}</h3>
                    <span class="surah-time">${surah.time}</span>
                </div>
                <p class="surah-benefit">${surah.benefit}</p>
                <div class="surah-hadith-ref">
                    <i class="fas fa-book-open"></i>
                    <span>${formatTextWithCitations('(' + surah.hadithRef + ')')}</span>
                </div>
            `;
            surahGrid.appendChild(card);
        });
    }

    // Intersection Observer for Scroll Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Handle Click to View Details
    document.querySelectorAll('.timeline-content').forEach(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.getAttribute('data-id'));
            const data = propheticRoutine.find(d => d.id === id);

            if (data) {
                populateModal(data);
                openModal();
            }
        });
    });

    // Helper to format citations and make them clickable
    function formatTextWithCitations(text) {
        // Regex to find citations in parentheses, e.g., (Sahih al-Bukhari 183)
        const citationRegex = /\(([^)]+)\)/g;
        return text.replace(citationRegex, (match, ref) => {
            // Remove 'Narrated by...' or similar prefixes if present to get the key
            // For now, we assume the text inside () matches the key or is close enough
            // We will try to match it exactly first
            const cleanRef = ref.trim();
            const isLinked = hadithLibrary[cleanRef];

            if (isLinked) {
                return `<br><a href="#" class="citation-link" data-ref="${cleanRef}">(${cleanRef})</a>`;
            } else {
                return `<br><span class="citation">(${cleanRef})</span>`;
            }
        });
    }

    // Modal Functions
    function populateModal(data) {
        detailContent.innerHTML = '';

        // Header
        const header = document.createElement('div');
        header.className = 'detail-header section-header';
        header.style.marginBottom = '3rem';
        header.innerHTML = `
            <span class="time-badge" style="background:var(--primary-color); color:white;">${data.time}</span>
            <h2 style="color: var(--text-main); margin-top:1rem;">${data.title}</h2>
            <p class="subtitle" style="margin-bottom: 0; color: var(--text-muted);">${data.details.intro}</p>
        `;
        detailContent.appendChild(header);

        // Actions
        if (data.details.actions && data.details.actions.length > 0) {
            const actionsSection = document.createElement('div');
            actionsSection.className = 'detail-section';
            actionsSection.innerHTML = `
                <h3><i class="fas fa-walking"></i> Actions & Habits</h3>
                <ul style="list-style: none; padding: 0;">
                    ${data.details.actions.map(action => `
                        <li style="margin-bottom: 1.5rem; padding-left: 1.5rem; position: relative; font-size: 1.1rem;">
                            <span style="position: absolute; left: 0; top: 8px; width: 8px; height: 8px; background: var(--color-zuhr); border-radius: 50%;"></span>
                            ${formatTextWithCitations(action)}
                        </li>
                    `).join('')}
                </ul>
            `;
            detailContent.appendChild(actionsSection);
        }

        // Adhkar
        if (data.details.adhkar && data.details.adhkar.length > 0) {
            const adhkarSection = document.createElement('div');
            adhkarSection.className = 'detail-section';
            adhkarSection.innerHTML = `<h3><i class="fas fa-hands-praying"></i> Adhkar (Supplications)</h3>`;

            data.details.adhkar.forEach(dhikr => {
                const dhikrCard = document.createElement('div');
                dhikrCard.className = 'hadith-quote';
                dhikrCard.innerHTML = `
                    <p class="arabic-text">${dhikr.arabic}</p>
                    <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 0.5rem; font-weight: 500;"><em>${dhikr.transliteration}</em></p>
                    <p style="font-size: 1.1rem;">${formatTextWithCitations(dhikr.translation)}</p>
                `;
                adhkarSection.appendChild(dhikrCard);
            });
            detailContent.appendChild(adhkarSection);
        }

        // Recitation
        if (data.details.recitation) {
            const recitationSection = document.createElement('div');
            recitationSection.className = 'detail-section';
            recitationSection.innerHTML = `
                <h3><i class="fas fa-book-quran"></i> Quranic Recitation</h3>
                <p style="font-size: 1.1rem; line-height: 1.8;">${formatTextWithCitations(data.details.recitation)}</p>
            `;
            detailContent.appendChild(recitationSection);
        }

        // Sources Summary
        if (data.details.sources && data.details.sources.length > 0) {
            const sourcesSection = document.createElement('div');
            sourcesSection.className = 'detail-section';
            sourcesSection.style.marginTop = '4rem';
            sourcesSection.style.borderTop = '2px solid #f1f5f9';
            sourcesSection.style.paddingTop = '2rem';
            sourcesSection.innerHTML = `
                <h4 style="color: var(--text-muted); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;">Authentic Sources:</h4>
                <div class="source-tags">
                    ${data.details.sources.map(source => `<span class="source-tag">${source}</span>`).join('')}
                </div>
            `;
            detailContent.appendChild(sourcesSection);
        }

        // Re-attach event listeners for citations in the modal
        attachCitationListeners();
    }

    function attachCitationListeners() {
        document.querySelectorAll('.citation-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const ref = link.getAttribute('data-ref');
                openHadithModal(ref);
            });
        });
    }

    function openModal() {
        detailView.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeModal() {
        detailView.classList.remove('active');
        body.style.overflow = 'auto';
    }

    closeBtn.addEventListener('click', closeModal);

    detailView.addEventListener('click', (e) => {
        if (e.target === detailView) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (hadithModal.classList.contains('active')) {
                closeHadithModal();
            } else if (detailView.classList.contains('active')) {
                closeModal();
            }
        }
    });

    // Hadith Modal Functions
    function openHadithModal(ref) {
        const hadith = hadithLibrary[ref];
        if (!hadith) return;

        hadithBody.innerHTML = `
            <h3 style="color: var(--primary-color); margin-bottom: 1rem; border-bottom: 2px solid #eee; padding-bottom: 0.5rem;">${ref}</h3>
            <div class="arabic-text" style="font-size: 1.8rem; margin-bottom: 1.5rem; line-height: 2;">${hadith.arabic}</div>
            <div class="english-text" style="font-size: 1.1rem; line-height: 1.6; color: var(--text-main);">${hadith.english}</div>
        `;
        hadithModal.classList.remove('hidden');
        setTimeout(() => hadithModal.classList.add('active'), 10); // Small delay for transition
    }

    function closeHadithModal() {
        hadithModal.classList.remove('active');
        setTimeout(() => hadithModal.classList.add('hidden'), 300); // Wait for transition
    }

    closeHadithBtn.addEventListener('click', closeHadithModal);
    hadithModal.addEventListener('click', (e) => {
        if (e.target === hadithModal) closeHadithModal();
    });

    // Initial attachment for static content (if any)
    attachCitationListeners();
});
