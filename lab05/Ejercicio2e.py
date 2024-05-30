from interpreter import draw
from chessPictures import *

from interpreter import draw
from chessPictures import *

squareWhite = square
squareBlack = squareWhite.negative()

p1 = squareWhite.join(squareBlack)
row1 = p1.horizontalRepeat(4)

total = row1.negative()

draw(total)