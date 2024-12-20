* {
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

body {
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
    padding: 20px;
}

.container {
    max-width: 800px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: auto;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #444;
}

p {
    text-align: center;
    margin-bottom: 20px;
    color: #555;
}

.controls {
    margin-bottom: 20px;
    padding: 15px;
    background: #e8f0fe;
    border-radius: 10px;
}

.controls label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #222;
}

.controls input[type="range"] {
    width: 100%;
    margin-bottom: 10px;
}

.controls span {
    display: inline-block;
    margin-bottom: 15px;
    color: #007bff;
    font-weight: bold;
}

#output {
    text-align: center;
    margin-top: 20px;
    padding: 15px;
    background: #fffae6;
    border: 2px solid #ffc107;
    border-radius: 10px;
}

#output h2 {
    margin-bottom: 10px;
    color: #555;
}

#output span {
    font-size: 1.5em;
    color: #d63384;
    font-weight: bold;
}

button {
    display: block;
    width: 100%;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1em;
    transition: background 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

#tooltip {
    text-align: center;
    margin-top: 15px;
    color: #6c757d;
    font-style: italic;
    font-size: 0.9em;
}

#visualization {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
}

#3d-canvas {
    width: 100%;
    height: 300px;
    background-color: #000;
    border-radius: 10px;
}

@media (max-width: 600px) {
    h1 {
        font-size: 1.5em;
    }

    button {
        font-size: 0.9em;
    }

    #output span {
        font-size: 1.2em;
    }
}
