function traverseDOM(node, action) {
    // Выполняем действие с текущим узлом
    action(node);
    // Переходим к первому потомку узла
    node = node.firstChild; 

    while (node) {
        // Рекурсивно обходим каждого потомка
        traverseDOM(node, action);
        // Переходим к следующему узлу на том же уровне
        node = node.nextSibling;
    }
}
const rootNode = document.getElementById("myElement");

function printNodeInfo(node) {
    console.log("Tag:", node.tagName);
}

traverseDOM(rootNode, printNodeInfo);
