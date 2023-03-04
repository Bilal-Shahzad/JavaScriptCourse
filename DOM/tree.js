// node tree
// Nodes are objects that implement Node

// tree order

// Zero or more ProcessingInstruction or Comment nodes.
// Optionally one DocumentType node.
// Zero or more ProcessingInstruction or Comment nodes.
// Optionally one Element node.
// Zero or more ProcessingInstruction or Comment nodes.


// To determine the length of a node node
// If node is a DocumentType or Attr node then return 0
// If node is a CharacterData node then return node’s data’s length
// Return the number of node’s children

// A node is considered empty if its length is 0

//  Document tree
// a node tree whose root is a document

