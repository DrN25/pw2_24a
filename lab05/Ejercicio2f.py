from interpreter import draw
from chessPictures import *

squareWhite = square
squareBlack = squareWhite.negative()

p1 = squareWhite.join(squareBlack)
row1 = p1.horizontalRepeat(4)
row2 = row1.negative()

p2 = row2.up(row1)

total = p2.verticalRepeat(2)

draw(total)