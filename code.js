let mousePosition = {x:0, y:0};
document.addEventListener('mousemove', function(mouseMoveEvent){
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
}, false);

let changes = [];

let cy1 = cytoscape({
    container: document.getElementById('cy1'),
    wheelSensitivity: 0.2,
    layout: {name: 'cose-bilkent', animate: false, idealEdgeLength: 120},
    elements: [ { data: { id: '1', label: '1', polarisation: true, } }, { data: { id: '2', label: '2', polarisation: true, } }, { data: { id: '3', label: '3', polarisation: true, } }, { data: { id: '4', label: '4', polarisation: true, } }, { data: { id: '5', label: '5', polarisation: true, } }, { data: { id: '6', label: '6', polarisation: true, } }, { data: { id: '7', label: '7', polarisation: true, } }, { data: { id: '8', label: '8', polarisation: true, } }, { data: { source: '1', target: '2', } }, { data: { source: '1', target: '8', } }, { data: { source: '1', target: '3', } }, { data: { source: '2', target: '8', } }, { data: { source: '2', target: '3', } }, { data: { source: '3', target: '4', } }, { data: { source: '3', target: '5', } }, { data: { source: '4', target: '7', } }, { data: { source: '4', target: '8', } }, { data: { source: '5', target: '7', } }, { data: { source: '5', target: '8', } }, { data: { source: '6', target: '3', } }, { data: { source: '6', target: '7', } }, { data: { source: '6', target: '8', } }, { data: { source: '7', target: '8', } }, { data: { source: '3', target: '8',} }],
    style: [
    {
        selector: 'node',
        style: {
            'background-color': function(ele) {
                if (ele.selected()) {
                    return 'deepskyblue';
                }
                else {
                    return 'white';
                };
            },
            'border-color': 'black',
            'border-width': '1px',
            'label': function(ele){
                var not;
                if(!ele.data('polarisation')) {
                    not = '¬';
                } 
                else {not = ''};
                return not + ele.data('label');
            },
            "text-valign": "center",
            "text-halign": "center",
        }
    },
        {
        selector: 'edge',
        style: {
            'width': '2px',
        }
    }]    
});

let total_nodes = cy1.nodes().length;

function freshID() {
    total_nodes += 1;
    return total_nodes.toString();
}

function isAlphaNumeric(string) {
    return string.length == 1 && (/^[a-zA-Z0-9]/).test(string)
};

let isMouseOver = false;
const cy_div = document.getElementById('cy1');
cy_div.addEventListener("mouseleave", function(evt){
    isMouseOver = false;
});
cy_div.addEventListener("mouseover", function(evt){
    isMouseOver = true;
});

document.addEventListener('keyup', function(evt) {
    evt = evt || window.event;
    const string = evt.key;
    if (isAlphaNumeric(string) && isMouseOver) {
        const offsets = document.getElementById('cy1').getBoundingClientRect();
        const node = {
            group: 'nodes',
            data: {
                id: freshID(),
                label: string,
                polarisation: true,
            },
            renderedPosition: {
                x : mousePosition.x + offsets.left - 13,
                y: mousePosition.y - offsets.top + 9,
            }
        };
        const added = cy1.add(node);
        changes.push(["add", added]);
        return;
    }

    if (string == "Backspace") {
        const removed = cy1.elements(':selected').remove();
        changes.push(["remove", removed]);
    }
});

cy1.on('cxttap', "node", function(evt) {
    const node = evt.target;
    if (node.selected()){
        const selected = cy1.nodes(':selected');
        for (n of selected){
            const pol = n.data('polarisation');
            n.data('polarisation', !pol);
        }
    }
    else {
        const pol = node.data('polarisation');
        node.data('polarisation', !pol);
    }
});

function addEdges(node, selected) {
    const target = node.data('id');
    let to_add = [];
    for (const source of selected) {
        if (node.edgesWith(source).length > 0) {continue};
        to_add.push({
            group: 'edges',
            data: {
                source: source.data('id'),
                target: target,
            }
        })
    }
    const added = cy1.add(to_add);
    changes.push(["add", added]);
};

cy1.on('click', "node", function(evt){
    const node = evt.target;
    const selected = cy1.nodes(':selected');
    if (selected.length  == 0 || node.selected() || event.shiftKey) {
        return;
    }
    else {
        addEdges(node, selected);
        selected.unselect();
    };
});

function cleanLayout() {
    cy1.layout({
        name: 'cose-bilkent',
        animate: false,
        idealEdgeLength: 120,
    }).run();
    cy1.center();
};

function undo() {
    if (changes.length == 0) {return};
    const [change, eles, ...rest] = changes.pop();
    if (change == "add") {
        eles.remove();
        return;
    }
    if (change == "remove") {
        eles.restore();
        return;
    }
    if (change == "replace") {
        eles.remove();
        undo();
        cleanLayout();
        return;
    }
};

function serialize() {
    const nodes = cy1.nodes(':inside').jsons();
    const nodeData = nodes.map(node => { return {
        id: parseInt(node['data']['id'], 10),
        label: node['data']['label'],
        polarisation: node['data']['polarisation']
    }});
    const edges = cy1.edges(':inside').jsons();
    const edgeData = edges.map(edge => {return {
        source: parseInt(edge['data']['source'], 10),
        target: parseInt(edge['data']['target'])
    }});
    return {
        nodes: nodeData,
        edges: edgeData
    }
}

function exportGraph() {
    const a = document.createElement("a");
    const data = serialize();
    const file = new Blob([JSON.stringify(data, null, 2)], {type: "text/plain"});
    a.href = URL.createObjectURL(file);
    a.download = "graph.json";
    a.click();
}

function clearGraph() {
    const removed = cy1.elements().remove();
    changes.push(["remove", removed]);
}

function onChange(event) {
    let reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(event.target.files[0]);

}

function onReaderLoad(event) {
    const obj = JSON.parse(event.target.result);
    const nodes = obj['nodes'];
    const nodes_obj = nodes.map(node => {
        return {group: 'nodes', data: node}
    });
    const edges = obj['edges'];
    const edges_obj = edges.map(edge => {
        return {group: 'edges', data: edge}
    });
    clearGraph();
    const added_nodes = cy1.add(nodes_obj);
    const added_edges = cy1.add(edges_obj);
    const eles = added_nodes.union(added_edges);
    changes.push(["replace", eles]);
    cleanLayout();
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('upload').addEventListener('change', onChange);
});

let cy2 = cytoscape({
    container: document.getElementById('cy2'),
    wheelSensitivity: 0.2,
    style: [
    {
        selector: 'node',
        style: {
            'background-color': function(ele) {
                if (ele.selected()) {
                    return 'deepskyblue';
                }
                else {
                    return 'white';
                };
            },
            'border-color': 'black',
            'border-width': '1px',
            'label': function(ele){
                var not;
                if(!ele.data('polarisation')) {
                    not = '¬';
                } 
                else {not = ''};
                return not + ele.data('label');
            },
            "text-valign": "center",
            "text-halign": "center",
        }
    },
    {
        selector: 'edge',
        style: {
            'width': '2px',
            'curve-style': 'straight',
            'target-arrow-shape': 'triangle',
        }
    },
    {
        selector: '.compoundOut',
        style: {
            'line-style': 'dashed',
        }
    },
    {
        selector: '.compoundIn',
        style: {
            'curve-style': 'haystack',
        }
    }]    
});