// Tree :- Non-Linear Hierarchical structure containing nodes & connected with edge.

// Types of Tree - Binary tree , Binary search tree, AVL tree, N-ary Tree.AVL.

// Breadth-First Search is also known as Level Order Traversal. This algorithm starts with the root node and then visits all nodes level by level from left to right. we used queue to implement .

// In DFS Algorithm, we start with the root node and traverse the tree in depth until we find the node with no children and then backtrack it. we used stack to implement .
//Tree : [1,2,3,4,5 , 6, 7]
// In-Order (Left-Root-Right) :- 4,2,5,1,6,3,7
// Pre-Order (Root-Left-Right) :-1,2,4,5,3,6,7
// Post-Order (Left-Right-Root) :4,5,2,6,7,3,1

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

  findHeightofNode(node){
  if(node === null) return 0;                                //Differnceing factor
  let left = this.findHeightofNode(node.left);
  let right = this.findHeightofNode(node.right);
  return 1 + Math.max(left, right)
  }

  findHeightofEdge(node){
  if(node === null) return -1;
  let left = this.findHeightofEdge(node.left);
  let right = this.findHeightofEdge(node.right);
  return 1 + Math.max(left, right)
  }

}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("In-order:");
root.inOrder(root);     

console.log("Pre-order:");
root.preOrder(root);     

console.log("Post-order:");
root.postOrder(root);   

console.log("Height of Tree in Node:-",root.findHeightofNode(root));

console.log("Height of Tree in edge:-",root.findHeightofEdge(root));


//Balanced Tree :- Height should not greather than 1 of difference between left & right subtree.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function BalancedTree(root){
  function check(node){
    if(node == null) return 0
    let left = check(node.left);
    if(left === -1) return -1
    let right = check(node.right)
    if(right === -1) return -1
    if(Math.abs(left - right > 1)) return -1;
    return 1+ Math.max(left, right);

    }
    return check(root) !== -1
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(BalancedTree(root));

//check tree is Binary search tree 

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function checkBST(root){
  function validate(node, min, max){
    if(node === null) return true;

    if(node.value <= min || node.value >=max ) return false;
    return (
      validate(node.left, min, node.value) && 
      validate(node.right , node.value, max)
    )
  }
  return validate(root, -Infinity, Infinity )
}

const root = new Node(8);
root.left = new Node(3);
root.right = new Node(10);
root.right.left = new Node(9);
root.right.right = new Node(12);

console.log(checkBST(root));


//Least Common commonAnchestor

class TreeNode {
  constructor(value){
    this.value = value;
    this.left = this.right = null;
  }
}
  function commonAnchestor(root, p, q){
  if(root === null || p === root || q === root) return root;

    const left = commonAnchestor(root.left, p, q);
    const right = commonAnchestor(root.right, p,q);

    if(left && right) return root;
    return left ? left : right;

  }

const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const p = root.left.left;  // 6
const q = root.left.right.right;  // 4

console.log(commonAnchestor(root, p, q).value); // ➜ 5



