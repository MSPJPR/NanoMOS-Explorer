document.addEventListener("DOMContentLoaded", () => {
    const gateVoltageInput = document.getElementById("gate-voltage");
    const oxideThicknessInput = document.getElementById("oxide-thickness");
    const channelLengthInput = document.getElementById("channel-length");
    const mobilityInput = document.getElementById("mobility");

    const gateVoltageValue = document.getElementById("gate-voltage-value");
    const oxideThicknessValue = document.getElementById("oxide-thickness-value");
    const channelLengthValue = document.getElementById("channel-length-value");
    const mobilityValue = document.getElementById("mobility-value");

    const ivValue = document.getElementById("iv-value");
    const downloadBtn = document.getElementById("download-btn");

    function updateValues() {
        gateVoltageValue.textContent = gateVoltageInput.value;
        oxideThicknessValue.textContent = oxideThicknessInput.value;
        channelLengthValue.textContent = channelLengthInput.value;
        mobilityValue.textContent = mobilityInput.value;

        calculateIV();
    }

    function calculateIV() {
        const gateVoltage = parseFloat(gateVoltageInput.value);
        const oxideThickness = parseFloat(oxideThicknessInput.value);
        const channelLength = parseFloat(channelLengthInput.value);
        const mobility = parseFloat(mobilityInput.value);

        const iv = (mobility * gateVoltage) / (oxideThickness * channelLength);
        ivValue.textContent = iv.toFixed(2);
    }

    gateVoltageInput.addEventListener("input", updateValues);
    oxideThicknessInput.addEventListener("input", updateValues);
    channelLengthInput.addEventListener("input", updateValues);
    mobilityInput.addEventListener("input", updateValues);

    downloadBtn.addEventListener("click", () => {
        const csvContent = `Gate Voltage (V),${gateVoltageInput.value}\nOxide Thickness (nm),${oxideThicknessInput.value}\nChannel Length (nm),${channelLengthInput.value}\nMobility (cm²/V·s),${mobilityInput.value}\nI-V Characteristics (μA),${ivValue.textContent}`;
        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "nanoscale_transistor_data.csv";
        link.click();
    });

    updateValues();

    // 3D Visualization using Three.js
    const canvas = document.getElementById("3d-canvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });

    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0x007bff });
    const transistor = new THREE.Mesh(geometry, material);
    scene.add(transistor);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        transistor.rotation.x += 0.01;
        transistor.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
});
