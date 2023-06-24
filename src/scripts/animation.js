const elements = document.querySelectorAll('.card-groups');

const opt = {
    root: null,
    rootMargin: '0px',
    threshold: .4
}

const callback = (entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('active');
            element.target.classList.add('animate__fadeInUp')
        }
    });
}

let obs = new IntersectionObserver(callback, opt)

elements.forEach(el => {
    obs.observe(el)
})