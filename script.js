const projects = [
  {
    id: 1,
    title: 'PDF COMPRESSED',
    category: 'DOCUMENTATION',
    type: 'COMPRESSION',
    year: '2026',
    role: 'PDF Compression Specialist',
    tools: ['VS Code', 'Python', 'JavaScript'],
    image: 'assets/projects/PDF/01-pdf-compressed.webp',
    description:
      'PDF COMPRESSED adalah layanan kompresi PDF yang dirancang untuk mengurangi ukuran file PDF tanpa mengorbankan kualitas, sehingga memudahkan berbagi dan penyimpanan dokumen.',
    challenge:
      'Mengurangi ukuran file PDF tanpa mengorbankan kualitas.',
    solution:
      'Saya mengembangkan algoritma kompresi yang efisien dan mengoptimalkan proses kompresi untuk memastikan kualitas tetap terjaga sambil mengurangi ukuran file secara signifikan.',
    gallery: [
      'assets/projects/PDF/01-pdf-compressed.webp'
    ],
    liveUrl: '#'
  },
  {
    id: 2,
    title: 'Activator win 10 & Office 365,2021',
    category: 'Software Development',
    type: 'Activation Tool',
    year: '2026',
    role: 'Activation tool developer',
    tools: ['VS Code', 'Python', 'JavaScript'],
    image: 'assets/projects/Activator/02-activator-win10-office365.webp',
    description:
      'Activator win 10 & Office 365,2021 adalah alat aktivasi yang dirancang untuk memberikan pengalaman pengguna yang mulus dan aman, memungkinkan pengguna untuk mengaktifkan sistem operasi Windows dan Office 365 mereka dengan mudah.',
    challenge:
      'Menciptakan alat aktivasi yang aman, mudah digunakan, dan kompatibel dengan berbagai versi Windows.',
    solution:
      'Saya mengembangkan antarmuka pengguna yang intuitif dan algoritma aktivasi yang aman, memastikan kompatibilitas dengan berbagai versi Windows sambil menjaga keamanan dan keandalan alat.',
    gallery: [
      'assets/projects/Activator/02-activator-win10-office365.webp'
    ],
    liveUrl: '#'
  },
  {
    id: 3,
    title: 'Webapp Absensi',
    category: 'Pengembangan Web',
    type: 'web-development',
    year: '2026',
    role: 'Pengembang Front-end & Backand',
    tools: ['PHP', 'Tailwind CSS', 'JavaScript', 'Laravel', 'mySQL'],
    image: 'assets/projects/Absensi/03-Absensi.webp',
    description:
      'SIABSEN dibangun untuk memenuhi kebutuhan pencatatan kehadiran pegawai pada sebuah instansi.',
    challenge:
      'Menggantikan proses absensi manual dengan sistem digital yang terverifikasi lokasi (GPS) dan foto.',
    solution:
      'Mempermudah proses absensi dan rekapan agar lebih rapi dan transparan.',
    gallery: [
      'assets/projects/Absensi/03-Absensi.webp',
      'assets/projects/Absensi/003-Login-absen.webp'
    ],
    liveUrl: '#'
  },
  {
    id: 4,
    title: 'Desain Grafis',
    category: 'Desain Grafis',
    type: 'Desain-Grafis',
    year: '2010-2026',
    role: 'Desainer Visual',
    tools: ['Photoshop', 'Illustrator', 'Affinity Studio'],
    image: 'assets/projects/Desain-grafis/04-Desain-grafis.webp',
    description:
      'Membangun identitas visual yang konsisten dan menarik, mulai dari materi promosi digital hingga desain media cetak untuk memperkuat brand awareness.',
    challenge:
      'Klien membutuhkan identitas visual yang konsisten dan profesional untuk memperkuat citra brand di berbagai media.',
    solution:
      'Merancang sistem desain modular yang fleksibel untuk media cetak dan digital guna meningkatkan brand awareness.',
    gallery: [
      'assets/projects/Desain-grafis/idcard.webp',
      'assets/projects/Desain-grafis/shape.webp',
      'assets/projects/Desain-grafis/red.webp',
      'assets/projects/Desain-grafis/04-Desain-grafis.webp',
      'assets/projects/Desain-grafis/cover.webp',
      'assets/projects/Desain-grafis/bidan.webp',
      'assets/projects/Desain-grafis/icon-collection.webp',
      'assets/projects/Desain-grafis/batikparimolomba.webp',
      'assets/projects/Desain-grafis/buildingLOGO.webp',
      'assets/projects/Desain-grafis/coverkeu.webp',
      'assets/projects/Desain-grafis/1.webp',
      'assets/projects/Desain-grafis/1.1.webp',
      'assets/projects/Desain-grafis/2.webp',
      'assets/projects/Desain-grafis/street.webp',
      'assets/projects/Desain-grafis/logorenkeu.webp',
      'assets/projects/Desain-grafis/microUMK.webp',
      'assets/projects/Desain-grafis/posterlegacy.webp',
      'assets/projects/Desain-grafis/spanduk.webp',
      'assets/projects/Desain-grafis/ui-ux.webp'
    ],
    liveUrl: '#'
  },
  {
    id: 5,
    title: 'Game Education',
    category: 'Education',
    type: 'game-development',
    year: '2026',
    role: 'Pengembang HTML',
    tools: ['HTML', 'Netlify', 'Pwabuilder'],
    image: 'assets/projects/Game-Education/05-Game-Education.webp',
    description:
      'Game Education yang di rancang untuk Pembelajaran Anak pada usia Dini, PAUD/TK dan dapat di install pada android/iphone.',
    challenge:
      'Memberikan Pengalaman Belajar yang menyenangkan, bermain sambil belajar.',
    solution:
      'Saya membangun game ini untuk Mempermudah Anak untuk Mengenal angka dan huruf serta berbagai bentuk balok/persegi.',
      gallery: [
      'assets/projects/Game-Education/05-Game-Education.webp'
    ],
    liveUrl: '#'
  }
];

