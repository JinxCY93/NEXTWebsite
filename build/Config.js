var screenconfig = [
    {
        screensize: "1920 X 1080 Anti Glare IPS"
    },
    {
        screensize: "2560 X 1440 Anti Glare IPS"
    },
    {
        screensize: "3840 X 2160 Anti Glare IPS"
    },
];
var cpuconfig = [
    {
        cputype: "i5-4770HQ 4.0Ghz"
    },
    {
        cputype: "i7-4770HQ 4.2Ghz"
    },
    {
        cputype: "i7-4970HQ 4.4Ghz"
    }
];
var ramconfig = [
    {
        ramsize: "4GB RAM"
    },
    {
        ramsize: "8GB RAM"
    },
    {
        ramsize: "16GB RAM"
    },
    {
        ramsize: "32GB RAM"
    }
];
var hddconfig = [
    {
        hddsize: "1TB HDD"
    },
    {
        hddsize: "256GB SSD"
    },
    {
        hddsize: "512GB SSD"
    },
    {
        hddsize: "1TB SSD"
    }
];
function getValue(id, desc) {
    var radioid = id;
    var radiovalue = desc;
    if (radioid === "screenrd1") {
        document.getElementById("display").innerHTML = radiovalue;
    }
    else if (radioid === "screenrd2") {
        document.getElementById("display").innerHTML = radiovalue;
    }
    else if (radioid === "screenrd3") {
        document.getElementById("display").innerHTML = radiovalue;
    }
    else if (radioid === "cpurd1") {
        document.getElementById("processor").innerHTML = radiovalue;
    }
    else if (radioid === "cpurd2") {
        document.getElementById("processor").innerHTML = radiovalue;
    }
    else if (radioid === "cpurd3") {
        document.getElementById("processor").innerHTML = radiovalue;
    }
    else if (radioid === "ramrd1") {
        document.getElementById("ram").innerHTML = radiovalue;
    }
    else if (radioid === "ramrd2") {
        document.getElementById("ram").innerHTML = radiovalue;
    }
    else if (radioid === "ramrd3") {
        document.getElementById("ram").innerHTML = radiovalue;
    }
    else if (radioid === "ramrd4") {
        document.getElementById("ram").innerHTML = radiovalue;
    }
    else if (radioid === "hddrd1") {
        document.getElementById("hdd").innerHTML = radiovalue;
    }
    else if (radioid === "hddrd2") {
        document.getElementById("hdd").innerHTML = radiovalue;
    }
    else if (radioid === "hddrd3") {
        document.getElementById("hdd").innerHTML = radiovalue;
    }
    else if (radioid === "hddrd4") {
        document.getElementById("hdd").innerHTML = radiovalue;
    }
}
