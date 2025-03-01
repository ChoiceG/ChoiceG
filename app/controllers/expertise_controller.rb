class ExpertiseController < ApplicationController
  def index
    @skills = [
      { name: "HTML", level: 95, color: "bg-primary" },
      { name: "CSS", level: 85, color: "bg-warning" },
      { name: "PHP", level: 90, color: "bg-danger" },
      { name: "Javascript", level: 90, color: "bg-danger" },
      { name: "Angular JS", level: 95, color: "bg-dark" },
      { name: "Wordpress", level: 85, color: "bg-info" }
    ]

    @experiences = [
      { role: "UI Designer", company: "Apex Software Inc", period: "2000 - 2045" },
      { role: "Product Designer", company: "Apex Software Inc", period: "2000 - 2045" },
      { role: "Web Designer", company: "Apex Software Inc", period: "2000 - 2045" },
      { role: "Apps Designer", company: "Apex Software Inc", period: "2000 - 2045" }
    ]

    @education = [
      { course: "UI Design Course", institution: "Cambridge University", period: "2000 - 2045" },
      { course: "IOS Development", institution: "Cambridge University", period: "2000 - 2045" },
      { course: "Web Design", institution: "Cambridge University", period: "2000 - 2045" },
      { course: "Apps Design", institution: "Cambridge University", period: "2000 - 2045" }
    ]

  @services = [
      { title: "Creative Design", price: 199, icon: "fa-crop-alt", description: "Stet lorem dolor diam amet vero eos." },
      { title: "Graphic Design", price: 199, icon: "fa-code-branch", description: "Stet lorem dolor diam amet vero eos." },
      { title: "Web Design", price: 199, icon: "fa-code", description: "Stet lorem dolor diam amet vero eos." },
      { title: "UI/UX Design", price: 199, icon: "fa-laptop-code", description: "Stet lorem dolor diam amet vero eos." }
    ]
  end
end
