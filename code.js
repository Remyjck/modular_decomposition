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
            id: 'a',
            label: 'a',
            polarisation: true,
        }
    },
    { 
        data: { 
            id: 'b',
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
    console.log(string);
    if (isAlphaNumeric(string) && isMouseOver) {
        const node = {
            group: 'nodes',
            data: {
                label: string,
                polarisation: true,
            },
            renderedPosition: {x : mousePosition.x, y: mousePosition.y,}
        };
        cy.add(node);
        changes.push(["add", node]);
        return;
    }

    if (string == "Backspace") {
        const selected = cy.elements(':selected');
        cy.remove(selected);
        changes.push(["remove", selected]);
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
    cy.add(to_add);
    changes.push(["add", to_add]);
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

function undo() {
    if (changes.length == 0) {return};
    const operation = changes.pop();
    console.log(operation);
    if (operation[0] == "add") {
        let eles = operation[1];
        console.log(eles);
        cy.remove();
        return;
    }
    if (operation[0] == "remove") {
        cy.add(operation[1]);
        return;
    }
}