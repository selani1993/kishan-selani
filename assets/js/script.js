const profile = {
  name: "Kishan Selani",
  role: "IT Support Professional",
  location: "Sydney, Australia",
  email: "selanikishan931@gmail.com",
  linkedin: "https://www.linkedin.com/in/kishanselani",
  github: "https://github.com/selani1993",
  resume: "assets/Kishan_Selani_Resume.pdf"
};

const tickets = [
  {
    id: "INC-000101",
    title: "User Unable to Log In – Account Lockout",
    priority: "P2 – High",
    impact: "The user cannot access Windows, Outlook, Teams or shared applications, preventing normal work from continuing.",
    attention: "One user is unable to work or communicate, and no practical workaround is available until access is restored.",
    users: "1",
    category: "Identity and Access",
    environment: "Windows 11, Active Directory Users and Computers, PowerShell",
    status: "Resolved",
    time: "18 minutes",
    workflow: {
      "Ticket Overview": "I treated this as a single-user access incident with a complete loss of normal work capability.",
      "User Report": "The user reported that Windows rejected their password and then displayed an account-lockout message.",
      "Business Impact": "The user could not reach email, Teams or business applications, so their work had stopped.",
      "Priority Assessment": "I selected P2 – High because one user was fully blocked, there was no immediate workaround and core access was affected. A wider outage would have raised the priority to P1 – Critical.",
      "Initial Assessment": "My first assumption was either repeated incorrect passwords or a saved credential continuing to authenticate in the background.",
      "Questions I Asked": "I asked when the issue started, whether the password had recently changed, which devices were connected and whether the user could sign in anywhere else.",
      "Information Gathered": "I confirmed the user identity, the exact message, a recent password change and that the account was locked rather than disabled.",
      "Possible Causes": "I considered a mistyped password, stale Outlook or mobile credentials, a mapped drive, VPN credentials and Windows Credential Manager.",
      "Troubleshooting Process": "Before making changes, I checked account state. I unlocked it once, observed another lockout and then reviewed places where the old password could still be stored.",
      "Tools Used": "Active Directory Users and Computers, Windows Credential Manager and a supervised PowerShell account-status check.",
      "Findings": "I unlocked the account successfully, but it locked again after a mail application on a connected device retried the saved password.",
      "Root Cause": "A mail application on a connected device retained the previous password and repeatedly submitted invalid authentication attempts.",
      "Resolution": "I updated the saved credential, stopped the repeated attempts and unlocked the account after confirming the stale source was removed.",
      "Verification": "I asked the user to sign in to Windows, Outlook and Teams, then monitored for another lockout.",
      "User Confirmation": "The user confirmed that normal access had returned and remained stable.",
      "Preventive Action": "I reminded the user to update saved passwords across connected devices immediately after a password change.",
      "Documentation": "I recorded the verified identity check, account state, stale credential source, change made and successful sign-in tests without recording passwords.",
      "Key Learning": "Repeatedly unlocking an account does not resolve the source of repeated authentication failures.",
      "What Changed My Thinking?": "The second lockout changed my direction. It ruled out a one-off typing error and suggested an automated attempt using an old credential.",
      "If I Saw This Ticket Again Tomorrow...": "I would ask about recent password changes and connected devices before performing the first unlock."
    }
  },
  {
    id: "INC-000102",
    title: "Outlook Not Sending or Receiving Emails",
    priority: "P3 – Medium",
    impact: "The user cannot send or receive messages in desktop Outlook, delaying communication, although Outlook on the web provides a workaround.",
    attention: "Email is a core business service, but the working browser option reduces immediate urgency.",
    users: "1",
    category: "Microsoft 365",
    environment: "Windows 11, Outlook, Microsoft 365, Outlook on the web",
    status: "Resolved",
    time: "24 minutes",
    workflow: {
      "Ticket Overview": "I investigated a desktop Outlook mail-flow issue while keeping the user working through Outlook on the web.",
      "User Report": "The user said new mail had stopped appearing and messages remained in the Outbox.",
      "Business Impact": "Communication was delayed, but the user could continue through the browser while I investigated.",
      "Priority Assessment": "I selected P3 – Medium because a core service was affected for one user, but Outlook on the web provided a reliable workaround.",
      "Initial Assessment": "Because Outlook on the web remained available, I focused first on a local connectivity, cache or profile problem rather than a Microsoft 365 account failure.",
      "Questions I Asked": "I asked whether Outlook showed Connected, whether web mail worked, when mail last synchronised and whether any error appeared.",
      "Information Gathered": "Outlook on the web sent and received normally. Internet access worked and other users were unaffected.",
      "Possible Causes": "I considered Work Offline mode, a stuck message, cached credentials, a damaged OST cache, an add-in or a broader service issue.",
      "Troubleshooting Process": "I checked status and Work Offline first, tested web mail, removed a large stuck Outbox item and restarted Outlook before considering profile repair.",
      "Tools Used": "Outlook connection status, Outlook on the web and Windows Credential Manager.",
      "Findings": "A large attachment was stuck in the Outbox and the client had not resumed normal synchronisation.",
      "Root Cause": "The blocked Outbox item prevented normal desktop Outlook mail flow.",
      "Resolution": "I moved the item out of the Outbox, reduced the attachment size and restarted Outlook.",
      "Verification": "I sent and received a small test message in desktop Outlook and confirmed that the folders had synchronised.",
      "User Confirmation": "The user confirmed that new messages appeared and their revised email sent successfully.",
      "Preventive Action": "I explained how large attachments can be shared through an approved link instead of being attached directly.",
      "Documentation": "I recorded the browser comparison test, stuck item, corrective action and successful mail-flow test.",
      "Key Learning": "A working web client is useful evidence: it separates the account and cloud service from the desktop application.",
      "What Changed My Thinking?": "Successful web mail ruled out an account-wide authentication or Exchange Online issue and moved my attention to the local Outlook queue.",
      "If I Saw This Ticket Again Tomorrow...": "I would test Outlook on the web and inspect the Outbox before repairing the Outlook profile."
    }
  },
  {
    id: "INC-000103",
    title: "Network Printer Showing Offline",
    priority: "P4 – Low",
    impact: "One user cannot print to the preferred network printer, but another nearby printer provides a temporary workaround.",
    attention: "The issue should be resolved to restore the normal workflow, but work can continue and other users are unaffected.",
    users: "1",
    category: "Desktop Support",
    environment: "Windows 11, Print Management, Windows Services, TCP/IP",
    status: "Resolved",
    time: "16 minutes",
    workflow: {
      "Ticket Overview": "I treated this as a local printing issue after confirming that the device still served other users.",
      "User Report": "The user reported that the network printer appeared Offline in Windows.",
      "Business Impact": "The preferred workflow was interrupted, but a nearby printer provided a workaround.",
      "Priority Assessment": "I selected P4 – Low because only one user was affected, an alternative printer was available and the printer remained available to others.",
      "Initial Assessment": "Because other users could still print, I focused on a local queue, spooler, port or status problem rather than failed printer hardware.",
      "Questions I Asked": "I asked who else was affected, whether the printer had power, what Windows displayed and whether a test page had been tried.",
      "Information Gathered": "Other users could print, the printer responded on the network and one job remained stuck in the user’s queue.",
      "Possible Causes": "I considered Use Printer Offline, a blocked queue, Print Spooler failure, the wrong TCP/IP port or a driver issue.",
      "Troubleshooting Process": "Before reinstalling anything, I checked scope, network response, queue state and the Windows offline setting. I then cleared the blocked job and restarted the spooler.",
      "Tools Used": "Windows printer queue, Print Management, Windows Services and ping to the known printer address.",
      "Findings": "The printer was reachable and serving colleagues; only the local queue was stalled.",
      "Root Cause": "A stuck print job left the user’s local queue in an unresponsive state.",
      "Resolution": "I cleared the job, restarted the Print Spooler and returned the printer to Online.",
      "Verification": "I printed a Windows test page followed by the user’s document.",
      "User Confirmation": "The user confirmed both pages printed correctly.",
      "Preventive Action": "I documented how to identify and remove a failed job before repeatedly resubmitting it.",
      "Documentation": "I recorded the single-user scope, successful ping, stalled queue, spooler restart and test print.",
      "Key Learning": "Establishing scope early prevents unnecessary changes to working printer hardware.",
      "What Changed My Thinking?": "When another user printed successfully, the evidence ruled out a general printer outage and focused my checks on the affected workstation.",
      "If I Saw This Ticket Again Tomorrow...": "I would confirm whether anyone else can print before checking drivers or reinstalling the printer."
    }
  },
  {
    id: "INC-000104",
    title: "VPN Connected but Shared Drive Is Inaccessible",
    priority: "P2 – High",
    impact: "A remote user can connect to the VPN but cannot reach a shared drive required for time-sensitive work.",
    attention: "The user has internet and VPN access but cannot reach the business resource needed to complete the task, with no suitable file workaround.",
    users: "1",
    category: "Networking and Access",
    environment: "Windows 11, VPN client, DNS tools, Command Prompt, shared drives",
    status: "Resolved",
    time: "32 minutes",
    workflow: {
      "Ticket Overview": "I investigated why a connected VPN session did not provide access to an authorised shared drive.",
      "User Report": "The user said the VPN displayed Connected, but the mapped drive showed an unavailable-path error.",
      "Business Impact": "A time-sensitive document was available only on the shared drive, so remote work could not continue normally.",
      "Priority Assessment": "I selected P2 – High because one user was blocked from a time-sensitive business resource and no approved workaround was available. The scope did not justify P1 – Critical.",
      "Initial Assessment": "I needed to determine whether the connected VPN had applied the required DNS and routing configuration, or whether permissions or a stale mapping were preventing access.",
      "Questions I Asked": "I asked for the exact path and error, whether other internal resources worked, when access last succeeded and whether colleagues were affected.",
      "Information Gathered": "The VPN authenticated, the user could reach one internal IP address, but the file-server name did not resolve.",
      "Possible Causes": "I considered missing VPN routes, internal DNS failure, expired credentials, a lost drive mapping, unavailable file services or access permissions.",
      "Troubleshooting Process": "I confirmed internet and VPN state, compared name and IP connectivity, checked IP and DNS configuration, tested name resolution and then remapped the drive only after resolving the name issue.",
      "Tools Used": "VPN client status, ipconfig /all, nslookup, ping and net use.",
      "Findings": "The tunnel carried internal IP traffic, but the VPN connection had not applied the required internal DNS configuration, so the file-server hostname could not be resolved.",
      "Root Cause": "The VPN connection did not apply the required internal DNS configuration after connecting.",
      "Resolution": "I disconnected the VPN, refreshed the local network adapter settings, reconnected and confirmed that the internal DNS configuration had been applied before restoring the drive mapping.",
      "Verification": "I confirmed that the server name resolved correctly, opened the shared drive and tested read access to an authorised file.",
      "User Confirmation": "The user confirmed the required document opened and their remote work could continue.",
      "Preventive Action": "I documented the DNS refresh sequence and the evidence needed if the VPN profile requires escalation.",
      "Documentation": "I recorded the exact error, IP-versus-name comparison, DNS result, session refresh and successful file-access test.",
      "Key Learning": "A Connected status proves authentication, not that every route, name service or resource is available.",
      "What Changed My Thinking?": "Successful access by IP ruled out a complete tunnel failure. Failed name resolution changed my direction from VPN authentication to DNS.",
      "If I Saw This Ticket Again Tomorrow...": "I would compare access by server name and approved IP early, then capture ipconfig and nslookup results before changing mappings."
    }
  },
  {
    id: "REQ-000105",
    title: "New Employee Onboarding",
    priority: "P4 – Low (Planned)",
    impact: "Missing accounts, licences, device preparation or approved access could delay the employee’s first day.",
    attention: "The request is planned rather than urgent, but every dependency must be completed and verified before the agreed start time.",
    users: "1",
    category: "Service Request",
    environment: "Windows 11, Active Directory, Microsoft Entra ID, Microsoft 365",
    status: "Completed",
    timeLabel: "Completion target",
    time: "Before the agreed start date",
    workflow: {
      "Ticket Overview": "I treated onboarding as a planned, approval-based service request with several linked dependencies.",
      "User Report": "The manager requested a prepared laptop, Microsoft 365 account and approved team resources for a new starter.",
      "Business Impact": "Incomplete preparation could leave the employee waiting for access and reduce first-day productivity.",
      "Priority Assessment": "I selected P4 – Low (Planned) because the work was scheduled in advance and no current user was experiencing an outage. The agreed start date provided the completion target.",
      "Initial Assessment": "Success depended on complete, approved role information and coordinated preparation rather than account creation alone.",
      "Questions I Asked": "I confirmed the employee’s name, role, manager, department, start date, device needs and each required resource.",
      "Information Gathered": "I obtained the approved request and used a role-based checklist while keeping access limited to what had been authorised.",
      "Possible Causes": "I considered missing approval, incorrect licence, omitted group membership, pending device updates, MFA setup or incomplete shared-resource access.",
      "Troubleshooting Process": "I compared the request with the checklist, created the account using the expected convention, applied approved access, prepared the device and tested each dependency separately.",
      "Tools Used": "Active Directory Users and Computers, the Microsoft Entra admin centre, the Microsoft 365 admin centre and Windows 11 setup.",
      "Findings": "The initial request did not specify one required shared mailbox, so I paused that access until the manager confirmed approval.",
      "Request Dependency": "This was a planned service request rather than a fault incident. Completion depended on accurate role information, approved access and every onboarding task being verified before the start date.",
      "Resolution": "I created the approved account, assigned the licence and groups, prepared the device and MFA setup, completed the resource checklist, and added the shared mailbox after receiving approval.",
      "Verification": "I verified sign-in, Microsoft 365 access, the approved team resources, device updates and asset information.",
      "User Confirmation": "The user and manager confirmed the required access during the onboarding handover.",
      "Preventive Action": "I kept a reusable role-based checklist with approval, device, licence, group, MFA, asset and handover checks.",
      "Documentation": "I recorded approvals, access granted, device details, remaining actions and the final confirmation without storing temporary credentials.",
      "Key Learning": "Onboarding quality depends on coordinating small dependencies and protecting access—not simply creating an account.",
      "What Changed My Thinking?": "The missing mailbox detail showed why I should not copy access automatically. I stopped and sought approval before proceeding.",
      "If I Saw This Ticket Again Tomorrow...": "I would begin with the role checklist and compare requirements with a similar role, while still requiring explicit approval for every access change."
    }
  },
  {
    id: "INC-000106",
    title: "Office-Wide Internet Outage",
    priority: "P1 – Critical",
    impact: "All office users lose internet access. Email, cloud applications, web-based systems, remote services and normal business communication are disrupted, preventing staff from continuing normal work.",
    attention: "Multiple departments cannot access essential business services, there is no practical user-level workaround, and immediate triage, escalation and communication are required.",
    users: "Entire office / multiple departments",
    category: "Network and Connectivity",
    environment: "Windows 11, Command Prompt, network status, gateway checks, outage information and escalation process",
    status: "Resolved",
    timeLabel: "Illustrative restoration time",
    time: "1 hour 12 minutes",
    workflow: {
      "Ticket Overview": "Multiple users from different areas reported that websites, email and cloud applications were unavailable. I treated the reports as a potential major incident and began by establishing scope.",
      "User Report": "Users in separate departments reported that internet-based services had stopped working at approximately the same time.",
      "Business Impact": "The outage affected the whole office and interrupted email, cloud applications, web-based systems, remote services and normal business communication. Staff could not continue normal work.",
      "Priority Assessment": "I classified this illustrative scenario as P1 – Critical because multiple departments were affected, essential services were unavailable, no practical workaround existed and normal business operations were immediately interrupted.",
      "Initial Assessment": "I first determined whether the problem affected one device, one network segment, Wi-Fi only or the entire office before performing detailed endpoint troubleshooting.",
      "Questions I Asked": "I asked whether wired and wireless users were both affected, whether any internal resources remained available, whether the issue began at the same time, whether all floors or departments were affected, whether remote users were affected and whether planned network changes had been announced.",
      "Information Gathered": "Reports from several devices across multiple departments showed the same loss of external services. Both wired and wireless users were affected, and the timing was consistent across the office.",
      "Possible Causes": "I considered an ISP outage, a gateway or upstream connectivity issue, DNS failure, a network equipment outage, a power issue affecting network equipment, and planned or unplanned maintenance.",
      "Troubleshooting Process": "I confirmed network adapter connectivity, checked that affected devices had valid IP configuration, tested the default gateway, tested an external IP address, tested DNS resolution and compared results across multiple users. I checked available internal outage information and escalated promptly once the broad scope was confirmed.",
      "Tools Used": "Windows network status, ipconfig /all, ping, nslookup, observable router or gateway indicators, available internal outage information, and ticketing and communication tools.",
      "Findings": "Multiple devices had valid local IP addresses and the local gateway responded, but external connectivity failed across different endpoints. The issue was not isolated to one user or device, and the evidence indicated an upstream or provider-level disruption requiring escalation.",
      "Root Cause": "An upstream service disruption prevented the office network from reaching external internet services. The underlying provider-side issue required resolution by the ISP or network team.",
      "Resolution": "I logged and updated the major incident, escalated it with the scope and supporting test results, communicated updates to users, monitored progress and retested connectivity after the provider or network team restored service.",
      "Verification": "I confirmed that external IP connectivity and DNS resolution were restored, websites and cloud services were accessible, and representative users from multiple departments could work normally again.",
      "User Confirmation": "Representative users from different departments confirmed that internet access, email and cloud services were available again.",
      "Preventive Action": "I recommended maintaining clear outage communication templates and current ISP and escalation contacts, documenting quick checks that distinguish endpoint issues from broad outages, and asking the responsible infrastructure team to review redundancy or failover options.",
      "Documentation": "I recorded the timeline, affected scope, test results, escalation details, user communications and confirmation of service restoration.",
      "Key Learning": "Recognising the scope quickly prevents wasted endpoint troubleshooting and enables faster escalation and clearer communication.",
      "What Changed My Thinking?": "Reports from separate users and departments changed my working assumption from an individual connectivity problem to a major incident.",
      "If I Saw This Ticket Again Tomorrow...": "I would first establish scope, verify basic local connectivity, compare results across users, communicate the impact and escalate with concise evidence."
    }
  }
];

