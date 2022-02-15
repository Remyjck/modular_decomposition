let mousePosition = {x:0, y:0};
document.addEventListener('mousemove', function(mouseMoveEvent){
    mousePosition.x = mouseMoveEvent.pageX;
    mousePosition.y = mouseMoveEvent.pageY;
}, false);

let changes = [];

let cy = cytoscape({
    container: document.getElementById('cy'),
    wheelSensitivity: 0.2,
    elements: [
    {
        data: { 
            id: '1',
            label: 'a',
            polarisation: true,
        }
    },
    { 
        data: { 
            id: '2',
            label: 'b',
            polarisation: false,
        }
    }],
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

let total_nodes = cy.nodes().length;

function freshID() {
    total_nodes += 1;
    return total_nodes.toString();
}

function isAlphaNumeric(string) {
    return string.length == 1 && (/^[a-zA-Z0-9]/).test(string)
};

let isMouseOver = false;
const cy_div = document.getElementById('cy');
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
        const offsets = document.getElementById('cy').getBoundingClientRect();
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
        const added = cy.add(node);
        changes.push(["add", added]);
        return;
    }

    if (string == "Backspace") {
        const removed = cy.elements(':selected').remove();
        changes.push(["remove", removed]);
    }
});

cy.on('cxttap', "node", function(evt) {
    const node = evt.target;
    if (node.selected()){
        const selected = cy.nodes(':selected');
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
    const added = cy.add(to_add);
    changes.push(["add", added]);
};

cy.on('click', "node", function(evt){
    const node = evt.target;
    const selected = cy.nodes(':selected');
    if (selected.length  == 0 || node.selected() || event.shiftKey) {
        return;
    }
    else {
        addEdges(node, selected);
        selected.unselect();
    };
});

function cleanLayout() {
    cy.layout({
        name: 'cose',
        animate: false,
        fit: false,
    }).run();
    cy.center();
};

function undo() {
    if (changes.length == 0) {return};
    const [change, eles, ...rest] = changes.pop();
    if (change == "add") {
        eles.remove();
        cleanLayout();
        return;
    }
    if (change == "remove") {
        eles.restore();
        cleanLayout();
        return;
    }
    if (change == "replace") {
        eles.remove();
        undo();
        return;
    }
};

function serialize() {
    const nodes = cy.nodes(':inside').jsons();
    const nodeData = nodes.map(node => { return {
        id: parseInt(node['data']['id'], 10),
        label: node['data']['label'],
        polarisation: node['data']['polarisation']
    }});
    const edges = cy.edges(':inside').jsons();
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
    const removed = cy.elements().remove();
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
    const added_nodes = cy.add(nodes_obj);
    const added_edges = cy.add(edges_obj);
    const eles = added_nodes.union(added_edges);
    changes.push(["replace", eles]);
    cleanLayout();
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('upload').addEventListener('change', onChange);
});