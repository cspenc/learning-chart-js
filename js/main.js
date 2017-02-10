const CHART = document.getElementById("consumerData");

var data = {
    labels: ["Bank of America", "Wells Fargo & Company", "Equifax", "Experian", "JPMorgan Chase & Co."],
    datasets: [
        {
            data: [63428, 50958, 44411, 41816, 40551],
            backgroundColor: [
                "#B21212",
                "#FFFC19",
                "#FF0001",
                "#1485CC",
                "#0971B2"
            ],
            hoverBackgroundColor: [
                "#B21212",
                "#FFFC19",
                "#FF0001",
                "#1485CC",
                "#0971B2"
            ]
        }]
};

var consumerData = new Chart(CHART, {
    type: 'doughnut',
    data: data
});
