// Mock data for new members
const newMembers = [
    {
      name: "John Doe",
      aadhaar: "1234 5678 9012",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St, City",
      pincode: "560001"
    },
    {
      name: "Jane Smith",
      aadhaar: "9876 5432 1098",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St, Town",
      pincode: "560002"
    }
  ];
  
  // Mock data for active volunteers
  const activeVolunteers = [
    {
      name: "Alice Johnson",
      role: "Child Care Volunteer",
      startTime: "10:00 AM",
      status: "Active"
    },
    {
      name: "Bob Brown",
      role: "Elderly Care Volunteer",
      startTime: "11:30 AM",
      status: "Active"
    },
    {
      name: "Charlie Davis",
      role: "Differently Abled Care Volunteer",
      startTime: "09:00 AM",
      status: "Active"
    }
  ];
  
  // Mock data for all members
  const allMembers = [
    {
      name: "John Doe",
      aadhaar: "1234 5678 9012",
      email: "john@example.com",
      phone: "1234567890",
      address: "123 Main St, City",
      pincode: "560001",
      role: "Customer"
    },
    {
      name: "Jane Smith",
      aadhaar: "9876 5432 1098",
      email: "jane@example.com",
      phone: "0987654321",
      address: "456 Elm St, Town",
      pincode: "560002",
      role: "Volunteer"
    },
    {
      name: "Alice Johnson",
      aadhaar: "1122 3344 5566",
      email: "alice@example.com",
      phone: "1122334455",
      address: "789 Oak St, Village",
      pincode: "560003",
      role: "Customer"
    }
  ];
  
  // Function to display new members
  function displayNewMembers() {
    const newMembersList = document.getElementById('new-members-list');
    newMembersList.innerHTML = '';
  
    newMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'member-card';
  
      memberCard.innerHTML = `
        <div class="member-details">
          <p><strong>Name:</strong> ${member.name}</p>
          <p><strong>Aadhaar:</strong> ${member.aadhaar}</p>
          <p><strong>Email:</strong> ${member.email}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Pincode:</strong> ${member.pincode}</p>
        </div>
        <div class="actions">
          <button class="accept" onclick="acceptMember('${member.aadhaar}')">Accept</button>
          <button class="reject" onclick="rejectMember('${member.aadhaar}')">Reject</button>
        </div>
      `;
  
      newMembersList.appendChild(memberCard);
    });
  }
  
  // Function to display active volunteers
  function displayActiveVolunteers(filter = "all") {
    const activeVolunteersList = document.getElementById('active-volunteers-list');
    activeVolunteersList.innerHTML = '';
  
    const filteredVolunteers = filter === "all"
      ? activeVolunteers
      : activeVolunteers.filter(volunteer => volunteer.role.toLowerCase().includes(filter.replace('-', ' ')));
  
    filteredVolunteers.forEach(volunteer => {
      const volunteerCard = document.createElement('div');
      volunteerCard.className = 'service-customer-card';
  
      volunteerCard.innerHTML = `
        <div class="service-details">
          <p><strong>Name:</strong> ${volunteer.name}</p>
          <p><strong>Role:</strong> ${volunteer.role}</p>
          <p><strong>Start Time:</strong> ${volunteer.startTime}</p>
          <p><strong>Status:</strong> ${volunteer.status}</p>
        </div>
      `;
  
      activeVolunteersList.appendChild(volunteerCard);
    });
  }
  
  // Function to display all members
  function displayAllMembers() {
    const membersList = document.getElementById('members-list');
    membersList.innerHTML = '';
  
    allMembers.forEach(member => {
      const memberCard = document.createElement('div');
      memberCard.className = 'member-card';
  
      memberCard.innerHTML = `
        <div class="member-details">
          <p><strong>Name:</strong> ${member.name}</p>
          <p><strong>Aadhaar:</strong> ${member.aadhaar}</p>
          <p><strong>Email:</strong> ${member.email}</p>
          <p><strong>Phone:</strong> ${member.phone}</p>
          <p><strong>Address:</strong> ${member.address}</p>
          <p><strong>Pincode:</strong> ${member.pincode}</p>
          <p><strong>Role:</strong> ${member.role}</p>
        </div>
      `;
  
      membersList.appendChild(memberCard);
    });
  }
  
  // Accept Member Function
  function acceptMember(aadhaar) {
    alert(`Member with Aadhaar ${aadhaar} accepted!`);
    // Add logic to move the member to the confirmed list
  }
  
  // Reject Member Function
  function rejectMember(aadhaar) {
    alert(`Member with Aadhaar ${aadhaar} rejected!`);
    // Add logic to remove the member from the new members list
  }
  
  // Tab Switching Functionality
  function switchTab(tabName) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
    });
  
    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
  
    // Update the active state in the sidebar
    document.querySelectorAll('.nav li').forEach(li => {
      li.classList.remove('active');
    });
    document.querySelector(`.nav li[data-tab="${tabName}"]`).classList.add('active');
  }
  
  // Filter Active Volunteers by Role
  function filterActiveVolunteers(service) {
    // Update active filter button
    document.querySelectorAll('.filter-button').forEach(button => {
      button.classList.remove('active');
    });
    document.querySelector(`.filter-button[data-service="${service}"]`).classList.add('active');
  
    // Display filtered volunteers
    displayActiveVolunteers(service);
  }
  
  // Initialize the page
  displayNewMembers();
  displayActiveVolunteers();
  displayAllMembers();
  
  // Add event listeners to sidebar links
  document.querySelectorAll('.nav li').forEach(li => {
    li.addEventListener('click', () => {
      const tabName = li.getAttribute('data-tab');
      if (tabName) {
        switchTab(tabName);
      }
    });
  });
  
  // Add event listeners to filter buttons
  document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      const service = button.getAttribute('data-service');
      filterActiveVolunteers(service);
    });
  });
  function logout() {
    window.location.href = "admin.html";
}
