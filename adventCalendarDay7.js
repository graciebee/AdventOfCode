class Program {
    constructor(stringProgram) {
    	let stringArray = stringProgram.split(' ');
     	this.name = stringArray[0];
      	this.weight = parseInt(stringArray[1].replace(/\(|\)/g,''), 10);
      	this.children = [];
      	if (stringArray[2] && stringArray[2] == '->') {
        	this.children = stringArray.slice(3).map(string => string.replace(/,/g, ''));
        }
    }
}

class ProgramTree {
    constructor(root, allPrograms) {
    	this.root = new ProgramNode(root, allPrograms);
    }
}

class ProgramNode {
    constructor(program, allPrograms) {
    	this.name = program.name;
      	this.weight = program.weight;
		this.addChildren(program.children, allPrograms);
    }

    addChildren(children, allPrograms) {
  		if (!children.length) {
        	this.children = [];
          	return;
        }
    	this.children = children.map(child => new ProgramNode(allPrograms.find(program => program.name == child), allPrograms));
    }
  
    areChildrenBalanced() {
    	if (!this.children.length) return true;
      	return this.getChildrenWeight() % this.children[0].getWeight() == 0;
    }

    getWeight() {
      	return this.children.length
          ? this.weight + this.getChildrenWeight()
      	  : this.weight;
    }

    getChildrenWeight() {
    	return this.children.map(child => child.getWeight()).reduce((a, b) => a + b);
    }
	
    getUnbalancedChildNeededWeight() {
      	if (this.children.some(child => !child.areChildrenBalanced())) {
          	const unbalancedParent = this.children.find(child => !child.areChildrenBalanced());
          	return unbalancedParent.getUnbalancedChildNeededWeight();
        } else {
          	const sortedChildren = this.children.sort((a, b) => {
            	const averageWeight = this.getChildrenWeight() / this.children.length;
              	return Math.abs(averageWeight - a.getWeight()) < Math.abs(averageWeight - b.getWeight()) ? 1 : -1;
            });
          	return sortedChildren[1].getWeight() - sortedChildren[0].getWeight() + sortedChildren[0].weight;
        }
    }
}

function partOne(input) {
    const programArray = input.split(`\n`).map(stringProgram => new Program(stringProgram));
    const programChildren = [];
    programArray.forEach(program => {
        programChildren.push(...program.children);
    });
    const rootProgram = programArray.find(program => !programChildren.some(child => child == program.name));
    return rootProgram.name;
}

function partTwo(input) {
    const programArray = input.split(`\n`).map(stringProgram => new Program(stringProgram));
    const programChildren = [];
    programArray.forEach(program => {
        programChildren.push(...program.children);
    });
    const rootProgram = programArray.find(program => !programChildren.some(child => child == program.name));
    const programTree = new ProgramTree(rootProgram, programArray);
    return programTree.root.getUnbalancedChildNeededWeight();
}