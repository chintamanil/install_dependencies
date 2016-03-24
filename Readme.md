# Installation
```
npm install
```

# Run
```
npm test
```

# Install Depend Delete Remove

Write an algorithm that takes Denedencies as input can install them, delete & remove them in proper order.

## Input
```
    DEPEND A B C D E
    DEPEND X C BB CC
    INSTALL A
    INSTALL BB
    INSTALL A
    INSTALL X
    LIST
    REMOVE C
```

## Output
```
E successfully installed
D successfully installed
C successfully installed
B successfully installed
A successfully installed
BB successfully installed
A is already installed
C is already installed
BB is already installed
CC successfully installed
X successfully installed
A
B
C
D
E
X
BB
CC
C is still Needed
```

