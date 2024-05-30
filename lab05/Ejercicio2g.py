from interpreter import draw
from chessPictures import *

p1 = rock.join(knight.join(bishop.join(queen.join(king).join(bishop.join(knight.join(rock))))))
p2 = pawn.horizontalRepeat(8)
p3 = square.join(square.negative())

rowEmpty = p3.horizontalRepeat(4)
row1 = rowEmpty.under(p1)
row2 = rowEmpty.negative().under(p2)

p4 = row1.up(row2)
p5 = rowEmpty.up(rowEmpty.negative()).verticalRepeat(2)
p6 = row2.up(row1).negative()

total = p4.up(p5.up(p6))

draw(total)