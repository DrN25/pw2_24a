from interpreter import draw
from chessPictures import *

knightWhite = knight
knightBlack = knight.negative()

row1 = knightWhite.join(knightBlack)
row2 = row1.negative()

total = row2.up(row1)

draw(total)