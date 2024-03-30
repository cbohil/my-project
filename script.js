document.addEventListener('keydown', function(event) {
    // Function to save data to CSV
    function saveToCSV(data) {
        const csvContent = "data:text/csv;charset=utf-8," + data.map(row => row.join(",")).join("\n");
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "keypress_data.csv");
        document.body.appendChild(link);
        link.click();
    }

    // Key pressed by the user
    const keyPressed = event.key;
    
    // Create a CSV row with the timestamp and key pressed
    const rowData = [new Date().toISOString(), keyPressed];
    
    // Save data to CSV file
    saveToCSV([rowData]);
    
    // Display thank you message
    alert("Thank you!");
});
