document.addEventListener("DOMContentLoaded", () => {
  // Animate skill bars
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    const level = bar.getAttribute("data-level") + "%";
    bar.style.setProperty("--level", level);
  });

  // EXPERIENCE SECTION
  const experienceData = [
    {
      title: "Data Science Intern",
      company: "Feynn Labs",
      date: "Aug 2024 – Oct 2024",
      points: [
        "Conducted comprehensive EDA on EV market data using Python and SQL.",
        "Implemented K-means clustering to segment EV markets.",
        "Developed an AI-powered plant disease detection prototype with 90% accuracy."
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "UptoSkills",
      date: "Jan 2025 – Apr 2025",
      points: [
        "Built 10+ Power BI dashboards monitoring KPIs.",
        "Performed clustering and cohort analysis to identify at-risk learners.",
        "Optimized Power BI models, reducing load times by 30%.",
        "Ran A/B tests on platform features and guided roadmap decisions.",
        "Led data storytelling workshops for non-technical teams."
      ]
    },
    {
      title: "Data Visualization Intern",
      company: "Forage AI",
      date: "",
      points: [
        "Analyzed raw datasets with statistical techniques and data cleaning.",
        "Built dynamic Power BI dashboards.",
        "Presented insights effectively via storytelling with PowerPoint."
      ]
    }
  ];

  const expContainer = document.querySelector(".experience");
  experienceData.forEach(exp => {
    const item = document.createElement("div");
    item.className = "exp-item";
    item.innerHTML = `
      <h3>${exp.title} @ ${exp.company}</h3>
      <small>${exp.date}</small>
      <ul>${exp.points.map(p => `<li>${p}</li>`).join("")}</ul>
    `;
    expContainer.appendChild(item);
  });

  // PROJECT SECTION
  const projects = [
    {
      name: "EV Market Segmentation",
      tech: "Python, scikit-learn, Plotly",
      desc: "Performed clustering on EV sales & behavior data to identify consumer segments and guide strategic planning."
    },
    {
      name: "Plant Disease Detection (CNN)",
      tech: "TensorFlow, Flask, OpenCV",
      desc: "Built and deployed a CNN model using transfer learning to classify plant diseases from images with 90% accuracy."
    },
    {
      name: "Healthcare Data Analysis",
      tech: "Power BI, Python",
      desc: "Cleaned clinical datasets, conducted correlation & trend analysis, and built interactive dashboards."
    },
    {
      name: "JioMart Clone (Front-End)",
      tech: "HTML, CSS",
      desc: "Replicated core pages of JioMart using responsive design and accessible, semantic markup."
    }
  ];

  const projectGrid = document.querySelector(".project-grid");
  projects.forEach(proj => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${proj.name}</h3>
      <p><strong>Tech:</strong> ${proj.tech}</p>
      <p>${proj.desc}</p>
    `;
    projectGrid.appendChild(card);
  });

  // CERTIFICATIONS SECTION
  const certs = ["Data Analysis Using Python", "Machine Learning Training", "Feynn Labs Internship Certificate"];
  const certContainer = document.querySelector(".certificates ul");
  certs.forEach(cert => {
    const li = document.createElement("li");
    li.textContent = cert;
    certContainer.appendChild(li);
  });
});
