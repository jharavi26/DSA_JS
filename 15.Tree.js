// Tree :- Non-Linear Hierarchical structure containing nodes & connected with edge.

// Types of Tree - Binary tree , Binary search tree, AVL tree, N-ary Tree.AVL.

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  inOrder(node){
    if(node === null) return ;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }

  preOrder(node){
    if(node === null) return ;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  postOrder(node){
    if(node === null) return ;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("In-order:");
root.inOrder(root);      // Output: 4 2 5 1 3

console.log("Pre-order:");
root.preOrder(root);     // Output: 1 2 4 5 3

console.log("Post-order:");
root.postOrder(root);    // Output: 4 5 2 3 1