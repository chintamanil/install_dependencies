(function(){
    'usestrict';

    var Commands = require('./commands/commands.js');

    var command = new Commands();
    var out = '';

    command.execute('DEPEND A B C D E');
    command.execute('DEPEND X C BB CC');
    command.execute('DEPEND C L G');

    out += command.execute('INSTALL A');
    out += command.execute('INSTALL BB');
    out += command.execute('INSTALL A');
    out += command.execute('INSTALL X');
    out += command.execute('LIST');// non sorted output
    out += command.execute('REMOVE C');
    console.log(out);

})();

/**
 * Topolgical Sort using tsort library for Dependancy resoultion
 * var tsort = require('tsort');
 *  create an empty graph
 * var graph = tsort();
 * graph.add('B', 'A')
Graph { nodes: { B: [], A: [ 'B' ] } }
> graph.add('C', 'A')
Graph { nodes: { B: [], A: [ 'B', 'C' ], C: [] } }
> graph.add('D', 'A')
Graph { nodes: { B: [], A: [ 'B', 'C', 'D' ], C: [], D: [] } }
> graph.add('L', 'C')
Graph {
  nodes: { B: [], A: [ 'B', 'C', 'D' ], C: [ 'L' ], D: [], L: [] } }
> graph.add('G', 'C')
Graph {
  nodes:
   { B: [],
     A: [ 'B', 'C', 'D' ],
     C: [ 'L', 'G' ],
     D: [],
     L: [],
     G: [] } }
> graph.sort();
[ 'B', 'L', 'G', 'C', 'D', 'A' ]
> graph.add('A', 'G')
Graph {
  nodes:
   { B: [],
     A: [ 'B', 'C', 'D' ],
     C: [ 'L', 'G' ],
     D: [],
     L: [],
     G: [ 'A' ] } }
> graph.sort();
Error: There is a cycle in the graph. It is not possible to derive a topological sort.
 */
