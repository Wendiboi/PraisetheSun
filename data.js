// Attempting to store this value and update these values as JSON files to be opened in thread.html and seen in Discussions.html

const defaultThreads = [
    {
        id: 1,
        title: "Check to See if this is Working",
        author: "Dawid",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Zandre", 
                date: Date.now(),
                content: "You know it"
            },
            {
                author: "Kevin", 
                date: Date.now(),
                content: "We can confirm"
            }
        ]
    },
    {
        id: 2,
        title: "I have (almost) solo'd this -w-",
        author: "Reefe",
        date: Date.now(),
        content: "Thread content",
        comments: [
            {
                author: "Kevin", 
                date: Date.now(),
                content: "stop trying to solo everything"
            },
            {
                author: "BruceWayne", 
                date: Date.now(),
                content: "Looking through his window right now. He is not going to stop"
            }
        ]
    }
]

// Attempt to store JSON files as local storage to save data added

let threads = defaultThreads;

if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
};