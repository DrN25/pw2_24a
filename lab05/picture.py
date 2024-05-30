from colors import *
class Picture:
  def __init__(self, img):
    self.img = img

  def __eq__(self, other):
    return self.img == other.img

  def _invColor(self, color):
    if color not in inverter:
      return color
    return inverter[color]

  def verticalMirror(self):
    """ Devuelve el espejo vertical de la imagen """
    vertical = []
    for value in self.img:
    	vertical.append(value[::-1])
    return Picture(vertical)

  def horizontalMirror(self):
    """ Devuelve el espejo horizontal de la imagen """
    return Picture(self.img[::-1])

  def negative(self):
    """ Devuelve un negativo de la imagen """
    inverter = {'_': '=', '=': '_', '.': '@', '@': '.'}
    negative = []
    for row in self.img:
        negativeRow = []
        for value in row:
            negativeRow.append(inverter.get(value, value))
        negative.append(negativeRow)
    return Picture(negative)

  def join(self, p):
    """ Devuelve una nueva figura poniendo la figura del argumento 
        al lado derecho de la figura actual """
    join = []
    for i in range(len(self.img)):
        join.append(''.join(self.img[i]) + ''.join(p.img[i]))
    return Picture(join)

  def up(self, p):
    return Picture(p.img + self.img)

  def under(self, p):
    """ Devuelve una nueva figura poniendo la figura p sobre la
        figura actual """
    return Picture(self.img + p.img)
  
  def horizontalRepeat(self, n):
    """ Devuelve una nueva figura repitiendo la figura actual al costado
        la cantidad de veces que indique el valor de n """
    horizontal = []
    for row in self.img:
      horizontal.append(row * n)
    return Picture(horizontal)

  def verticalRepeat(self, n):
    vertical = []
    for i in range(n):
      for row in self.img:
        vertical.append(row)
    return Picture(vertical)

  #Extra: Sólo para realmente viciosos 
  def rotate(self):
    """Devuelve una figura rotada en 90 grados, puede ser en sentido horario
    o antihorario"""
    return Picture(None)