// verify certificate logic in verify certificate page 
//here we use hardcoded data to demonstrate the server data


document.addEventListener("DOMContentLoaded", () => {
    const verifyBtn = document.getElementById("verify-btn");
    const certificateDetailsSection = document.getElementById("certificate-details");

    // Map of certificate IDs to certificate image file names
    const certificateData = {
        "CERT-2023-12-001-JD": {
            title: "Advanced Web Development Certification",
            subtitle: "Certificate of Achievement",
            recipient: "John Doe",
            company: "Sahih.ae",
            issueDate: "December 1, 2023",
            status: "Active",
            image: "certificate.jpg" // Image file for this certificate
        },
        "CERT-2023-12-001-JE": {
            title: "Front End Development Certification",
            subtitle: "Certificate of Achievement",
            recipient: "Linto",
            company: "Sahih.ae",
            issueDate: "December 1, 2023",
            status: "Inactive",
            image: "certificate2.jpg" // Image file for this certificate
        }
    };

    verifyBtn.addEventListener("click", () => {
        const certificateId = document.getElementById("certificate-id").value.trim();

        if (certificateId === "") {
            alert("Please enter a Certificate ID.");
            return;
        }

        const data = certificateData[certificateId];

        if (data) {
            // Dynamically set the image source based on the certificate ID
            document.getElementById("certificate-image").src = `/images/${data.image}`;
            document.getElementById("certificate-title").textContent = data.title;
            document.getElementById("certificate-subtitle").textContent = data.subtitle;
            document.getElementById("certificate-recipient").textContent = data.recipient;
            document.getElementById("certificate-company").textContent = data.company;
            document.getElementById("certificate-date").textContent = data.issueDate;
            document.getElementById("certificate-status").textContent = data.status;

            // Using ternary operator to change the color of the status
            const statusElement = document.getElementById("certificate-status");
            statusElement.style.color = data.status === "Active" ? "green" : "red"; // Green for active, red for deactive

            certificateDetailsSection.classList.remove("hidden");
        } else {
            alert("Invalid Certificate ID. Please try again.");
            certificateDetailsSection.classList.add("hidden");
        }
    });
});