(() => {
  const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);

  document.querySelectorAll("[data-profile]").forEach(element => {
    const key = element.dataset.profile;
    const values = { ...profile, githubLabel: profile.github.replace(/^https?:\/\//, "") + " ↗" };
    element.textContent = values[key] || "";
  });
  document.querySelectorAll("[data-profile-href]").forEach(element => {
    const key = element.dataset.profileHref;
    element.href = key === "email" ? `mailto:${profile.email}` : profile[key];
  });

  const ticketList = document.getElementById("ticket-list");
  if (!ticketList) {
    throw new Error("Support ticket container #ticket-list was not found.");
  }
  ticketList.innerHTML = tickets.map((ticket, index) => `
    <article class="ticket-card${ticket.priority.startsWith("P1") ? " ticket-card-critical" : ""} reveal">
      <div class="ticket-summary">
        <div class="ticket-heading">
          <p class="ticket-id">${escapeHtml(ticket.id)} · Illustrative ticket</p>
          <h3>${escapeHtml(ticket.title)}</h3>
          <ul class="tags"><li>${escapeHtml(ticket.category)}</li><li>${escapeHtml(ticket.environment)}</li></ul>
        </div>
        <dl class="ticket-metadata">
          <div><dt>Priority</dt><dd><span class="priority priority-${escapeHtml(ticket.priority.slice(1, 2))}">${escapeHtml(ticket.priority)}</span></dd></div>
          <div><dt>Affected users</dt><dd>${escapeHtml(ticket.users)}</dd></div>
          <div><dt>Status</dt><dd><span class="badge completed">${escapeHtml(ticket.status)}</span></dd></div>
          <div><dt>${escapeHtml(ticket.timeLabel || "Resolution time")}</dt><dd>${escapeHtml(ticket.time)}</dd></div>
        </dl>
        <div class="ticket-impact"><div><h4>Business impact</h4><p>${escapeHtml(ticket.impact)}</p></div><div><h4>Why it needs attention</h4><p>${escapeHtml(ticket.attention)}</p></div></div>
        <button class="button button-ticket ticket-trigger" type="button" id="ticket-trigger-${index}" aria-expanded="false" aria-controls="ticket-panel-${index}">View ticket <span aria-hidden="true">↓</span></button>
      </div>
      <div class="ticket-panel" id="ticket-panel-${index}" role="region" aria-labelledby="ticket-trigger-${index}" hidden>
        <div class="workflow-heading"><p class="section-label">Complete ticket workflow</p><p>My reasoning, evidence and outcome from report to documentation.</p></div>
        <div class="workflow-grid">
          ${Object.entries(ticket.workflow).map(([heading, content], step) => `
            <section class="workflow-step">
              <span>${String(step + 1).padStart(2, "0")}</span>
              <div><h4>${escapeHtml(heading)}</h4><p>${escapeHtml(content)}</p></div>
            </section>`).join("")}
        </div>
      </div>
    </article>`).join("");

  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.querySelector(".sr-only").textContent = open ? "Open navigation menu" : "Close navigation menu";
    navLinks.classList.toggle("open", !open);
  });
  document.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    navLinks?.classList.remove("open");
  }));

  const triggers = [...document.querySelectorAll(".ticket-trigger")];
  triggers.forEach(trigger => trigger.addEventListener("click", () => {
    const opening = trigger.getAttribute("aria-expanded") !== "true";
    triggers.forEach(item => {
      item.setAttribute("aria-expanded", "false");
      item.firstChild.textContent = "View ticket ";
      item.querySelector("span").textContent = "↓";
      document.getElementById(item.getAttribute("aria-controls")).hidden = true;
    });
    if (opening) {
      trigger.setAttribute("aria-expanded", "true");
      trigger.firstChild.textContent = "Close ticket ";
      trigger.querySelector("span").textContent = "↑";
      document.getElementById(trigger.getAttribute("aria-controls")).hidden = false;
    }
  }));

  document.getElementById("current-year").textContent = new Date().getFullYear();
  const revealItems = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach(item => item.classList.add("visible"));
  } else {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.06 });
    revealItems.forEach(item => revealObserver.observe(item));
  }

  const navAnchors = [...document.querySelectorAll(".nav-links a[href^='#']")];
  const sections = navAnchors.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const setActive = () => {
    const point = window.scrollY + 130;
    let current = sections[0]?.id;
    sections.forEach(section => { if (section.offsetTop <= point) current = section.id; });
    navAnchors.forEach(link => {
      const active = link.getAttribute("href") === `#${current}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
    });
  };
  setActive();
  window.addEventListener("scroll", setActive, { passive: true });
})();
