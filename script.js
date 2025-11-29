document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.querySelector('.timeline-container');
    const shamailGrid = document.querySelector('.shamail-grid');
    const detailView = document.querySelector('.detail-view');
    const detailContent = document.querySelector('.detail-content');
    const closeBtn = document.querySelector('.close-detail');
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
    if (typeof propheticRoutine !== 'undefined') {
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
    }

    // Render Shamail Grid
    if (typeof shamailChapters !== 'undefined' && shamailGrid) {
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

    // Helper to format citations
    function formatTextWithCitations(text) {
        const citationRegex = /(\((?:Sahih|Shamail|Sunan|Jami`?|Musnad|Al-Adab)[^)]+\))/g;
        return text.replace(citationRegex, '<br><span class="citation">$1</span>');
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
        if (e.key === 'Escape' && detailView.classList.contains('active')) {
            closeModal();
        }
    });
});
