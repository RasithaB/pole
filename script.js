
let pollData = {
    'JavaScript': 0,
    'Python': 0,
    'Java': 0,
    'C#': 0
};

const hasVoted = localStorage.getItem('voted');

function renderResults() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    let totalVotes = 0;
    for (let key in pollData) {
        totalVotes += pollData[key];
    }

    for (let key in pollData) {
        const percentage = totalVotes > 0 ? (pollData[key] / totalVotes * 100).toFixed(1) : 0;
        const resultHTML = `
            <div class="chart-bar-label">${key}: ${percentage}%</div>
            <div class="chart-bar" style="width: ${percentage}%">${pollData[key]} votes</div>
        `;
        resultContainer.innerHTML += resultHTML;
    }
}

function vote(option) {
    if (hasVoted) {
        alert('You have already voted!');
        return;
    }

    
    pollData[option]++;
    localStorage.setItem('voted', 'true'); 
    renderResults();
}

function resetPoll() {
    pollData = {
        'JavaScript': 0,
        'Python': 0,
        'Java': 0,
        'C#': 0
    };
    localStorage.removeItem('voted'); 
    renderResults();
}


renderResults();