const projectGrid = document.getElementById('projectGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const form = document.getElementById('contactForm');
const currentYear = document.getElementById('year');

const sizeMap = [
  { columns: 7, rows: 3 },
  { columns: 5, rows: 2 },
  { columns: 7, rows: 2 },
  { columns: 5, rows: 3 },
  { columns: 12, rows: 2 }
];

function renderProjects(filter = 'all') {
  if (!projectGrid) return;

  const filtered =
    filter === 'all' ? projects : projects.filter((project) => project.type === filter);

  projectGrid.innerHTML = filtered
    .map((project, index) => {
      const size = sizeMap[index % sizeMap.length];
      return `
        <article class="project-card" style="--columns:${size.columns}; --rows:${size.rows};" data-id="${project.id}">
          <img src="${project.image}" alt="${project.title} project preview" loading="lazy" />
          <div class="project-overlay">
            <div class="project-meta">
              <div class="project-index">0${project.id} — ${project.category}</div>
              <h3 class="project-title">${project.title}</h3>
              <div class="project-type">${project.category}</div>
            </div>
            <div class="project-year">${project.year}</div>
            <button class="project-action" type="button" data-project="${project.id}" aria-label="View ${project.title} project">↗</button>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelectorAll('.project-action').forEach((button) => {
    button.addEventListener('click', (event) => {
      const { project } = event.currentTarget.dataset;
      openProject(Number(project));
    });
  });

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.project-action')) return;
      openProject(Number(card.dataset.id));
    });
  });
}

function openProject(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project || !modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <p class="section-kicker">${project.category}</p>
      <h3 id="modalTitle">${project.title}</h3>
      <div class="modal-meta">
        <span>${project.year}</span>
        <span>${project.role}</span>
        <span>${project.type}</span>
      </div>
    </div>

    <div class="modal-section">
      <h4>Ikhtisar Proyek</h4>
      <p>${project.description}</p>
    </div>

    <div class="modal-section">
      <h4>Tantangan</h4>
      <p>${project.challenge}</p>
    </div>

    <div class="modal-section">
      <h4>Solusi</h4>
      <p>${project.solution}</p>
    </div>

    <div class="modal-section">
      <h4>Galeri Proyek</h4>
      <div class="modal-grid">
        ${project.gallery
          .map(
            (image) => `
              <img src="${image}" alt="${project.title} gallery image" loading="lazy" />
            `
          )
          .join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4>Tools</h4>
      <ul class="modal-tools">
        ${project.tools.map((tool) => `<li>${tool}</li>`).join('')}
      </ul>
      ${
        project.liveUrl && project.liveUrl !== '#'
          ? `<a class="button button-primary modal-cta" href="${project.liveUrl}" target="_blank" rel="noreferrer">Lihat Website Langsung ↗</a>`
          : ''
      }
    </div>
  `;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
}

function closeProject() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    renderProjects(button.dataset.filter);
  });
});

navToggle?.addEventListener('click', () => {
  navMenu.classList.toggle('is-open');
});

document.querySelector('[data-close="true"]').addEventListener('click', closeProject);
document.querySelector('.modal-close').addEventListener('click', closeProject);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) {
    closeProject();
  }
});

const storedTheme = localStorage.getItem('portfolio-theme');
if (storedTheme === 'dark') {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.remove('dark-theme');
}

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const nextTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('portfolio-theme', nextTheme);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const projectType = formData.get('projectType')?.toString().trim();
  const message = formData.get('message')?.toString().trim();

  if (!name || !email || !projectType || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert('Thank you! Your message has been prepared for sending.');
  form.reset();
});

renderProjects();
