// تحميل وعرض فريق العمل
async function loadTeam() {
    try {
        const response = await fetch('assets/data/team.json');
        const team = await response.json();
        displayTeam(team);
    } catch (error) {
        console.error('Error loading team data:', error);
        document.getElementById('teamContainer').innerHTML = 
            '<p class="error">عذرًا، حدث خطأ في تحميل بيانات الفريق.</p>';
    }
}

function displayTeam(team) {
    const container = document.getElementById('teamContainer');
    container.innerHTML = '';

    team.forEach((member, index) => {
        const memberCard = document.createElement('div');
        memberCard.className = 'team-member-card stagger-item';
        memberCard.style.animationDelay = `${index * 0.1}s`;

        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <div class="title">${member.title}</div>
            <div class="specialization">${member.specialization}</div>
            <p class="bio">${member.bio}</p>
        `;

        container.appendChild(memberCard);
    });
}

// تحميل الفريق عند فتح الصفحة
document.addEventListener('DOMContentLoaded', loadTeam);